import { trustSignals } from "../data/content";

export default function TrustBar() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 border-y" style={{ borderColor: "var(--color-accent)", backgroundColor: "var(--color-surface)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-text-muted">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--color-primary)" }}
              ></span>
              <span>{signal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
