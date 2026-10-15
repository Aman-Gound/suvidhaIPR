const reasons = [
  {
    number: "01",
    title: "Instant Bilateral NDA",
    description:
      "A legally binding mutual Non-Disclosure Agreement is executed digitally before we receive your technical brief or diagrams.",
  },
  {
    number: "02",
    title: "AES-256 Cloud Vault",
    description:
      "Files are encrypted in transit and at rest with controlled access throughout the preparation and filing process.",
  },
  {
    number: "03",
    title: "Registered Patent Agents",
    description:
      "Your application is guided by registered professionals working under statutory ethics and strict confidentiality duties.",
  },
  {
    number: "04",
    title: "Zero Third-Party Leaks",
    description:
      "Your disclosure dossier stays within our certified team, without unauthorized subcontractors or public AI tools.",
  },
];

const Thirdcontainer = () => {
  return (
    <section className="px-4 py-16 text-center sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#6366f1]">
          Unmatched Execution Clarity
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-[#2e3040] sm:text-4xl">
          Why Modern Innovators Choose Suvidha IPR
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#585a68] sm:text-base">
          See how our digital-first, tech-attorney model outpaces antiquated
          legacy law practices and unverified freelance agents.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason) => (
          <article
            key={reason.number}
            className="neo-raised group flex min-h-[260px] flex-col rounded-3xl p-6 text-left transition duration-300 hover:-translate-y-1 hover:shadow-[8px_10px_20px_rgba(0,0,0,.1),-8px_-8px_20px_rgba(255,255,255,.8)]"
          >
            <div className="flex items-center justify-between border-b border-[#d0d2dc]/70 pb-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e0e2ff] text-sm font-extrabold text-[#6366f1] transition group-hover:bg-[#6366f1] group-hover:text-white">
                {reason.number}
              </span>
              <span className="text-xl text-[#6366f1]">✦</span>
            </div>
            <h3 className="mt-6 text-lg font-bold leading-snug text-[#2e3040]">
              {reason.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#585a68]">
              {reason.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Thirdcontainer;
