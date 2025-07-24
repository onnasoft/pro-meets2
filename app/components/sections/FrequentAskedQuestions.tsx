"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FrequentAskedQuestions() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cómo integra ProMeets con nuestros sistemas actuales?",
      answer: "ProMeets ofrece integraciones nativas con los principales ATS (Applicant Tracking Systems), herramientas de calendario (Google Calendar, Outlook), y plataformas de videoconferencia. Nuestro equipo de implementación trabaja contigo para garantizar una migración sin problemas y ofrece API accesibles para desarrolladores.",
    },
    {
      question: "¿Qué diferencia a ProMeets de usar Zoom + Calendly + ATS por separado?",
      answer: "A diferencia de soluciones fragmentadas, ProMeets ofrece un flujo completamente integrado diseñado específicamente para reclutamiento técnico: grabaciones automáticas vinculadas a cada candidato, evaluación colaborativa en contexto, plantillas especializadas para roles técnicos, y analíticas unificadas que te muestran el rendimiento de todo el proceso, no solo partes aisladas.",
    },
    {
      question: "¿Cómo garantizan la seguridad de los datos de los candidatos?",
      answer: "Implementamos cifrado end-to-end, almacenamiento en centros de datos certificados ISO 27001, controles de acceso granulares, y cumplimiento con GDPR y regulaciones locales. Todas las grabaciones y datos personales se gestionan con estrictos protocolos de seguridad y puedes configurar períodos automáticos de retención y eliminación.",
    },
    {
      question: "¿Funciona para reclutamiento masivo (high-volume hiring)?",
      answer: "Absolutamente. Nuestros clientes gestionan procesos con 500+ candidatos mensuales usando funciones como: autocalificación técnica basada en criterios, programación por lotes, entrevistas grabadas asíncronas, y dashboards avanzados para seguimiento de pipelines masivos. La plataforma escala automáticamente según tu volumen.",
    },
    {
      question: "¿Qué soporte y capacitación incluye?",
      answer: "Ofrecemos onboarding personalizado, capacitación en vivo para equipos, academia en línea con certificación, y soporte prioritario por múltiples canales (chat, email, videollamada). Todos los planes incluyen soporte técnico 24/7 y acceso a nuestro centro de recursos con plantillas y mejores prácticas para reclutamiento técnico.",
    },
    {
      question: "¿Puedo probar ProMeets antes de comprometerme?",
      answer: "Sí, ofrecemos una demo personalizada con casos de uso específicos para tu industria, además de un periodo de prueba gratuito de 14 días con acceso a todas las funciones. Durante la prueba, asignamos un Customer Success Manager para guiarte en la configuración inicial.",
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animaciones
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={item}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Preguntas frecuentes
          </motion.h2>
          <motion.p
            variants={item}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Respuestas a las dudas más comunes sobre nuestra plataforma
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.01 }}
              className="mb-4 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <motion.h3 
                  layout
                  className="text-lg font-semibold text-gray-900 text-left"
                >
                  {faq.question}
                </motion.h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="px-6 overflow-hidden"
                  >
                    <div className="pb-6 text-gray-600">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {faq.answer}
                      </motion.p>
                      {index === 2 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100"
                        >
                          <p className="text-sm text-blue-700">
                            <strong>Tip profesional:</strong> Todos nuestros planes incluyen un Assessment de Seguridad gratuito para identificar posibles mejoras en tus procesos actuales.
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-xl p-8 inline-block max-w-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              ¿No encontraste tu pregunta?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de especialistas está listo para ayudarte personalmente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Contactar a ventas
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Ver documentación completa
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}