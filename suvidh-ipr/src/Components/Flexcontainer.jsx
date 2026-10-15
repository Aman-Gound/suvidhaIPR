const steps = [
  {
    number: "01",
    day: "Day 1",
    title: "Digital Invention Disclosure",
    description:
      "Complete our structured intake questionnaire and securely share the technical details behind your invention.",
    detail: "Tamper-evident timestamp",
  },
  {
    number: "02",
    day: "Day 1",
    title: "Instant Mutual NDA",
    description:
      "An automated mutual NDA is digitally generated and signed before proprietary diagrams or source code are uploaded.",
    detail: "Confidentiality from the first upload",
  },
  {
    number: "03",
    day: "Day 2–3",
    title: "Attorney-Led Drafting",
    description:
      "Registered patent professionals translate your invention into a precise, prosecution-ready IP dossier.",
    detail: "Reviewed by registered agents",
  },
  {
    number: "04",
    day: "Day 4",
    title: "File & Track Online",
    description:
      "Your application is filed with the relevant IP office, with transparent updates available from your dashboard.",
    detail: "Live filing status updates",
  },
];

const Flexcontainer = () => {
  return (
    <section className="px-4 py-16 text-center sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#6366f1]">
          Predictable, Frictionless, Transparent
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-[#2e3040] sm:text-4xl">
          How It Works: 4-Step Digital Prosecution
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#585a68] sm:text-base">
          From rough concept to registered IP dossier without tedious paper
          trails or ambiguous billing.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <article
            key={step.number}
            className="neo-raised group flex min-h-[330px] flex-col rounded-3xl p-6 text-left transition duration-300 hover:-translate-y-1 hover:shadow-[8px_10px_20px_rgba(0,0,0,.1),-8px_-8px_20px_rgba(255,255,255,.8)]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#d0d2dc]/70 pb-5">
              <span className="text-4xl font-extrabold tracking-tight text-[#6366f1]/80">
                {step.number}
              </span>
              <span className="rounded-full bg-[#e0e2ff] px-3 py-1.5 text-xs font-bold text-[#4f46e5]">
                {step.day}
              </span>
            </div>

            <h3 className="mt-6 text-lg font-bold leading-snug text-[#2e3040]">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#585a68]">
              {step.description}
            </p>

            <div className="mt-auto flex items-center gap-2 pt-6 text-xs font-bold text-[#6366f1]">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e0e2ff] text-[11px]">
                ✓
              </span>
              {step.detail}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Flexcontainer;
