import { SEO, buildFAQSchema } from "../components/SEO";
import { ParallaxHero } from "../components/ParallaxHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { MapPin, Phone, Mail, Clock, Navigation, Utensils, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

const faqs = [
  {
    q: "Où se garer pour venir au restaurant ?",
    a: "Le parking du Cinéma Le Colisée est à 200m (gratuit après 19h). Le parking Centre-ville est à 400m. En soirée, des places gratuites sont disponibles le long du quai.",
  },
  {
    q: "Le restaurant est-il accessible en transports en commun ?",
    a: "Oui ! Les lignes 1 et 3 du réseau Citibus Narbonne s'arrêtent au Quai Vallière. La gare SNCF de Narbonne est à 15 min à pied (ligne TGV Paris-Barcelone directe).",
  },
  {
    q: "Acceptez-vous les réservations de groupe ?",
    a: "Oui, nous accueillons des groupes jusqu'à 30 personnes, avec possibilité de privatisation. Contactez-nous par téléphone ou email pour organiser votre événement (anniversaire, séminaire, soirée match).",
  },
  {
    q: "Le restaurant est-il accessible aux personnes à mobilité réduite ?",
    a: "Oui, notre restaurant est accessible PMR. L'entrée principale et les toilettes sont adaptées. La terrasse est de plain-pied avec le quai.",
  },
  {
    q: "Quelle est l'adresse exacte pour le GPS ?",
    a: "Entrez '12 Quai Vallière, 11100 Narbonne' dans votre GPS. Le restaurant se trouve sur le quai principal, face au canal de la Robine, à 5 min des Halles de Narbonne.",
  },
];

const pois = [
  {
    name: "Le Quai (Nous sommes ici)",
    distance: "—",
    link: "https://maps.google.com/?q=Le+Quai+Restaurant+12+Quai+Vallière+11100+Narbonne",
    emoji: "📍",
  },
  {
    name: "Halles de Narbonne",
    distance: "5 min à pied",
    link: "https://maps.google.com/?q=Halles+de+Narbonne+11100",
    emoji: "🏪",
  },
  {
    name: "Cathédrale Saint-Just-et-Saint-Pasteur",
    distance: "10 min à pied",
    link: "https://maps.google.com/?q=Cathédrale+Saint-Just-et-Saint-Pasteur+Narbonne",
    emoji: "⛪",
  },
  {
    name: "Palais des Archevêques",
    distance: "8 min à pied",
    link: "https://maps.google.com/?q=Palais+des+Archevêques+Narbonne",
    emoji: "🏛️",
  },
  {
    name: "Canal de la Robine (UNESCO)",
    distance: "Devant le restaurant",
    link: "https://maps.google.com/?q=Canal+de+la+Robine+Narbonne",
    emoji: "🌊",
  },
  {
    name: "Parking Cinéma Le Colisée",
    distance: "2 min à pied",
    link: "https://maps.google.com/?q=Cinéma+Le+Colisée+Narbonne",
    emoji: "🅿️",
  },
];

export function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Contact & Accès Restaurant Le Quai Narbonne | 04 68 90 62 42 · 12 Quai Vallière"
        description="Contactez le restaurant Le Quai à Narbonne : 04 68 90 62 42 · 12 Quai Vallière, 11100 Narbonne. Ouvert 7j/7 dès 09h00. Accès facile depuis le centre-ville, parking public à proximité."
        path="/contact"
        keywords="contact restaurant Narbonne, adresse restaurant Narbonne, téléphone restaurant Narbonne, restaurant Quai Vallière Narbonne, accès parking restaurant Narbonne, réservation téléphone Narbonne, horaires restaurant Narbonne"
        additionalSchemas={[buildFAQSchema(faqs)]}
      />

      <ParallaxHero
        image="https://images.unsplash.com/photo-1713375094006-5a0d705a2c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        alt="Restaurant Le Quai Narbonne salle intérieure ambiance chaleureuse"
        title="Nous Contacter"
        subtitle="Restaurant Le Quai · 12 Quai Vallière · Narbonne"
        height="50vh"
      />

      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-14">
            <div>
              <ScrollReveal>
                <h2 className="font-serif text-2xl md:text-3xl mb-6 md:mb-8 text-primary">
                  <strong>Coordonnées</strong> du Restaurant
                </h2>
              </ScrollReveal>

              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: "Adresse",
                    content: (
                      <address className="text-sm md:text-base text-muted-foreground not-italic">
                        <strong>Le Quai</strong><br />12 Quai Vallière<br />11100 Narbonne, France
                      </address>
                    ),
                    link: "https://maps.google.com/?q=Le+Quai+Restaurant+12+Quai+Vallière+11100+Narbonne",
                    linkLabel: "Ouvrir dans Google Maps",
                  },
                  {
                    icon: Phone,
                    title: "Téléphone",
                    content: (
                      <div>
                        <a href="tel:0468906242" className="text-base md:text-lg text-accent hover:text-accent/80 font-medium">04 68 90 62 42</a>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">Réservations &amp; renseignements</p>
                      </div>
                    ),
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: (
                      <a href="mailto:contact@lequai-narbonne.fr" className="text-sm md:text-base text-accent hover:text-accent/80">
                        contact@lequai-narbonne.fr
                      </a>
                    ),
                  },
                  {
                    icon: Clock,
                    title: "Horaires",
                    content: (
                      <div className="text-sm md:text-base text-muted-foreground">
                        <p><strong>Lundi — Dimanche</strong></p>
                        <p className="text-base md:text-lg font-medium text-accent mt-1">09:00 — 23:00</p>
                        <p className="text-xs md:text-sm mt-2">Service continu · Ouvert 7j/7</p>
                      </div>
                    ),
                  },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 80}>
                    <div className="flex items-start gap-3 md:gap-4 p-4 bg-white shadow-sm rounded-xl hover:shadow-md transition-all border border-border/30 hover:border-accent/20">
                      <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                        <item.icon className="w-5 md:w-6 h-5 md:h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium mb-1 text-sm md:text-base">{item.title}</h3>
                        {item.content}
                        {item.link && (
                          <a href={item.link} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-accent hover:underline mt-2">
                            {item.linkLabel} <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={200}>
                <div className="mt-6 p-5 bg-accent/10 rounded-xl">
                  <h3 className="font-serif text-lg md:text-xl mb-3 flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-accent" />
                    <strong>Informations Pratiques</strong>
                  </h3>
                  <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                    {[
                      "Terrasse chauffée toute l'année",
                      "Accès handicapé PMR",
                      "Parking public à 200m (Cinéma Colisée)",
                      "Options végétariennes &amp; informations allergènes",
                      "Carte bancaire &amp; espèces acceptées",
                      "Wi-Fi gratuit pour les clients",
                      "Diffusion matchs rugby RC Narbonne 🏉",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-accent text-base">✓</span>
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal direction="right">
                <h2 className="font-serif text-2xl md:text-3xl mb-6 md:mb-8 text-primary">
                  <strong>Nous Trouver</strong> à Narbonne
                </h2>
                <div className="bg-secondary h-72 md:h-96 mb-6 rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.8926375967696!2d3.0002448!3d43.1839287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1a9fe01ede04f%3A0x0!2s12+Quai+Valli%C3%A8re%2C+11100+Narbonne!5e0!3m2!1sfr!2sfr!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Restaurant Le Quai Narbonne"
                  />
                </div>

                <div className="bg-white p-5 shadow-sm rounded-xl border border-border/30">
                  <h3 className="font-serif text-lg md:text-xl mb-4 flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-accent" />
                    <strong>Comment Venir ?</strong>
                  </h3>
                  <div className="space-y-3 text-sm md:text-base text-muted-foreground">
                    {[
                      { emoji: "🚗", label: "En voiture", text: "Parking Cinéma Le Colisée à 200m (gratuit après 19h) · Parking Centre-ville à 400m" },
                      { emoji: "🚂", label: "En train", text: "Gare SNCF Narbonne à 15 min à pied · Ligne TGV Paris-Barcelone directe" },
                      { emoji: "🚌", label: "En bus", text: "Lignes 1 et 3 Citibus, arrêt Quai Vallière" },
                      { emoji: "🚶", label: "À pied", text: "5 min des Halles · 10 min Cathédrale Saint-Just" },
                    ].map((item, i) => (
                      <div key={i}>
                        <span className="font-medium text-foreground">{item.emoji} {item.label} :</span>
                        <p className="text-xs md:text-sm mt-0.5">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* POIs cliquables */}
          <ScrollReveal>
            <div className="mb-14 md:mb-16">
              <h2 className="font-serif text-2xl md:text-3xl mb-6 text-center text-primary">
                Points d'<strong>Intérêt</strong> à Proximité
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {pois.map((poi, i) => (
                  <a
                    key={i}
                    href={poi.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border/50 shadow-sm hover:shadow-md hover:border-accent/30 transition-all group"
                  >
                    <span className="text-2xl">{poi.emoji}</span>
                    <div>
                      <p className="font-medium text-sm text-primary group-hover:text-accent transition-colors">{poi.name}</p>
                      <p className="text-xs text-muted-foreground">{poi.distance}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-accent ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="font-serif text-2xl md:text-3xl mb-6 text-center text-primary">
                Questions <strong>pratiques</strong>
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl overflow-hidden border border-border/50 shadow-sm">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
                    >
                      <span className="font-medium text-sm md:text-base text-primary pr-4">{faq.q}</span>
                      {openFaq === i ? <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />}
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5">
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl text-center">
              <h2 className="font-serif text-2xl md:text-3xl mb-4 text-accent">
                Une <strong>Question</strong> ? Nous sommes là
              </h2>
              <p className="text-sm md:text-base text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                Notre équipe est à votre disposition pour toute demande de réservation de groupe (jusqu'à 30 personnes),
                événement privé ou soirée match rugby.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <a href="tel:0468906242" className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 md:px-8 py-3 hover:bg-accent/90 transition-colors rounded-lg text-sm md:text-base">
                  <Phone className="w-4 h-4" />Appeler maintenant
                </a>
                <Link to="/reservation" className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent px-6 md:px-8 py-3 hover:bg-accent hover:text-white transition-colors rounded-lg text-sm md:text-base">
                  Réserver en ligne
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
