import { Link } from "@remix-run/react";

export default function VerificationSent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6 text-center">
        {/* Icono de verificación */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary-100">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-primary-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
            />
          </svg>
        </div>
        
        {/* Título y mensaje */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-primary-900">¡Correo reenviado!</h1>
          <p className="text-gray-600">Hemos enviado nuevamente el enlace de verificación a tu correo electrónico.</p>
        </div>
        
        {/* Ilustración decorativa */}
        <div className="py-4">
          <svg 
            className="w-32 h-32 mx-auto text-primary-400" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        
        {/* Nota adicional */}
        <p className="text-sm text-gray-500">
          Si no recibes el correo, revisa tu carpeta de spam o 
          <Link to="/resend-verification-email" className="text-primary-600 hover:text-primary-700 font-medium ml-1">
            solicita otro enlace
          </Link>.
        </p>
      </div>
    </div>
  );
}