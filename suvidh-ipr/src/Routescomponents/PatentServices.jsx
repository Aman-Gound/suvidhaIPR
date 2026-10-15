import { Link } from "react-router-dom";

const services = [
  {
    icon: "⌕",
    title: "Patentability Search",
    description:
      "Review relevant prior art and understand the strongest protection path before investing in a full filing.",
  },
  {
    icon: "✦",
    title: "Provisional Application",
    description:
      "Secure an early priority date while your invention is still being tested, refined, or prepared for launch.",
  },
  {
    icon: "§",
    title: "Complete Specification",
    description:
      "Translate your technical invention into a detailed application with carefully structured claims and drawings.",
  },
  {
    icon: "↗",
    title: "Patent Prosecution",
    description:
      "Stay supported through examination, office actions, hearing preparation, and important filing milestones.",
  },
];

const process = [
  [
    "01",
    "Share your invention",
    "Tell us what you built, how it works, and what makes it different.",
  ],
  [
    "02",
    "Build the filing strategy",
    "Our team reviews the details and recommends the right protection route.",
  ],
  [
    "03",
    "Draft and review",
    "Your application is prepared for your review with clear, practical guidance.",
  ],
  [
    "04",
    "File and track",
    "We submit the application and keep you informed as it moves forward.",
  ],
];

const PatentServices = () => {
  return (
    <main className="min-h-screen overflow-hidden px-4 py-12 sm:px-8 lg:px-12 lg:py-20">
      <section className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <span className="neo-raised inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#6366f1]">
            <span className="h-2 w-2 rounded-full bg-[#6366f1]" />
            Patent protection, made clear
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-[#2e3040] sm:text-5xl lg:text-6xl">
            Turn your breakthrough into a{" "}
            <span className="text-[#6366f1]">defensible asset.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#585a68] sm:text-lg">
            A patent can protect the technical heart of your product and give
            your business a stronger position to grow. Suvidha IPR helps you
            move from first disclosure to a prosecution-ready application with
            registered patent professionals guiding each step.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-xl bg-[#6366f1] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_18px_rgba(99,102,241,0.25)] transition hover:bg-[#4f46e5]"
            >
              Start patent filing <span className="ml-1">→</span>
            </Link>
            <a
              href="#patent-services"
              className="neo-raised rounded-xl px-6 py-3.5 text-sm font-bold text-[#585a68] transition hover:text-[#6366f1]"
            >
              Explore services
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold text-[#585a68]">
            <span>✓ Mutual NDA before disclosure</span>
            <span>✓ Clear milestone updates</span>
            <span>✓ Transparent next steps</span>
          </div>
        </div>

        <div className="neo-raised relative rounded-[2rem] p-6 sm:p-8">
          <div className="neo-pressed rounded-2xl p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#6366f1]">
              Your filing journey
            </p>
            <div className="mt-6 space-y-5">
              {process.map(([number, title, description]) => (
                <div key={number} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e0e2ff] text-xs font-extrabold text-[#6366f1]">
                    {number}
                  </span>
                  <div>
                    <h2 className="text-sm font-bold text-[#2e3040]">
                      {title}
                    </h2>
                    <p className="mt-1 text-xs leading-5 text-[#585a68]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#e0e2ff] px-5 py-4 text-xs font-bold text-[#4f46e5]">
            <span>Ready to protect your idea?</span>
            <Link to="/contact" className="underline underline-offset-4">
              Begin now
            </Link>
          </div>
        </div>
      </section>

      <section
        id="patent-services"
        className="mx-auto mt-20 max-w-7xl lg:mt-28"
      >
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#6366f1]">
            End-to-end support
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#2e3040] sm:text-4xl">
            Patent services for every stage of innovation
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#585a68] sm:text-base">
            Whether you are validating an idea, launching a product, or building
            an IP portfolio, choose the support that fits your next milestone.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="neo-raised group flex min-h-[260px] flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[8px_10px_20px_rgba(0,0,0,.1),-8px_-8px_20px_rgba(255,255,255,.8)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e0e2ff] text-lg font-bold text-[#6366f1] transition group-hover:bg-[#6366f1] group-hover:text-white">
                {service.icon}
              </span>
              <h3 className="mt-6 text-lg font-bold text-[#2e3040]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#585a68]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl rounded-3xl bg-[#2e3040] px-6 py-12 text-center shadow-xl shadow-slate-300/40 sm:px-12 lg:mt-28">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a5b4fc]">
          Take the first step
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Have an invention worth protecting?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          Share a few details with our team. We will help you understand the
          next filing step and the information needed to move forward.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-xl bg-[#6366f1] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#818cf8]"
        >
          File your patent with us <span className="ml-2">→</span>
        </Link>
      </section>
    </main>
  );
};

export default PatentServices;
