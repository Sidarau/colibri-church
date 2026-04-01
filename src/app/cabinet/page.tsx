"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";

interface Application {
  id: string;
  retreatName: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
}

const statusColors: Record<string, string> = {
  pending: "text-yellow-400 bg-yellow-950/40 border-yellow-800",
  approved: "text-green-400 bg-green-950/40 border-green-800",
  rejected: "text-red-400 bg-red-950/40 border-red-800",
};

export default function CabinetPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [applications, setApplications] = useState<Application[]>([]);
  const [hasMedicalForm, setHasMedicalForm] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (!user) return;
    async function fetchData() {
      if (!user) return;
      const appsQuery = query(collection(db, "applications"), where("userId", "==", user.uid));
      const appsSnap = await getDocs(appsQuery);
      setApplications(appsSnap.docs.map((d) => ({ id: d.id, ...d.data() } as Application)));

      const medQuery = query(collection(db, "medicalForms"), where("userId", "==", user.uid));
      const medSnap = await getDocs(medQuery);
      setHasMedicalForm(!medSnap.empty);
      setFetching(false);
    }
    fetchData();
  }, [user]);

  if (loading || fetching) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-stone-400 text-sm">Loading...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-10">
        <p className="text-amber-400 tracking-widest uppercase text-xs mb-1">My Account</p>
        <h1 className="text-3xl font-serif text-amber-100">
          Welcome, {user.displayName ?? user.email}
        </h1>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <Link
          href="/cabinet/apply"
          className="border border-stone-700 hover:border-amber-600 rounded p-5 transition-colors group"
        >
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">New Application</p>
          <p className="text-stone-200 text-sm group-hover:text-white">Apply for a Retreat</p>
        </Link>

        <Link
          href="/cabinet/medical-form"
          className={`border rounded p-5 transition-colors group ${
            hasMedicalForm
              ? "border-green-800 hover:border-green-600"
              : "border-stone-700 hover:border-amber-600"
          }`}
        >
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Medical Form</p>
          <p className="text-stone-200 text-sm group-hover:text-white">
            {hasMedicalForm ? "View / Update Form ✓" : "Submit Medical Form"}
          </p>
        </Link>

        <Link
          href="/cabinet/status"
          className="border border-stone-700 hover:border-amber-600 rounded p-5 transition-colors group"
        >
          <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">Applications</p>
          <p className="text-stone-200 text-sm group-hover:text-white">
            {applications.length} Submission{applications.length !== 1 ? "s" : ""}
          </p>
        </Link>
      </div>

      {/* Applications list */}
      <section>
        <h2 className="text-xl font-serif text-amber-200 mb-4">Your Applications</h2>
        {applications.length === 0 ? (
          <div className="border border-stone-800 rounded p-8 text-center">
            <p className="text-stone-500 text-sm mb-4">You haven&apos;t submitted any applications yet.</p>
            <Link
              href="/cabinet/apply"
              className="inline-block bg-amber-700 hover:bg-amber-600 text-white px-6 py-2 rounded text-sm transition-colors"
            >
              Apply Now
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {applications.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between border border-stone-800 rounded p-4"
              >
                <div>
                  <p className="text-stone-200 text-sm font-medium">{app.retreatName}</p>
                  <p className="text-stone-500 text-xs mt-0.5">
                    Submitted {new Date(app.submittedAt).toLocaleDateString()}
                  </p>
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full border capitalize ${statusColors[app.status] ?? ""}`}
                >
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
