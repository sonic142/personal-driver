import { useState } from "react";

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
  { name: "Carlos M.", img: "/img/driver-1.jpg" },
  { name: "Andrés G.", img: "/img/driver-2.jpg" },
  { name: "Julián R.", img: "/img/driver-3.jpg" },
  { name: "Mauricio L.", img: "/img/driver-4.jpg" },
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

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {equipo.map((p) => (
            <div key={p.name} className="text-center">
              <img
                src={p.img}
                alt={`Conductor anfitrión ${p.name}`}
                width={400}
                height={400}
                loading="lazy"
                className="mx-auto mb-4 h-28 w-28 rounded-full object-cover ring-4 ring-gold/60 md:h-36 md:w-36"
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
    destino: destinos[0].name,
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
