import { ArrowRight } from "lucide-react";

export default function FinalCtaSection({ onOpenForm }) {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-6"
          style={{ color: "var(--color-text)" }}
        >
          Listo para ordennar tu marketing?
        </h2>
        <p
          className="text-lg text-text-muted mb-8"
          style={{ color: "var(--color-text-muted)" }}
        >
          El diagnóstico es gratuito y sin compromiso. En 45 minutos sales con claridad sobre qué hacer.
        </p>
        <button
          onClick={onOpenForm}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "white",
          }}
        >
          Agendar mi diagnóstico ahora
          <ArrowRight size={20} />
        </button>
        <p
          className="mt-4 text-sm"
          style={{ color: "var(--color-text-muted)" }}
        >
          Sin spam. Sin letra chica. Solo estrategia.
        </p>
      </div>
    </section>
  );
}
