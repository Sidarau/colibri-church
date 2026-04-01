export default function InformationPage() {
  const avoidFoods = [
    "Red meat that is not fresh, especially unfresh liver",
    "Smoked, fermented, aged or dried fish, lox; any fish that is not fresh",
    "Sausage, bologna, pepperoni, salami, corned beef",
    "Aged cheeses (cottage cheese and cream cheese are safe)",
    "Protein extracts; liquid and powdered protein dietary supplements",
    "Brewer's yeast, yeast vitamin supplements, or yeast extracts",
    "Fermented tofu, fermented bean curd, fermented soybean paste, soy sauce",
    "Canned soups or soups made with protein extracts or bouillon",
    "Miso soup (contains fermented bean curd)",
    "Shrimp paste; sauerkraut",
    "Bruised or slightly overripe fruits, especially bananas and apples; raisins and other dried fruits",
    "Avocados, if ripe or overripe",
    "Alcohol in all forms — recommended to avoid for at least one week prior",
    "Dairy products close to expiration or unrefrigerated (fresh yogurt is safe)",
    "Excessive salt, pepper, garlic, oils, butter, and other animal fats",
    "Aspartame and refined sugar in all forms",
    "Fava beans (especially if overripe), peanuts, raspberries, spinach, chocolate — in large quantities",
    "Caffeine in large quantities",
  ];

  const prohibitedSubstances = [
    "All recreational or synthetic drugs (cocaine, MDMA, LSD, amphetamines, heroin)",
    "Alcohol",
    "Cannabis in any form",
    "Other psychedelics, including mushrooms",
  ];

  const dangerousInteractions = [
    "Opiates and opioid-based painkillers (morphine, codeine, heroin, oxycodone, buprenorphine, naloxone, naltrexone)",
    "Alcohol — increases sedation, chest pain, and severe headaches",
    "Sleeping pills, tranquilizers, anesthetics — greatly increase sedative effects",
    "Diuretics — can cause dangerous drops in blood pressure",
    "Vasodilators — increasing the risk of fainting",
    "Nutmeg at psychoactive doses",
    "Tricyclic antidepressants — must be stopped at least two weeks prior",
    "Fluoxetine (Prozac) — must be stopped at least five weeks prior",
  ];

  const herbs = [
    "St. John's Wort","Betel","Boswellia","Carrot seed","Chamomile","Cowhage","Curcumin",
    "Dill seed","Ephedra","Fennel seed","Fo-Ti","Ginseng","Horny Goat Weed","Kanna","Kava",
    "Kratom","Licorice Root","Nutmeg","Parsley seed","Rhodiola Rosea","Scotch Broom",
    "Siberian Ginseng","Sinicuichi","Turmeric","Yerba Mate","Yohimbe",
  ];

  const medicalRisks = [
    "Unstable Diabetes Mellitus",
    "Disorders of the kidneys",
    "Epilepsy",
    "Severe neurological malfunctions",
    "Illnesses of the circulation (angina pectoris, CVAs, pheochromocytoma, hyperthyroidism)",
    "Disorders of the liver",
    "Severe unstable mental health disorders (schizophrenia, psychoses, borderline personality disorders)",
  ];

  const integrationSteps = [
    { icon: "🌿", title: "Create Space for Stillness", body: "Give yourself moments of quiet each day — journal, meditate, or sit in nature. Allow the lessons to surface naturally." },
    { icon: "🥦", title: "Nourish the Body", body: "Eat light, clean, whole foods. Include healthy fats like avocado, coconut, or olive oil. Avoid processed food, sugar, caffeine, alcohol, and heavy meats." },
    { icon: "🌸", title: "Support with Gentle Supplements", body: "Magnesium, Vitamin C, B-complex, Probiotics, Tulsi, or Reishi. Avoid strong or psychoactive herbs for a few weeks." },
    { icon: "☀️", title: "Ground and Restore", body: "Walk barefoot on the earth. Take Epsom salt baths. Practice gentle yoga, stretching, or dance." },
    { icon: "💬", title: "Emotional & Mental Care", body: "Allow emotions to move freely. Share only with people who understand sacred experiences. Everything that surfaces is part of healing." },
    { icon: "🌕", title: "Bring Teachings into Daily Life", body: "Ask yourself: What did I learn about love, truth, or myself? How can I live in alignment with that today?" },
  ];

  const faqs = [
    {
      q: "Who is this retreat for?",
      a: "This retreat is for individuals seeking deeper self-understanding, healing, and personal growth. It may be supportive for people navigating life transitions, emotional challenges, or a desire to explore consciousness more deeply.",
    },
    {
      q: "Do I need previous experience?",
      a: "No previous experience is required. Participants are guided through preparation and supported throughout the process.",
    },
    {
      q: "What makes this retreat unique?",
      a: "The retreats are intentionally small and personal, allowing for individual attention and a supportive environment. Preparation, ceremony, and integration are all considered important parts of the process.",
    },
    {
      q: "Where are retreats held?",
      a: "Retreats take place on the Big Island of Hawaiʻi, a place known for its powerful natural landscapes and grounding presence.",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-stone-900 to-stone-950 py-20 px-4 text-center">
        <p className="text-amber-400 tracking-widest uppercase text-xs mb-3">Before You Arrive</p>
        <h1 className="text-4xl md:text-5xl font-serif text-amber-100 mb-4">Information & Preparation</h1>
        <p className="text-stone-400 max-w-xl mx-auto text-sm">
          Preparing thoughtfully is an essential part of the ceremonial experience.
          Please read this page carefully before attending.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-20">

        <section>
          <h2 className="text-2xl font-serif text-amber-200 mb-4">Preparation</h2>
          <p className="text-stone-300 leading-relaxed">
            Preparing for an ayahuasca ceremony is an important part of the experience and helps support both
            physical comfort and mental focus. Many traditions recommend following a simple, clean diet in the
            days leading up to the ceremony — avoiding alcohol, recreational drugs, processed foods, excess sugar,
            and heavy or spicy meals, while focusing on light, nourishing foods such as vegetables, fruits, rice,
            and soups.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-amber-200 mb-2">Foods to Avoid</h2>
          <p className="text-stone-400 text-sm mb-4">
            The following must be avoided <strong className="text-stone-200">72 hours before and after</strong> the ceremony:
          </p>
          <ul className="space-y-2 text-stone-400 text-sm">
            {avoidFoods.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-amber-700 mt-0.5 shrink-0">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-amber-200 mb-2">Medications & Substances to Avoid</h2>
          <p className="text-stone-400 text-sm mb-4">
            At least <strong className="text-stone-200">two weeks before the ceremony</strong>
          </p>
          <div className="bg-amber-950/30 border border-amber-900/50 rounded p-5 mb-6 text-sm text-stone-300 leading-relaxed">
            Ayahuasca (Daime tea) contains MAO inhibitors (MAOIs), which can interact dangerously with certain
            medications, substances, and herbs. These interactions can cause severe reactions and, in rare cases,
            be life-threatening. Always consult your medical provider before stopping any prescribed medication.
          </div>
          <p className="text-stone-300 text-sm font-medium mb-3">MAOIs interact dangerously with:</p>
          <ul className="space-y-2 text-stone-400 text-sm mb-6">
            {dangerousInteractions.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-700 mt-0.5 shrink-0">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-stone-200 text-sm font-medium mb-3">Strictly Prohibited:</p>
          <ul className="space-y-1 text-stone-400 text-sm mb-6">
            {prohibitedSubstances.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-red-600 mt-0.5 shrink-0">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-stone-300 text-sm font-medium mb-3">
            Herbs to avoid at least <strong>48 hours</strong> before and after:
          </p>
          <div className="flex flex-wrap gap-2">
            {herbs.map((herb) => (
              <span key={herb} className="bg-stone-800 text-stone-400 text-xs px-3 py-1 rounded-full">
                {herb}
              </span>
            ))}
          </div>
          <p className="text-stone-500 text-xs mt-4">
            Aspirin, ibuprofen, and paracetamol in moderate quantities can be used safely.
            If unsure about a medication, note it on your medical form and contact us before arriving.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-amber-200 mb-4">Eating Prior to the Ceremony</h2>
          <p className="text-stone-400 leading-relaxed text-sm">
            We recommend a hearty breakfast and a light lunch on the day of the ceremony, then stopping food
            intake <strong className="text-stone-200">3–4 hours before</strong>. Stay hydrated — bring water,
            but avoid overdrinking right before the ceremony.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-amber-200 mb-4">Appearance & Clothing</h2>
          <p className="text-stone-400 leading-relaxed text-sm">
            Wear comfortable, modest clothing in <strong className="text-stone-200">white or beige</strong>,
            free of prints or words. Avoid belts or restrictive pieces. Wear layers — body temperature may
            change during the ceremony.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-amber-200 mb-4">Mental & Spiritual Preparation</h2>
          <p className="text-stone-400 text-sm leading-relaxed mb-4">
            Be mindful of what you take in — what you listen to, what you speak, and what you surround yourself
            with. Choose information and environments that feel uplifting and nourishing.
          </p>
          <ul className="space-y-3 text-stone-400 text-sm">
            {[
              "Sit in silence to clarify your intentions. Meditate, journal, or reflect on what you are calling in.",
              "Include movement — simple exercises, stretching, or dance.",
              "Spend time in nature whenever possible.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-amber-700 mt-0.5 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-amber-200 mb-4">After the Ceremony</h2>
          <p className="text-stone-400 text-sm leading-relaxed mb-4">
            Eating helps with grounding. We recommend light foods such as soup and fruit, with plenty of water,
            continuing the recommended diet for one to two more days.
          </p>
          <p className="text-stone-400 text-sm leading-relaxed">
            Ayahuasca may continue working within you for up to three days. Use this time to integrate and
            reflect on what you&apos;ve learned. Allow yourself gentleness, rest, and quiet time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-amber-200 mb-4">Integration</h2>
          <p className="text-stone-300 text-sm leading-relaxed mb-6">
            True change unfolds through integration — weaving the insights and lessons from ceremony into
            your daily life. This is how we live the medicine, transforming visions into action and wisdom
            into embodied awareness.
          </p>
          <div className="space-y-4">
            {integrationSteps.map(({ icon, title, body }) => (
              <div key={title} className="flex gap-4 border-l border-stone-700 pl-5">
                <span className="text-xl shrink-0">{icon}</span>
                <div>
                  <p className="text-stone-200 text-sm font-medium mb-1">{title}</p>
                  <p className="text-stone-400 text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-amber-200 mb-4">Retreat Schedule</h2>
          <p className="text-stone-400 text-sm mb-4">
            Retreats take place on the <strong className="text-stone-200">Big Island of Hawaiʻi</strong>.
            The program typically includes:
          </p>
          <ul className="space-y-2 text-stone-400 text-sm">
            {[
              "Preparation practices: breathwork, yoga, grounding exercises, sound bath",
              "Ceremonial work in a respectful and supportive environment",
              "Time for adventure and connection with nature",
              "Group sharing circles",
              "Integration guidance following the retreat",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-amber-700 mt-0.5 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-amber-200 mb-4">Medical Guidance</h2>
          <p className="text-stone-400 text-sm leading-relaxed mb-4">
            Participants are asked to carefully review their physical and mental health before attending.
            This work is not intended to replace professional medical or psychological treatment.
          </p>
          <p className="text-stone-300 text-sm font-medium mb-3">Conditions that carry additional risk:</p>
          <ul className="space-y-1 text-stone-400 text-sm mb-6">
            {medicalRisks.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-amber-700 mt-0.5 shrink-0">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-stone-800/50 border border-stone-700 rounded p-4 text-stone-300 text-xs leading-relaxed">
            If you have any of the above conditions, please note it on your medical form. When drinking the
            Daime tea under medical treatment, inform your doctor that you will be using MAO inhibitors.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-amber-200 mb-4">Spiritual Use Statement</h2>
          <p className="text-stone-400 text-sm leading-relaxed mb-4">
            Colibri Church offers retreats within a spiritual and contemplative context intended to support
            personal reflection, ethical development, and the exploration of consciousness. This work is not
            intended to diagnose, treat, or replace medical or psychological care.
          </p>
          <p className="text-stone-400 text-sm leading-relaxed">
            Participation is voluntary and based on personal responsibility. Individuals are encouraged to
            consider their physical, emotional, and mental readiness before taking part.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-amber-200 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-stone-800 pb-6">
                <p className="text-stone-200 font-medium mb-2">{q}</p>
                <p className="text-stone-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
