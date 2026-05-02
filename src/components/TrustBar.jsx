import { Check } from "lucide-react";
import { trustSignals } from "../data/content";

export default function TrustBar() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustSignals.map((signal, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3"
            >
              <div 
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                <Check size={12} color="white" strokeWidth={4} />
              </div>
              <span 
                className="text-sm font-medium"
                style={{ color: "var(--color-text)" }}
              >
                {signal}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
