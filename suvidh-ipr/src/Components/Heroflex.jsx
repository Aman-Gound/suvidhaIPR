import Quicktool from "./Quicktool";
import { Link } from "react-router-dom";
const Heroflex = () => (
  <>
    <section className="relative overflow-hidden px-4 py-12 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="neo-raised inline-flex self-start items-center gap-2 rounded-full px-3.5 py-2 text-[11px] font-bold text-[#6366f1]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#6366f1]" />{" "}
            Govt. Recognized IP Facilitation Platform{" "}
            <span className="text-[#a5a7b2]">•</span>{" "}
            <span className="font-medium text-[#585a68]">
              Updated for 2025 Patent Rules
            </span>
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.15] tracking-tight text-[#2e3040] sm:text-5xl lg:text-[56px]">
            Protect Your Inventions & Creative Assets with India’s Premier{" "}
            <span className="text-[#6366f1]">Digital IPR Platform</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[#585a68] lg:text-lg">
            End-to-end digital assistance for Patent and Copyright filing.
            Trusted by 4,500+ deep-tech startups, academic institutions, and
            independent inventors. Supervised directly by registered patent
            attorneys.
          </p>
          <div className="flex flex-wrap gap-2.5 text-[11px] font-semibold">
            <span className="neo-pressed rounded-lg px-3 py-2">
              ✓ Instant Bilateral NDA
            </span>
            <span className="neo-pressed rounded-lg px-3 py-2">
              ⚡ 48-Hour Novelty Search
            </span>
            <span className="neo-pressed rounded-lg px-3 py-2">
              ▣ IPO & PCT Support
            </span>
            <span className="neo-pressed rounded-lg px-3 py-2 text-[#7c3aed]">
              ★ 4.9/5 Rating
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/contact"
              className="rounded-xl bg-[#6366f1] px-6 py-3.5 text-sm font-bold text-white shadow-[0_6px_16px_rgba(99,102,241,0.25)] transition hover:bg-[#4f46e5]"
            >
              Start Your Filing Wizard <span className="ml-1">→</span>
            </Link>
            <Link
              to="/contact"
              className="neo-raised rounded-xl px-5 py-3.5 text-sm font-bold text-[#2e3040] transition hover:text-[#6366f1]"
            >
              ◎ Free Patentability Check
            </Link>
            <Link
              to="/trackstatus"
              className="text-xs font-bold text-[#585a68] underline underline-offset-4 hover:text-[#6366f1]"
            >
              Track Application Status ↗
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5" id="diagnostic">
          <Quicktool />
        </div>
      </div>
    </section>
    <section className="bg-[#e2e4ea] px-4 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-5 lg:gap-8">
        {[
          ["4,500+", "Patents & Copyrights", "Assisted since 2018"],
          ["98.4%", "First-Time Clearance", "At formal examination"],
          ["₹18.4 Cr+", "R&D Tax Concessions", "Secured for startup clients"],
          ["48 Hours", "Express Novelty Search", "IPO & Global WIPO check"],
          ["100%", "NDA Guarantee", "Legally binding protection"],
        ].map(([value, title, note], i) => (
          <div key={title} className="text-center md:text-left">
            <div
              className={`text-2xl font-bold ${i === 2 ? "text-[#7c3aed]" : "text-[#6366f1]"}`}
            >
              {value}
            </div>
            <div className="text-xs font-bold text-[#2e3040]">{title}</div>
            <div className="text-[11px] text-[#585a68]">{note}</div>
          </div>
        ))}
      </div>
    </section>
  </>
);
export default Heroflex;
