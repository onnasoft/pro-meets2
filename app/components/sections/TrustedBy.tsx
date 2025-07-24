
export function TrustedBy() {
  const companies = [
    { name: "TechCorp", logo: "/logos/techcorp.svg" },
    { name: "InnovaSoft", logo: "/logos/innovasoft.svg" },
    { name: "DigitalMind", logo: "/logos/digitalmind.svg" },
    { name: "FutureSystems", logo: "/logos/futuresystems.svg" },
    { name: "CloudNova", logo: "/logos/cloudnova.svg" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider">
          Confiado por equipos de reclutamiento en todo el mundo
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 hover:opacity-100 transition-opacity">
          {companies.map((company) => (
            <img
              key={company.name}
              src={company.logo}
              alt={company.name}
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}