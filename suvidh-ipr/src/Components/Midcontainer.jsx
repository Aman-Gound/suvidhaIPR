const services = [
  {
    number: "01",
    category: "Copyright",
    title: "Software & Source Code",
    description:
      "Statutory copyright registration for backend databases, microservice architectures, algorithm codebases, and mobile apps.",
    highlights: ["Redacted source code deposit", "Structure-sequence protection"],
    timeline: "48 hours",
    action: "Register code",
  },
  {
    number: "02",
    category: "Patent",
    title: "Provisional Patent Filing",
    description:
      "Establish an early priority date while your invention is refined, tested, and prepared for a complete specification.",
    highlights: ["Priority date protection", "Attorney-led drafting"],
    timeline: "72 hours",
    action: "Protect an idea",
  },
  {
    number: "03",
    category: "Patent",
    title: "Complete Specification",
    description:
      "Build a detailed, prosecution-ready patent application with claims tailored to your invention and business goals.",
    highlights: ["Claim strategy", "Technical drawings"],
    timeline: "7–10 days",
    action: "Draft a patent",
  },
  {
    number: "04",
    category: "Patent",
    title: "Patentability Search",
    description:
      "Assess relevant prior art and identify the strongest protection pathway before committing to a full patent filing.",
    highlights: ["Prior art review", "Risk-focused report"],
    timeline: "3–5 days",
    action: "Check novelty",
  },
  {
    number: "05",
    category: "Copyright",
    title: "Creative Works & Media",
    description:
      "Protect original content including websites, brand assets, technical documents, videos, and visual works.",
    highlights: ["Application preparation", "Evidence organization"],
    timeline: "48 hours",
    action: "Protect creative work",
  },
  {
    number: "06",
    category: "IP Strategy",
    title: "Portfolio Advisory",
    description:
      "Create a practical filing roadmap that connects your intellectual property assets to product and growth milestones.",
    highlights: ["Asset mapping", "Filing roadmap"],
    timeline: "Tailored plan",
    action: "Plan your portfolio",
  },
];

const Midcontainer = () => {
  return (
    <section className="px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#6366f1]">
              Specialized IP Prosecution Services
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#2e3040] sm:text-4xl">
              Comprehensive Intellectual Property Solutions
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#585a68] sm:text-base">
              Modular patent and copyright execution tracks adapted to
              individual inventors, venture-backed tech startups, and
              enterprise research labs.
            </p>
          </div>
          <div className="neo-pressed flex w-fit gap-1 rounded-xl p-1 text-xs font-bold text-[#6366f1]">
            <span className="rounded-lg bg-[#e0e2ff] px-3 py-2">Patent track</span>
            <span className="px-3 py-2 text-[#585a68]">Copyright track</span>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="neo-raised group flex min-h-[360px] flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[8px_10px_20px_rgba(0,0,0,.1),-8px_-8px_20px_rgba(255,255,255,.8)] sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e0e2ff] text-sm font-extrabold text-[#6366f1] transition group-hover:bg-[#6366f1] group-hover:text-white">
                  {service.number}
                </span>
                <span className="rounded-full border border-[#cfd1dc] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#6366f1]">
                  {service.category}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold leading-snug text-[#2e3040]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#585a68]">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2 border-t border-[#d0d2dc]/70 pt-5 text-xs font-medium text-[#585a68]">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2">
                    <span className="text-[#6366f1]">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center justify-between gap-3 pt-6 text-xs">
                <span className="text-[#585a68]">
                  Filing: <strong className="text-[#2e3040]">{service.timeline}</strong>
                </span>
                <span className="font-bold text-[#6366f1]">
                  {service.action} <span aria-hidden="true">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Midcontainer;
