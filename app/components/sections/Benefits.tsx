import { Clock, Star, Users, Zap } from "lucide-react";

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900">
          Beneficios que Transforman tu Proceso
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Beneficio 1: Ahorro de Tiempo */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-xs">
            <Clock className="h-10 w-10 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Ahorro de Tiempo Masivo
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Reduce drásticamente las tareas administrativas y la coordinación
              manual de entrevistas.
            </p>
          </div>
          {/* Beneficio 2: Experiencia del Candidato */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-xs">
            <Star className="h-10 w-10 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Mejora la Experiencia del Candidato
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Ofrece un proceso de agendamiento y entrevista fluido, profesional
              y sin fricciones.
            </p>
          </div>
          {/* Beneficio 3: Decisiones Inteligentes */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-xs">
            <Zap className="h-10 w-10 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Decisiones de Contratación Inteligentes
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Accede a datos, grabaciones y feedback del equipo para elegir a
              los mejores talentos.
            </p>
          </div>
          {/* Beneficio 4: Colaboración Optimizada */}
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-xs">
            <Users className="h-10 w-10 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Colaboración Optimizada
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Facilita la comunicación y el feedback entre todos los miembros de
              tu equipo de contratación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
