import { BarChart3, Palette, MessageSquare, Cpu, GitBranch } from "lucide-react";
import { problemItems } from "../data/content";

const iconMap = {
  barChart: BarChart3,
  palette: Palette,
  messageSquare: MessageSquare,
  cpu: Cpu,
  gitBranch: GitBranch,
};

export default function ProblemSection() {
  return (
    <section id="problema" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Suena familiar?
          </h2>
          <p
            className="text-lg text-text-muted max-w-2xl mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            Estos son los problemas que vemos una y otra vez en pymes que quieren
            profesionalizar su marketing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                className="p-6 rounded-xl transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: "var(--color-surface)" }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  <Icon size={24} color="var(--color-primary)" />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm"
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
