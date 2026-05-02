import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/content";

export default function SiteHeader({ onOpenForm }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      style={{ 
        backgroundColor: isScrolled ? "rgba(249, 248, 245, 0.95)" : "transparent" 
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span
              className="text-xl sm:text-2xl font-display font-semibold tracking-tight"
              style={{ color: "var(--color-text)" }}
            >
              VibeMarket<span style={{ color: "var(--color-primary)" }}>Lab</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
                style={{ color: "var(--color-text-muted)" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={onOpenForm}
              className="px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "white",
              }}
            >
              Agenda tu diagnóstico
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent/30 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} color="var(--color-text)" />
            ) : (
              <Menu size={24} color="var(--color-text)" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface border-t border-accent/30 py-4 rounded-b-xl">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium px-2 hover:text-primary transition-colors"
                  style={{ color: "var(--color-text-muted)" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenForm();
                }}
                className="mt-2 mx-2 px-5 py-3 rounded-lg font-medium text-sm transition-all"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                }}
              >
                Agenda tu diagnóstico
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
