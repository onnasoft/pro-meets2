import { Video } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Información de ProMeets */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Video className="h-7 w-7 text-purple-400" />
            <span className="text-xl font-bold text-white">ProMeets</span>
          </div>
          <p className="text-sm leading-relaxed">
            La solución integral para el reclutamiento moderno. Agenda,
            entrevista, gestiona y graba con facilidad.
          </p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Enlaces Rápidos
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#caracteristicas"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                Características
              </a>
            </li>
            <li>
              <a
                href="#beneficios"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                Beneficios
              </a>
            </li>
            <li>
              <a
                href="#testimonios"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                Testimonios
              </a>
            </li>
            <li>
              <a
                href="#precios"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                Precios
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Legal y Contacto */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Legal y Contacto
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                Política de Privacidad
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                Términos de Servicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors duration-200"
              >
                Contacto
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-6">
            {/* Iconos de Redes Sociales (Placeholders) */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.297 22.464c-2.028 0-3.93-1.002-5.048-2.704.776.092 1.57.138 2.37.138 4.636 0 8.44-3.79 8.44-8.44 0-.12-.003-.24-.007-.36.91-.658 1.696-1.474 2.32-2.396-.84.372-1.742.62-2.678.73.968-.58 1.708-1.496 2.058-2.59.866.115 1.706.176 2.52-.004-.91.54-1.928.934-3.008 1.144-.86-.91-2.08-1.478-3.44-1.478-2.606 0-4.71 2.104-4.71 4.71 0 .37.04.73.116 1.076-3.91-.196-7.37-2.07-9.69-4.91-.402.69-.634 1.49-.634 2.36 0 1.63.83 3.06 2.094 3.91-.77-.024-1.49-.234-2.12-.58v.06c0 2.28 1.624 4.18 3.774 4.6-.39.106-.8.162-1.22.162-.3 0-.59-.03-.87-.08.6 1.86 2.33 3.22 4.38 3.26-1.61.99-3.64 1.58-5.78 1.58-.37 0-.74-.02-1.1-.06 2.08 1.34 4.55 2.12 7.18 2.12" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {currentYear} ProMeets. Todos los derechos reservados.
      </div>
    </footer>
  );
}
