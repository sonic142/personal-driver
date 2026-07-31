import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";

import sedanImg from "../assets/vehicle-sedan.jpg";
import suvImg from "../assets/vehicle-suv.jpg";
import sprinterImg from "../assets/vehicle-sprinter.jpg";
import logoAsset from "../assets/pdriver-logo-light.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Personal Driver | Transporte Privado Ejecutivo",
      },
      {
        name: "description",
        content:
          "Transporte privado de élite para quienes valoran el tiempo, la discreción y la comodidad sin igual. Explora la flota seleccionada de Personal Driver.",
      },
      {
        property: "og:title",
        content: "Personal Driver | Transporte Privado Ejecutivo",
      },
      {
        property: "og:description",
        content:
          "Transporte privado de élite para quienes valoran el tiempo, la discreción y la comodidad sin igual.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const vehicles = [
  {
    id: "sedan",
    name: "Clase Sovereign",
    category: "Sedán Ejecutivo",
    specs: "3 Asientos · 4 Maletas · Wi-Fi",
    image: sedanImg,
  },
  {
    id: "suv",
    name: "Gama Atlas",
    category: "SUV Premium",
    specs: "6 Asientos · 8 Maletas · Refrescos",
    image: suvImg,
  },
  {
    id: "sprinter",
    name: "Suite Horizon",
    category: "Shuttle Privado",
    specs: "12 Asientos · 15 Maletas · Kit Multimedia",
    image: sprinterImg,
  },
];

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "X", href: "#" },
];

function Index() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth ?? 600;
    const gap = 32;
    el.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-onyx font-sans text-white selection:bg-gold/30">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-onyx/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center">
            <img
              src={logoAsset.url}
              alt="Personal Driver"
              className="h-8 w-auto"
            />
          </a>

          <div className="hidden items-center gap-10 text-sm font-medium uppercase tracking-widest text-white/60 md:flex">
            <a href="#fleet" className="transition-colors hover:text-gold">
              Flota
            </a>
            <a href="#services" className="transition-colors hover:text-gold">
              Servicios
            </a>
            <a href="#contact" className="transition-colors hover:text-gold">
              Contacto
            </a>
          </div>

          <div>
            <a
              href="https://www.pdriver.co/login"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gold px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold hover:text-onyx md:px-8"
            >
              Acceso Clientes
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <header className="relative px-6 pb-20 pt-40">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <h1 className="mb-8 font-display text-6xl leading-[0.9] md:text-8xl">
                Redefiniendo el{" "}
                <span className="italic text-gold">Movimiento</span>
              </h1>
              <p className="mb-10 text-lg font-light leading-relaxed text-white/50 md:text-xl">
                Transporte privado de élite para quienes valoran el tiempo, la
                discreción y la comodidad sin igual en el paisaje metropolitano.
              </p>
              <div className="flex gap-4">
                <a
                  href="#fleet"
                  className="bg-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-onyx transition-colors hover:bg-gold"
                >
                  Reservar Viaje
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Vehicle Carousel */}
        <section id="fleet" className="py-24">
          <div className="mx-auto mb-12 flex max-w-7xl items-end justify-between px-6">
            <div>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
                Nuestra Flota Seleccionada
              </h2>
              <p className="font-display text-3xl">
                Ingeniería de Precisión. Confort Excepcional.
              </p>
            </div>
            <div className="hidden gap-4 md:flex">
              <button
                type="button"
                onClick={() => scrollBy("left")}
                disabled={!canScrollLeft}
                aria-label="Vehículo anterior"
                className="rounded-full border border-white/10 p-3 text-white/40 transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollBy("right")}
                disabled={!canScrollRight}
                aria-label="Siguiente vehículo"
                className="rounded-full border border-white/20 p-3 text-white/60 transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="scrollbar-hide flex gap-8 overflow-x-auto pb-12 px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
          >
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group w-[350px] flex-none md:w-[600px]"
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden border border-white/10 bg-white/5">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/60">
                      {vehicle.category}
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="mb-2 font-display text-xl">{vehicle.name}</h3>
                  <p className="text-sm uppercase tracking-widest text-white/40">
                    {vehicle.specs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="border-y border-white/5 bg-white/[0.02] py-24"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 max-w-2xl">
              <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
                Servicios
              </h2>
              <p className="font-display text-3xl md:text-4xl">
                Cada viaje, orquestado hasta el último detalle.
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-3">
              {[
                {
                  title: "Traslados al Aeropuerto",
                  description:
                    "Recogidas con seguimiento de vuelo y servicio de bienvenida en las principales terminales internacionales.",
                },
                {
                  title: "Cuentas Corporativas",
                  description:
                    "Facturación centralizada, despacho prioritario y gestión de cuenta dedicada para equipos ejecutivos.",
                },
                {
                  title: "Logística de Eventos",
                  description:
                    "Transporte coordinado de múltiples vehículos para galas, cumbres, roadshows y celebraciones privadas.",
                },
              ].map((service) => (
                <div key={service.title} className="space-y-4">
                  <div className="h-px w-8 bg-gold" />
                  <h3 className="font-display text-xl">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-32">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-8 font-display text-4xl leading-tight md:text-5xl">
              El viaje es tan importante como el destino.
            </h2>
            <p className="mb-10 text-white/50">
              Contacta a nuestro equipo de concierge para itinerarios a medida y
              arreglos corporativos.
            </p>
            <a
              href="mailto:concierge@pdriver.co"
              className="inline-block border border-gold px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-onyx"
            >
              Contactar Concierge
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 pb-10 pt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-6 flex items-center">
                <img
                  src={logoAsset.url}
                  alt="Personal Driver"
                  className="h-6 w-auto"
                />
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/40">
                Creando viajes fluidos para líderes mundiales, ejecutivos de
                negocios y viajeros de lujo desde 2012.
              </p>
            </div>

            <div>
              <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                Conectar
              </h4>
              <ul className="space-y-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="inline-block rounded-sm border border-white/10 px-4 py-2 text-sm text-white/40 transition-colors hover:border-gold hover:text-gold"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                Contacto
              </h4>
              <p className="mb-2 text-sm text-white/40">Soporte Global 24/7</p>
              <p className="text-sm font-bold">+1 (555) 980-0010</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 border-t border-white/5 pt-8 md:flex-row md:justify-between">
            <p className="text-[10px] uppercase tracking-widest text-white/20">
              &copy; {new Date().getFullYear()} Lumière Transporte Privado Corp.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-[10px] uppercase tracking-widest text-white/20 transition-colors hover:text-white"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-[10px] uppercase tracking-widest text-white/20 transition-colors hover:text-white"
              >
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
