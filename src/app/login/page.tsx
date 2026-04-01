"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      router.push("/cabinet");
    } catch {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif text-amber-100 mb-2">Sign In</h1>
          <p className="text-stone-400 text-sm">Access your Colibri Church account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 bg-stone-900/50 border border-stone-800 rounded p-8">
          {error && (
            <div className="bg-red-950/50 border border-red-800 text-red-300 text-sm rounded p-3">
              {error}
            </div>
          )}

          <div>
            <label className="block text-stone-300 text-sm mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-600 transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-stone-300 text-sm mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-600 transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-700 hover:bg-amber-600 disabled:bg-stone-700 disabled:text-stone-400 text-white py-3 rounded text-sm tracking-wide transition-colors"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-stone-500 text-sm mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-amber-400 hover:text-amber-300 underline underline-offset-4">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
