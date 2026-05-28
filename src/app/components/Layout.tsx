import { Outlet, Link, useLocation } from "react-router";
import {
  Phone,
  MapPin,
  Menu,
  X,
  Clock,
  ExternalLink,
  Instagram,
  Facebook
} from "lucide-react";
import { Toaster } from "sonner";
import { WhatsAppWidget } from "./WhatsAppWidget";
import { useState, useEffect } from "react";
import logoImage from "../../imports/logolequai.jpg";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [headerSolid, setHeaderSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
      setHeaderSolid(scrolled > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/restaurant", label: "Le Restaurant" },
    { path: "/menu", label: "Menu" },
    { path: "/galerie", label: "Galerie" },
    { path: "/avis", label: "Avis" },
    { path: "/events", label: "Événements 🏉" },
    { path: "/visiter-narbonne", label: "Visiter Narbonne" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Toaster position="top-center" richColors />

      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full bg-accent transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0.5 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${
          headerSolid
            ? "bg-[#2A2A2A] shadow-2xl"
            : "bg-[#2A2A2A]/95 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logoImage}
                alt="Le Quai — Restaurant Narbonne"
                className="h-13 md:h-15 w-auto object-contain rounded-lg transition-opacity group-hover:opacity-90"
              />
            </Link>

            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-xs tracking-wider transition-all rounded-md relative ${
                    location.pathname === link.path
                      ? "text-accent bg-white/5"
                      : "text-white/80 hover:text-white hover:bg-white/8"
                  }`}
                >
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full" />
                  )}
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
  <a
  href="tel:0468906242"
  aria-label="Appeler Le Quai"
  className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-accent text-white hover:bg-accent/90 transition-all"
>
  <Phone className="w-5 h-5" />
</a>

  <Link
    to="/reservation"
    className="hidden md:block bg-accent text-white px-5 py-2.5 text-xs tracking-widest uppercase hover:bg-accent/90 transition-all hover:scale-105 rounded-md shadow-lg shadow-accent/20"
  >
    Réserver
  </Link>

  <button
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="xl:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
    aria-label="Menu"
  >
    {mobileMenuOpen ? (
      <X className="w-6 h-6" />
    ) : (
      <Menu className="w-6 h-6" />
    )}
  </button>
</div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#2A2A2A] border-t border-white/10 shadow-2xl">
            <nav className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center py-3 px-4 rounded-lg transition-colors text-sm ${
                    location.pathname === link.path
                      ? "bg-accent text-white"
                      : "text-white/80 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/reservation"
                className="flex justify-center bg-accent text-white px-4 py-3.5 text-sm rounded-lg hover:bg-accent/90 transition-colors mt-3 tracking-wider"
              >
                Réserver une table
              </Link>
              <a
                href="tel:0468906242"
                className="flex items-center justify-center gap-2 border border-white/20 text-white/80 px-4 py-3 text-sm rounded-lg hover:bg-white/8 transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                04 68 90 62 42
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="pt-20 pb-24 md:pb-0">
        <Outlet />
      </main>

      {/* ─── Footer ──────────────────────────────────────────── */}
      <footer className="bg-[#1E1E1E] text-white border-t border-white/8">
        {/* Top accent strip */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />

        <div className="container mx-auto px-4 py-14">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <img
                src={logoImage}
                alt="Le Quai Narbonne"
                className="h-16 w-auto object-contain rounded-lg mb-4"
              />
              <p className="text-sm text-white/55 leading-relaxed mb-4">
                Brasserie &amp; restaurant au cœur de Narbonne, en bord du canal de la Robine.
                Partenaire officiel du RC Narbonne.
              </p>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-sm ${i < 5 ? "text-accent" : "text-white/20"}`}>★</span>
                ))}
              </div>
              <p className="text-xs text-white/40">4.6/5 · 1 375 avis Google</p>
              {/* Socials */}
{/* Socials */}
<div className="flex items-center gap-3 mt-5">
  <a
    href="https://www.instagram.com/le_quai_restaurant/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram Le Quai"
    className="group w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400 hover:border-transparent transition-all duration-300 hover:scale-110"
  >
    <Instagram className="w-5 h-5" />
  </a>

  <a
    href="https://www.facebook.com/LeQuaiNarbonne/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook Le Quai"
    className="group w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-blue-600 hover:border-transparent transition-all duration-300 hover:scale-110"
  >
    <Facebook className="w-5 h-5" />
  </a>
</div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-accent mb-5 font-medium">Navigation</h4>
              <ul className="space-y-2.5">
                {navLinks.slice(0, 4).map((l) => (
                  <li key={l.path}>
                    <Link
                      to={l.path}
                      className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/40 flex-shrink-0" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More links */}
            <div>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-accent mb-5 font-medium">Informations</h4>
              <ul className="space-y-2.5">
                {navLinks.slice(4).map((l) => (
                  <li key={l.path}>
                    <Link
                      to={l.path}
                      className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/40 flex-shrink-0" />
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/reservation"
                    className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5 font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    Réserver une table
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-accent mb-5 font-medium">Contact &amp; Accès</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <a
                    href="https://maps.google.com/?q=Le+Quai+Restaurant+12+Quai+Vallière+11100+Narbonne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/55 hover:text-white transition-colors leading-relaxed"
                  >
                    12 Quai Vallière<br />11100 Narbonne
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <a href="tel:0468906242" className="text-sm text-white/55 hover:text-white transition-colors">
                    04 68 90 62 42
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-white/55">
                    <p>Ouvert du Lundi au Samedi</p>
                    <p>de 09h00 à 14h00</p>
                    <p>de 19h30 à 22h00</p>
                    <p>Mercredi – Fermé</p>
                    <p>Dimanche de 10h00 à 14h00</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Le+Quai+Restaurant+12+Quai+Vallière+11100+Narbonne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 transition-colors border border-accent/30 px-3 py-1.5 rounded-md hover:bg-accent/8"
                >
                  <MapPin className="w-3 h-3" />
                  Voir sur Google Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Restaurant Le Quai Narbonne · 12 Quai Vallière · 11100 Narbonne
            </p>
            <div className="flex items-center gap-5 text-xs text-white/30">
              <a
                href="https://www.narbonne-tourisme.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors flex items-center gap-1"
              >
                Office de Tourisme Narbonne
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <a
                href="https://www.rcnarbonne.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors flex items-center gap-1"
              >
                RC Narbonne
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppWidget />
    </div>
  );
}
