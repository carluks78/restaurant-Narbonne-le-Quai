import { SEO, buildFAQSchema } from "../components/SEO";
import { ParallaxHero } from "../components/ParallaxHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { Link } from "react-router";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import heroImage from "../../imports/hero-1.jpg";

const faqs = [
  {
    q: "Les photos présentées sont-elles de vrais plats du restaurant ?",
    a: "Oui, toutes les photos de la galerie représentent nos plats réels, préparés par notre équipe avec des produits frais du marché de Narbonne chaque jour.",
  },
  {
    q: "Vos plats changent-ils selon la saison ?",
    a: "Absolument. Notre carte évolue selon les arrivages et les saisons pour vous garantir les meilleures saveurs méditerranéennes. Poissons, légumes et fruits de saison dictent notre menu.",
  },
  {
    q: "Proposez-vous des options végétariennes ?",
    a: "Oui ! Nous proposons des pizzas végétariennes, des salades fraîches et des plats sans viande. Notre équipe peut adapter certains plats à la demande.",
  },
  {
    q: "Le restaurant propose-t-il des planches à partager ?",
    a: "Oui, nos planches charcuterie-fromage et nos tapas sont très populaires pour l'apéritif ou pour partager entre amis en terrasse face au canal.",
  },
];

const galleries = [
  {
    title: "Spécialités Fruits de Mer",
    description: "Assiettes de la mer, gambas grillées, Saint-Jacques — arrivage quotidien",
    images: [
      { url: "/restaurant-narbonne-assiette-mer-poisson-gambas.jpg", alt: "Assiette fruits de mer gambas Saint-Jacques restaurant Narbonne Le Quai" },
      { url: "/restaurant-narbonne-assiette-mixte-grillades-fruits-mer.jpg", alt: "Assiette mixte grillade fruits de mer restaurant Narbonne" },
      { url: "/restaurant-narbonne-pates-crevettes-chorizo.jpg", alt: "Pâtes fraîches crevettes chorizo restaurant Le Quai Narbonne" },
    ],
  },
  {
    title: "Pizzas Artisanales",
    description: "Pizzas maison, pâtes fraîches — tradition italienne et saveurs du sud",
    images: [
      { url: "/restaurant-narbonne-pizza-gastronomique-roquette.jpg", alt: "Pizza artisanale roquette parmesan mozzarella restaurant Narbonne" },
    ],
  },
  {
    title: "Planches &amp; Tapas",
    description: "Planches charcuterie, fromage, moules gratinées — parfait pour l'apéritif",
    images: [
      { url: "/restaurant-narbonne-planche-charcuterie-fromage.jpg", alt: "Planche charcuterie fromage terrasse canal restaurant Narbonne" },
      { url: "/restaurant-narbonne-planche-aperitif-tapas.jpg", alt: "Planche apéritif tapas charcuterie à partager restaurant Le Quai" },
      { url: "/restaurant-narbonne-moules-gratinees.jpg", alt: "Moules gratinées beurre ail persil restaurant Narbonne" },
    ],
  },
  {
    title: "Desserts Maison",
    description: "Café gourmand, crème brûlée, mousse au chocolat — douceurs faites maison",
    images: [
      { url: "/restaurant-narbonne-cafe-gourmand-dessert.jpg", alt: "Café gourmand desserts maison restaurant Le Quai Narbonne" },
    ],
  },
];

export function Gallery() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Galerie Photos Restaurant Le Quai Narbonne | Plats, Terrasse, Ambiance"
        description="Photos du restaurant Le Quai Narbonne : plats cuisine méditerranéenne, fruits de mer, pizzas artisanales, terrasse bord canal de la Robine, ambiance conviviale. Meilleur restaurant Narbonne en images."
        path="/galerie"
        keywords="photos restaurant Narbonne, galerie restaurant Narbonne, restaurant terrasse canal Narbonne photos, plats restaurant Narbonne images, ambiance restaurant Narbonne"
        additionalSchemas={[buildFAQSchema(faqs)]}
      />

      <ParallaxHero
        image={heroImage}
        alt="Restaurant Le Quai Narbonne terrasse canal de la Robine"
        title="Galerie du Restaurant"
        subtitle="Nos plats réels — cuisine méditerranéenne fraîche chaque jour"
        height="55vh"
      />

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl md:text-3xl font-serif mb-4 text-primary">
                <strong>Restaurant Le Quai</strong> — Nos <em>Spécialités Méditerranéennes</em>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Découvrez nos <strong>spécialités</strong> : <em>fruits de mer frais</em>, <strong>poissons grillés</strong>,
                <strong>pizzas artisanales</strong>, <strong>planches à partager</strong>, <strong>desserts maison</strong>.
                Photos authentiques des assiettes servies en <strong>terrasse bord canal de la Robine</strong>.{" "}
                <Link to="/menu" className="text-accent hover:underline">Voir la carte complète →</Link>
              </p>
            </div>
          </ScrollReveal>

          {galleries.map((gallery, i) => (
            <div key={i} className="mb-14 md:mb-20 last:mb-0">
              <ScrollReveal>
                <div className="text-center mb-6 md:mb-8">
                  <h3
                    className="text-xl md:text-2xl font-serif mb-2 text-primary"
                    dangerouslySetInnerHTML={{ __html: gallery.title }}
                  />
                  <p className="text-sm md:text-base text-muted-foreground">{gallery.description}</p>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {gallery.images.map((image, j) => (
                  <ScrollReveal key={j} delay={j * 100}>
                    <div className="relative overflow-hidden group aspect-square bg-secondary rounded-xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-1">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}

          {/* FAQ */}
          <ScrollReveal>
            <div className="mt-14 md:mt-20 max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl mb-6 text-center text-primary">
                Questions sur notre <strong>cuisine</strong>
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

          <ScrollReveal delay={100}>
            <div className="mt-12 md:mt-16 bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl text-center">
              <h2 className="font-serif text-2xl md:text-3xl mb-4 text-accent">
                Venez goûter nos <strong>spécialités</strong>
              </h2>
              <p className="text-sm md:text-base text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
                Réservez votre table au <strong>restaurant Le Quai Narbonne</strong> et découvrez nos
                spécialités de fruits de mer et notre terrasse bord canal.
              </p>
              <Link
                to="/reservation"
                className="inline-block bg-accent text-white px-8 md:px-10 py-3 md:py-4 text-sm md:text-base hover:bg-accent/90 transition-colors rounded-lg"
              >
                Réserver une table
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
