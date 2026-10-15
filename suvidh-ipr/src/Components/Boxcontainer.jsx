const securityFeatures = [
  {
    icon: "01",
    title: "Certified Security Practices",
    description:
      "Structured controls and documented processes help protect your dossier throughout its lifecycle.",
  },
  {
    icon: "02",
    title: "Encrypted Cloud Vault",
    description:
      "Your files are protected in transit and at rest with modern encryption and controlled access.",
  },
  {
    icon: "03",
    title: "Attorney-Led Confidentiality",
    description:
      "Your disclosure is handled by registered professionals with strict legal confidentiality duties.",
  },
  {
    icon: "04",
    title: "No Unauthorized Sharing",
    description:
      "Your technical materials stay within the certified team working directly on your application.",
  },
];

const certifications = [
  "ISO/IEC 27001 Certified Security Practices",
  "Digital Personal Data Protection (DPDP) Act Compliant",
  "DPIIT Startup India Facilitator Registered",
];

const Boxcontainer = () => {
  return (
    <section className="px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#6366f1]">
          Uncompromising IP Security
        </p>
        <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-[#2e3040] sm:text-4xl">
          Bank-Grade Security for Your Proprietary Secrets
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#585a68] sm:text-base">
          Your invention is your enterprise&apos;s lifeblood. We employ
          enterprise cryptographic controls and legal protections from the
          moment you touch our portal.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {securityFeatures.map((feature) => (
            <article
              key={feature.icon}
              className="neo-raised group flex min-h-[245px] flex-col rounded-3xl p-6 text-left transition duration-300 hover:-translate-y-1 hover:shadow-[8px_10px_20px_rgba(0,0,0,.1),-8px_-8px_20px_rgba(255,255,255,.8)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e0e2ff] text-sm font-extrabold text-[#6366f1] transition group-hover:bg-[#6366f1] group-hover:text-white">
                {feature.icon}
              </span>
              <h3 className="mt-6 text-lg font-bold leading-snug text-[#2e3040]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#585a68]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-3 text-xs font-bold text-[#585a68] sm:grid-cols-3">
          {certifications.map((certification) => (
            <div
              key={certification}
              className="neo-pressed flex min-h-16 items-center justify-center rounded-2xl px-5 py-4 leading-5"
            >
              <span className="mr-2 text-[#6366f1]">✓</span>
              {certification}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Boxcontainer;
