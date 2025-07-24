import { Briefcase, CalendarCheck, DollarSign, Link, Mic, Users, Video } from "lucide-react";

export default function Pricing() {
  return (
    <section id="precios" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 flex items-center justify-center">
          <DollarSign className="h-8 w-8 text-purple-600 mr-3" /> Planes y
          Precios
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Elige el plan que mejor se adapte a las necesidades de tu equipo de
          reclutamiento.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Plan Básico */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md border-2 border-transparent hover:border-purple-600 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Básico</h3>
            <p className="text-4xl font-extrabold text-purple-700 mb-4">
              $29<span className="text-lg font-normal text-gray-600">/mes</span>
            </p>
            <p className="text-gray-700 mb-6">
              Ideal para equipos pequeños o reclutadores individuales.
            </p>
            <ul className="text-gray-600 text-left space-y-2 mb-8">
              <li className="flex items-center">
                <CalendarCheck className="h-5 w-5 mr-2 text-green-500" />{" "}
                Agendamiento ilimitado
              </li>
              <li className="flex items-center">
                <Video className="h-5 w-5 mr-2 text-green-500" /> Video
                entrevistas (hasta 10/mes)
              </li>
              <li className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-green-500" /> Gestión de 50
                candidatos activos
              </li>
              <li className="flex items-center">
                <Mic className="h-5 w-5 mr-2 text-green-500" /> Grabación de
                entrevistas (limitado)
              </li>
            </ul>
            <a
              href="#"
              className="block w-full px-6 py-3 bg-purple-700 text-white font-semibold rounded-full hover:bg-purple-800 transition-colors duration-200"
            >
              Elegir Plan Básico
            </a>
          </div>

          {/* Plan Profesional */}
          <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-purple-600 transform scale-105">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Profesional
            </h3>
            <p className="text-4xl font-extrabold text-purple-700 mb-4">
              $79<span className="text-lg font-normal text-gray-600">/mes</span>
            </p>
            <p className="text-gray-700 mb-6">
              Perfecto para equipos en crecimiento con mayores necesidades.
            </p>
            <ul className="text-gray-600 text-left space-y-2 mb-8">
              <li className="flex items-center">
                <CalendarCheck className="h-5 w-5 mr-2 text-green-500" />{" "}
                Agendamiento ilimitado
              </li>
              <li className="flex items-center">
                <Video className="h-5 w-5 mr-2 text-green-500" /> Video
                entrevistas ilimitadas
              </li>
              <li className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-green-500" /> Gestión de 500
                candidatos activos
              </li>
              <li className="flex items-center">
                <Mic className="h-5 w-5 mr-2 text-green-500" /> Grabación y
                análisis avanzados
              </li>
              <li className="flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-green-500" />{" "}
                Colaboración en equipo
              </li>
              <li className="flex items-center">
                <Link className="h-5 w-5 mr-2 text-green-500" /> Personalización
                de marca
              </li>
            </ul>
            <a
              href="#"
              className="block w-full px-6 py-3 bg-purple-700 text-white font-semibold rounded-full hover:bg-purple-800 transition-colors duration-200"
            >
              Elegir Plan Profesional
            </a>
          </div>

          {/* Plan Empresa */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md border-2 border-transparent hover:border-purple-600 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Empresa</h3>
            <p className="text-4xl font-extrabold text-purple-700 mb-4">
              Personalizado
            </p>
            <p className="text-gray-700 mb-6">
              Soluciones a medida para grandes organizaciones.
            </p>
            <ul className="text-gray-600 text-left space-y-2 mb-8">
              <li className="flex items-center">
                <CalendarCheck className="h-5 w-5 mr-2 text-green-500" /> Todas
                las funciones Profesional
              </li>
              <li className="flex items-center">
                <Video className="h-5 w-5 mr-2 text-green-500" /> Soporte
                prioritario 24/7
              </li>
              <li className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-green-500" /> Integraciones
                avanzadas
              </li>
              <li className="flex items-center">
                <Mic className="h-5 w-5 mr-2 text-green-500" /> Seguridad y
                cumplimiento empresarial
              </li>
              <li className="flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-green-500" /> Gestión de
                cuentas dedicada
              </li>
            </ul>
            <a
              href="#"
              className="block w-full px-6 py-3 bg-purple-700 text-white font-semibold rounded-full hover:bg-purple-800 transition-colors duration-200"
            >
              Contactar Ventas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
