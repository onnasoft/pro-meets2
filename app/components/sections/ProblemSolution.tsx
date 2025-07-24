import { Star, Zap } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          ¿Cansado del Caos en el Reclutamiento?
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Las herramientas dispersas, la coordinación manual y la falta de
          seguimiento pueden ralentizar tu proceso de contratación. ProMeets
          está aquí para cambiar eso.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center text-left">
          {/* Columna del Problema */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-red-600 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-red-500" /> El Problema
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">&times;</span>
                Coordinación manual de entrevistas que consume tiempo.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">&times;</span>
                Múltiples herramientas para agendar, videollamadas y
                seguimiento.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">&times;</span>
                Pérdida de notas y feedback del equipo.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">&times;</span>
                Dificultad para estandarizar el proceso de entrevista.
              </li>
            </ul>
          </div>

          {/* Columna de la Solución */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-green-600 flex items-center">
              <Star className="w-6 h-6 mr-2 text-green-500" /> La Solución
              ProMeets
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">&checkmark;</span>
                Agendamiento automático e inteligente.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">&checkmark;</span>
                Video entrevistas integradas y grabables.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">&checkmark;</span>
                Gestión centralizada de candidatos y feedback.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">&checkmark;</span>
                Análisis de entrevistas para decisiones basadas en datos.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
