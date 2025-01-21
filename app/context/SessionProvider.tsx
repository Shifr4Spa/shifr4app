import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";
import { usePathname } from "next/navigation"; // Import usePathname

interface SessionContextProps {
  session: any;
}

const SessionContext = createContext<SessionContextProps | undefined>(
  undefined
);

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<any>(null);
  const router = useRouter();
  const pathname = usePathname(); // Use usePathname() to get the current URL path

  useEffect(() => {
    // Function to check session and redirect if necessary
    const checkSession = () => {
      const storedSession = localStorage.getItem("supabase-session");
      if (storedSession) {
        const parsedSession = JSON.parse(storedSession);
        setSession(parsedSession);
      } else {
        setSession(null);
        if (pathname !== "/login") {
          router.push("/login"); // Only redirect if we are not already on /login
        }
      }
    };

    // Check session on initial load
    checkSession();

    // Listen for session changes
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          // Store session in local storage and update the state
          localStorage.setItem("supabase-session", JSON.stringify(session));
          setSession(session);
          // Redirect to /dashboard if logged in and coming from /login
          if (pathname === "/login") {
            router.push("/admin/dashboard"); // Adjusted to /admin/dashboard
          }
        } else {
          // Clear session and redirect to login
          localStorage.removeItem("supabase-session");
          setSession(null);
          if (pathname !== "/login") {
            router.push("/login"); // Adjusted to /login
          }
        }
      }
    );

    // Listen for changes in localStorage using the storage event
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "supabase-session" && !e.newValue) {
        setSession(null);
        if (pathname !== "/login") {
          router.push("/login"); // Adjusted to /login
        }
      }
    };

    // Add listener for changes in localStorage
    window.addEventListener("storage", handleStorageChange);

    // Clean up on component unmount
    return () => {
      subscription?.subscription.unsubscribe();
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [router, pathname]); // Make sure to include pathname and session in the dependency array

  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
