import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

export default function HeroSection({ onOpenForm, onScrollToPackages }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background con patrón sutil */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2328251d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradiente sutil en esquina */}
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 blur-[150px]"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ backgroundColor: "var(--color-accent)", color: "var(--color-text)" }}
              >
                <Sparkles size={14} />
                <span>Para pymes en México</span>
              </span>
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold mb-6 leading-[1.1]"
              style={{ color: "var(--color-text)" }}
            >
              Hacemos que tu{' '}
              <span 
                className="relative"
                style={{ color: "var(--color-primary)" }}
              >
                marca destaque
                <svg 
                  className="absolute -bottom-2 left-0 w-full" 
                  viewBox="0 0 200 8" 
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M2 6C40 2 160 2 198 6" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    style={{ opacity: 0.3 }}
                  />
                </svg>
              </span>{' '}
              y te traiga clientes.
            </h1>

            <p 
              className="text-lg sm:text-xl text-text-muted mb-8 max-w-lg leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              Combinamos diseño con personalidad, estrategia y IA para que tu negocio atraiga a las personas correctas. Sin equipo grande. Sin perder tiempo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenForm}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
              >
                Agenda tu diagnóstico
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onScrollToPackages}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium transition-all duration-200"
                style={{
                  color: "var(--color-text)",
                }}
              >
                Ver paquetes
                <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mini social proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-surface flex items-center justify-center text-xs font-medium"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-muted" style={{ color: "var(--color-text-muted)" }}>
                <span style={{ color: "var(--color-text)" }}>10+</span>pyymes atendidas
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Cardstack visual */}
            <div className="relative">
              {/* Main card */}
              <div 
                className="relative rounded-2xl p-6 sm:p-8 shadow-2xl"
                style={{ backgroundColor: "var(--color-surface)" }}
              >
                {/* Header of card */}
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <span className="text-white text-lg">◆</span>
                  </div>
                  <div>
                    <div className="h-3 w-24 rounded" style={{ backgroundColor: "var(--color-text)", opacity: 0.8 }}></div>
                    <div className="h-2 w-16 rounded mt-1" style={{ backgroundColor: "var(--color-text-muted)", opacity: 0.5 }}></div>
                  </div>
                </div>

                {/* Content lines */}
                <div className="space-y-3 mb-6">
                  <div className="h-2 w-full rounded" style={{ backgroundColor: "var(--color-accent)" }}></div>
                  <div className="h-2 w-4/5 rounded" style={{ backgroundColor: "var(--color-accent)" }}></div>
                  <div className="h-2 w-3/5 rounded" style={{ backgroundColor: "var(--color-accent)" }}></div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t" style={{ borderColor: "var(--color-accent)" }}>
                  <div>
                    <div className="h-6 w-12 rounded" style={{ backgroundColor: "var(--color-primary)", opacity: 0.2 }}></div>
                    <div className="h-2 w-8 rounded mt-1" style={{ backgroundColor: "var(--color-text-muted)", opacity: 0.3 }}></div>
                  </div>
                  <div>
                    <div className="h-6 w-12 rounded" style={{ backgroundColor: "var(--color-warm)", opacity: 0.2 }}></div>
                    <div className="h-2 w-10 rounded mt-1" style={{ backgroundColor: "var(--color-text-muted)", opacity: 0.3 }}></div>
                  </div>
                  <div>
                    <div className="h-6 w-12 rounded" style={{ backgroundColor: "var(--color-accent)" }}></div>
                    <div className="h-2 w-6 rounded mt-1" style={{ backgroundColor: "var(--color-text-muted)", opacity: 0.3 }}></div>
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div 
                className="absolute -bottom-4 -left-4 p-4 rounded-xl shadow-lg hidden sm:block"
                style={{ backgroundColor: "var(--color-bg)" }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <span className="text-white text-sm">↑</span>
                  </div>
                  <div>
                    <div className="h-2 w-16 rounded" style={{ backgroundColor: "var(--color-text)" }}></div>
                    <div className="h-1.5 w-12 rounded mt-1" style={{ backgroundColor: "var(--color-text-muted)", opacity: 0.5 }}></div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div 
                className="absolute -top-3 -right-3 sm:-right-6 px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
              >
                Activo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
