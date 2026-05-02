import { useState } from "react";
import { X, Send } from "lucide-react";

export default function LeadFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    whatsapp: "",
    reto: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual endpoint
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleClose = () => {
    setFormData({
      nombre: "",
      empresa: "",
      email: "",
      whatsapp: "",
      reto: "",
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div
        className="relative w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 rounded-lg transition-colors hover:bg-accent"
          aria-label="Cerrar"
        >
          <X size={20} color="var(--color-text-muted)" />
        </button>

        {isSubmitted ? (
          // Success state
          <div className="text-center py-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              <Send size={24} color="var(--color-primary)" />
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--color-text)" }}
            >
              Gracias!
            </h3>
            <p
              className="text-text-muted mb-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              Tu solicitud fue recibida. Te contactaremos en breve para agendar tu diagnóstico.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 rounded-lg font-medium transition-colors"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
              }}
            >
              Cerrar
            </button>
          </div>
        ) : (
          // Form
          <>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "var(--color-text)" }}
            >
              Agenda tu diagnóstico
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: "var(--color-text-muted)" }}
            >
              Completa el formulario y te contactaremos para agendar tu llamada.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "var(--color-text)" }}
                >
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                  style={{
                    borderColor: "var(--color-accent)",
                    backgroundColor: "var(--color-bg)",
                    color: "var(--color-text)",
                  }}
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="empresa"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "var(--color-text)" }}
                >
                  Empresa *
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  required
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                  style={{
                    borderColor: "var(--color-accent)",
                    backgroundColor: "var(--color-bg)",
                    color: "var(--color-text)",
                  }}
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "var(--color-text)" }}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                  style={{
                    borderColor: "var(--color-accent)",
                    backgroundColor: "var(--color-bg)",
                    color: "var(--color-text)",
                  }}
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "var(--color-text)" }}
                >
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                  style={{
                    borderColor: "var(--color-accent)",
                    backgroundColor: "var(--color-bg)",
                    color: "var(--color-text)",
                  }}
                  placeholder="+52 55 1234 5678"
                />
              </div>

              <div>
                <label
                  htmlFor="reto"
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "var(--color-text)" }}
                >
                  Cuál es tu principal reto hoy? *
                </label>
                <textarea
                  id="reto"
                  name="reto"
                  required
                  rows={3}
                  value={formData.reto}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border transition-colors focus:outline-none focus:ring-2 resize-none"
                  style={{
                    borderColor: "var(--color-accent)",
                    backgroundColor: "var(--color-bg)",
                    color: "var(--color-text)",
                  }}
                  placeholder="Ej: No genero suficientes leads, no tengo consistencia en mis redes..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg font-medium transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
              >
                {isSubmitting ? "Enviando..." : "Solicitar diagnóstico"}
              </button>

              <p
                className="text-xs text-center"
                style={{ color: "var(--color-text-muted)" }}
              >
                Tus datos están seguros. No spam.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
