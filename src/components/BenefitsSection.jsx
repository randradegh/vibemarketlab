import { useState, useEffect } from "react";
import { Gem, Target, Zap, MessageCircle, Shield } from "lucide-react";
import { benefitItems } from "../data/content";

const iconMap = {
  gem: Gem,
  target: Target,
  zap: Zap,
  messageCircle: MessageCircle,
  shield: Shield,
};

export default function BenefitsSection() {
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
    
    const section = document.getElementById("beneficios");
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="beneficios" 
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-text) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{ backgroundColor: "var(--color-accent)", color: "var(--color-text)" }}
          >
            Beneficios
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Lo que ganas con un sistema
          </h2>
          <p 
            className="text-lg text-text-muted max-w-xl mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            No entregamos features. Entregamos resultados que impactan tu negocio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                className={`group p-6 sm:p-8 rounded-2xl transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ 
                  backgroundColor: "var(--color-surface)",
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  <Icon size={26} color="var(--color-primary)" strokeWidth={1.5} />
                </div>
                <h3 
                  className="text-lg font-semibold mb-3"
                  style={{ color: "var(--color-text)" }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
