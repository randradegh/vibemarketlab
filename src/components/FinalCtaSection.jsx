import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function FinalCtaSection({ onOpenForm }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.getElementById("final-cta");
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="final-cta" 
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative">
        <h2 
          className={`text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ color: "white" }}
        >
          ¿Listo para que tu marca destaque?
        </h2>
        <p 
          className={`text-lg mb-8 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          El diagnóstico es gratuito y sin compromiso. En 45 minutos sales con claridad sobre qué hacer.
        </p>
        <button
          onClick={onOpenForm}
          className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            backgroundColor: "white",
            color: "var(--color-primary)",
          }}
        >
          Agendar mi diagnóstico ahora
          <ArrowRight size={20} />
        </button>
        <p 
          className={`mt-6 text-sm transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          Sin spam. Sin letra chica. Solo estrategia.
        </p>
      </div>
    </section>
  );
}
