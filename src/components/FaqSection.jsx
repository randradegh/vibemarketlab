import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "../data/content";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{ backgroundColor: "var(--color-accent)", color: "var(--color-text)" }}
          >
            FAQ
          </span>
          <h2 
            className="text-3xl sm:text-4xl font-display font-semibold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Preguntas frecuentes
          </h2>
          <p 
            className="text-lg text-text-muted"
            style={{ color: "var(--color-text-muted)" }}
          >
            Resolvemos tus dudas antes de que preguntes.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl overflow-hidden transition-all duration-200"
                style={{ backgroundColor: "var(--color-bg)" }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-accent/20 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span 
                    className="font-medium pr-4 text-sm sm:text-base"
                    style={{ color: "var(--color-text)" }}
                  >
                    {item.question}
                  </span>
                  {isOpen ? (
                    <Minus
                      size={18}
                      style={{ color: "var(--color-primary)", flexShrink: 0 }}
                    />
                  ) : (
                    <Plus
                      size={18}
                      style={{ color: "var(--color-text-muted)", flexShrink: 0 }}
                    />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p 
                    className="px-5 pb-5 text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
