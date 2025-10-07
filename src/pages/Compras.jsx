// src/pages/Cart.jsx
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

export function Compras() {
  const itemCount = 0;
  const total = 0.0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <main className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <div className="mb-6 border-b pb-4">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Cesta</h1>
          </div>

          <div className="flex flex-col items-center justify-center py-12">

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3">
              Tu carrito está vacío
            </h2>

            <p className="text-center text-sm text-gray-500 dark:text-gray-300 mb-6 max-w-md">
              Identifícate para ver artículos guardados o explora nuestra tienda para
              añadir productos a la cesta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login" className="w-56">
                <Button color="red" outline={false} className="w-full">
                  Identifícate
                </Button>
              </Link>

              <Link to="/" className="w-56">
                <Button color="gray" outline className="w-full">
                  Explora artículos
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Recomendados para ti</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-700 rounded-md p-3 flex flex-col items-center">
                  <div className="w-full h-28 bg-gray-200 dark:bg-gray-600 rounded-lg mb-3" />
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-200">Producto {i + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <aside className="lg:col-span-1">
          <div className="sticky top-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Resumen</h4>

              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-4">
                <span>Estimación total</span>
                <span className="font-semibold text-gray-900 dark:text-white">S/ {total.toFixed(2)}</span>
              </div>

              <Button color="pink" disabled={itemCount === 0} className="w-full mb-4">
                Continuar ({itemCount})
              </Button>

              <div className="border-t pt-4 text-sm text-gray-600 dark:text-gray-300">
                <h5 className="font-medium mb-2">Protección del comprador</h5>
                <p className="text-xs">
                  Recibe un reembolso de tu dinero si el artículo no llega o es diferente al de la descripción.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
