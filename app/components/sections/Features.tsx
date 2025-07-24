import { Briefcase, CalendarCheck, Link, Mic, Users, Video } from "lucide-react";

export default function Features() {
  return (
    <section id="caracteristicas" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900">
          Características que Impulsan tu Reclutamiento
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Característica 1: Agendamiento Inteligente */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <CalendarCheck className="h-12 w-12 text-purple-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Agendamiento Inteligente
            </h3>
            <p className="text-gray-600">
              Permite a los candidatos reservar fácilmente horarios disponibles
              en tu calendario, con sincronización automática, recordatorios
              personalizables y detección de zona horaria.
            </p>
          </div>

          {/* Característica 2: Video Entrevistas Integradas */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Video className="h-12 w-12 text-purple-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Video Entrevistas Integradas
            </h3>
            <p className="text-gray-600">
              Realiza videollamadas seguras y profesionales directamente desde
              ProMeets, sin necesidad de descargas. Incluye funciones como
              compartir pantalla y chat.
            </p>
          </div>

          {/* Característica 3: Gestión de Candidatos (ATS Ligero) */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Users className="h-12 w-12 text-purple-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Gestión de Candidatos
            </h3>
            <p className="text-gray-600">
              Centraliza perfiles de candidatos, historial de interacciones,
              notas de entrevistas, calificaciones del equipo y el estado de
              cada aspirante en el embudo.
            </p>
          </div>

          {/* Característica 4: Grabación y Análisis de Entrevistas */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Mic className="h-12 w-12 text-purple-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Grabación y Análisis
            </h3>
            <p className="text-gray-600">
              Graba automáticamente las entrevistas en video y audio. Accede a
              transcripciones, momentos clave y herramientas de colaboración
              para revisión y análisis.
            </p>
          </div>

          {/* Característica 5: Colaboración en Equipo */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Briefcase className="h-12 w-12 text-purple-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Colaboración en Equipo
            </h3>
            <p className="text-gray-600">
              Facilita la colaboración entre el equipo de contratación con
              comentarios compartidos, calificaciones unificadas y acceso
              centralizado a toda la información del candidato.
            </p>
          </div>

          {/* Característica 6: Personalización y Branding */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <Link className="h-12 w-12 text-purple-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Personalización y Branding
            </h3>
            <p className="text-gray-600">
              Personaliza tu página de agendamiento y las salas de entrevista
              con el logo y los colores de tu empresa para una experiencia de
              marca consistente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
