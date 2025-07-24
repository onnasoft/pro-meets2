
import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { motion } from "framer-motion";

export function ProductShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const features = [
    {
      name: "Programación Inteligente",
      description: (
        <>
          <p className="mb-4">Nuestro sistema de agendamiento revoluciona cómo coordinas entrevistas:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Sincronización automática con Google Calendar, Outlook y otros</li>
            <li>Los candidatos seleccionan horarios según tu disponibilidad</li>
            <li>Recordatorios automáticos por email y SMS</li>
            <li>Configuración de buffers entre entrevistas</li>
            <li>Bloqueo inteligente de horarios no laborales</li>
          </ul>
          <p>Reduce el tiempo de coordinación en un 80% y elimina los correos interminables.</p>
        </>
      ),
      image: "/screenshots/scheduling.png",
      stats: "95% de entrevistas programadas sin conflictos"
    },
    {
      name: "Entrevistas Integradas",
      description: (
        <>
          <p className="mb-4">Todo lo que necesitas para entrevistas efectivas en un solo lugar:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Videollamadas HD con calidad garantizada</li>
            <li>Grabación automática con almacenamiento seguro</li>
            <li>Transcripción en tiempo real con análisis de contenido</li>
            <li>Plantillas de preguntas estandarizadas</li>
            <li>Notas compartidas durante la entrevista</li>
          </ul>
          <p>Elimina la necesidad de Zoom, Teams y otras herramientas externas.</p>
        </>
      ),
      image: "/screenshots/interview.png",
      stats: "40% más eficiencia en sesiones de entrevistas"
    },
    {
      name: "Evaluación Colaborativa",
      description: (
        <>
          <p className="mb-4">Toma decisiones más objetivas con nuestro sistema de evaluación:</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Scorecards estandarizadas por puesto</li>
            <li>Comentarios asíncronos del equipo de contratación</li>
            <li>Comparación lado a lado de candidatos</li>
            <li>Análisis de compatibilidad cultural</li>
            <li>Integración con tus pruebas técnicas</li>
          </ul>
          <p>Reduce los sesgos inconscientes y mejora la calidad de tus contrataciones.</p>
        </>
      ),
      image: "/screenshots/evaluation.png",
      stats: "60% menos tiempo en procesos de decisión"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Panel izquierdo (contenido) */}
          <div className="lg:w-1/2 flex flex-col h-full">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            >
              La plataforma más completa para reclutamiento tecnológico
            </motion.h2>
            
            <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
              <TabList className="flex space-x-1 rounded-xl bg-primary-900/10 p-1 mb-8">
                {features.map((feature) => (
                  <Tab
                    key={feature.name}
                    className={({ selected }) =>
                      `w-full rounded-lg py-3 text-sm font-medium leading-5 transition-colors ${
                        selected ? 'bg-white shadow-lg text-primary-700' : 'text-gray-700 hover:bg-white/70'
                      }`
                    }
                  >
                    {feature.name}
                  </Tab>
                ))}
              </TabList>

              <TabPanels className="flex-1">
                {features.map((feature) => (
                  <TabPanel 
                    key={feature.name} 
                    className="h-full flex flex-col"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg text-gray-700 mb-6 flex-grow"
                    >
                      {feature.description}
                    </motion.div>
                    <div className="space-y-6">
                      <div className="px-4 py-3 bg-primary-100 rounded-lg text-primary-800 font-medium">
                        {feature.stats}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 transition-colors shadow-lg hover:shadow-xl">
                          Ver demostración en vivo
                        </button>
                        <button className="px-8 py-3 border-2 border-primary-600 text-primary-700 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                          Documentación técnica
                        </button>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>
          
          {/* Panel derecho (imagen) */}
          <div className="lg:w-1/2 relative h-full min-h-[500px] lg:min-h-[600px] sticky top-6">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 h-full"
            >
              <img 
                src={features[selectedIndex].image} 
                alt={features[selectedIndex].name}
                className="w-full h-full object-contain object-top bg-white p-4"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-medium text-lg">
                  {features[selectedIndex].name} • ProMeets
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}