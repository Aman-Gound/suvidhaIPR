import { useState } from "react";
import { Link } from "react-router-dom";
const Quicktool = () => {
  const [type, setType] = useState("patent");
  return (
    <div className="neo-raised flex flex-col gap-5 rounded-2xl p-5 sm:p-7">
      <div className="flex items-center justify-between border-b border-[#d0d2dc]/70 pb-4">
        <div className="flex items-center gap-3">
          <div className="neo-pressed flex h-9 w-9 items-center justify-center rounded-xl text-lg text-[#6366f1]">
            ♢
          </div>
          <div>
            <h3 className="text-sm font-semibold">Quick IPR Diagnostic Tool</h3>
            <p className="text-[11px] text-[#585a68]">
              Instant feasibility & fee computation
            </p>
          </div>
        </div>
        <span className="neo-pressed rounded-md px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#6366f1]">
          Live V2.4
        </span>
      </div>
      <div className="neo-pressed grid grid-cols-2 gap-1 rounded-xl p-1 text-xs font-bold">
        <button
          onClick={() => setType("patent")}
          className={`rounded-lg py-2.5 transition ${type === "patent" ? "neo-raised text-[#6366f1]" : "text-[#585a68]"}`}
        >
          Patent Filing
        </button>
        <button
          onClick={() => setType("copyright")}
          className={`rounded-lg py-2.5 transition ${type === "copyright" ? "neo-raised text-[#6366f1]" : "text-[#585a68]"}`}
        >
          Copyright Registration
        </button>
      </div>
      <div className="space-y-4 text-xs">
        <label className="block font-semibold">
          {type === "patent" ? "Invention Domain" : "Creation Type"}
          <select className="neo-pressed mt-2 w-full rounded-xl border-0 bg-transparent px-3 py-3 font-medium text-[#2e3040] outline-none">
            <option>Software, AI Models & Algorithms</option>
            <option>Electronics, IoT & Embedded Systems</option>
            <option>Mechanical, Automotive & Hardware</option>
            <option>UI/UX Layouts, Media & Graphic Designs</option>
          </select>
        </label>
        <label className="block font-semibold">
          Title / Subject Description
          <input
            className="neo-pressed mt-2 w-full rounded-xl border-0 bg-transparent px-3 py-3 font-medium outline-none placeholder:text-[#8a8c9a]"
            placeholder="e.g. Automated real-time telemetry analyzer..."
          />
        </label>
        <div>
          <p className="mb-2 font-semibold">Applicant Category</p>
          <div className="grid grid-cols-3 gap-2">
            {["Individual", "Startup", "Corporate"].map((item, i) => (
              <label
                key={item}
                className="neo-pressed flex cursor-pointer items-center gap-1.5 rounded-lg p-2 text-[11px] font-medium"
              >
                <input
                  type="radio"
                  name="applicant"
                  defaultChecked={i === 0}
                  className="accent-[#6366f1]"
                />
                {item}
              </label>
            ))}
          </div>
        </div>
        <label className="flex items-start gap-2 text-[11px] leading-tight text-[#585a68]">
          <input
            type="checkbox"
            defaultChecked
            className="mt-0.5 accent-[#6366f1]"
          />{" "}
          Require automatic digital bilateral Non-Disclosure Agreement (NDA)
          prior to preliminary dossier generation.
        </label>
      </div>
      <div className="neo-pressed flex items-center justify-between rounded-xl p-3 text-xs">
        <div>
          <p className="text-[10px] font-bold uppercase text-[#585a68]">
            Estimated Statutory Rebate
          </p>
          <strong className="text-sm text-[#6366f1]">
            80% Fee Concession Applicable
          </strong>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold uppercase text-[#585a68]">
            Est. Clearance
          </p>
          <strong>2–3 Business Days</strong>
        </div>
      </div>
      <Link
        to="/contact"
        className="rounded-xl bg-[#6366f1] py-3.5 text-xs font-bold text-white shadow-[0_5px_12px_rgba(99,102,241,0.2)] transition hover:bg-[#4f46e5] text-center"
      >
        Check Eligibility & Estimate Cost <span className="ml-1">→</span>
      </Link>
      <p className="text-center text-[10px] text-[#585a68]">
        🔒 256-Bit Encrypted Portal • Zero Public Prior Disclosure
      </p>
    </div>
  );
};
export default Quicktool;
