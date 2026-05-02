import { Check, Zap } from "lucide-react";
import { packageItems } from "../data/content";

export default function PackagesSection({ onOpenForm }) {
  return (
    <section id="paquetes" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Elige tu punto de entrada
          </h2>
          <p
            className="text-lg text-text-muted max-w-2xl mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            Dos opciones diseñadas para diferentes etapas. Ambas te llevan a resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packageItems.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                pkg.popular ? "ring-2" : ""
              }`}
              style={{
                backgroundColor: "var(--color-surface)",
                ringColor: pkg.popular ? "var(--color-primary)" : "transparent",
              }}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium flex items-center gap-1"
                  style={{ backgroundColor: "var(--color-primary)", color: "white" }}
                >
                  <Zap size={12} />
                  <span>Más popular</span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3
                  className="text-2xl font-display font-semibold mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  {pkg.name}
                </h3>
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--color-primary)" }}
                >
                  {pkg.tagline}
                </p>
              </div>

              {/* Description */}
              <p
                className="text-text-muted mb-6"
                style={{ color: "var(--color-text-muted)" }}
              >
                {pkg.description}
              </p>

              {/* Duration */}
              <div className="flex items-center gap-2 mb-6 text-sm">
                <span style={{ color: "var(--color-text-muted)" }}>⏱</span>
                <span style={{ color: "var(--color-text-muted)" }}>{pkg.duration}</span>
              </div>

              {/* Includes */}
              <div className="mb-6">
                <h4
                  className="text-sm font-semibold mb-3"
                  style={{ color: "var(--color-text)" }}
                >
                  Qué incluye:
                </h4>
                <ul className="space-y-2">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check
                        size={16}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: "var(--color-primary)" }}
                      />
                      <span style={{ color: "var(--color-text-muted)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* For who */}
              <div
                className="p-3 rounded-lg text-sm mb-6"
                style={{ backgroundColor: "var(--color-bg)" }}
              >
                <span style={{ color: "var(--color-text-muted)" }}>{pkg.forWho}</span>
              </div>

              {/* CTA */}
              <button
                onClick={onOpenForm}
                className={`w-full py-3.5 rounded-lg font-medium transition-all duration-200 hover:opacity-90 ${
                  pkg.popular ? "" : "border-2"
                }`}
                style={{
                  backgroundColor: pkg.popular ? "var(--color-primary)" : "transparent",
                  borderColor: "var(--color-primary)",
                  color: pkg.popular ? "white" : "var(--color-primary)",
                }}
              >
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
