import { Search, Sparkles, Rocket } from "lucide-react";
import { methodSteps } from "../data/content";

const iconMap = [Search, Sparkles, Rocket];

export default function MethodSection() {
  return (
    <section id="metodo" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Nuestro método
          </h2>
          <p
            className="text-lg text-text-muted max-w-2xl mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            Un proceso simple y accionable para transformar tu marketing en 3 pasos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {methodSteps.map((step, index) => {
            const Icon = iconMap[index];
            return (
              <div key={index} className="relative">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="text-5xl font-display font-bold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {step.number}
                  </span>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <Icon size={20} color="white" />
                  </div>
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-text)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-text-muted"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {step.description}
                </p>

                {/* Connector line */}
                {index < methodSteps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-8 -right-6 lg:-right-8 w-full h-px"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    ></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
