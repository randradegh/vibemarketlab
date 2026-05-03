import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

export default function HeroSection({ onOpenForm, onScrollToPackages }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ backgroundColor: "var(--color-bg)" }}>
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
                style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-inverse)" }}
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
                  color: "var(--color-text-inverse)",
                }}
              >
                Incrementa tus ventas
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onScrollToPackages}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium transition-all duration-200 border-2"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
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

          {/* Visual Element - Case Study Card */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main card - Case Study */}
              <div 
                className="relative rounded-2xl p-6 sm:p-8 shadow-2xl"
                style={{ backgroundColor: "var(--color-surface)" }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <span className="text-white text-xl">◆</span>
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: "var(--color-text)" }}>Café Monte Carlo</div>
                    <div className="text-sm" style={{ color: "var(--color-text-muted)" }}>Restaurante en CDMX</div>
                  </div>
                </div>

                {/* Result highlight */}
                <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: "var(--color-primary)" }}>
                  <div className="text-3xl font-bold" style={{ color: "var(--color-text-inverse)" }}>+65%</div>
                  <div className="text-sm" style={{ color: "var(--color-text-inverse)", opacity: 0.9 }}>incremento en reservaciones</div>
                </div>

                {/* Mini charts */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Bar chart */}
                  <div>
                    <div className="text-xs font-medium mb-2" style={{ color: "var(--color-text-muted)" }}>Antes</div>
                    <div className="flex items-end gap-1 h-16">
                      <div className="flex-1 rounded" style={{ height: '30%', backgroundColor: "var(--color-text-muted)", opacity: 0.3 }}></div>
                      <div className="flex-1 rounded" style={{ height: '45%', backgroundColor: "var(--color-text-muted)", opacity: 0.3 }}></div>
                      <div className="flex-1 rounded" style={{ height: '35%', backgroundColor: "var(--color-text-muted)", opacity: 0.3 }}></div>
                      <div className="flex-1 rounded" style={{ height: '40%', backgroundColor: "var(--color-text-muted)", opacity: 0.3 }}></div>
                    </div>
                  </div>
                  {/* Bar chart - After */}
                  <div>
                    <div className="text-xs font-medium mb-2" style={{ color: "var(--color-text-muted)" }}>Después</div>
                    <div className="flex items-end gap-1 h-16">
                      <div className="flex-1 rounded" style={{ height: '60%', backgroundColor: "var(--color-primary)", opacity: 0.6 }}></div>
                      <div className="flex-1 rounded" style={{ height: '75%', backgroundColor: "var(--color-primary)", opacity: 0.7 }}></div>
                      <div className="flex-1 rounded" style={{ height: '85%', backgroundColor: "var(--color-primary)", opacity: 0.8 }}></div>
                      <div className="flex-1 rounded" style={{ height: '100%', backgroundColor: "var(--color-primary-hover)" }}></div>
                    </div>
                  </div>
                </div>

                {/* Bottom stat */}
                <div className="mt-6 pt-4 border-t flex justify-between items-center" style={{ borderColor: "var(--color-accent)" }}>
                  <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>Proyecto: 2 semanas</span>
                  <span className="text-sm font-medium" style={{ color: "var(--color-primary)" }}>Ver caso →</span>
                </div>
              </div>

              {/* Floating badge */}
              <div 
                className="absolute -top-3 -right-3 sm:-right-6 px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-1.5"
                style={{
                  backgroundColor: "var(--color-warm)",
                  color: "var(--color-text-inverse)",
                }}
              >
                <Sparkles size={14} />
                <span>Caso real</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
