export default function Integrations() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900">
          Se Integra Perfectamente con tus Herramientas Favoritas
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
          {/* Reemplazar con logos reales de integraciones */}
          <img
            src="https://placehold.co/100x40/F0F4F8/4A5568?text=ATS+Popular"
            alt="Logo ATS Popular"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40/F0F4F8/4A5568?text=CRM+X"
            alt="Logo CRM X"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40/F0F4F8/4A5568?text=Slack"
            alt="Logo Slack"
            className="h-10"
          />
          <img
            src="https://placehold.co/100x40/F0F4F8/4A5568?text=Outlook"
            alt="Logo Outlook"
            className="h-10"
          />
        </div>
      </div>
    </section>
  );
}
