import Link from "next/link";

export default function RegistrationPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-stone-900 to-stone-950 py-20 px-4 text-center">
        <p className="text-amber-400 tracking-widest uppercase text-xs mb-3">Join Us</p>
        <h1 className="text-4xl md:text-5xl font-serif text-amber-100 mb-4">Retreat Registration</h1>
        <p className="text-stone-400 max-w-xl mx-auto text-sm">
          If you feel called to participate in a retreat with Colibri Church, the first step is to create
          an account and submit your application.
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-12">

        <section>
          <p className="text-stone-400 leading-relaxed mb-4">
            This allows us to understand your intentions, answer any questions you may have, and ensure that
            the retreat is a good fit for your needs.
          </p>
          <p className="text-stone-400 leading-relaxed mb-4">
            After submitting your application, you will be contacted with further information about upcoming
            retreat dates and next steps.
          </p>
          <p className="text-stone-500 leading-relaxed">
            Participation is intentionally limited to small groups in order to maintain a safe and supportive environment.
          </p>
        </section>

        {/* Steps */}
        <section>
          <h2 className="text-2xl font-serif text-amber-200 mb-6">How It Works</h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Create an Account",
                body: "Sign up with your email address to access your personal client cabinet.",
              },
              {
                step: "2",
                title: "Submit Your Application",
                body: "Complete the retreat application form, sharing your intentions and background.",
              },
              {
                step: "3",
                title: "Complete the Medical Form",
                body: "Submit the required medical information so we can ensure the retreat is appropriate for you.",
              },
              {
                step: "4",
                title: "Introductory Conversation",
                body: "After reviewing your application, we will reach out to schedule an introductory conversation.",
              },
              {
                step: "5",
                title: "Confirmation",
                body: "Once accepted, you will receive confirmation and all details for your retreat.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex gap-5 border-l-2 border-stone-700 pl-5">
                <span className="text-amber-700 font-serif text-lg shrink-0 w-4">{step}</span>
                <div>
                  <p className="text-stone-200 font-medium text-sm mb-1">{title}</p>
                  <p className="text-stone-400 text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-stone-900/50 border border-stone-700 rounded p-8 text-center">
          <h2 className="text-2xl font-serif text-amber-100 mb-4">Begin Your Application</h2>
          <p className="text-stone-400 text-sm mb-6">
            Create your account to access the application form and your personal client cabinet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-3 rounded text-sm tracking-wide transition-colors"
            >
              Create Account
            </Link>
            <Link
              href="/login"
              className="border border-stone-600 hover:border-stone-400 text-stone-300 hover:text-white px-8 py-3 rounded text-sm tracking-wide transition-colors"
            >
              Sign In
            </Link>
          </div>
        </section>

        <section className="text-center">
          <p className="text-stone-500 text-sm">
            Have questions before applying?{" "}
            <a
              href="mailto:rainbowsanctuaryinc@gmail.com"
              className="text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              Contact us
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
