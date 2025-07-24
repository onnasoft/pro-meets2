import { Building, UserCheck, Users, Clock, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

export function WhoBenefits() {
  const beneficiaries = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Empresas de Tecnología",
      description:
        "Contrata desarrolladores y perfiles técnicos 3x más rápido con nuestro flujo especializado.",
      stats: "Reducción de 65% en time-to-hire",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Equipos de TA",
      description:
        "Automatiza el 80% de tareas repetitivas y enfócate en la estrategia y experiencia del candidato.",
      stats: "40+ horas ahorradas mensualmente",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Equipos de Contratación",
      description:
        "Toma decisiones colaborativas con evaluación estandarizada y comparación lado a lado.",
      stats: "60% menos reuniones de seguimiento",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Startups en Crecimiento",
      description:
        "Escala tu proceso de contratación sin aumentar tu equipo de People Ops.",
      stats: "2x más contrataciones con mismo equipo",
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Líderes de RH",
      description:
        "Acceso a dashboards en tiempo real con métricas clave de todo el funnel de contratación.",
      stats: "30% mejora en calidad de contratación",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            ¿Quién se beneficia con ProMeets?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Diseñado específicamente para las necesidades de equipos técnicos y
            de alto crecimiento
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficiaries.map((beneficiary, index) => (
            <motion.div
              key={beneficiary.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-6 text-primary-600">
                {beneficiary.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {beneficiary.title}
              </h3>
              <p className="text-gray-600 mb-4">{beneficiary.description}</p>
              <div className="px-4 py-2 bg-gray-100 rounded-lg inline-block">
                <p className="text-sm font-medium text-gray-700">
                  {beneficiary.stats}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Tarjeta especial para CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 to-primary-700 p-8 rounded-xl shadow-lg text-white"
          >
            <h3 className="text-xl font-semibold mb-3">
              ¿No ves tu caso de uso?
            </h3>
            <p className="mb-6 opacity-90">
              Hemos ayudado a más de 20 industrias diferentes a optimizar su
              reclutamiento.
            </p>
            <button className="w-full px-6 py-3 bg-white text-primary-700 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Hablar con un especialista
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
