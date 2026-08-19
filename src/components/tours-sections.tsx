import { useState } from "react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/personaldriver_co/",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: waLink("Hola Personal Driver, quiero información sobre los tours."),
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.931L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export const destinos = [
  { name: "Guatapé", img: "/img/dest-guatape.jpg", line: "El Peñón y las calzadas de colores más famosas de Colombia" },
  { name: "Santa Elena", img: "/img/dest-santaelena.jpg", line: "Cuna de los silleteros, entre bosques de flores" },
  { name: "Carmen de Viboral", img: "/img/dest-carmen.jpg", line: "Tradición cerámica y pueblos con historia" },
  { name: "Jardín", img: "/img/dest-jardin.jpg", line: "Uno de los pueblos más bonitos de Colombia, café y montaña" },
  { name: "Santa Fe de Antioquia", img: "/img/dest-santafe.jpg", line: "Historia colonial y clima cálido" },
  { name: "Jericó", img: "/img/dest-jerico.jpg", line: "Arquitectura patrimonial y raíces paisas" },
  { name: "Medellín", img: "/img/dest-medellin.jpg", line: "Tours urbanos y city tours" },
];

const seguridad = [
  "Registro Nacional de Turismo N.º 87094",
  "Póliza todo riesgo",
  "Seguro de pasajeros",
  "SOAT vigente",
  "Revisión técnico-mecánica al día",
  "Licencias de conducción vigentes",
  "Conductores certificados como anfitriones turísticos",
  "Seguridad social y ARL al día",
];

const equipo = [
  { name: "Jorge Sánchez", img: "/img/driver-1.png" },
  { name: "Eduin Jaramillo", img: "/img/driver-2.png" },
  { name: "Esteban Flórez", img: "/img/driver-3.png" },
];

const WA = "573247627963";

function waLink(text: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}

export function ToursHero() {
  return (
    <section id="tours" className="relative overflow-hidden">
      <img
        src="/img/dest-guatape.jpg"
        alt="Paisaje del Oriente Antioqueño"
        width={1024}
        height={768}
        loading="lazy"
        className="h-[60vh] min-h-[420px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-tinta/90 via-tinta/60 to-tinta/20" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-2xl text-crema">
            <h2 className="mb-5 font-display text-4xl leading-[1.05] md:text-6xl">
              Vive Antioquia como se merece — con{" "}
              <span className="text-gold">anfitriones</span>, no solo
              conductores
            </h2>
            <p className="mb-8 text-base font-light leading-relaxed text-crema/85 md:text-lg">
              Tours privados a Guatapé, Santa Elena, Jardín, Jericó, Santa Fe de
              Antioquia y más. Seguros, cómodos y con la calidez humana que nos
              caracteriza.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#reservar"
                className="rounded-full bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-tinta transition-transform hover:scale-105"
              >
                Reserva tu tour
              </a>
              <a
                href="#destinos"
                className="rounded-full border-2 border-crema/70 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-crema transition-colors hover:bg-crema hover:text-tinta"
              >
                Ver destinos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Destinos() {
  return (
    <section id="destinos" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-terracota">
            Destinos
          </h2>
          <p className="font-display text-3xl md:text-4xl">
            Elige a dónde quieres ir. Nosotros nos encargamos del resto.
          </p>
        </div>

        <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 scrollbar-hide md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {destinos.map((d) => (
            <article
              key={d.name}
              className="group w-[78%] flex-none snap-start overflow-hidden rounded-3xl bg-white shadow-[0_12px_40px_-24px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-1 md:w-auto"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={d.img}
                  alt={`Tour a ${d.name}`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 flex justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">
                  <a
                    href={waLink(
                      `Hola Personal Driver, quiero cotizar un tour a ${d.name}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gold px-5 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-tinta"
                  >
                    Cotizar este tour
                  </a>
                </div>
              </div>
              <div className="space-y-2 p-6">
                <h3 className="font-display text-xl">{d.name}</h3>
                <p className="text-sm leading-relaxed text-tinta/70">{d.line}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Seguridad() {
  return (
    <section className="bg-selva py-20 text-crema md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <span className="mb-5 inline-block rounded-full bg-gold px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-tinta">
            Viaja con la conciencia tranquila
          </span>
          <h2 className="mb-3 font-display text-3xl md:text-4xl">
            Seguridad que se puede comprobar
          </h2>
          <p className="text-crema/70">No es solo una promesa, es documentación real.</p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {seguridad.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-crema/15 p-4"
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-xs font-bold text-tinta">
                ✓
              </span>
              <span className="min-w-0 text-sm text-crema/85">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-10 w-fit rounded-2xl border-2 border-gold px-6 py-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
            Registro Nacional de Turismo
          </p>
          <p className="font-display text-2xl">N.º 87094</p>
        </div>
      </div>
    </section>
  );
}

export function Equipo() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-terracota">
            Nuestro equipo
          </h2>
          <p className="font-display text-3xl md:text-4xl">
            Conoce a quien te va a llevar
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-8 md:grid-cols-3">
          {equipo.map((p) => (
            <div key={p.name} className="text-center">
              <img
                src={p.img}
                alt={`Conductor anfitrión ${p.name}`}
                width={400}
                height={400}
                loading="lazy"
                className="mx-auto mb-4 aspect-square h-28 w-28 rounded-full object-cover shadow-lg md:h-36 md:w-36"
              />
              <h3 className="font-display text-lg">{p.name}</h3>
              <p className="text-xs uppercase tracking-widest text-tinta/60">
                Conductor certificado · Anfitrión turístico
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center font-display text-xl text-tinta/80">
          Todo nuestro equipo está seleccionado por responsabilidad, honestidad y
          atención al cliente.
        </p>
      </div>
    </section>
  );
}

export function Reserva() {
  const [form, setForm] = useState({
    nombre: "",
    personas: "2",
    destino: destinos[0]!.name,
    fecha: "",
    contacto: "",
  });

  const mensaje = `Hola Personal Driver 👋
Quiero cotizar un tour.
Nombre: ${form.nombre}
Personas: ${form.personas}
Destino: ${form.destino}
Fecha aproximada: ${form.fecha}
Contacto: ${form.contacto}`;

  const field =
    "w-full rounded-2xl border border-tinta/15 bg-white px-4 py-3 text-sm outline-none focus:border-gold";

  return (
    <section id="reservar" className="bg-selva-claro py-20 md:py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-3 font-display text-3xl md:text-4xl">
            Solicita tu cotización
          </h2>
          <p className="text-tinta/70">
            Responde en minutos por WhatsApp. Sin compromiso.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(waLink(mensaje), "_blank", "noopener,noreferrer");
          }}
          className="space-y-4 rounded-3xl bg-white p-6 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.5)] md:p-8"
        >
          <div>
            <label htmlFor="nombre" className="mb-1 block text-xs font-bold uppercase tracking-widest text-tinta/60">Nombre</label>
            <input id="nombre" required className={field} value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="personas" className="mb-1 block text-xs font-bold uppercase tracking-widest text-tinta/60">Número de personas</label>
              <input id="personas" type="number" min={1} max={40} required className={field} value={form.personas}
                onChange={(e) => setForm({ ...form, personas: e.target.value })} />
            </div>
            <div>
              <label htmlFor="fecha" className="mb-1 block text-xs font-bold uppercase tracking-widest text-tinta/60">Fecha aproximada</label>
              <input id="fecha" type="date" required className={field} value={form.fecha}
                onChange={(e) => setForm({ ...form, fecha: e.target.value })} />
            </div>
          </div>
          <div>
            <label htmlFor="destino" className="mb-1 block text-xs font-bold uppercase tracking-widest text-tinta/60">Destino de interés</label>
            <select id="destino" className={field} value={form.destino}
              onChange={(e) => setForm({ ...form, destino: e.target.value })}>
              {destinos.map((d) => (
                <option key={d.name} value={d.name}>{d.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="contacto" className="mb-1 block text-xs font-bold uppercase tracking-widest text-tinta/60">WhatsApp o correo</label>
            <input id="contacto" required className={field} value={form.contacto}
              onChange={(e) => setForm({ ...form, contacto: e.target.value })} />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-tinta transition-transform hover:scale-[1.02]"
          >
            Solicitar cotización
          </button>
          <p className="text-center text-xs text-tinta/50">
            ¿Prefieres correo?{" "}
            <a className="underline hover:text-terracota" href={`mailto:personaldriver.booking@gmail.com?subject=${encodeURIComponent("Cotización de tour")}&body=${encodeURIComponent(mensaje)}`}>
              personaldriver.booking@gmail.com
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

export function InstitucionalCompacto() {
  return (
    <div className="mb-10 space-y-1 text-[11px] leading-relaxed text-crema/50">
      <p>Personal Driver S.A.S. — NIT 901407783-5</p>
      <p>Registro Nacional de Turismo N.º 87094</p>
      <p>
        Empresa constituida en Rionegro, Antioquia, con aval del Ministerio de
        Transporte
      </p>
      <p>
        <a href="https://www.instagram.com/personaldriver_co/" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
          Instagram @personaldriver
        </a>{" "}
        ·{" "}
        <a href={waLink("Hola Personal Driver, quiero información sobre los tours.")} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
          WhatsApp 324 762 7963
        </a>
      </p>
    </div>
  );
}
