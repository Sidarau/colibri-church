"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const { signup } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);
    try {
      await signup(email, password, name);
      router.push("/cabinet");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "";
      if (msg.includes("email-already-in-use")) {
        setError("An account with this email already exists.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif text-amber-100 mb-2">Create Account</h1>
          <p className="text-stone-400 text-sm">Join the Colibri Church community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 bg-stone-900/50 border border-stone-800 rounded p-8">
          {error && (
            <div className="bg-red-950/50 border border-red-800 text-red-300 text-sm rounded p-3">
              {error}
            </div>
          )}

          <div>
            <label className="block text-stone-300 text-sm mb-2">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-600 transition-colors"
              placeholder="Your full name"
            />
          </div>

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
              placeholder="Minimum 8 characters"
            />
          </div>

          <div>
            <label className="block text-stone-300 text-sm mb-2">Confirm Password</label>
            <input
              type="password"
              required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-600 transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-700 hover:bg-amber-600 disabled:bg-stone-700 disabled:text-stone-400 text-white py-3 rounded text-sm tracking-wide transition-colors"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-stone-500 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-amber-400 hover:text-amber-300 underline underline-offset-4">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
