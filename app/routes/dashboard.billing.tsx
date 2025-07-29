import { CreditCard, FileText, History, DollarSign, CheckCircle } from "lucide-react";

export default function BillingPage() {
  // Datos mock para demostración
  const paymentMethods = [
    {
      id: "1",
      type: "VISA",
      last4: "4242",
      exp: "12/25",
      isDefault: true
    },
    {
      id: "2",
      type: "MASTERCARD",
      last4: "5555",
      exp: "06/24",
      isDefault: false
    }
  ];

  const invoices = [
    {
      id: "INV-2023-001",
      date: "15 Ene 2023",
      amount: "$9.99",
      status: "Paid",
      downloadUrl: "#"
    },
    {
      id: "INV-2022-012",
      date: "15 Dic 2022",
      amount: "$9.99",
      status: "Paid",
      downloadUrl: "#"
    },
    {
      id: "INV-2022-011",
      date: "15 Nov 2022",
      amount: "$9.99",
      status: "Paid",
      downloadUrl: "#"
    }
  ];

  const currentPlan = {
    name: "Plan Pro",
    price: "$9.99/mes",
    features: [
      "Hasta 10 miembros",
      "5GB de almacenamiento",
      "Soporte prioritario"
    ],
    nextBillingDate: "15 Feb 2023"
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Facturación y Pagos</h1>
        <p className="text-gray-600 mt-2">
          Administra tus métodos de pago, facturas y plan de suscripción
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sección de métodos de pago */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-primary-600" />
                Métodos de Pago
              </h2>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700">
                Agregar Tarjeta
              </button>
            </div>

            {/* Formulario para agregar tarjeta (simulado) */}
            <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <h3 className="font-medium mb-3">Registrar nueva tarjeta</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Número de tarjeta
                  </label>
                  <input
                    type="text"
                    placeholder="4242 4242 4242 4242"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Fecha de expiración
                    </label>
                    <input
                      type="text"
                      placeholder="MM/AA"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                <div className="pt-2">
                  <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700">
                    Guardar Tarjeta
                  </button>
                </div>
              </div>
            </div>

            {/* Lista de tarjetas registradas */}
            <div className="space-y-3">
              {paymentMethods.map((card) => (
                <div
                  key={card.id}
                  className={`flex items-center justify-between p-4 border rounded-lg ${
                    card.isDefault ? "border-primary-500 bg-primary-50" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center">
                    <div className="bg-white p-2 rounded-md shadow-xs mr-3">
                      {card.type === "VISA" ? (
                        <span className="text-primary-600 font-bold">VISA</span>
                      ) : (
                        <span className="text-red-600 font-bold">MC</span>
                      )}
                    </div>
                    <div>
                      <p className="font-medium">
                        {card.type} •••• {card.last4}
                      </p>
                      <p className="text-sm text-gray-500">
                        Expira {card.exp}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {card.isDefault && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        Predeterminada
                      </span>
                    )}
                    <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                      {card.isDefault ? "Editar" : "Hacer predeterminada"}
                    </button>
                    {!card.isDefault && (
                      <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                        Eliminar
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Historial de facturas */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold flex items-center mb-4">
              <FileText className="h-5 w-5 mr-2 text-green-600" />
              Historial de Facturas
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Factura
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fecha
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Monto
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {invoices.map((invoice) => (
                    <tr key={invoice.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {invoice.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {invoice.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {invoice.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {invoice.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a
                          href={invoice.downloadUrl}
                          className="text-primary-600 hover:text-primary-900"
                        >
                          Descargar
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Resumen del plan actual */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold flex items-center mb-4">
              <DollarSign className="h-5 w-5 mr-2 text-purple-600" />
              Tu Plan Actual
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{currentPlan.name}</h3>
                <span className="text-lg font-bold">{currentPlan.price}</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="text-sm font-medium text-gray-500 mb-2">
                  Beneficios incluidos:
                </h4>
                <ul className="space-y-2">
                  {currentPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm">
                  <span className="text-gray-500">Próxima facturación:</span>{" "}
                  <span className="font-medium">{currentPlan.nextBillingDate}</span>
                </p>
              </div>
              <div className="pt-4">
                <button className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Cambiar de Plan
                </button>
              </div>
            </div>
          </div>

          {/* Información de facturación */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold flex items-center mb-4">
              <History className="h-5 w-5 mr-2 text-orange-600" />
              Próximos Pagos
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Monto del próximo pago</p>
                <p className="text-lg font-bold">$9.99</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Fecha estimada de pago</p>
                <p className="text-lg font-medium">15 Feb 2023</p>
              </div>
              <div className="pt-2">
                <button className="w-full px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700">
                  Pagar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}