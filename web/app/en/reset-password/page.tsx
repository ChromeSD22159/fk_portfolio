"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; 
import { createClient } from "@supabase/supabase-js";

// Supabase Client
const supabase = createClient(
  "https://fazuuxauirgfkftovhwn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhenV1eGF1aXJnZmtmdG92aHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwNjc2NDcsImV4cCI6MjA3NTY0MzY0N30.MrUzrGOGOEu4csqHDgRALa5QnHhvmiU6PcWC6QKOXh8"
);

export default function PasswordResetPage() { 

  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

    // Fragment auslesen
  useEffect(() => {
    const fragment = window.location.hash.substring(1);
    const params = fragment.split("&").reduce((acc, item) => {
      const [key, value] = item.split("=");
      if (key && value) acc[key] = decodeURIComponent(value);
      return acc;
    }, {} as Record<string, string>);

    setAccessToken(params.access_token ?? null);
    setType(params.type ?? null);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!accessToken || type !== "recovery") {
      setErrorMsg("Ungültiger oder abgelaufener Link.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Passwörter stimmen nicht überein.");
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.updateUser({ password });

      if (error) {
        setErrorMsg(error.message);
      } else {
        // Erfolgreich → zurück in die App
        window.location.href = "pro-prothese://login";
      }
    } finally {
      setLoading(false);
    }
  };


  return (
     <div className="stack-sm">
      <h1 className="text-2xl">Reset your user password.</h1>  

      { errorMsg && (
        <div className="text-red-600 mb-4">
          <b>Fehler:</b> {errorMsg}
        </div>
      ) }
     

      <div className="stack-sm py-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Neues Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-2 rounded"
          />

          <input
            type="password"
            placeholder="Passwort wiederholen"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="border p-2 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Ändere Passwort..." : "Passwort ändern"}
          </button>
        </form>
      </div> 
    </div> 
  );
}  