"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabase";

export default function ProfileSettings() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [fullName, setFullName] = useState<string>("");
  const [profilePhoto, setProfilePhoto] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
          router.push("/login");
          return;
        }

        const userData = session.user;
        setUser(userData);
        setFullName(userData.user_metadata?.full_name || "");
        setProfilePhoto(userData.user_metadata?.profile_photo || "");
      } catch (error) {
        console.error("Error fetching user session:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  const handleSaveChanges = async () => {
    setLoading(true);
    try {
      const updates = {
        full_name: fullName,
        profile_photo: profilePhoto,
      };

      const { error } = await supabase.auth.updateUser({
        data: updates,
      });

      if (error) {
        console.error("Error updating user:", error.message);
      } else {
        setProfilePhoto(profilePhoto);
        alert("Perfil actualizado correctamente.");
      }
    } catch (error) {
      console.error("Error saving profile changes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleProfilePhotoUpload = async (file: File) => {
    try {
      const { data, error } = await supabase.storage
        .from("profile-photos")
        .upload(`user-photos/${file.name}`, file, {
          cacheControl: "3600",
          upsert: true, // Cambia a true si deseas sobrescribir el archivo existente
        });

      if (error) {
        console.error("Error uploading file:", error.message);
        return;
      }

      console.log("File uploaded successfully:", data);
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-6">Cargando...</div>;
  }

  if (!user) {
    return (
      <div className="text-center py-6">
        No se encontró información del usuario.
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="accounts">Cuentas</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                Configuración de Perfil
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Estos son tus datos personales, visibles al público.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img
                      src={profilePhoto || "https://via.placeholder.com/150"}
                      alt="Foto de Perfil"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <label className="block mt-2">
                      <Button variant="outline">
                        <input
                          type="file"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              handleProfilePhotoUpload(e.target.files[0]);
                            }
                          }}
                        />
                        Cambiar Foto
                      </Button>
                    </label>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="text-sm font-medium">
                      Nombre Completo
                    </label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      value={user.email}
                      disabled
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={() => window.location.reload()}
                  >
                    Cancelar
                  </Button>
                  <Button onClick={handleSaveChanges} disabled={loading}>
                    Guardar Cambios
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
