export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span
                className="text-xl font-display font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                VibeMarket<span style={{ color: "var(--color-primary)" }}>Lab</span>
              </span>
            </a>
            <p
              className="text-sm max-w-sm mb-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              Instalamos sistemas de marketing con IA para pymes en México. 
              Empieza con un Diagnóstico Flash o activa tu primer Vibe Starter.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-sm font-semibold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Enlaces
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#metodo"
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Método
                </a>
              </li>
              <li>
                <a
                  href="#paquetes"
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Paquetes
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Contacto
            </h4>
            <ul className="space-y-2">
              <li className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                México
              </li>
              <li className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                hello@vibemarketing.mx
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--color-accent)" }}
        >
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            © {currentYear} VibeMarket Lab. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm transition-colors hover:opacity-70" style={{ color: "var(--color-text-muted)" }}>
              Privacidad
            </a>
            <a href="#" className="text-sm transition-colors hover:opacity-70" style={{ color: "var(--color-text-muted)" }}>
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
