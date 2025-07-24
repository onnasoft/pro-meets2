import {
  BadgeCheck,
  Zap,
  RefreshCw,
  Users,
  FileText,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";

export function WorkflowIntegration() {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Publicación de Vacantes",
      description:
        "Crea y publica vacantes en múltiples portales directamente desde la plataforma con plantillas optimizadas.",
      automation: "Auto-distribución a portales laborales",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestión de Candidatos",
      description:
        "Recibe, organiza y filtra candidatos automáticamente con IA y criterios personalizables.",
      automation: "Clasificación automática por relevancia",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Programación Inteligente",
      description:
        "Los candidatos seleccionan horarios basados en tu disponibilidad real sin intercambios de correos.",
      automation: "Sincronización con calendarios",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Entrevistas Integradas",
      description:
        "Realiza videollamadas con grabación automática, transcripción y evaluación en tiempo real.",
      automation: "Kits de entrevista por puesto",
    },
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      title: "Decisión Colaborativa",
      description:
        "Sistema unificado de feedback con scorecards y comparación lado a lado de candidatos.",
      automation: "Análisis de compatibilidad",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Onboarding Automatizado",
      description:
        "Envía ofertas, contrata e integra nuevos empleados con flujos digitales autogestionados.",
      automation: "Firma electrónica integrada",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Flujo Completo de Reclutamiento Automatizado
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Desde la publicación hasta la contratación, sin cambiar de
            plataforma
          </motion.p>
        </div>

        <div className="relative">
          {/* Línea de tiempo decorativa */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary-500 to-primary-300 transform -translate-x-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${
                  index % 2 === 0
                    ? "lg:pr-8 lg:text-right"
                    : "lg:pl-8 lg:text-left"
                } ${index === 0 ? "lg:mt-0" : ""}`}
              >
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all h-full">
                  <div
                    className={`flex ${
                      index % 2 === 0 ? "lg:justify-end" : ""
                    } mb-4`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="flex items-center text-sm text-primary-600 font-medium">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    <span>{step.automation}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Cansado de usar 5 herramientas diferentes?
            </h3>
            <p className="text-xl mb-6">
              ProMeets unifica todo el proceso en una sola plataforma diseñada
              específicamente para reclutamiento técnico
            </p>
            <button className="px-8 py-3 bg-white text-primary-700 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
              Ver demostración completa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
