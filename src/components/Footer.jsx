export function MyFooter() {
  return (

    <footer className="hidden lg:block bg-gradient-to-t from-[#0a0f1f] via-[#0e1730] to-[#0a0f1f] text-white border-t border-cyan-500 shadow-[0_-0_10px_#00ffff]">

      <div className="flex justify-between items-center p-4 bg-[#0f192f] border-b border-cyan-800 flex-wrap">
        <span className="mb-2 md:mb-0 text-cyan-400 font-medium tracking-wider">
          Conéctate con nosotros ⚡
        </span>

        <div className="flex space-x-5 text-2xl">
          {["facebook", "twitter", "instagram", "linkedin", "github"].map((icon) => (
            <a
              key={icon}
              href="#"
              className="text-cyan-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <i className={`pi pi-${icon}`}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        <div>
          <h6 className="uppercase font-bold mb-4 text-cyan-400">Me la Rifo</h6>
          <div className="w-16 h-[2px] bg-cyan-400 mb-4"></div>
          <p className="text-gray-300 leading-relaxed">
            Donde la innovación se encuentra con la tecnología.  
            Impulsa tu empresa al siguiente nivel 🚀.
          </p>
        </div>

        <div>
          <h6 className="uppercase font-bold mb-4 text-cyan-400">Servicios</h6>
          <div className="w-16 h-[2px] bg-cyan-400 mb-4"></div>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-cyan-300">E-commerce</a></li>
            <li><a href="#" className="hover:text-cyan-300">Publicidad Digital</a></li>
            <li><a href="#" className="hover:text-cyan-300">Branding Empresarial</a></li>
            <li><a href="#" className="hover:text-cyan-300">Soporte Técnico</a></li>
          </ul>
        </div>

        <div>
          <h6 className="uppercase font-bold mb-4 text-cyan-400">Recursos</h6>
          <div className="w-16 h-[2px] bg-cyan-400 mb-4"></div>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-cyan-300">Tu Panel</a></li>
            <li><a href="#" className="hover:text-cyan-300">Afiliados</a></li>
            <li><a href="#" className="hover:text-cyan-300">Precios</a></li>
            <li><a href="#" className="hover:text-cyan-300">Soporte</a></li>
          </ul>
        </div>

        <div>
          <h6 className="uppercase font-bold mb-4 text-cyan-400">Contacto</h6>
          <div className="w-16 h-[2px] bg-cyan-400 mb-4"></div>
          <ul className="space-y-2 text-gray-300">
            <li><i className="pi pi-home mr-2"></i> Lima, Perú</li>
            <li><i className="pi pi-envelope mr-2"></i> soporte@melarifo.com</li>
            <li><i className="pi pi-phone mr-2"></i> +51 999 888 777</li>
          </ul>
        </div>
      </div>

      <div className="text-center p-3 bg-[#0f192f] text-cyan-400 font-semibold tracking-wide border-t border-cyan-700">
        © 2025 MeLaRifo.com — Potencia tu mundo digital ⚙️
      </div>
    </footer>
  );
}
