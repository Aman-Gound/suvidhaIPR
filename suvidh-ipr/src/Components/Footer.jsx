const Footer = () => {
  return (
    <footer className=" border-t border-slate-200 pt-16 pb-12 text-slate-600 text-xs px-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center p-1 border border-slate-800">
                <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                  <path
                    d="M32 14L46 20V33C46 42.5 39.8 49.8 32 52C24.2 49.8 18 42.5 18 33V20L32 14Z"
                    stroke="#6366F1"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M26 25C26 22.8 28.2 21 31.5 21H33C36.3 21 38.5 22.8 38.5 25C38.5 27.5 36.5 29 32 30.5C27.5 32 25.5 33.5 25.5 36C25.5 38.2 27.7 40 31 40H32.5C35.8 40 38 38.2 38 36"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  <circle cx="39" cy="20" r="3" fill="#F59E0B" />
                  <circle cx="25" cy="41" r="2.5" fill="#38BDF8" />
                </svg>
              </div>

              <div>
                <div className="text-base font-extrabold tracking-tight text-slate-900">
                  SUVIDHA <span className="text-indigo-600">IPR</span>
                </div>

                <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                  Patent & Copyright Services
                </div>
              </div>
            </div>

            <p className="text-slate-500 leading-relaxed text-xs max-w-sm">
              Institutional legal assistance & tech-driven prosecution platform
              managed by Govt. Registered Patent Agents and intellectual
              property practitioners.
            </p>

            <div className="space-y-1 text-[11px] text-slate-500">
              <div>
                ISO 27001 Certified System • Govt. Registered IN/PA-3412
              </div>

              <div className="text-slate-400">
                Offices: Barakhamba Rd, New Delhi • Indiranagar, Bengaluru,
                India
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.facebook.com/suvidhaipr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suvidha IPR on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-[#e8eaf0] text-slate-500 transition hover:-translate-y-0.5 hover:bg-[#1877f2] hover:text-white"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V10H7.6v3h2.7v8h3.2Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/suvidhaipr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suvidha IPR on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-[#e8eaf0] text-slate-500 transition hover:-translate-y-0.5 hover:bg-[#e1306c] hover:text-white"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.7" r=".8" className="fill-current stroke-none" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/suvidha-ipr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suvidha IPR on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-[#e8eaf0] text-slate-500 transition hover:-translate-y-0.5 hover:bg-[#0a66c2] hover:text-white"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M6.2 8.1H3.3V20h2.9V8.1ZM4.8 3.9a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20.7 13.2c0-3.6-1.9-5.3-4.5-5.3-2.1 0-3 1.2-3.5 2v-1.8H9.8V20h2.9v-6.1c0-1.6.3-3.1 2.2-3.1 1.8 0 1.8 1.7 1.8 3.2V20h2.9l.1-6.8Z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Patent Services
            </h5>

            <ul className="space-y-2.5">
              {[
                "Patent Search & Analytics",
                "Prior-Art Invalidation Search",
                "Provisional Application Filing",
                "Complete Specification Drafting",
                "Patent Prosecution & FER Response",
                "PCT / International Filings",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-indigo-600 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Copyright Services
            </h5>

            <ul className="space-y-2.5">
              {[
                "Software & Source Code Copyright",
                "Literary & Research Work",
                "Artistic & Digital Media",
                "EdTech & Educational Content",
                "Copyright Objection Hearing",
                "Assignment & Licensing Deeds",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-indigo-600 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Tools & Portals
            </h5>

            <ul className="space-y-2.5 mb-5">
              {[
                "Patentability Assessment Tool",
                "Govt Official Fee Calculator",
                "Client Portal Login",
                "Live Application Status Tracker",
                "Inventor Legal Toolkit",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-indigo-600 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              Security & Contact
            </h5>

            <div className="text-[11px] text-slate-500 space-y-1">
              <div>
                Email:{" "}
                <a
                  href="mailto:info@suvidhaipr.com"
                  className="text-indigo-600 hover:underline"
                >
                  info@suvidhaipr.com
                </a>
              </div>

              <div>Phone: +91 11 4900 8800</div>
              <div>Toll-Free: +91 800-SUVIDHA</div>

              <div className="pt-1.5">
                <a
                  href="#"
                  className="text-indigo-600 hover:underline font-semibold"
                >
                  Download Standard NDA →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <div>
            © 2025 Suvidha IPR Services Pvt. Ltd. All rights reserved.
            Disclaimer: Suvidha IPR is an IP facilitation and consultancy
            service assisting with patent and copyright filings before official
            IP offices.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-indigo-600 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-indigo-600 transition">
              Terms of Service
            </a>

            <a href="#" className="hover:text-indigo-600 transition">
              Confidentiality & NDA Guarantee
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
