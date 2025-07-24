"use client";

import { motion } from "framer-motion";
import { Rocket, ChevronRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-700 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            ¿Listo para transformar tu proceso de reclutamiento?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Únete a cientos de empresas que ya están contratando mejor y más rápido con ProMeets
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/signup"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <Rocket className="w-5 h-5" />
              Comenzar prueba gratuita
            </a>
            
            <a
              href="/demo"
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all hover:scale-[1.02]"
            >
              Ver demo en vivo
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/80"
          >
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Sin tarjeta de crédito requerida
            </div>
            
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              14 días gratis
            </div>
            
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Cancelación en cualquier momento
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}