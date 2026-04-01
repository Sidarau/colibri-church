"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, role, logout } = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleLogout() {
    await logout();
    router.push("/");
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/90 backdrop-blur-sm border-b border-stone-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-amber-200 font-serif text-xl tracking-wide">
          Colibri Church
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm text-stone-300">
          <Link href="/" className="hover:text-amber-200 transition-colors">Home</Link>
          <Link href="/information" className="hover:text-amber-200 transition-colors">Information</Link>
          <Link href="/sacral-breath" className="hover:text-amber-200 transition-colors">Sacral Breath</Link>
          <Link href="/registration" className="hover:text-amber-200 transition-colors">Registration</Link>
          {user ? (
            <>
              <Link href="/cabinet" className="hover:text-amber-200 transition-colors">My Account</Link>
              {role === "admin" && (
                <Link href="/admin" className="hover:text-amber-200 transition-colors text-amber-400">Admin</Link>
              )}
              <button onClick={handleLogout} className="text-stone-400 hover:text-white transition-colors">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:text-amber-200 transition-colors">Sign In</Link>
              <Link href="/signup" className="bg-amber-700 hover:bg-amber-600 text-white px-4 py-2 rounded transition-colors">
                Apply
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-stone-300" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-stone-950 border-t border-stone-800 px-4 py-4 flex flex-col gap-4 text-sm text-stone-300">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-amber-200">Home</Link>
          <Link href="/information" onClick={() => setMenuOpen(false)} className="hover:text-amber-200">Information</Link>
          <Link href="/sacral-breath" onClick={() => setMenuOpen(false)} className="hover:text-amber-200">Sacral Breath</Link>
          <Link href="/registration" onClick={() => setMenuOpen(false)} className="hover:text-amber-200">Registration</Link>
          {user ? (
            <>
              <Link href="/cabinet" onClick={() => setMenuOpen(false)} className="hover:text-amber-200">My Account</Link>
              {role === "admin" && (
                <Link href="/admin" onClick={() => setMenuOpen(false)} className="text-amber-400 hover:text-amber-300">Admin</Link>
              )}
              <button onClick={handleLogout} className="text-left text-stone-400 hover:text-white">Sign Out</button>
            </>
          ) : (
            <>
              <Link href="/login" onClick={() => setMenuOpen(false)} className="hover:text-amber-200">Sign In</Link>
              <Link href="/signup" onClick={() => setMenuOpen(false)} className="hover:text-amber-200">Apply / Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
