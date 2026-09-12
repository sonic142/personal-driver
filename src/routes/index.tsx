import { useRef, useState, useEffect, useCallback } from "react";
import {
  ToursHero,
  Destinos,
  Seguridad,
  Equipo,
  Reserva,
  Pqr,
  InstitucionalCompacto,
  FloatingSocialBar,
} from "@/components/tours-sections";

const carro1Img = "/img/carro1_con_logo.jpg";
const carro2Img = "/img/carro2_con_logo.jpg";
const busImg = "/img/bus_con_logo.jpg";
const busetaImg = "/img/busetica_con_logo.jpg";
import logoAsset from "../assets/pdriver-logo-white.png.asset.json";

const vehicles = [
  {
    id: "carro1",
    name: "Vehículo Personal Driver",
    category: "Ideal para parejas",
    specs: "3 Pasajeros · 4 Maletas · Wi-Fi",
    image: carro1Img,
    accent: "bg-gold",
  },
  {
    id: "carro2",
    name: "Vehículo Personal Driver",
    category: "Familias y grupos pequeños",
    specs: "6 Pasajeros · 8 Maletas · Refrescos",
    image: carro2Img,
    accent: "bg-gold",
  },
  {
    id: "bus",
    name: "Bus Personal Driver",
    category: "Grupos y excursiones",
    specs: "12 Pasajeros · 15 Maletas · Kit Multimedia",
    image: busImg,
    accent: "bg-turquesa",
  },
  {
    id: "buseta",
    name: "Buseta Personal Driver",
    category: "Grupos y excursiones",
    specs: "12 Pasajeros · 15 Maletas · Kit Multimedia",
    image: busetaImg,
    accent: "bg-terracota",
  },
];

export function Index() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

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
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0f172a]/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3 text-white">
            <img src="/img/pdriver-logo-light.png" alt="Personal Driver" className="h-16 w-auto" />
          </a>

          <div className="hidden items-center gap-10 text-sm font-medium uppercase tracking-widest text-white/70 md:flex">
            <a href="#tours" className="transition-colors hover:text-turquesa">
              Tours
            </a>
            <a href="#destinos" className="transition-colors hover:text-turquesa">
              Destinos
            </a>
            <a href="#fleet" className="transition-colors hover:text-turquesa">
              Flota
            </a>
            <a href="#reservar" className="transition-colors hover:text-turquesa">
              Reservar
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.pdriver.co/login"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-tinta transition-transform duration-300 hover:scale-105 md:px-8"
            >
              Aliados
            </a>

            {/* Hamburger button — mobile only */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              className="grid h-10 w-10 place-items-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
            >
              {mobileOpen ? (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
            mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 border-t border-white/10 px-6 pb-6 pt-4">
            {[
              { href: "#tours", label: "Tours" },
              { href: "#destinos", label: "Destinos" },
              { href: "#fleet", label: "Flota" },
              { href: "#reservar", label: "Reservar" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-widest text-white/70 transition-colors hover:bg-white/10 hover:text-turquesa"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Backdrop overlay when mobile menu is open */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      <main className="pt-20">
        <ToursHero />
        <Destinos />
        <Seguridad />
        <Equipo />

        {/* Vehicle Carousel */}
        <section id="fleet" className="bg-[#374151] py-24 text-crema">
          <div className="mx-auto mb-12 flex max-w-7xl items-end justify-between px-6">
            <div>
              <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-gold">
                Nuestra Flota
              </h2>
              <p className="font-display text-3xl">Viaja cómodo por las montañas del Oriente.</p>
            </div>
            <div className="hidden gap-4 md:flex">
              <button
                type="button"
                onClick={() => scrollBy("left")}
                disabled={!canScrollLeft}
                aria-label="Vehículo anterior"
                className="rounded-full border border-crema/30 p-3 text-crema/70 transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollBy("right")}
                disabled={!canScrollRight}
                aria-label="Siguiente vehículo"
                className="rounded-full border border-crema/30 p-3 text-crema/70 transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
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
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white ${vehicle.accent}`}
                  >
                    {vehicle.category}
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="mb-2 font-display text-xl">{vehicle.name}</h3>
                  <p className="text-sm uppercase tracking-widest text-crema/60">{vehicle.specs}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div id="contact">
          <Reserva />
        </div>
        <Pqr />
      </main>

      <FloatingSocialBar />

      {/* Footer */}
      <footer className="bg-[#0f172a] pb-10 pt-20 text-crema">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="mb-6 flex items-center gap-3">
                <img
                  src="/img/pdriver-logo-light.png"
                  alt="Personal Driver"
                  className="h-11 w-auto"
                />
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-crema/60">
                Tours y transporte privado por el Oriente Antioqueño. Mostramos nuestra tierra, sus
                flores y su gente a viajeros de todo el mundo.
              </p>
              <div className="mt-6">
                <InstitucionalCompacto />
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                Contacto
              </h4>
              <p className="mb-2 text-sm text-crema/60">Atención 24/7</p>
              <a
                href="https://wa.me/573247627963"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold transition-colors hover:text-gold"
              >
                WhatsApp +57 324 7627963
              </a>
              <a
                href="https://wa.me/573234933518"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm font-bold transition-colors hover:text-gold"
              >
                WhatsApp +57 323 4933518
              </a>
            </div>
          </div>

          <div className="flex h-2 w-full overflow-hidden rounded-full">
            <div className="flex-1 bg-gold" />
            <div className="flex-1 bg-fucsia" />
            <div className="flex-1 bg-terracota" />
            <div className="flex-1 bg-turquesa" />
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
