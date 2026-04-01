import Link from "next/link";

export default function SacralBreathPage() {
  const sessions = [
    { label: "Session 1", dates: "June 17–21, 2025" },
    { label: "Session 2", dates: "September 16–20, 2025" },
  ];

  const programIncludes = [
    "Opening circle and intention setting",
    "Breathwork (Sacral Breath) sessions",
    "Plant medicine ceremony",
    "Yoga and movement practices",
    "Nature immersion and sacred site visits",
    "Group sharing circles",
    "1:1 integration support",
    "Closing ceremony and integration guidance",
  ];

  const whoIsItFor = [
    "Women seeking clarity, strength, and renewal",
    "Those navigating life transitions or emotional challenges",
    "Women called to explore plant medicine in a safe, held container",
    "Those committed to personal growth and inner work",
    "Women open to ceremony, breathwork, and community",
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 px-4 text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_#7c2d12_0%,_transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-amber-400 tracking-[0.3em] uppercase text-xs mb-4">Women&apos;s Retreat · Maui, Hawaiʻi</p>
          <h1 className="text-5xl md:text-7xl font-serif text-amber-100 leading-tight mb-6">Sacral Breath</h1>
          <p className="text-stone-300 text-lg md:text-xl leading-relaxed mb-8">
            A 5-day women&apos;s plant medicine retreat for those seeking clarity, strength &amp; renewal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {sessions.map(({ label, dates }) => (
              <div key={label} className="border border-stone-700 rounded px-6 py-3 text-center">
                <p className="text-amber-400 text-xs tracking-widest uppercase mb-1">{label}</p>
                <p className="text-stone-200 text-sm">{dates}</p>
              </div>
            ))}
          </div>
          <Link
            href="/registration"
            className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-3 rounded text-sm tracking-wide transition-colors"
          >
            Apply to Attend
          </Link>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-20">

        {/* About */}
        <section>
          <p className="text-amber-400 tracking-widest uppercase text-xs mb-3">About the Retreat</p>
          <h2 className="text-3xl font-serif text-amber-100 mb-6">Five Days of Transformation</h2>
          <p className="text-stone-300 leading-relaxed mb-4">
            Sacral Breath is a deeply intentional retreat created for women who are ready to go within — to release
            what no longer serves them and reclaim the clarity, strength, and vitality that is their birthright.
          </p>
          <p className="text-stone-400 leading-relaxed mb-4">
            Held in the sacred landscape of Maui, Hawaiʻi, this 5-day journey weaves together the transformative
            power of sacred breath, plant medicine ceremony, nature immersion, and community support into a
            cohesive, deeply nourishing experience.
          </p>
          <p className="text-stone-400 leading-relaxed">
            Drawing on Hawaiian heritage and the island&apos;s profound spiritual energy, this retreat is a container
            for sincere healing, self-discovery, and renewal — guided with care, expertise, and reverence for
            the sacred traditions that inform this work.
          </p>
        </section>

        {/* Who */}
        <section>
          <p className="text-amber-400 tracking-widest uppercase text-xs mb-3">Is This For You?</p>
          <h2 className="text-3xl font-serif text-amber-100 mb-6">Who This Retreat Serves</h2>
          <ul className="space-y-3">
            {whoIsItFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-300 text-sm">
                <span className="text-amber-600 mt-1 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Program */}
        <section>
          <p className="text-amber-400 tracking-widest uppercase text-xs mb-3">The Journey</p>
          <h2 className="text-3xl font-serif text-amber-100 mb-6">What the Program Includes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {programIncludes.map((item) => (
              <div key={item} className="flex items-start gap-3 border border-stone-800 rounded p-4 text-stone-400 text-sm">
                <span className="text-amber-700 shrink-0 mt-0.5">✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section>
          <p className="text-amber-400 tracking-widest uppercase text-xs mb-3">Location</p>
          <h2 className="text-3xl font-serif text-amber-100 mb-6">Maui, Hawaiʻi</h2>
          <p className="text-stone-300 leading-relaxed mb-4">
            Maui is one of the most spiritually potent places on Earth — a land shaped by volcanic fire, nourished
            by ocean rain, and held by ancient Hawaiian wisdom. This island&apos;s natural beauty and cultural depth
            provide an extraordinary backdrop for deep inner work.
          </p>
          <p className="text-stone-400 leading-relaxed">
            The retreat venue details are shared with registered participants. Travel and accommodation information
            is provided upon acceptance.
          </p>
        </section>

        {/* Dates */}
        <section>
          <p className="text-amber-400 tracking-widest uppercase text-xs mb-3">Dates</p>
          <h2 className="text-3xl font-serif text-amber-100 mb-6">2025 Sessions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sessions.map(({ label, dates }) => (
              <div key={label} className="bg-stone-900/50 border border-stone-700 rounded p-6">
                <p className="text-amber-400 text-xs tracking-widest uppercase mb-2">{label}</p>
                <p className="text-stone-100 text-xl font-serif">{dates}</p>
                <p className="text-stone-500 text-sm mt-2">Maui, Hawaiʻi</p>
              </div>
            ))}
          </div>
          <p className="text-stone-500 text-sm mt-4">
            Spaces are limited. Early application is recommended.
          </p>
        </section>

        {/* Preparation note */}
        <section className="bg-stone-900/30 border border-stone-800 rounded p-8">
          <p className="text-amber-400 tracking-widest uppercase text-xs mb-3">Important</p>
          <h2 className="text-2xl font-serif text-amber-100 mb-4">Preparation is Required</h2>
          <p className="text-stone-400 text-sm leading-relaxed mb-4">
            All participants are required to follow the preparation guidelines, including dietary recommendations,
            medication safety review, and mental preparation practices outlined on our Information page.
          </p>
          <p className="text-stone-400 text-sm leading-relaxed mb-6">
            A medical form must be completed as part of the registration process. Your safety and wellbeing
            are our highest priority.
          </p>
          <Link
            href="/information"
            className="text-amber-400 hover:text-amber-300 text-sm underline underline-offset-4 transition-colors"
          >
            Read the full preparation guide →
          </Link>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-serif text-amber-100 mb-4">Ready to Join Us?</h2>
          <p className="text-stone-400 mb-8 max-w-lg mx-auto text-sm">
            Spaces are intentionally limited to maintain a safe and intimate container.
            Submit your application to begin the process.
          </p>
          <Link
            href="/registration"
            className="bg-amber-700 hover:bg-amber-600 text-white px-10 py-3 rounded text-sm tracking-wide transition-colors"
          >
            Apply to Attend Sacral Breath
          </Link>
        </section>
      </div>
    </>
  );
}
