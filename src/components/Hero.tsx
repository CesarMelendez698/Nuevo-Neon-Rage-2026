import logoHero from '../Img/Bannermusicwebfinal.jpg';

export default function Hero() {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("Collection");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="Home"
      /* bg-black llena los espacios vacíos que deje la imagen al encogerse en celular */
      className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      {/* IMAGEN CONFIGURADA PARA VERSE COMPLETA (CONTAIN) */}
      <img
        src={logoHero}
        alt="Banner Music"
        className="
          absolute inset-0 
          w-full h-full 
          /* object-contain asegura que TODO el banner sea visible sin recortes */
          object-contain 
          object-center 
          animate-slow-zoom
        "
      />

      {/* OVERLAY OSCURO (Solo se aplica sobre la imagen) */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      {/* CONTENEDOR DEL BOTÓN */}
      <div className="
        absolute 
        bottom-12 sm:bottom-12 
        left-1/2 -translate-x-1/2 
        z-10 
        px-6 sm:px-4 
        w-full sm:w-auto 
        max-w-xs sm:max-w-none
      ">
        <a
          href="#Collection"
          onClick={handleScroll}
          className="
            block
            px-6 py-3 sm:px-5 sm:py-2.5
            text-[11px] sm:text-xs md:text-sm
            uppercase tracking-[0.25em] sm:tracking-[0.3em]
            font-bold
            text-white
            border border-purple-500
            bg-black/60 backdrop-blur-md
            rounded-md
            text-center
            whitespace-nowrap
            cursor-pointer
            
            transition-all duration-500 ease-out
            animate-pulse hover:animate-none
            
            hover:bg-purple-600
            hover:border-purple-600
            hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]
            hover:scale-105
            
            active:scale-95
          "
        >
          Ver Colección
        </a>
      </div>
    </section>
  );
}