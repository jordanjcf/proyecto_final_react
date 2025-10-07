// src/pages/Productos.jsx
import { useState, useContext } from "react";
import { Button } from "flowbite-react";
import productos from "../shared/productos.json";
import { CartContext } from "../context/CartContext";

export function Productos() {
  const { addToCart } = useContext(CartContext);

  const categorias = ["Todo", "Ropa", "Tecnología", "Hogar", "Gaming", "Accesorios"];
  const [categoriaActiva, setCategoriaActiva] = useState("Todo");

  const productosFiltrados =
    categoriaActiva === "Todo"
      ? productos
      : productos.filter((p) => p.categoria === categoriaActiva);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Nuestros Productos
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categorias.map((cat) => (
            <Button
              key={cat}
              color={categoriaActiva === cat ? "blue" : "light"}
              onClick={() => setCategoriaActiva(cat)}
              className={`rounded-full border ${
                categoriaActiva === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productosFiltrados.map((prod) => (
            <div
              key={prod.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
                <img
                  src={prod.img}
                  alt={prod.nombre}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  onError={(e) =>
                    (e.currentTarget.src = "https://picsum.photos/400/400")
                  }
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 text-center">
                {prod.nombre}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 text-center">
                {prod.descripcion}
              </p>
              <span className="text-pink-600 dark:text-pink-400 font-bold text-lg mb-3">
                S/ {prod.precio.toFixed(2)}
              </span>
              <Button
                color="pink"
                size="sm"
                className="w-full"
                onClick={() => addToCart(prod)}
              >
                Agregar al carrito
              </Button>
            </div>
          ))}
        </div>

        {productosFiltrados.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-300 mt-10">
            No hay productos en esta categoría.
          </p>
        )}
      </div>
    </div>
  );
}
