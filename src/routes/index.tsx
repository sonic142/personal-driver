import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import {
  ToursHero,
  Destinos,
  Seguridad,
  Equipo,
  Reserva,
  InstitucionalCompacto,
} from "@/components/tours-sections";

const sedanImg = "/img/vehicle-sedan.jpg";
const suvImg = "/img/vehicle-suv.jpg";
const sprinterImg = "/img/vehicle-sprinter.jpg";
const heroImg = "/img/hero-oriente.jpg";
import logoAsset from "../assets/pdriver-logo-white.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Personal Driver | Tours por el Oriente Antioqueño" },
      {
        name: "description",
        content:
          "Tours y transporte privado por el Oriente Antioqueño: Guatapé, El Peñol, Santa Elena y los pueblos de flores. Vive Colombia con Personal Driver.",
      },
      {
        property: "og:title",
        content: "Personal Driver | Tours por el Oriente Antioqueño",
      },
      {
        property: "og:description",
        content:
          "Tours y transporte privado por Guatapé, El Peñol, Santa Elena y los pueblos con flores del Oriente Antioqueño.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const vehicles = [
  {
    id: "sedan",
    name: "Sedán Silletero",
    category: "Ideal para parejas",
    specs: "3 Pasajeros · 4 Maletas · Wi-Fi",
    image: sedanImg,
    accent: "bg-gold",
  },
  {
    id: "suv",
    name: "SUV Cañón del Río",
    category: "Familias y grupos pequeños",
    specs: "6 Pasajeros · 8 Maletas · Refrescos",
    image: suvImg,
    accent: "bg-turquesa",
  },
  {
    id: "sprinter",
    name: "Van Guatapé",
    category: "Grupos y excursiones",
    specs: "12 Pasajeros · 15 Maletas · Kit Multimedia",
    image: sprinterImg,
    accent: "bg-selva-claro",
  },
];

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/personaldriver_co/" },
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
    <div className="min-h-screen bg-crema font-sans text-tinta selection:bg-fucsia/25">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-selva/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3 text-crema">
            <img
              src={logoAsset.url}
              alt="Personal Driver"
              className="h-9 w-auto"
            />
          </a>

          <div className="hidden items-center gap-10 text-sm font-medium uppercase tracking-widest text-crema/70 md:flex">
            <a href="#tours" className="transition-colors hover:text-gold">
              Tours
            </a>
            <a href="#fleet" className="transition-colors hover:text-gold">
              Flota
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
              className="rounded-full bg-gold px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-tinta transition-transform duration-300 hover:scale-105 md:px-8"
            >
              Ingresar
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <header className="relative overflow-hidden pt-20">
          <div className="relative">
            <img
              src={heroImg}
              alt="Calle de Guatapé con zócalos de colores, flores y la Piedra del Peñol al fondo"
              width={1600}
              height={1008}
              className="h-[70vh] min-h-[440px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-tinta/85 via-tinta/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-6">
                <div className="max-w-2xl text-crema">
                  <span className="mb-5 inline-block rounded-full bg-fucsia px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em]">
                    Oriente Antioqueño · Colombia
                  </span>
                  <h1 className="mb-6 font-display text-5xl leading-[0.95] md:text-7xl">
                    Recorre la tierra de las{" "}
                    <span className="text-gold">flores</span>
                  </h1>
                  <p className="mb-9 max-w-xl text-lg font-light leading-relaxed text-crema/85">
                    Tours privados y transporte cómodo por Guatapé, El Peñol,
                    Santa Elena y los pueblos de colores. Conductores locales,
                    historias reales y mucho color.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#tours"
                      className="rounded-full bg-gold px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-tinta transition-transform hover:scale-105"
                    >
                      Ver Tours
                    </a>
                    <a
                      href="#contact"
                      className="rounded-full border-2 border-crema/70 px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-crema transition-colors hover:bg-crema hover:text-tinta"
                    >
                      Escríbenos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* franja de colores tipo zócalo */}
          <div className="flex h-3 w-full">
            <div className="flex-1 bg-fucsia" />
            <div className="flex-1 bg-gold" />
            <div className="flex-1 bg-turquesa" />
            <div className="flex-1 bg-terracota" />
            <div className="flex-1 bg-selva-claro" />
          </div>
        </header>

        <ToursHero />
        <Destinos />
        <Seguridad />
        <Equipo />

        {/* Vehicle Carousel */}
        <section id="fleet" className="bg-selva py-24 text-crema">
          <div className="mx-auto mb-12 flex max-w-7xl items-end justify-between px-6">
            <div>
              <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">
                Nuestra Flota
              </h2>
              <p className="font-display text-3xl">
                Viaja cómodo por las montañas del Oriente.
              </p>
            </div>
            <div className="hidden gap-4 md:flex">
              <button
                type="button"
                onClick={() => scrollBy("left")}
                disabled={!canScrollLeft}
                aria-label="Vehículo anterior"
                className="rounded-full border border-crema/30 p-3 text-crema/70 transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollBy("right")}
                disabled={!canScrollRight}
                aria-label="Siguiente vehículo"
                className="rounded-full border border-crema/30 p-3 text-crema/70 transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="scrollbar-hide flex gap-8 overflow-x-auto px-6 pb-12 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
          >
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="group w-[320px] flex-none md:w-[560px]">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl bg-crema/10">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-tinta ${vehicle.accent}`}
                  >
                    {vehicle.category}
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="mb-2 font-display text-xl">{vehicle.name}</h3>
                  <p className="text-sm uppercase tracking-widest text-crema/60">
                    {vehicle.specs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div id="contact">
          <Reserva />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-tinta pb-10 pt-20 text-crema">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-6 flex items-center gap-3">
                <img
                  src={logoAsset.url}
                  alt="Personal Driver"
                  className="h-11 w-auto"
                />
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-crema/60">
                Tours y transporte privado por el Oriente Antioqueño. Mostramos
                nuestra tierra, sus flores y su gente a viajeros de todo el
                mundo.
              </p>
            </div>

            <div>
              <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                Conectar
              </h4>
              <ul className="space-y-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full border border-crema/20 px-4 py-2 text-sm text-crema/70 transition-colors hover:border-gold hover:text-gold"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                Contacto
              </h4>
              <p className="mb-2 text-sm text-crema/60">Atención 24/7</p>
              <p className="text-sm font-bold">+1 (555) 980-0010</p>
            </div>
          </div>

          <div className="flex h-2 w-full overflow-hidden rounded-full">
            <div className="flex-1 bg-fucsia" />
            <div className="flex-1 bg-gold" />
            <div className="flex-1 bg-turquesa" />
            <div className="flex-1 bg-terracota" />
            <div className="flex-1 bg-selva-claro" />
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="text-[10px] uppercase tracking-widest text-crema/40">
              &copy; {new Date().getFullYear()} Personal Driver Corp.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-[10px] uppercase tracking-widest text-crema/40 transition-colors hover:text-gold"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-[10px] uppercase tracking-widest text-crema/40 transition-colors hover:text-gold"
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
