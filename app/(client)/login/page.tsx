"use client";

import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabase";
import { Loader2 } from "lucide-react"; // Ícono para el spinner
import { InputPassword } from "@/app/admin/shared-components/PasswordInput";
import { InputEmail } from "@/app/admin/shared-components/EmailInput";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("caesararg.dev@gmail.com");
  const [password, setPassword] = useState<string>("tT9082661!spa");
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast({
        title: "Error de inicio de sesión",
        description: error.message,
        variant: "destructive",
      });
    } else {
      localStorage.setItem("supabase-session", JSON.stringify(data.session));
      toast({
        title: "Inicio de sesión exitoso",
        description: "Redirigiendo al panel administrativo...",
        variant: "default",
      });
      router.push("/admin/dashboard");
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen">
      {/* Izquierda */}
      <div className="flex flex-col justify-between bg-[#101928] text-white w-1/2 p-8 rounded-tr-[0px] rounded-br-[0px]">
        <div className="m-auto">
          <img
            src="/logologin-white.png"
            alt="Logo"
            width={280}
            className="transition-all"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2 font-sans">
            PANEL ADMINISTRATIVO
          </h3>
          <p className="text-lg">
            Cuidamos cada detalle para una experiencia única en tu spa.
          </p>
        </div>
      </div>

      {/* Derecha */}
      <div className="w-1/2 flex justify-center items-center bg-white p-6 rounded-tl-[20px] rounded-bl-[20px]">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 w-full max-w-md space-y-8"
        >
          <div className="text-center">
            <img
              src="/logologin-blue.png"
              alt="Logo"
              width={140}
              className="transition-all m-auto"
            />
            <h1 className="text-4xl font-bold font-inter text-gray-800">
              Acceso al Panel
            </h1>
            <p className="text-gray-600 text-sm mt-2">
              Inicia sesión con tus credenciales para gestionar tus actividades.
            </p>
          </div>

          <div>
            <InputEmail
              label="Correo electrónico"
              id="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div>
            <InputPassword
              label="Contraseña"
              id="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full text-white font-medium py-2 rounded-md flex justify-center items-center"
            style={{
              background: "linear-gradient(180deg, #ff6c47 0%, #fe4011 100%)",
            }}
          >
            {loading ? (
              <span className="inline-flex">
                <Loader2 className="animate-spin mr-2" /> Validando...
              </span>
            ) : (
              "Acceder"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
