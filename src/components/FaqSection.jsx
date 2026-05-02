import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqItems } from "../data/content";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-4"
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
                style={{ backgroundColor: "var(--color-surface)" }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-5 flex items-center justify-between text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-medium pr-4"
                    style={{ color: "var(--color-text)" }}
                  >
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp
                      size={20}
                      style={{ color: "var(--color-primary)", flexShrink: 0 }}
                    />
                  ) : (
                    <ChevronDown
                      size={20}
                      style={{ color: "var(--color-text-muted)", flexShrink: 0 }}
                    />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p
                    className="px-5 pb-5 text-sm"
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
