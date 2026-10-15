const trackingPortals = [
  {
    icon: "P",
    title: "Patent Application Status",
    description: "Check the current status of an Indian patent application.",
    label: "Open patent status",
    url: "https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus",
  },
  {
    icon: "⌕",
    title: "Patent Public Search",
    description: "Search published Indian patent applications and records.",
    label: "Search patent records",
    url: "https://iprsearch.ipindia.gov.in/PublicSearch/",
  },
  {
    icon: "™",
    title: "Trademark Status",
    description: "View application and registered trademark information.",
    label: "Open trademark status",
    url: "https://tmrsearch.ipindia.gov.in/estatus",
  },
  {
    icon: "D",
    title: "Design Application Status",
    description: "Check design applications filed with the Indian Design Office.",
    label: "Open design status",
    url: "https://search.ipindia.gov.in/DesignApplicationStatus/DesignEregister/",
  },
  {
    icon: "©",
    title: "Copyright Application Status",
    description: "Track a copyright application using its diary number.",
    label: "Open copyright status",
    url: "https://copyright.gov.in/frmstatusgenuser.aspx",
  },
  {
    icon: "G",
    title: "Geographical Indications",
    description: "Browse application records and status in the GI Registry.",
    label: "Open GI registry",
    url: "https://search.ipindia.gov.in/GIRPublicSearch/Application",
  },
];

const TrackStatus = () => {
  return (
    <main className="min-h-screen px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#6366f1]">
            Official IP Portals
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#2e3040] sm:text-4xl">
            Track Your Application Status
          </h1>
          <p className="mt-4 text-sm leading-7 text-[#585a68] sm:text-base">
            Use the official government portals below to search and track your
            patent, trademark, design, copyright, or GI records.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trackingPortals.map((portal) => (
            <div
              key={portal.title}
              className="neo-raised group flex min-h-[250px] flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[8px_10px_20px_rgba(0,0,0,.1),-8px_-8px_20px_rgba(255,255,255,.8)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e0e2ff] text-lg font-extrabold text-[#6366f1] transition group-hover:bg-[#6366f1] group-hover:text-white">
                {portal.icon}
              </span>
              <h2 className="mt-6 text-lg font-bold text-[#2e3040]">
                {portal.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#585a68]">
                {portal.description}
              </p>
              <a
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-6 text-sm font-bold text-[#6366f1] transition hover:text-[#4338ca]"
              >
                {portal.label} <span aria-hidden="true">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TrackStatus;
