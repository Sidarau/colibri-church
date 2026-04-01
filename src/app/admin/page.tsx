"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Application {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  retreatName: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
  intentions?: string;
  background?: string;
  questions?: string;
  adminNote?: string;
}

interface MedicalForm {
  id: string;
  userId: string;
  userEmail: string;
  dateOfBirth: string;
  conditions: string[];
  medications: string;
  psychiatricHistory: string;
  submittedAt: string;
}

type Tab = "applications" | "medical";

const statusColors: Record<string, string> = {
  pending: "text-yellow-400 bg-yellow-950/40 border-yellow-800",
  approved: "text-green-400 bg-green-950/40 border-green-800",
  rejected: "text-red-400 bg-red-950/40 border-red-800",
};

export default function AdminPage() {
  const { user, role, loading } = useAuth();
  const router = useRouter();

  const [tab, setTab] = useState<Tab>("applications");
  const [applications, setApplications] = useState<Application[]>([]);
  const [medicalForms, setMedicalForms] = useState<MedicalForm[]>([]);
  const [fetching, setFetching] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [adminNote, setAdminNote] = useState("");
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    if (!loading) {
      if (!user) { router.push("/login"); return; }
      if (role !== "admin") { router.push("/cabinet"); }
    }
  }, [user, role, loading, router]);

  useEffect(() => {
    if (role !== "admin") return;
    async function fetchAll() {
      const appsSnap = await getDocs(query(collection(db, "applications"), orderBy("submittedAt", "desc")));
      setApplications(appsSnap.docs.map((d) => ({ id: d.id, ...d.data() } as Application)));

      const medSnap = await getDocs(query(collection(db, "medicalForms"), orderBy("submittedAt", "desc")));
      setMedicalForms(medSnap.docs.map((d) => ({ id: d.id, ...d.data() } as MedicalForm)));

      setFetching(false);
    }
    fetchAll();
  }, [role]);

  async function updateStatus(appId: string, status: "approved" | "rejected") {
    setSaving(appId);
    const note = adminNote.trim();
    await updateDoc(doc(db, "applications", appId), {
      status,
      ...(note ? { adminNote: note } : {}),
      reviewedAt: new Date().toISOString(),
    });
    setApplications((prev) =>
      prev.map((a) => (a.id === appId ? { ...a, status, adminNote: note || a.adminNote } : a))
    );
    setAdminNote("");
    setExpanded(null);
    setSaving(null);
  }

  if (loading || fetching) {
    return <div className="min-h-[60vh] flex items-center justify-center"><p className="text-stone-400 text-sm">Loading...</p></div>;
  }
  if (!user || role !== "admin") return null;

  const pending = applications.filter((a) => a.status === "pending").length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="mb-10">
        <p className="text-amber-400 tracking-widest uppercase text-xs mb-1">Admin</p>
        <h1 className="text-3xl font-serif text-amber-100 mb-2">Dashboard</h1>
        <p className="text-stone-400 text-sm">{pending} pending application{pending !== 1 ? "s" : ""}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 border-b border-stone-800">
        {(["applications", "medical"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2 text-sm capitalize transition-colors border-b-2 -mb-px ${
              tab === t
                ? "border-amber-600 text-amber-300"
                : "border-transparent text-stone-400 hover:text-stone-200"
            }`}
          >
            {t === "applications" ? `Applications (${applications.length})` : `Medical Forms (${medicalForms.length})`}
          </button>
        ))}
      </div>

      {/* Applications */}
      {tab === "applications" && (
        <div className="space-y-4">
          {applications.length === 0 && (
            <p className="text-stone-500 text-sm">No applications yet.</p>
          )}
          {applications.map((app) => (
            <div key={app.id} className="border border-stone-800 rounded">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-stone-900/30 transition-colors"
                onClick={() => {
                  setExpanded(expanded === app.id ? null : app.id);
                  setAdminNote(app.adminNote ?? "");
                }}
              >
                <div>
                  <p className="text-stone-100 text-sm font-medium">{app.userName} · {app.userEmail}</p>
                  <p className="text-stone-500 text-xs mt-0.5">{app.retreatName} · {new Date(app.submittedAt).toLocaleDateString()}</p>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full border capitalize ${statusColors[app.status] ?? ""}`}>
                  {app.status}
                </span>
              </button>

              {expanded === app.id && (
                <div className="border-t border-stone-800 px-5 py-5 space-y-5">
                  {app.intentions && (
                    <div>
                      <p className="text-stone-500 text-xs uppercase tracking-widest mb-1">Intentions</p>
                      <p className="text-stone-300 text-sm">{app.intentions}</p>
                    </div>
                  )}
                  {app.background && (
                    <div>
                      <p className="text-stone-500 text-xs uppercase tracking-widest mb-1">Background</p>
                      <p className="text-stone-300 text-sm">{app.background}</p>
                    </div>
                  )}
                  {app.questions && (
                    <div>
                      <p className="text-stone-500 text-xs uppercase tracking-widest mb-1">Questions</p>
                      <p className="text-stone-300 text-sm">{app.questions}</p>
                    </div>
                  )}

                  <div>
                    <label className="block text-stone-400 text-xs mb-2">Note to applicant (optional)</label>
                    <textarea
                      value={adminNote}
                      onChange={(e) => setAdminNote(e.target.value)}
                      rows={3}
                      className="w-full bg-stone-800 border border-stone-700 rounded px-3 py-2 text-stone-100 text-sm focus:outline-none focus:border-amber-600 resize-none"
                      placeholder="Leave a note visible to the applicant..."
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => updateStatus(app.id, "approved")}
                      disabled={saving === app.id}
                      className="bg-green-800 hover:bg-green-700 disabled:bg-stone-700 text-white px-5 py-2 rounded text-sm transition-colors"
                    >
                      {saving === app.id ? "Saving..." : "Approve"}
                    </button>
                    <button
                      onClick={() => updateStatus(app.id, "rejected")}
                      disabled={saving === app.id}
                      className="bg-red-900 hover:bg-red-800 disabled:bg-stone-700 text-white px-5 py-2 rounded text-sm transition-colors"
                    >
                      {saving === app.id ? "Saving..." : "Reject"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Medical Forms */}
      {tab === "medical" && (
        <div className="space-y-4">
          {medicalForms.length === 0 && (
            <p className="text-stone-500 text-sm">No medical forms submitted yet.</p>
          )}
          {medicalForms.map((form) => (
            <div key={form.id} className="border border-stone-800 rounded">
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-stone-900/30 transition-colors"
                onClick={() => setExpanded(expanded === form.id ? null : form.id)}
              >
                <div>
                  <p className="text-stone-100 text-sm font-medium">{form.userEmail}</p>
                  <p className="text-stone-500 text-xs mt-0.5">
                    Submitted {new Date(form.submittedAt).toLocaleDateString()}
                  </p>
                </div>
                <span className="text-xs text-stone-400">
                  {form.conditions.length > 0 ? `${form.conditions.length} flagged condition(s)` : "No conditions flagged"}
                </span>
              </button>

              {expanded === form.id && (
                <div className="border-t border-stone-800 px-5 py-5 space-y-4 text-sm">
                  <div>
                    <p className="text-stone-500 text-xs uppercase tracking-widest mb-1">Date of Birth</p>
                    <p className="text-stone-300">{form.dateOfBirth}</p>
                  </div>
                  {form.conditions.length > 0 && (
                    <div>
                      <p className="text-stone-500 text-xs uppercase tracking-widest mb-1">Flagged Conditions</p>
                      <ul className="space-y-1">
                        {form.conditions.map((c) => (
                          <li key={c} className="text-red-300 text-sm">• {c}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <p className="text-stone-500 text-xs uppercase tracking-widest mb-1">Medications</p>
                    <p className="text-stone-300">{form.medications || "—"}</p>
                  </div>
                  {form.psychiatricHistory && (
                    <div>
                      <p className="text-stone-500 text-xs uppercase tracking-widest mb-1">Psychiatric History</p>
                      <p className="text-stone-300">{form.psychiatricHistory}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
