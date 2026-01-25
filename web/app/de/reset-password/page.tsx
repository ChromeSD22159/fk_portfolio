"use client";
import { useEffect, useState } from "react"; 
import { createClient } from "@supabase/supabase-js";

// Supabase Client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
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

        <br/>
        <br/>

        <a href="pro-prothese://login">
            <button>Redirect to app</button>
        </a>
      </div> 
    </div> 
  );
}  