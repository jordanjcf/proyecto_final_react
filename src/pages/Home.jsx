// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import catRopa from "../assets/imagenes/ropa.jpg";
import catTech from "../assets/imagenes/tecnologia.jpg";
import catHogar from "../assets/imagenes/hogar.jpeg";
import catGaming from "../assets/imagenes/Gaming.jpg";

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

      <section className="relative bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Bienvenido a <span className="text-yellow-300">Me la Rifo</span> 🛍️
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Descubre productos increíbles, ofertas exclusivas y una experiencia de compra rápida y segura.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/productos">
              <Button color="light" className="text-gray-900 font-semibold">
                Explorar productos
              </Button>
            </Link>
            <Link to="/compras">
              <Button color="gray" outline>
                Ver mi carrito
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Categorías populares
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Ropa", img: catRopa },
            { name: "Tecnología", img: catTech },
            { name: "Hogar", img: catHogar },
            { name: "Gaming", img: catGaming },
          ].map((cat, i) => (
            <Link
              to={`/productos`}
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => (e.currentTarget.src = "https://picsum.photos/400/300")}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Productos destacados
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <img
                  src={`https://picsum.photos/200?random=${i}`}
                  alt={`Producto ${i + 1}`}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                  Producto destacado {i + 1}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Productos en ofertas
                </p>
                <span className="font-bold text-pink-600 dark:text-pink-400 mb-3">
                  S/ {(Math.random() * 200 + 50).toFixed(2)}
                </span>
                <Button color="pink" size="sm" className="w-full">
                  Agregar al carrito
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
