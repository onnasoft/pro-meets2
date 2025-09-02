import { isRouteErrorResponse, Link, Links, Meta, useRouteError } from "react-router";
import { AlertCircle, Home, RefreshCw } from "lucide-react";
import { CallToAction } from "./sections/CallToAction";
import Header from "./Header";
import Footer from "./Footer";

interface ErrorBoundaryProps {
  readonly error?: unknown;
}

// Mensajes de error en diferentes idiomas
const errorTranslations = {
  en: {
    title: "Oops! Something went wrong",
    subtitle: "We apologize for the inconvenience. Please try one of the following options:",
    notFound: "Page not found",
    serverError: "Server error",
    unexpectedError: "Unexpected error",
    homeButton: "Go to Homepage",
    retryButton: "Try Again",
    contactSupport: "Contact Support",
    errorCode: "Error code"
  },
  es: {
    title: "¡Oops! Algo salió mal",
    subtitle: "Nos disculpamos por el inconveniente. Por favor intenta una de las siguientes opciones:",
    notFound: "Página no encontrada",
    serverError: "Error del servidor",
    unexpectedError: "Error inesperado",
    homeButton: "Ir al Inicio",
    retryButton: "Intentar de Nuevo",
    contactSupport: "Contactar Soporte",
    errorCode: "Código de error"
  },
  fr: {
    title: "Oups! Quelque chose s'est mal passé",
    subtitle: "Nous nous excusons pour le désagrément. Veuillez essayer l'une des options suivantes:",
    notFound: "Page non trouvée",
    serverError: "Erreur du serveur",
    unexpectedError: "Erreur inattendue",
    homeButton: "Aller à l'Accueil",
    retryButton: "Réessayer",
    contactSupport: "Contacter le Support",
    errorCode: "Code d'erreur"
  },
  jp: {
    title: "おっと！問題が発生しました",
    subtitle: "ご不便をおかけして申し訳ありません。以下のオプションをお試しください:",
    notFound: "ページが見つかりません",
    serverError: "サーバーエラー",
    unexpectedError: "予期せぬエラー",
    homeButton: "ホームページへ",
    retryButton: "再試行",
    contactSupport: "サポートに連絡",
    errorCode: "エラーコード"
  },
  zh: {
    title: "糟糕！出错了",
    subtitle: "对给您带来的不便表示歉意。请尝试以下选项之一:",
    notFound: "页面未找到",
    serverError: "服务器错误",
    unexpectedError: "意外错误",
    homeButton: "返回首页",
    retryButton: "重试",
    contactSupport: "联系支持",
    errorCode: "错误代码"
  }
};

export function ErrorBoundary(props: ErrorBoundaryProps) {
  const routeError = useRouteError();
  const error = props.error || routeError;

  const language = 'en';

  const t = errorTranslations[language] || errorTranslations.en;

  // Determinar el tipo de error
  let errorType = 'unexpected';
  let statusCode = 500;
  let errorMessage = '';

  if (isRouteErrorResponse(error)) {
    statusCode = error.status;
    errorType = error.status === 404 ? 'notFound' : 'serverError';
    errorMessage = error.data?.message || error.data || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  }

  // Función para recargar la página
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header language={language} />
        <main>
          <div className="pt-20" />
          <div className="min-h-[60vh] flex items-center justify-center px-6">
            <div className="max-w-4xl w-full text-center">
              {/* Icono de error */}
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-10 h-10 text-red-600" />
              </div>

              {/* Título y descripción */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {t.title}
              </h1>

              {/*
                Extract error message based on errorType before rendering
              */}
              {(() => {
                let errorText = '';
                if (errorType === 'notFound') {
                  errorText = t.notFound;
                } else if (errorType === 'serverError') {
                  errorText = t.serverError;
                } else {
                  errorText = t.unexpectedError;
                }
                return (
                  <p className="text-lg text-gray-600 mb-2">
                    {errorText}
                  </p>
                );
              })()}

              <p className="text-gray-500 mb-8">
                {t.subtitle}
              </p>

              {/* Código de error (solo en desarrollo) */}
              {process.env.NODE_ENV === 'development' && errorMessage && (
                <div className="bg-gray-100 p-4 rounded-lg mb-6 text-left">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    {t.errorCode}: {statusCode}
                  </p>
                  <pre className="text-xs text-red-600 overflow-auto">
                    {errorMessage}
                  </pre>
                </div>
              )}

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  prefetch="intent"
                  to="/"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Home className="w-5 h-5" />
                  {t.homeButton}
                </Link>
                <button
                  onClick={handleRetry}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <RefreshCw className="w-5 h-5" />
                  {t.retryButton}
                </button>
              </div>
            </div>
          </div>

          <CallToAction language={language} />
        </main>
        <Footer language={language} />
      </body>
    </html>
  );
}