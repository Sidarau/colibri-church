import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 px-4">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_#92400e_0%,_transparent_70%)]" />
        <div className="relative text-center max-w-3xl mx-auto">
          <p className="text-amber-400 tracking-[0.3em] uppercase text-xs mb-6">Big Island of Hawaiʻi</p>
          <h1 className="text-5xl md:text-7xl font-serif text-amber-100 leading-tight mb-6">
            Welcome to<br />Colibri Church
          </h1>
          <p className="text-stone-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            A spiritual community dedicated to inner growth, healing, and conscious living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/registration"
              className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-3 rounded text-sm tracking-wide transition-colors"
            >
              Begin Registration
            </Link>
            <Link
              href="/information"
              className="border border-stone-600 hover:border-amber-600 text-stone-300 hover:text-amber-200 px-8 py-3 rounded text-sm tracking-wide transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <p className="text-stone-400 text-base md:text-lg leading-relaxed text-center">
          Our work supports individuals in exploring deeper awareness, cultivating compassion, and developing
          meaningful relationships with themselves, others, and the natural world. Through guided retreats,
          ceremonial practices, and ongoing study, we offer a supportive environment where people can reconnect
          with their inner wisdom and develop practical tools for navigating life with greater clarity and integrity.
        </p>
        <p className="text-stone-500 text-base leading-relaxed text-center mt-6">
          Rooted in respect for nature and spiritual traditions that honor the intelligence of consciousness,
          our intention is to create a grounded container for sincere personal transformation and community connection.
        </p>
      </section>

      {/* Upcoming Retreat */}
      <section className="bg-stone-900/50 border-y border-stone-800 py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-amber-400 tracking-widest uppercase text-xs mb-3">Upcoming Retreat</p>
            <h2 className="text-3xl md:text-4xl font-serif text-amber-100 mb-4">Sacral Breath</h2>
            <p className="text-stone-300 mb-2">5-Day Women&apos;s Plant Medicine Retreat · Maui, Hawaiʻi</p>
            <p className="text-stone-400 text-sm mb-6">June 17–21 &amp; September 16–20, 2025</p>
            <Link
              href="/sacral-breath"
              className="inline-block border border-amber-700 hover:bg-amber-700 text-amber-200 hover:text-white px-6 py-2 rounded text-sm transition-colors"
            >
              View Details
            </Link>
          </div>
          <div className="flex-1 text-stone-400 text-sm leading-relaxed">
            A journey for women seeking clarity, strength, and renewal — held in the sacred landscape of Maui.
            Breathwork, plant medicine ceremony, nature connection, and integration support woven into five
            transformative days.
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <p className="text-amber-400 tracking-widest uppercase text-xs text-center mb-3">Founder & Facilitator</p>
        <h2 className="text-3xl md:text-4xl font-serif text-amber-100 text-center mb-8">Alana Ha&apos;a</h2>
        <p className="text-stone-300 leading-relaxed mb-6">
          The founder of Colibri Church has been walking a dedicated spiritual path for many years, including
          over seven years of experience working with sacred plant medicines in ceremonial settings.
        </p>
        <p className="text-stone-400 leading-relaxed mb-8">
          Her work is supported by a continuous study of yoga, healing practices, and consciousness development,
          along with spiritual traditions that explore the nature of awareness and the subtle dimensions of life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-400">
          {[
            "Plant medicine ceremonial work and space holding",
            "Mediumship and intuitive healing development",
            "Yoga and Taoist practices",
            "Study of angelic and subtle spiritual realms",
            "Brazilian spiritual traditions — Umbanda and Santo Daime",
            "Student and guardian of Celestial Heart Church",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <span className="text-amber-600 mt-0.5">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-stone-900/30 border-y border-stone-800 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 tracking-widest uppercase text-xs mb-3">Our Mission</p>
          <h2 className="text-3xl font-serif text-amber-100 mb-8">Why We Gather</h2>
          <p className="text-stone-300 leading-relaxed mb-6">
            Colibri Church exists to support sincere inner growth, healing, and the development of conscious
            human relationships. We believe transformation begins within each individual and expands outward into
            the way we relate to others, our communities, and the natural world.
          </p>
          <p className="text-stone-400 leading-relaxed">
            Community plays an essential role in this process. Being witnessed and supported by others creates
            a stable foundation for meaningful growth. Together we create spaces for heart-led communication,
            shared learning, and respectful relationships with each other and with nature.
          </p>
        </div>
      </section>

      {/* Sacred Path */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <p className="text-amber-400 tracking-widest uppercase text-xs text-center mb-3">The Sacred Path</p>
        <h2 className="text-3xl md:text-4xl font-serif text-amber-100 text-center mb-8">Ayahuasca as Teacher</h2>
        <p className="text-stone-300 leading-relaxed mb-6">
          Ayahuasca is approached within our community as a sacred teacher and a tool for wisdom. She invites
          humility, deep connection, and the exploration of the boundless nature of life itself — for those who
          are willing to listen and apply what is revealed.
        </p>
        <p className="text-stone-400 leading-relaxed mb-6">
          When this sacrament is approached with reverence and grounded spiritual practice, it can support the
          cultivation of mature love, genuine care, and harmonious expression.
        </p>
        <p className="text-stone-400 leading-relaxed">
          With the guidance of Grandmother, insight can transform into responsibility, awareness into action,
          and devotion into a way of being.
        </p>
      </section>

      {/* Statement of Beliefs */}
      <section className="bg-stone-900/30 border-y border-stone-800 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 tracking-widest uppercase text-xs text-center mb-3">Statement of Beliefs</p>
          <h2 className="text-3xl font-serif text-amber-100 text-center mb-10">What We Hold True</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Every individual carries the capacity for healing and transformation",
              "Spiritual growth requires responsibility, humility, and compassion",
              "Community and mutual support strengthen the process of personal development",
              "Respect for nature and ethical living are essential elements of spiritual maturity",
            ].map((belief) => (
              <div key={belief} className="border border-stone-700 rounded p-5 text-stone-300 text-sm leading-relaxed">
                <span className="text-amber-600 text-lg mr-2">•</span>
                {belief}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <p className="text-amber-400 tracking-widest uppercase text-xs text-center mb-3">Voices From Participants</p>
        <h2 className="text-3xl font-serif text-amber-100 text-center mb-10">Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "This retreat gave me a space to honestly look at my life in a way I never had before. The preparation and integration support made a huge difference. I felt guided, safe, and deeply supported throughout the process.",
            "What stood out most was the sincerity and grounded approach. It wasn't just about ceremony — there was real guidance, thoughtful preparation, and a sense of genuine care for each person.",
            "The setting on the Big Island created a powerful environment for reflection. The experience helped me reconnect with myself and gave me practical insights that I continue to apply in my daily life.",
            "I appreciated the balance between spiritual depth and practical guidance. The integration support helped me understand my experience in a meaningful way.",
          ].map((quote, i) => (
            <blockquote
              key={i}
              className="border-l-2 border-amber-700 pl-5 text-stone-400 text-sm leading-relaxed italic"
            >
              &ldquo;{quote}&rdquo;
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-stone-900 to-stone-950 py-20 px-4 text-center">
        <h2 className="text-3xl font-serif text-amber-100 mb-4">Ready to Begin?</h2>
        <p className="text-stone-400 mb-8 max-w-xl mx-auto">
          Participation is limited to small groups to ensure a safe and supportive environment.
        </p>
        <Link
          href="/registration"
          className="bg-amber-700 hover:bg-amber-600 text-white px-10 py-3 rounded text-sm tracking-wide transition-colors"
        >
          Begin Registration
        </Link>
      </section>
    </>
  );
}
