import { useState, useEffect } from "react";
import { Search, Sparkles, Rocket } from "lucide-react";
import { methodSteps } from "../data/content";

const iconMap = [Search, Sparkles, Rocket];

export default function MethodSection() {
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
    
    const section = document.getElementById("metodo");
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="metodo" 
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{ backgroundColor: "var(--color-accent)", color: "var(--color-text)" }}
          >
            Nuestro proceso
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            De cero a clientes en 3 pasos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Linea conectora */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px" style={{ backgroundColor: "var(--color-accent)" }} />
          
          {methodSteps.map((step, index) => {
            const Icon = iconMap[index];
            return (
              <div 
                key={index}
                className={`relative text-center ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Step number */}
                <div className="flex justify-center mb-6">
                  <div 
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg z-10 transition-transform hover:scale-110"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    <span className="text-2xl font-display font-bold text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
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
                  className="text-text-muted text-sm leading-relaxed px-4"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
