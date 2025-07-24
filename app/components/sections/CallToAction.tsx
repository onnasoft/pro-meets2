export default function CallToAction() {
  return (
    <section
      id="cta-final"
      className="py-20 sm:py-24 bg-gradient-to-r from-purple-700 to-indigo-700 text-white text-center"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Listo para Transformar tu Reclutamiento?
        </h2>
        <p className="text-lg sm:text-xl mb-10 opacity-90">
          Descubre cómo ProMeets puede optimizar tu proceso de contratación y
          ayudarte a encontrar al talento adecuado, más rápido.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="px-8 py-4 bg-white text-purple-700 font-bold rounded-full text-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
          >
            Solicitar Demo Gratuita
          </a>
          <a
            href="#precios"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-full text-lg shadow-lg hover:bg-white hover:text-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Ver Planes y Precios
          </a>
        </div>
      </div>
    </section>
  );
}
