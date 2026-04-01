"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";

interface MedicalFormData {
  dateOfBirth: string;
  conditions: string[];
  otherConditions: string;
  medications: string;
  psychiatricHistory: string;
  substanceHistory: string;
  pregnantOrBreastfeeding: string;
  additionalInfo: string;
}

const medicalConditions = [
  "Unstable Diabetes Mellitus",
  "Kidney disorders",
  "Epilepsy",
  "Severe neurological conditions",
  "Heart or circulation disorders",
  "Liver disorders",
  "Schizophrenia or psychosis",
  "Borderline personality disorder",
];

export default function MedicalFormPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [existingDocId, setExistingDocId] = useState<string | null>(null);
  const [formData, setFormData] = useState<MedicalFormData>({
    dateOfBirth: "",
    conditions: [],
    otherConditions: "",
    medications: "",
    psychiatricHistory: "",
    substanceHistory: "",
    pregnantOrBreastfeeding: "",
    additionalInfo: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [user, loading, router]);

  useEffect(() => {
    if (!user) return;
    async function loadExisting() {
      if (!user) return;
      const q = query(collection(db, "medicalForms"), where("userId", "==", user.uid));
      const snap = await getDocs(q);
      if (!snap.empty) {
        const existing = snap.docs[0];
        setExistingDocId(existing.id);
        setFormData(existing.data() as MedicalFormData);
      }
      setFetching(false);
    }
    loadExisting();
  }, [user]);

  function toggleCondition(condition: string) {
    setFormData((prev) => ({
      ...prev,
      conditions: prev.conditions.includes(condition)
        ? prev.conditions.filter((c) => c !== condition)
        : [...prev.conditions, condition],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    setError("");
    setSubmitting(true);
    try {
      const payload = { ...formData, userId: user.uid, userEmail: user.email, updatedAt: new Date().toISOString() };
      if (existingDocId) {
        await updateDoc(doc(db, "medicalForms", existingDocId), payload);
      } else {
        const ref = await addDoc(collection(db, "medicalForms"), { ...payload, submittedAt: new Date().toISOString() });
        setExistingDocId(ref.id);
      }
      setSuccess(true);
    } catch {
      setError("Failed to save your form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading || fetching) {
    return <div className="min-h-[60vh] flex items-center justify-center"><p className="text-stone-400 text-sm">Loading...</p></div>;
  }
  if (!user) return null;

  if (success) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="text-5xl mb-6">✦</div>
          <h1 className="text-2xl font-serif text-amber-100 mb-4">Form Saved</h1>
          <p className="text-stone-400 text-sm mb-6">
            Your medical information has been saved securely.
            Our facilitator will review it before your ceremony.
          </p>
          <Link href="/cabinet" className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-2 rounded text-sm transition-colors">
            Back to Cabinet
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-10">
        <Link href="/cabinet" className="text-stone-500 hover:text-stone-300 text-sm transition-colors">← Back</Link>
        <h1 className="text-3xl font-serif text-amber-100 mt-4 mb-2">Medical Form</h1>
        <p className="text-stone-400 text-sm">
          This information is confidential and will only be reviewed by the facilitator.
          Please be thorough and honest — your safety depends on it.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {error && (
          <div className="bg-red-950/50 border border-red-800 text-red-300 text-sm rounded p-3">{error}</div>
        )}

        <div>
          <label className="block text-stone-300 text-sm mb-2">Date of Birth *</label>
          <input
            type="date"
            required
            value={formData.dateOfBirth}
            onChange={(e) => setFormData((p) => ({ ...p, dateOfBirth: e.target.value }))}
            className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-600 transition-colors"
          />
        </div>

        <div>
          <label className="block text-stone-300 text-sm mb-3">
            Do you have or have you had any of the following conditions? (select all that apply)
          </label>
          <div className="space-y-2">
            {medicalConditions.map((condition) => (
              <label key={condition} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.conditions.includes(condition)}
                  onChange={() => toggleCondition(condition)}
                  className="accent-amber-600 shrink-0"
                />
                <span className="text-stone-300 text-sm">{condition}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-stone-300 text-sm mb-2">
            Other medical conditions not listed above
          </label>
          <textarea
            value={formData.otherConditions}
            onChange={(e) => setFormData((p) => ({ ...p, otherConditions: e.target.value }))}
            rows={3}
            className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-600 transition-colors resize-none"
            placeholder="List any other conditions, diagnoses, or health concerns..."
          />
        </div>

        <div>
          <label className="block text-stone-300 text-sm mb-2">
            Current medications (including supplements and herbs) *
          </label>
          <textarea
            required
            value={formData.medications}
            onChange={(e) => setFormData((p) => ({ ...p, medications: e.target.value }))}
            rows={4}
            className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-600 transition-colors resize-none"
            placeholder="List all medications, dosages, and supplements. Write 'none' if not applicable."
          />
        </div>

        <div>
          <label className="block text-stone-300 text-sm mb-2">
            Psychiatric history
          </label>
          <textarea
            value={formData.psychiatricHistory}
            onChange={(e) => setFormData((p) => ({ ...p, psychiatricHistory: e.target.value }))}
            rows={3}
            className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-600 transition-colors resize-none"
            placeholder="Any history of depression, anxiety, trauma, psychiatric treatment, or hospitalizations..."
          />
        </div>

        <div>
          <label className="block text-stone-300 text-sm mb-2">
            Substance use history
          </label>
          <textarea
            value={formData.substanceHistory}
            onChange={(e) => setFormData((p) => ({ ...p, substanceHistory: e.target.value }))}
            rows={3}
            className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-600 transition-colors resize-none"
            placeholder="Current or past use of alcohol, cannabis, recreational drugs, or other substances..."
          />
        </div>

        <div>
          <label className="block text-stone-300 text-sm mb-2">
            Are you currently pregnant or breastfeeding? *
          </label>
          <select
            required
            value={formData.pregnantOrBreastfeeding}
            onChange={(e) => setFormData((p) => ({ ...p, pregnantOrBreastfeeding: e.target.value }))}
            className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-600 transition-colors"
          >
            <option value="">Select...</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
            <option value="unsure">Unsure</option>
          </select>
        </div>

        <div>
          <label className="block text-stone-300 text-sm mb-2">
            Additional information
          </label>
          <textarea
            value={formData.additionalInfo}
            onChange={(e) => setFormData((p) => ({ ...p, additionalInfo: e.target.value }))}
            rows={4}
            className="w-full bg-stone-800 border border-stone-700 rounded px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-amber-600 transition-colors resize-none"
            placeholder="Anything else the facilitator should know about your health or wellbeing..."
          />
        </div>

        <div className="bg-amber-950/30 border border-amber-900/50 rounded p-4 text-stone-300 text-xs leading-relaxed">
          By submitting this form, I confirm that the information provided is accurate and complete to the
          best of my knowledge. I understand that my safety and wellbeing depend on providing truthful
          information, and that the facilitator may contact me with follow-up questions.
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-amber-700 hover:bg-amber-600 disabled:bg-stone-700 disabled:text-stone-400 text-white py-3 rounded text-sm tracking-wide transition-colors"
        >
          {submitting ? "Saving..." : existingDocId ? "Update Medical Form" : "Submit Medical Form"}
        </button>
      </form>
    </div>
  );
}
