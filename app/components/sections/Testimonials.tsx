export default function Testimonials() {
  return (
    <section id="testimonios" className="py-16 sm:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900">
          Lo que Dicen Nuestros Clientes
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonio 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg italic text-gray-700 mb-4">
              "ProMeets ha revolucionado nuestro proceso de entrevistas. Hemos
              reducido nuestro tiempo de contratación en un 30% y la calidad de
              nuestras contrataciones ha mejorado."
            </p>
            <div className="font-semibold text-purple-700">
              - Laura M., Directora de RRHH, Tech Solutions Inc.
            </div>
          </div>
          {/* Testimonio 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg italic text-gray-700 mb-4">
              "La función de grabación de video con transcripciones es un cambio
              de juego. Nos permite revisar entrevistas y asegurarnos de que
              estamos tomando las mejores decisiones."
            </p>
            <div className="font-semibold text-purple-700">
              - Carlos R., Gerente de Adquisición de Talento, Global
              Innovations.
            </div>
          </div>
        </div>
        {/* Logos de Empresas (Placeholder) */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">
            Confían en ProMeets:
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {/* Reemplazar con logos reales si los tienes */}
            <img
              src="https://placehold.co/120x40/E0E7FF/6B21A8?text=Empresa+A"
              alt="Logo Empresa A"
              className="h-10"
            />
            <img
              src="https://placehold.co/120x40/E0E7FF/6B21A8?text=Empresa+B"
              alt="Logo Empresa B"
              className="h-10"
            />
            <img
              src="https://placehold.co/120x40/E0E7FF/6B21A8?text=Empresa+C"
              alt="Logo Empresa C"
              className="h-10"
            />
            <img
              src="https://placehold.co/120x40/E0E7FF/6B21A8?text=Empresa+D"
              alt="Logo Empresa D"
              className="h-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
