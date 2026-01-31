import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    nombre: string,
    apellido?: string
  ) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Configurar el listener de cambios de autenticación PRIMERO
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("🔐 Auth state changed:", event, session?.user?.email);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // Luego verificar la sesión actual
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        console.log("📍 Current session:", session?.user?.email);
        if (session?.user) {
          setUser(session.user);
        }
      } catch (error) {
        console.error("❌ Error checking session:", error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    // Limpiar el subscription al desmontar
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      console.log("✅ Login successful:", data.user?.email);
      setUser(data.user);
    } catch (error) {
      console.error("❌ Error logging in:", error);
      throw error;
    }
  };

  const register = async (
    email: string,
    password: string,
    nombre: string,
    apellido?: string
  ) => {
    try {
      // Registrar en Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) {
        throw new Error(authError.message);
      }

      // Crear registro en tabla 'users'
      const { error: userError } = await supabase.from("users").insert([
        {
          id: authData.user?.id,
          email,
          nombre,
          apellido,
          created_at: new Date().toISOString(),
        },
      ]);

      if (userError) {
        throw new Error(userError.message);
      }

      console.log("✅ Registration successful:", authData.user?.email);
      setUser(authData.user ?? null);
    } catch (error) {
      console.error("❌ Error registering:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        throw new Error(error.message);
      }

      console.log("✅ Logout successful");
      setUser(null);
    } catch (error) {
      console.error("❌ Error logging out:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
