"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";

interface Application {
  id: string;
  retreatName: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
  intentions?: string;
  adminNote?: string;
}

const statusConfig = {
  pending: {
    label: "Pending Review",
    color: "text-yellow-400 bg-yellow-950/40 border-yellow-800",
    desc: "Your application is being reviewed. We will be in touch soon.",
  },
  approved: {
    label: "Approved",
    color: "text-green-400 bg-green-950/40 border-green-800",
    desc: "Your application has been approved! Check your email for next steps.",
  },
  rejected: {
    label: "Not Accepted",
    color: "text-red-400 bg-red-950/40 border-red-800",
    desc: "Unfortunately we were unable to accept your application at this time.",
  },
};

export default function StatusPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [applications, setApplications] = useState<Application[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [user, loading, router]);

  useEffect(() => {
    if (!user) return;
    async function fetchApps() {
      if (!user) return;
      const q = query(
        collection(db, "applications"),
        where("userId", "==", user.uid),
        orderBy("submittedAt", "desc")
      );
      const snap = await getDocs(q);
      setApplications(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Application)));
      setFetching(false);
    }
    fetchApps();
  }, [user]);

  if (loading || fetching) {
    return <div className="min-h-[60vh] flex items-center justify-center"><p className="text-stone-400 text-sm">Loading...</p></div>;
  }
  if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-10">
        <Link href="/cabinet" className="text-stone-500 hover:text-stone-300 text-sm transition-colors">← Back</Link>
        <h1 className="text-3xl font-serif text-amber-100 mt-4 mb-2">Application Status</h1>
        <p className="text-stone-400 text-sm">Track the status of your retreat applications.</p>
      </div>

      {applications.length === 0 ? (
        <div className="border border-stone-800 rounded p-8 text-center">
          <p className="text-stone-500 text-sm mb-4">No applications found.</p>
          <Link
            href="/cabinet/apply"
            className="inline-block bg-amber-700 hover:bg-amber-600 text-white px-6 py-2 rounded text-sm transition-colors"
          >
            Apply Now
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {applications.map((app) => {
            const config = statusConfig[app.status] ?? statusConfig.pending;
            return (
              <div key={app.id} className="border border-stone-800 rounded p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-stone-100 font-medium">{app.retreatName}</p>
                    <p className="text-stone-500 text-xs mt-1">
                      Submitted {new Date(app.submittedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full border shrink-0 ${config.color}`}>
                    {config.label}
                  </span>
                </div>
                <p className="text-stone-400 text-sm">{config.desc}</p>
                {app.adminNote && (
                  <div className="mt-4 bg-stone-800/50 rounded p-3 text-stone-300 text-xs">
                    <span className="text-stone-500 uppercase tracking-widest text-xs block mb-1">Note from facilitator</span>
                    {app.adminNote}
                  </div>
                )}
                {app.intentions && (
                  <div className="mt-4 border-t border-stone-800 pt-4">
                    <p className="text-stone-500 text-xs uppercase tracking-widest mb-1">Your intentions</p>
                    <p className="text-stone-400 text-sm">{app.intentions}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
