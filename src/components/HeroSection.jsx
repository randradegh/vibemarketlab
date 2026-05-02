import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection({ onOpenForm, onScrollToPackages }) {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-text)" }}
            >
              <Sparkles size={14} />
              <span>Para pymes en México</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
            >
              Instalamos sistemas de{" "}
              <span style={{ color: "var(--color-primary)" }}>marketing con IA</span>{" "}
              para pymes que ya no quieren improvisar.
            </h1>

            <p
              className="text-lg sm:text-xl text-text-muted mb-8 max-w-lg"
              style={{ color: "var(--color-text-muted)" }}
            >
              Definimos tu vibra de marca, ordenamos tu mensaje y activamos un funnel
              mínimo viable para atraer y convertir mejores leads.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenForm}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
              >
                Agenda tu diagnóstico
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onScrollToPackages}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium transition-all duration-200 border-2"
                style={{
                  borderColor: "var(--color-accent)",
                  color: "var(--color-text)",
                  backgroundColor: "transparent",
                }}
              >
                Conoce el Vibe Starter
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="order-1 lg:order-2 relative">
            <div
              className="relative rounded-2xl p-6 sm:p-8"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              {/* Abstract system visualization */}
              <div className="space-y-4">
                {/* Card 1 */}
                <div
                  className="p-4 rounded-xl flex items-center gap-4"
                  style={{ backgroundColor: "var(--color-bg)" }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    <span className="text-lg">🎯</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-3 w-32 rounded mb-2" style={{ backgroundColor: "var(--color-accent)" }}></div>
                    <div className="h-2 w-24 rounded" style={{ backgroundColor: "var(--color-accent)", opacity: 0.5 }}></div>
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  className="p-4 rounded-xl flex items-center gap-4"
                  style={{ backgroundColor: "var(--color-bg)" }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    <span className="text-lg">⚡</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-3 w-28 rounded mb-2" style={{ backgroundColor: "var(--color-accent)" }}></div>
                    <div className="h-2 w-20 rounded" style={{ backgroundColor: "var(--color-accent)", opacity: 0.5 }}></div>
                  </div>
                </div>

                {/* Card 3 */}
                <div
                  className="p-4 rounded-xl flex items-center gap-4"
                  style={{ backgroundColor: "var(--color-bg)" }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    <span className="text-lg">📈</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-3 w-24 rounded mb-2" style={{ backgroundColor: "var(--color-accent)" }}></div>
                    <div className="h-2 w-28 rounded" style={{ backgroundColor: "var(--color-accent)", opacity: 0.5 }}></div>
                  </div>
                </div>

                {/* Connection lines */}
                <div className="absolute top-1/2 right-8 w-px h-16" style={{ backgroundColor: "var(--color-primary)", opacity: 0.3 }}></div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
              >
                Sistema activo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
