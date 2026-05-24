import { SEO, buildFAQSchema } from "../components/SEO";
import { ParallaxHero } from "../components/ParallaxHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { Link } from "react-router";
import { MapPin, ExternalLink, Clock, Euro, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Quelle est la meilleure saison pour visiter Narbonne ?",
    a: "Narbonne se visite toute l'année. Le printemps (avril-juin) et l'automne (sept-oct) offrent un climat idéal pour les visites culturelles. L'été est parfait pour les plages méditerranéennes à 15 km.",
  },
  {
    q: "Le Canal de la Robine est-il classé UNESCO ?",
    a: "Oui ! Le Canal de la Robine traverse le centre de Narbonne et est classé au Patrimoine Mondial de l'UNESCO depuis 1996, dans le cadre du Canal du Midi. Notre restaurant est situé directement en bord de canal.",
  },
  {
    q: "Combien de temps faut-il pour visiter Narbonne ?",
    a: "Un week-end suffit pour découvrir les principaux sites. Comptez 1h30 pour la cathédrale, 1h pour les Halles, une balade sur le canal, et une pause déjeuner ou dîner au Quai !",
  },
  {
    q: "Y a-t-il des plages proches de Narbonne ?",
    a: "Oui ! Narbonne-Plage et Gruissan sont à seulement 15 km. Des plages de sable fin méditerranéen idéales pour une journée détente. Parfait pour combiner culture, cuisine et mer.",
  },
  {
    q: "Comment se rendre à l'Abbaye de Fontfroide depuis Narbonne ?",
    a: "L'Abbaye de Fontfroide est à 12 km de Narbonne (environ 15 min en voiture). Elle est ouverte toute l'année avec des visites guidées. Prévoyez 2 à 3 heures sur place.",
  },
];

const attractions = [
  {
    name: "Canal de la Robine (UNESCO)",
    description: "Promenade pittoresque le long du canal classé UNESCO, idéal pour une balade avant ou après le dîner. Notre restaurant est situé directement en bord de canal.",
    category: "Nature & Promenade",
    distance: "Devant Le Quai",
    duration: "30-60 min",
    price: "Gratuit",
    link: "https://www.narbonne-tourisme.com",
    mapsLink: "https://maps.google.com/?q=Canal+de+la+Robine+Narbonne",
    image: "https://images.unsplash.com/photo-1591185358113-a05ed895d5a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Cathédrale Saint-Just-et-Saint-Pasteur",
    description: "Monument historique gothique majestueux au cœur de Narbonne, l'une des plus hautes cathédrales de France. Panorama exceptionnel depuis le cloître.",
    category: "Monument Historique",
    distance: "10 min à pied",
    duration: "1h30",
    price: "Gratuit",
    link: "https://www.narbonne.fr",
    mapsLink: "https://maps.google.com/?q=Cathédrale+Saint-Just-et-Saint-Pasteur+Narbonne",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Les Halles de Narbonne",
    description: "Marché couvert emblématique, temple de la gastronomie locale. Producteurs régionaux et spécialités méditerranéennes. Ouvert tous les matins.",
    category: "Gastronomie",
    distance: "5 min à pied",
    duration: "1h",
    price: "Gratuit",
    link: "https://www.halles-narbonne.fr",
    mapsLink: "https://maps.google.com/?q=Halles+de+Narbonne",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Palais des Archevêques",
    description: "Complexe architectural exceptionnel abritant l'hôtel de ville et le musée d'Art et d'Histoire. Visite des collections archéologiques gallo-romaines.",
    category: "Culture & Musée",
    distance: "8 min à pied",
    duration: "2h",
    price: "8€",
    link: "https://www.narbonne.fr",
    mapsLink: "https://maps.google.com/?q=Palais+des+Archevêques+Narbonne",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Abbaye de Fontfroide",
    description: "Abbaye cistercienne remarquablement conservée dans un cadre naturel exceptionnel des Corbières. Visites guidées, expositions et événements culturels.",
    category: "Monument Historique",
    distance: "12 km",
    duration: "2h",
    price: "12€",
    link: "https://www.fontfroide.com",
    mapsLink: "https://maps.google.com/?q=Abbaye+de+Fontfroide+Narbonne",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Réserve Naturelle de Sainte-Lucie",
    description: "Espace naturel protégé entre étangs et Méditerranée, paradis pour ornithologues et amoureux de la nature. Observation des oiseaux migrateurs.",
    category: "Nature",
    distance: "15 km",
    duration: "3h",
    price: "Gratuit",
    link: "https://www.narbonne-tourisme.com",
    mapsLink: "https://maps.google.com/?q=Réserve+Naturelle+Sainte-Lucie+Narbonne",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Plages de Narbonne-Plage &amp; Gruissan",
    description: "Stations balnéaires méditerranéennes à 15 km, parfaites pour une journée détente mer et soleil. Gruissan possède un village pittoresque sur pilotis.",
    category: "Plage & Loisirs",
    distance: "15 km",
    duration: "Demi-journée",
    price: "Gratuit",
    link: "https://www.narbonne-tourisme.com",
    mapsLink: "https://maps.google.com/?q=Narbonne-Plage+Hérault",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
  {
    name: "Route des Vins du Languedoc",
    description: "Caves et domaines viticoles réputés pour dégustations œnologiques. Corbières, Minervois, La Clape — des appellations d'exception à deux pas.",
    category: "Œnotourisme",
    distance: "Variable",
    duration: "Demi-journée",
    price: "Variable",
    link: "https://www.languedoc-wines.com",
    mapsLink: "https://maps.google.com/?q=Route+des+Vins+Corbières+Narbonne",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  },
];

export function VisiterNarbonne() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Visiter Narbonne | Guide Touristique Complet — Sites, Plages, Canal UNESCO"
        description="Guide complet pour visiter Narbonne : cathédrale Saint-Just, canal de la Robine UNESCO, Halles de Narbonne, musées, plages, vignobles. Découvrez les incontournables avec le restaurant Le Quai, en bord de canal."
        path="/visiter-narbonne"
        keywords="visiter Narbonne, tourisme Narbonne, que faire à Narbonne, sites touristiques Narbonne, canal de la Robine Narbonne, cathédrale Narbonne, halles Narbonne, plages Narbonne, Narbonne Plage, patrimoine Narbonne, week-end Narbonne"
        additionalSchemas={[buildFAQSchema(faqs)]}
      />

      <ParallaxHero
        image="https://images.unsplash.com/photo-1730279246188-37e40031c7e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        alt="Vue aérienne de Narbonne ville historique Languedoc"
        title="Visiter Narbonne"
        subtitle="Découvrez les trésors de notre ville méditerranéenne"
        height="65vh"
      />

      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-primary">
                Que faire à <strong>Narbonne</strong> ?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                <strong>Narbonne</strong>, ville d'art et d'histoire au cœur du <em>Languedoc-Roussillon</em>,
                vous réserve des expériences inoubliables. Avant ou après votre <strong>repas au Quai</strong>,
                explorez les <strong>monuments historiques</strong>, les <strong>sites culturels</strong> et les
                beautés naturelles de cette région <em>méditerranéenne</em> exceptionnelle.{" "}
                <a href="https://www.narbonne-tourisme.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Office de Tourisme de Narbonne →
                </a>
              </p>
            </div>
          </ScrollReveal>

          {/* Filtres catégories */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {Array.from(new Set(attractions.map((a) => a.category))).map((cat) => (
                <span key={cat} className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
                  {cat}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Grille attractions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
            {attractions.map((attraction, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group rounded-xl border border-border/30 hover:border-accent/20 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name.replace("&amp;", "&")}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 text-xs font-medium rounded-full shadow-md">
                      {attraction.category}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="p-5 md:p-6">
                    <h3
                      className="font-serif text-lg md:text-xl mb-2 text-primary group-hover:text-accent transition-colors"
                      dangerouslySetInnerHTML={{ __html: attraction.name }}
                    />
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{attraction.description}</p>

                    <div className="space-y-1.5 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{attraction.distance}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{attraction.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Euro className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{attraction.price}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                      <a
                        href={attraction.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-accent/10 text-accent px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-accent hover:text-white transition-all"
                      >
                        <MapPin className="w-3 h-3" />
                        Google Maps
                      </a>
                      <a
                        href={attraction.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 transition-colors text-xs font-medium"
                      >
                        En savoir plus <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Conseils */}
          <ScrollReveal>
            <div className="bg-secondary/30 p-8 md:p-12 rounded-2xl mb-14 md:mb-16">
              <h2 className="font-serif text-2xl md:text-3xl mb-6 text-center text-primary">
                Nos <strong>conseils</strong> pour visiter Narbonne
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {[
                  {
                    emoji: "🍽️",
                    title: "Combinez culture et cuisine",
                    text: "Le Quai est idéalement situé à 5 min à pied des principaux sites. Après la Cathédrale ou une balade sur le Canal, réservez votre table pour un déjeuner ou dîner avec vue sur le quai.",
                  },
                  {
                    emoji: "📅",
                    title: "Meilleure période",
                    text: "Le printemps et l'automne offrent un climat idéal. L'été est parfait pour les plages. En hiver, découvrez Narbonne en toute tranquillité — notre terrasse chauffée vous attend.",
                  },
                  {
                    emoji: "🚗",
                    title: "Se déplacer",
                    text: "Le centre-ville se visite à pied. Pour les plages et l'Abbaye de Fontfroide, prenez la voiture. Parking public à 200m du restaurant (Cinéma Colisée).",
                  },
                  {
                    emoji: "🍷",
                    title: "Œnotourisme",
                    text: "La région Narbonnaise est réputée pour ses vins d'appellation (Corbières, La Clape, Minervois). Découvrez notre carte des vins, sélectionnée parmi les meilleurs domaines locaux.",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="font-serif text-lg md:text-xl mb-2 text-primary">{item.emoji} {item.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal>
            <div className="max-w-3xl mx-auto mb-14">
              <h2 className="font-serif text-2xl md:text-3xl mb-6 text-center text-primary">
                Questions sur <strong>Narbonne</strong>
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

          {/* Ressources officielles */}
          <ScrollReveal>
            <div className="mb-10 p-6 bg-white shadow-sm rounded-xl border border-border/30">
              <h3 className="font-serif text-xl mb-4 text-primary text-center">Ressources officielles</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { label: "Office de Tourisme de Narbonne", href: "https://www.narbonne-tourisme.com" },
                  { label: "Tourisme Aude", href: "https://www.audetourisme.com" },
                  { label: "Région Occitanie", href: "https://www.laregion.fr" },
                  { label: "RC Narbonne (Rugby)", href: "https://www.rcnarbonne.com" },
                  { label: "Canal du Midi UNESCO", href: "https://www.canaldumidi.com" },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm hover:underline"
                  >
                    {link.label}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="bg-primary text-primary-foreground p-10 md:p-14 rounded-2xl text-center">
              <h2 className="font-serif text-2xl md:text-3xl mb-4 text-accent">
                Après votre visite, rejoignez-nous au Quai
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto text-sm md:text-base">
                Prolongez votre expérience narbonnaise avec une pause au restaurant en bord de canal.
                Vue imprenable, cuisine raffinée et ambiance élégante.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/reservation"
                  className="inline-block bg-accent text-white px-8 md:px-10 py-3 md:py-4 text-sm md:text-base hover:bg-accent/90 transition-colors rounded-lg"
                >
                  Réserver votre table
                </Link>
                <Link
                  to="/menu"
                  className="inline-block border-2 border-accent text-accent px-8 md:px-10 py-3 md:py-4 text-sm md:text-base hover:bg-accent hover:text-white transition-colors rounded-lg"
                >
                  Voir le menu
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
