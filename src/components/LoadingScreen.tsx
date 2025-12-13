type Props = { fadingOut?: boolean };

export default function LoadingScreen({ fadingOut = false }: Props) {
  return (
    <div
      className={[
        "fixed inset-0 z-[9999] grid place-items-center bg-black",
        "transition-opacity duration-300",
        fadingOut ? "opacity-0" : "opacity-100",
      ].join(" ")}
    >
      {/* Fondo: halo + ruido sutil (sin imágenes) */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-500/12 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-220px] h-[520px] w-[520px] rounded-full bg-amber-500/8 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.10),transparent_45%)]" />
      </div>

      {/* Card */}
      <div className="relative w-[min(92vw,520px)]">
        {/* Borde dorado con glow */}
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-amber-500/40 via-amber-200/20 to-amber-500/40 blur-[10px]" />

        <div className="relative rounded-3xl border border-white/10 bg-white/5 px-8 py-8 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_18px_60px_rgba(0,0,0,0.65)]">
          {/* Icono simple (balanza) */}
          <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-amber-500/25 bg-amber-500/10">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="opacity-95">
              <path d="M12 3v18" stroke="rgba(245,158,11,0.95)" strokeWidth="1.6" strokeLinecap="round"/>
              <path d="M7 21h10" stroke="rgba(245,158,11,0.85)" strokeWidth="1.6" strokeLinecap="round"/>
              <path d="M6 7h12" stroke="rgba(245,158,11,0.75)" strokeWidth="1.6" strokeLinecap="round"/>
              <path d="M8 7 5.5 12h5L8 7Z" stroke="rgba(255,255,255,0.55)" strokeWidth="1.3" />
              <path d="M16 7 13.5 12h5L16 7Z" stroke="rgba(255,255,255,0.55)" strokeWidth="1.3" />
            </svg>
          </div>

          <div className="text-center">
            <div className="text-white font-extrabold tracking-[0.22em] text-lg">
              IUSTICIA
            </div>
            <div className="mt-2 text-white/70 text-sm">
              Preparando el inicio…
            </div>
          </div>

          {/* Loader line + puntitos */}
          <div className="mt-7">
            <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-2/5 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent animate-pulse" />
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-400/90 animate-bounce [animation-duration:900ms]" />
              <span
                className="h-2 w-2 rounded-full bg-amber-400/70 animate-bounce [animation-duration:900ms]"
                style={{ animationDelay: "140ms" }}
              />
              <span
                className="h-2 w-2 rounded-full bg-amber-400/50 animate-bounce [animation-duration:900ms]"
                style={{ animationDelay: "280ms" }}
              />
            </div>
          </div>

          {/* Pie mini */}
          <div className="mt-7 text-center text-xs text-white/45">
            © {new Date().getFullYear()} IUSTICIA
          </div>
        </div>
      </div>
    </div>
  );
}
