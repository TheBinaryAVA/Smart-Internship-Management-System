import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tenantId, setTenantId] = useState("tenant-acme");
  const [error, setError] = useState<string | null>(null);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signup(email, password, tenantId);
      navigate("/dashboard");
    } catch {
      setError("Signup failed. Try another email.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="bg-white p-6 rounded shadow w-96 space-y-4"
        onSubmit={onSubmit}
      >
        <h1 className="text-xl font-semibold">Signup</h1>
        <input
          className="w-full border p-2 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full border p-2 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Tenant Id"
          value={tenantId}
          onChange={(e) => setTenantId(e.target.value)}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          className="w-full bg-slate-900 text-white p-2 rounded"
          type="submit"
        >
          Create account
        </button>
        <p className="text-sm">
          Already have account?{" "}
          <Link className="text-blue-600" to="/login">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};
