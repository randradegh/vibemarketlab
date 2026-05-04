import { useState, useEffect } from "react";
import { Users, Sparkles, Clock, Layout, Eye, Lightbulb } from "lucide-react";
import { problemItems } from "../data/content";

const iconMap = {
  users: Users,
  sparkles: Sparkles,
  clock: Clock,
  layout: Layout,
  eye: Eye,
  lightbulb: Lightbulb,
};

export default function ProblemSection() {
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
    
    const section = document.getElementById("problema");
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="problema" 
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5" style={{ backgroundColor: "var(--color-primary)" }} />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            ¿Te suena familiar?
          </h2>
          <p 
            className="text-lg text-text-muted max-w-2xl mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            Estos son los problemas que vemos una y otra vez. Y la buena noticia: tienen solución.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                className={`group p-6 sm:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 ${
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
                  <Icon size={26} color="var(--color-icon-stroke)" strokeWidth={1.5} />
                </div>
                <h3 
                  className="text-lg font-semibold mb-3 group-hover:transition-colors"
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
