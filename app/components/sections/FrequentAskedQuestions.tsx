import { HelpCircle } from "lucide-react";

export default function FrequentAskedQuestions() {
  return (
    <section id="faq" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 flex items-center justify-center">
          <HelpCircle className="h-8 w-8 text-purple-600 mr-3" /> Preguntas
          Frecuentes
        </h2>
        <div className="space-y-6 text-left">
          {/* Pregunta 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ¿ProMeets reemplaza mi ATS actual?
            </h3>
            <p className="text-gray-700">
              ProMeets funciona como un ATS ligero y una herramienta de gestión
              de entrevistas. Puede complementar tu ATS existente integrándose
              con él (si es compatible) o servir como una solución independiente
              para equipos más pequeños.
            </p>
          </div>

          {/* Pregunta 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ¿Es seguro grabar las entrevistas en video?
            </h3>
            <p className="text-gray-700">
              Sí, la seguridad y la privacidad son nuestra prioridad. Todas las
              grabaciones se almacenan de forma segura y se cumplen las
              normativas de protección de datos. Siempre recomendamos informar a
              los candidatos sobre la grabación.
            </p>
          </div>

          {/* Pregunta 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ¿Cómo funciona la detección de zona horaria?
            </h3>
            <p className="text-gray-700">
              ProMeets detecta automáticamente la zona horaria del candidato y
              muestra tus horarios disponibles en su horario local, eliminando
              confusiones y errores al agendar.
            </p>
          </div>

          {/* Pregunta 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ¿Puedo personalizar la plataforma con mi marca?
            </h3>
            <p className="text-gray-700">
              Absolutamente. ProMeets te permite personalizar tus páginas de
              agendamiento, invitaciones y salas de entrevista con el logo y los
              colores de tu empresa para mantener una experiencia de marca
              consistente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
