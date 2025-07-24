import { Link } from "@remix-run/react";
import { Video } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <Video className="h-8 w-8 text-purple-700" />
            <span className="text-2xl font-bold text-gray-900">ProMeets</span>
          </Link>
        </div>

        {/* Enlaces de Navegación (Desktop) */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="#caracteristicas"
            className="text-gray-600 hover:text-purple-700 transition-colors duration-200"
          >
            Características
          </Link>
          <Link
            to="#beneficios"
            className="text-gray-600 hover:text-purple-700 transition-colors duration-200"
          >
            Beneficios
          </Link>
          <Link
            to="#testimonios"
            className="text-gray-600 hover:text-purple-700 transition-colors duration-200"
          >
            Testimonios
          </Link>
          <Link
            to="#precios"
            className="text-gray-600 hover:text-purple-700 transition-colors duration-200"
          >
            Precios
          </Link>
        </div>

        {/* Botones de Acción (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="#"
            className="text-gray-600 hover:text-purple-700 transition-colors duration-200"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="#"
            className="px-6 py-2 bg-purple-700 text-white font-semibold rounded-full hover:bg-purple-800 transition-colors duration-200 shadow-md"
          >
            Solicitar Demo
          </Link>
          <Link
            to="#"
            className="px-6 py-2 bg-purple-700 text-white font-semibold rounded-full hover:bg-purple-800 transition-colors duration-200 shadow-md"
          >
            Solicitar Demo
          </Link>
        </div>

        {/* Menú Hamburguesa (Mobile) - Placeholder, no funcional en este layout */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
