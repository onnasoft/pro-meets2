import { Check, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CompetitorComparison() {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const competitors = [
    {
      name: "ProMeets",
      logo: "/logo.png",
      tagline: "Solución todo-en-uno",
      pros: [
        "Especializado en reclutamiento",
        "Flujo completamente integrado",
        "Diseñado para equipos de TA",
      ],
    },
    {
      name: "Zoom + Calendly",
      logo: "/logo-zoom-calendly.png",
      tagline: "Soluciones separadas",
      pros: ["Herramientas conocidas", "Funcionalidades básicas"],
    },
    {
      name: "ATS Tradicional",
      logo: "/logo-ats.png",
      tagline: "Sistema legacy",
      pros: ["Base de candidatos", "Seguimiento de procesos"],
    },
  ];

  const features = [
    {
      name: "Videollamadas HD",
      description:
        "Calidad profesional integrada directamente en la plataforma",
      details:
        "Sin necesidad de configuraciones complejas o plugins adicionales",
    },
    {
      name: "Agendamiento inteligente",
      description: "Sincronización bidireccional con calendarios",
      details:
        "Los candidatos ven solo tus horarios disponibles reales, con buffers automáticos",
    },
    {
      name: "Kit de entrevistas",
      description: "Plantillas, evaluación colaborativa y grabaciones",
      details:
        "Todo el contexto de la entrevista en un solo lugar con timestamping",
    },
    {
      name: "Onboarding candidatos",
      description: "Portal autogestionado por candidatos",
      details: "Subida de documentos, firma digital y checklist automatizado",
    },
    {
      name: "Analíticas avanzadas",
      description: "Dashboards de proceso de contratación",
      details:
        "Tiempos por etapa, calidad de candidatos y desempeño de entrevistadores",
    },
  ];

  const hasFeature = (competitorIndex: number, featureIndex: number) => {
    // ProMeets tiene todas las features
    if (competitorIndex === 0) return 2; // 2 = check completo

    // Zoom + Calendly
    if (competitorIndex === 1) {
      return [0, 1].includes(featureIndex) ? 1 : 0; // 1 = check parcial, 0 = cruz
    }

    // ATS Tradicional
    return featureIndex === 4 ? 1 : 0; // Solo tiene analíticas básicas
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            No más soluciones parciales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compara cómo ProMeets ofrece todo lo que necesitas en una sola
            plataforma
          </p>
        </div>

        {/* Tabla comparativa */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left pb-6 font-semibold text-gray-900 w-1/4">
                  Funcionalidad
                </th>
                {competitors.map((competitor) => (
                  <th
                    key={competitor.name}
                    className="text-center pb-6 font-semibold text-gray-900"
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={competitor.logo}
                        alt={competitor.name}
                        className="h-12 mb-2 object-contain"
                      />
                      <span className="block font-bold">{competitor.name}</span>
                      <span className="block text-sm text-gray-500">
                        {competitor.tagline}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {features.map((feature, featureIndex) => (
                <motion.tr
                  key={feature.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="group hover:bg-white cursor-pointer"
                  onClick={() =>
                    setExpandedFeature(
                      expandedFeature === featureIndex ? null : featureIndex
                    )
                  }
                >
                  <td className="py-4 pr-4 font-medium text-gray-900">
                    <div className="flex items-center">
                      <span>{feature.name}</span>
                      <ChevronDown
                        className={`ml-2 w-4 h-4 transition-transform ${
                          expandedFeature === featureIndex ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <AnimatePresence>
                      {expandedFeature === featureIndex && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-gray-500 mt-2">
                            {feature.description}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {feature.details}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </td>

                  {competitors.map((competitor, competitorIndex) => {
                    const featureStatus = hasFeature(
                      competitorIndex,
                      featureIndex
                    );
                    return (
                      <td
                        key={`${featureIndex}-${competitorIndex}`}
                        className="py-4 px-4 text-center"
                      >
                        {featureStatus === 2 ? (
                          <div className="flex flex-col items-center">
                            <Check className="w-6 h-6 text-green-500 p-1 bg-green-100 rounded-full" />
                            <span className="text-xs text-green-600 mt-1">
                              Completo
                            </span>
                          </div>
                        ) : featureStatus === 1 ? (
                          <div className="flex flex-col items-center">
                            <Check className="w-6 h-6 text-yellow-500 p-1 bg-yellow-100 rounded-full" />
                            <span className="text-xs text-yellow-600 mt-1">
                              Parcial
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center">
                            <X className="w-6 h-6 text-red-500 p-1 bg-red-100 rounded-full" />
                            <span className="text-xs text-red-600 mt-1">
                              No disponible
                            </span>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notas clave */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {competitors.map((competitor, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <img
                  src={competitor.logo}
                  alt={competitor.name}
                  className="h-6 mr-3 object-contain"
                />
                {competitor.name}
              </h3>
              <ul className="space-y-2">
                {competitor.pros.map((pro, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{pro}</span>
                  </li>
                ))}
                {index === 0 && (
                  <li className="flex items-start pt-2 mt-2 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      + {features.length} funcionalidades integradas
                    </span>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
