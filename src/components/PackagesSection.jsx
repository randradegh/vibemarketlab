import { useState, useEffect } from "react";
import { Check, Zap, ArrowRight } from "lucide-react";
import { packageItems } from "../data/content";

export default function PackagesSection({ onOpenForm }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById("paquetes");
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="paquetes" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{ backgroundColor: "var(--color-accent)", color: "var(--color-text)" }}
          >
            Paquetes
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Elige por dónde empezar
          </h2>
          <p 
            className="text-lg text-text-muted max-w-xl mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            Dos opciones para diferentes etapas. Ambas te llevan a resultados reales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packageItems.map((pkg, idx) => (
            <div
              key={pkg.id}
              className={`relative group p-6 sm:p-8 rounded-2xl transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } ${pkg.popular ? "ring-2" : ""}`}
              style={{
                backgroundColor: "var(--color-surface)",
                ringColor: pkg.popular ? "var(--color-primary)" : "transparent",
                transitionDelay: `${idx * 150}ms`,
              }}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5"
                  style={{ backgroundColor: "var(--color-primary)", color: "white" }}
                >
                  <Zap size={12} />
                  <span>Más elegido</span>
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
                className="text-text-muted mb-6 leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {pkg.description}
              </p>

              {/* Duration */}
              <div className="flex items-center gap-2 mb-6 text-sm">
                <span style={{ color: "var(--color-text)" }}>⏱</span>
                <span style={{ color: "var(--color-text-muted)" }}>{pkg.duration}</span>
              </div>

              {/* Includes */}
              <div className="mb-6">
                <h4
                  className="text-sm font-semibold mb-4"
                  style={{ color: "var(--color-text)" }}
                >
                  Qué incluye:
                </h4>
                <ul className="space-y-3">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: "var(--color-accent)" }}
                      >
                        <Check
                          size={12}
                          color="var(--color-primary)"
                          strokeWidth={3}
                        />
                      </div>
                      <span style={{ color: "var(--color-text-muted)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* For who */}
              <div
                className="p-4 rounded-xl text-sm mb-6"
                style={{ backgroundColor: "var(--color-bg)" }}
              >
                <span style={{ color: "var(--color-text-muted)" }}>{pkg.forWho}</span>
              </div>

              {/* CTA */}
              <button
                onClick={onOpenForm}
                className={`group w-full py-3.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  pkg.popular ? "" : "border-2 hover:bg-accent/30"
                }`}
                style={{
                  backgroundColor: pkg.popular ? "var(--color-primary)" : "transparent",
                  borderColor: "var(--color-primary)",
                  color: pkg.popular ? "white" : "var(--color-primary)",
                }}
              >
                {pkg.cta}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
