import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-stone-400">
        <div>
          <p className="text-amber-200 font-serif text-lg mb-2">Colibri Church</p>
          <p>A spiritual community dedicated to inner growth, healing, and conscious living.</p>
          <p className="mt-2">Big Island of Hawaiʻi</p>
        </div>
        <div>
          <p className="text-stone-200 font-medium mb-2">Navigation</p>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-amber-200 transition-colors">Home</Link></li>
            <li><Link href="/information" className="hover:text-amber-200 transition-colors">Information</Link></li>
            <li><Link href="/sacral-breath" className="hover:text-amber-200 transition-colors">Sacral Breath Retreat</Link></li>
            <li><Link href="/registration" className="hover:text-amber-200 transition-colors">Registration</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-stone-200 font-medium mb-2">Contact</p>
          <p>
            <a href="mailto:rainbowsanctuaryinc@gmail.com" className="hover:text-amber-200 transition-colors">
              rainbowsanctuaryinc@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-stone-800 text-center text-xs text-stone-600">
        © {new Date().getFullYear()} Colibri Church. All rights reserved. The work offered is not intended to diagnose, treat, or replace medical or psychological care.
      </div>
    </footer>
  );
}
