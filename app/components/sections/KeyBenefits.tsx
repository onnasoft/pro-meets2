
import { CalendarCheck, Video, Users, Zap, ShieldCheck, BarChart2, Clock, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function KeyBenefits() {
  const benefits = [
    {
      icon: <CalendarCheck className="w-10 h-10 text-primary-600" />,
      title: "Agendamiento Inteligente",
      description: "Sincronización automática con calendarios y disponibilidad de entrevistadores.",
      stats: "Ahorra 5+ horas semanales"
    },
    {
      icon: <Video className="w-10 h-10 text-primary-600" />,
      title: "Videollamadas Integradas",
      description: "Plataforma todo-en-uno con salas virtuales, grabación automática y transcripción.",
      stats: "100% de entrevistas sin problemas técnicos"
    },
    {
      icon: <Users className="w-10 h-10 text-primary-600" />,
      title: "Colaboración en Equipo",
      description: "Sistema de evaluación colaborativa con comentarios en tiempo real y puntuación estandarizada.",
      stats: "Feedback 3x más rápido"
    },
    {
      icon: <Zap className="w-10 h-10 text-primary-600" />,
      title: "Proceso 3x Más Rápido",
      description: "Automatización de flujos de trabajo y notificaciones inteligentes.",
      stats: "Reduce el time-to-hire en un 65%"
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary-600" />,
      title: "Cumplimiento Normativo",
      description: "Registro completo de todas las interacciones para auditorías y cumplimiento de políticas.",
      stats: "Protección de datos garantizada"
    },
    {
      icon: <BarChart2 className="w-10 h-10 text-primary-600" />,
      title: "Analíticas Avanzadas",
      description: "Dashboard con métricas clave del proceso de reclutamiento y toma de decisiones.",
      stats: "20+ métricas clave"
    },
    {
      icon: <Clock className="w-10 h-10 text-primary-600" />,
      title: "Disponibilidad 24/7",
      description: "Plataforma accesible desde cualquier dispositivo, en cualquier momento.",
      stats: "99.9% uptime garantizado"
    },
    {
      icon: <Mail className="w-10 h-10 text-primary-600" />,
      title: "Comunicación Centralizada",
      description: "Mensajería integrada y notificaciones automáticas para candidatos y equipos.",
      stats: "Mejora la experiencia del candidato"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Revoluciona tu proceso de reclutamiento
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto"
          >
            Descubre cómo ProMeets transforma cada etapa del reclutamiento con tecnología inteligente
          </motion.p>
        </div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-sm font-medium text-primary-600">{benefit.stats}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sección adicional de estadísticas */}
        <div className="mt-24 bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">300+</div>
              <p className="text-gray-600">Empresas confían en nosotros</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">50K+</div>
              <p className="text-gray-600">Entrevistas mensuales</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">65%</div>
              <p className="text-gray-600">Reducción en tiempo de contratación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}