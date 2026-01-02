import React, { useEffect, useMemo, useState } from "react";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function clamp(n: number) {
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

function getTimeLeft(targetMs: number): TimeLeft {
  const now = Date.now();
  const diff = clamp(targetMs - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

const UnderConstruction: React.FC = () => {
  // 01/03/2026 00:00 CDMX (marzo normalmente UTC-6)
  const targetMs = useMemo(() => new Date("2026-01-03T00:00:00-06:00").getTime(), []);
  const [left, setLeft] = useState<TimeLeft>(() => getTimeLeft(targetMs));

  useEffect(() => {
    const t = window.setInterval(() => setLeft(getTimeLeft(targetMs)), 1000);
    return () => window.clearInterval(t);
  }, [targetMs]);

  const isDone = left.days === 0 && left.hours === 0 && left.minutes === 0 && left.seconds === 0;

  // ✅ WhatsApp (México +52)
  const whatsappLink =
    "https://wa.me/525658487608?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios%20legales.";

  return (
    <div className="bg-black min-h-screen text-white selection:bg-amber-500 selection:text-black relative overflow-hidden flex items-center">
      {/* Fondo sobrio */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-56 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_65%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      <main className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 py-12">
        <div className="mx-auto max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span className="text-xs tracking-[0.22em] uppercase text-white/70">
              Sitio en construcción
            </span>
          </div>

          {/* Título */}
          <h1 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight">IUSTICIA</h1>

          <p className="mt-3 text-white/70 leading-relaxed">
            Estamos preparando una experiencia más clara, elegante y funcional.
            <span className="text-white"> Regresamos el </span>
            <span className="text-amber-300 font-semibold">3 de enero</span>.
          </p>

          {/* Card principal */}
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <p className="text-sm text-white/60">Cuenta regresiva</p>
                  <p className="text-xl sm:text-2xl font-semibold">
                    Apertura: <span className="text-amber-300">03/01/2026</span>{" "}
                    <span className="text-white/50 text-sm font-normal">(CDMX)</span>
                  </p>
                </div>
                <div className="h-[2px] w-full sm:w-56 bg-gradient-to-r from-amber-400/50 to-transparent rounded-full" />
              </div>

              {/* Contador */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <Stat label="DÍAS" value={left.days} big />
                <Stat label="HORAS" value={left.hours} />
                <Stat label="MIN" value={left.minutes} />
                <Stat label="SEG" value={left.seconds} />
              </div>

              {isDone && (
                <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-emerald-100">
                  ¡Ya abrimos! 🎉 Refresca la página.
                </div>
              )}

              {/* CTA WhatsApp */}
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-5 py-3
                    bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
                >
                  Contacto (WhatsApp)
                </a>

              
              </div>

              <p className="mt-5 text-xs text-white/45">
                © {new Date().getFullYear()} IUSTICIA. Todos los derechos reservados.
              </p>
            </div>

            <div className="border-t border-white/10 bg-black/30 px-6 sm:px-8 py-4 text-xs text-white/50">
              Si necesitas atención inmediata, escríbenos por WhatsApp.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const Stat: React.FC<{ label: string; value: number; big?: boolean }> = ({ label, value, big }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
      <div className={`tabular-nums font-extrabold ${big ? "text-3xl sm:text-4xl" : "text-3xl"}`}>
        {label === "DÍAS" ? value : pad2(value)}
      </div>
      <div className="mt-1 text-[11px] tracking-[0.22em] text-white/55">{label}</div>
    </div>
  );
};

export default UnderConstruction;
