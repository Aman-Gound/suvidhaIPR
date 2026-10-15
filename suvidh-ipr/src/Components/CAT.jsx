import { Link } from "react-router-dom";

const ConsultationCTA = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="neo-raised from-white to-indigo-50/50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl shadow-slate-200/60">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-4">
            Zero-Obligation Preliminary Consultation
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Ready to Secure Your Intellectual Property Today?
          </h2>

          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-8">
            Schedule a complimentary 20-minute consultation with a registered
            Patent Agent or get started immediately with our guided 5-minute
            digital filing wizard.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <a
                href="#quick-tool"
                className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02] flex items-center gap-2"
              >
                Launch Filing Wizard
              </a>
            </Link>

            <a
              href="tel:+918007884342"
              className="px-7 py-3.5  hover:bg-slate-50 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 shadow-sm transition-all flex items-center gap-2"
            >
              Book Attorney Call (+91 800-SUVIDHA)
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              Instant Mutual NDA
            </span>

            <span className="flex items-center gap-1.5">
              No Surprise Invoicing
            </span>

            <span className="flex items-center gap-1.5">
              Certified Patent Agents
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
