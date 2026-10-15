import { Link } from "react-router-dom";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    alt: "Team collaborating around a table",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
    alt: "Team planning on a glass wall",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    alt: "Business team in a meeting",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    alt: "Creative team working together",
    className: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
    alt: "Team discussion in a modern office",
    className: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    alt: "Colleagues reviewing project work",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    alt: "People collaborating in a workshop",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    alt: "Bright modern workspace",
    className: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80",
    alt: "Professionals reviewing documents",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
    alt: "Shared office workspace",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    alt: "Team meeting and presentation",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
    alt: "Minimal office interior",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    alt: "Team working together",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
    alt: "Professionals collaborating",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    alt: "Strategy discussion with colleagues",
    className: "col-span-2 row-span-1",
  },
];

const Whysuvidha = () => {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-8 lg:px-12 lg:py-20">
      <section className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <span className="neo-raised inline-flex rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#6366f1]">
            The Suvidha difference
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#2e3040] sm:text-5xl">
            IP protection that feels{" "}
            <span className="text-[#6366f1]">clear and human.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#585a68] sm:text-lg">
            Intellectual property work should give you confidence, not more
            uncertainty. Suvidha IPR brings together secure digital tools,
            experienced professionals, and a process that keeps you informed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-xl bg-[#6366f1] px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_18px_rgba(99,102,241,0.25)] transition hover:bg-[#4f46e5]"
            >
              Speak with our team →
            </Link>
            <Link
              to="/howitworks"
              className="neo-raised rounded-xl px-6 py-3.5 text-sm font-bold text-[#585a68] transition hover:text-[#6366f1]"
            >
              See how it works
            </Link>
          </div>
        </div>

        <div className="neo-raised rounded-[2rem] p-6 sm:p-8">
          <div className="neo-pressed rounded-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6366f1]">
              What you can expect
            </p>
            <div className="mt-6 space-y-4">
              {[
                "A secure place to begin your disclosure",
                "A practical recommendation for your next filing step",
                "A review process that respects your time and expertise",
                "Updates you can understand without legal guesswork",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold text-[#2e3040]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e0e2ff] text-xs text-[#6366f1]">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl lg:mt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#6366f1]">
            A digital-first experience
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#2e3040] sm:text-4xl">
            Built for ideas, teams, and progress
          </h2>
        </div>

        <div className="mt-10 grid auto-rows-[120px] grid-cols-2 gap-3 sm:auto-rows-[150px] sm:grid-cols-4 sm:gap-5">
          {galleryImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={`group relative overflow-hidden rounded-2xl ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Whysuvidha;
