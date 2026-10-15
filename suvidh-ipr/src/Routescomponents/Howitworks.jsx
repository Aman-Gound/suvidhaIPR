import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Share your idea securely",
    description:
      "Start with a structured digital intake. Tell us what you created, how it works, and what problem it solves.",
    detail: "Mutual NDA before proprietary disclosure",
  },
  {
    number: "02",
    title: "Choose the right protection",
    description:
      "Our team reviews your information and helps identify whether a patent, copyright, or combined IP strategy fits best.",
    detail: "Clear route recommendation",
  },
  {
    number: "03",
    title: "Prepare and review",
    description:
      "Registered professionals prepare the application, organize supporting material, and explain the important decisions.",
    detail: "Collaborative review before filing",
  },
  {
    number: "04",
    title: "File and stay informed",
    description:
      "Your application is submitted to the relevant office and progress updates remain visible throughout the process.",
    detail: "Transparent milestone tracking",
  },
];

const Howitworks = () => {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-8 lg:px-12 lg:py-20">
      <section className="mx-auto max-w-4xl text-center">
        <span className="neo-raised inline-flex rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#6366f1]">
          A clearer path to protection
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#2e3040] sm:text-5xl">
          How Suvidha IPR works
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#585a68] sm:text-lg">
          Move from an early idea to a well-prepared IP application with
          practical guidance, secure sharing, and clear ownership of every
          milestone.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="rounded-xl bg-[#6366f1] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_18px_rgba(99,102,241,0.25)] transition hover:bg-[#4f46e5]"
          >
            Start your application →
          </Link>
          <Link
            to="/trackstatus"
            className="neo-raised rounded-xl px-6 py-3.5 text-sm font-bold text-[#585a68] transition hover:text-[#6366f1]"
          >
            Track an application
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl lg:mt-24">
        <div className="grid gap-5 md:grid-cols-2">
          {steps.map((step) => (
            <article
              key={step.number}
              className="neo-raised group flex min-h-[270px] flex-col rounded-3xl p-6 text-left transition duration-300 hover:-translate-y-1 hover:shadow-[8px_10px_20px_rgba(0,0,0,.1),-8px_-8px_20px_rgba(255,255,255,.8)] sm:p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0e2ff] text-sm font-extrabold text-[#6366f1] transition group-hover:bg-[#6366f1] group-hover:text-white">
                {step.number}
              </span>
              <h2 className="mt-7 text-xl font-bold text-[#2e3040]">{step.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#585a68]">{step.description}</p>
              <p className="mt-auto flex items-center gap-2 pt-6 text-xs font-bold text-[#6366f1]">
                <span>✓</span>
                {step.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl rounded-3xl bg-[#2e3040] px-6 py-12 text-center text-white sm:px-12 lg:mt-24">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a5b4fc]">
          Built around your next milestone
        </p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Less uncertainty. More forward motion.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          You keep control of the invention and the decisions. We bring the
          structure, legal coordination, and filing support to move it ahead.
        </p>
      </section>
    </main>
  );
};

export default Howitworks;
