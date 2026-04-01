"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";

const retreats = [
  { id: "sacral-breath-june", label: "Sacral Breath — Session 1 (June 17–21, 2025)", location: "Maui, Hawaiʻi" },
  { id: "sacral-breath-sept", label: "Sacral Breath — Session 2 (September 16–20, 2025)", location: "Maui, Hawaiʻi" },
  { id: "colibri-big-island", label: "Colibri Church Retreat — Big Island of Hawaiʻi (TBD)", location: "Big Island, Hawaiʻi" },
];

export default function ApplyPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [retreat, setRetreat] = useState("");
  const [intentions, setIntentions] = useState("");
  const [background, setBackground] = useState("");
  const [questions, setQuestions] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [user, loading, router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    setError("");

    if (!retreat) { setError("Please select a retreat."); return; }
    if (!agreeTerms) { setError("Please agree to the preparation guidelines."); return; }

    setSubmitting(true);
    try {
      const selected = retreats.find((r) => r.id === retreat);
      await addDoc(collection(db, "applications"), {
        userId: user.uid,
        userEmail: user.email,
        userName: user.displayName,
        retreatId: retreat,
        retreatName: selected?.label ?? retreat,
        intentions,
        background,
        questions,
        status: "pending",
        submittedAt: new Date().toISOString(),
      });
      setSuccess(true);
    } catch {
      setError("Failed to submit your application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) return <div className="min-h-[60vh] flex items-center justify-center"><p className="text-stone-400 text-sm">Loading...</p></div>;
  if (!user) return null;

  if (success) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="text-5xl mb-6">✦</div>
          <h1 className="text-2xl font-serif text-amber-100 mb-4">Application Submitted</h1>
          <p className="text-stone-400 text-sm mb-6">
            Thank you for applying. We will review your application and reach out to schedule
            an introductory conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/cabinet" className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-2 rounded text-sm transition-colors">
              Back to Cabinet
            </Link>
            <Link href="/cabinet/medical-form" className="border border-stone-600 hover:border-stone-400 text-stone-300 px-6 py-2 rounded text-sm transition-colors">
              Submit Medical Form
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-10">
        <Link href="/cabinet" className="text-stone-500 hover:text-stone-300 text-sm transition-colors">← Back</Link>
        <h1 className="text-3xl font-serif text-amber-100 mt-4 mb-2">Apply for a Retreat</h1>
        <p className="text-stone-400 text-sm">
          Share your intentions and background so we can best support your journey.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-7">
        {error && (
          <div className="bg-red-950/50 border border-red-800 text-red-300 text-sm rounded p-3">{error}</div>
        )}

        <div>
          <label className="block text-stone-300 text-sm mb-2">Select Retreat *</label>
          <select
            required
            value={retreat}
            onChange={(e) => setRetreat(e.target.value)}
            className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-600 transition-colors"
          >
            <option value="">Choose a retreat...</option>
            {retreats.map((r) => (
              <option key={r.id} value={r.id}>{r.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-stone-300 text-sm mb-2">
            What are your intentions for attending this retreat? *
          </label>
          <textarea
            required
            value={intentions}
            onChange={(e) => setIntentions(e.target.value)}
            rows={5}
            className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-600 transition-colors resize-none"
            placeholder="Share what you are hoping to explore, heal, or understand through this experience..."
          />
        </div>

        <div>
          <label className="block text-stone-300 text-sm mb-2">
            Relevant background (optional)
          </label>
          <textarea
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            rows={4}
            className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-600 transition-colors resize-none"
            placeholder="Previous ceremony experience, spiritual practice, therapy, or anything relevant to your background..."
          />
        </div>

        <div>
          <label className="block text-stone-300 text-sm mb-2">
            Any questions for us? (optional)
          </label>
          <textarea
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
            rows={3}
            className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-600 transition-colors resize-none"
            placeholder="Any questions about the retreat, preparation, or logistics..."
          />
        </div>

        <div className="bg-stone-900/50 border border-stone-800 rounded p-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-0.5 accent-amber-600 shrink-0"
            />
            <span className="text-stone-400 text-sm">
              I have read and agree to follow the{" "}
              <Link href="/information" target="_blank" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">
                preparation guidelines
              </Link>
              , including dietary and medication requirements. I understand that my safety depends on
              following these guidelines.
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-amber-700 hover:bg-amber-600 disabled:bg-stone-700 disabled:text-stone-400 text-white py-3 rounded text-sm tracking-wide transition-colors"
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
