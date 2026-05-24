import { SEO, buildFAQSchema } from "../components/SEO";
import { ParallaxHero } from "../components/ParallaxHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { Link } from "react-router";
import { Star, Award, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Comment laisser un avis sur Google pour Le Quai ?",
    a: "Recherchez 'Restaurant Le Quai Narbonne' sur Google Maps, cliquez sur 'Donner un avis' et notez votre expérience. Vos retours nous aident beaucoup et guident les autres clients !",
  },
  {
    q: "La note de 4.6/5 est-elle vérifiée ?",
    a: "Oui, notre note de 4.6/5 provient de 1 375 avis Google vérifiés. Ces avis sont laissés par de vrais clients après leur visite et ne peuvent pas être falsifiés.",
  },
  {
    q: "Est-il conseillé de réserver à l'avance ?",
    a: "Oui, surtout le week-end et les soirs de match. Notre terrasse avec vue sur le canal est très prisée. Réservez en ligne ou appelez le 04 68 90 62 42.",
  },
  {
    q: "Le restaurant est-il adapté aux groupes ?",
    a: "Absolument ! Nous accueillons des groupes jusqu'à 30 personnes (salle privatisable). Contactez-nous à l'avance pour les grands groupes, anniversaires ou événements d'entreprise.",
  },
  {
    q: "Quel est le meilleur moment pour venir profiter de la terrasse ?",
    a: "En soirée pour les couchers de soleil sur le canal, ou en déjeuner par beau temps. Notre terrasse est chauffée et disponible toute l'année.",
  },
];

const reviews = [
  {
    author: "Marie L.",
    date: "Il y a 2 semaines",
    rating: 5,
    text: "Une expérience culinaire exceptionnelle au Quai ! L'assiette signature était divine, la présentation soignée et les saveurs parfaitement équilibrées. La terrasse offre une vue magnifique sur le quai Vallière. Service impeccable et attentionné. Meilleur restaurant de Narbonne, je recommande vivement !",
  },
  {
    author: "Thomas B.",
    date: "Il y a 1 mois",
    rating: 5,
    text: "Meilleur restaurant de Narbonne sans hésitation. Le tartare de thon rouge est incroyable, d'une fraîcheur remarquable. L'ambiance est élégante sans être guindée. Parfait pour un dîner romantique ou un repas d'affaires. Cuisine française au top niveau, vue canal superbe.",
  },
  {
    author: "Sophie M.",
    date: "Il y a 1 mois",
    rating: 5,
    text: "Quelle belle découverte ! Nous avons adoré la daurade fraîche et le café gourmand était un délice. Le personnel est aux petits soins et de très bon conseil sur les vins du Languedoc. Cadre raffiné et vue superbe sur le Quai.",
  },
  {
    author: "Jean-Pierre D.",
    date: "Il y a 2 mois",
    rating: 4,
    text: "Très bonne table. Les plats sont excellents et bien présentés. La terrasse est un vrai plus, surtout en soirée avec la vue sur le canal de la Robine. Carte des vins intéressante avec de beaux crus du Languedoc.",
  },
  {
    author: "Isabelle R.",
    date: "Il y a 2 mois",
    rating: 5,
    text: "Un restaurant qui mérite largement sa réputation ! Le foie gras maison est exceptionnel, l'entrecôte parfaitement cuite. L'emplacement en bord de quai est idéal pour un repas romantique. Nous y retournons régulièrement et n'avons jamais été déçus.",
  },
  {
    author: "Alexandre V.",
    date: "Il y a 3 mois",
    rating: 5,
    text: "Cuisine raffinée, produits de qualité locaux, cadre magnifique face au quai Vallière. La sangria maison est excellente. Personnel souriant et professionnel. Un rapport qualité-prix parfait pour ce niveau de cuisine.",
  },
  {
    author: "Céline F.",
    date: "Il y a 3 mois",
    rating: 5,
    text: "Repas absolument délicieux ! Les seiches à la plancha étaient fondantes et savoureuses. Ambiance chaleureuse et accueillante. La terrasse chauffée permet de profiter de la vue même en hiver. Bravo au chef !",
  },
  {
    author: "Laurent K.",
    date: "Il y a 4 mois",
    rating: 4,
    text: "Belle adresse à Narbonne. Les tapas en entrée sont parfaits pour partager. Le steak de thon mariné est une tuerie culinaire. Bon choix de cocktails. Vue imprenable sur le canal depuis la terrasse. Réservation recommandée.",
  },
];

export function Reviews() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const averageRating = 4.6;
  const totalReviews = 1375;

  return (
    <>
      <SEO
        title="Avis Clients Restaurant Le Quai Narbonne | 4.6/5 · 1 375 Avis Google Vérifiés"
        description="1 375 avis Google vérifiés, note 4.6/5 pour le restaurant Le Quai à Narbonne. Meilleur restaurant Narbonne selon nos clients : cuisine raffinée, terrasse vue canal, service d'exception. Lisez les témoignages."
        path="/avis"
        keywords="avis restaurant Narbonne, meilleur restaurant Narbonne avis, restaurant Narbonne Google avis, restaurant bien noté Narbonne, recommandé Narbonne restaurant, témoignages restaurant Narbonne"
        additionalSchemas={[buildFAQSchema(faqs), {
          "@context": "https://schema.org",
          "@type": "AggregateRating",
          "itemReviewed": { "@type": "Restaurant", "name": "Restaurant Le Quai Narbonne" },
          "ratingValue": "4.6",
          "bestRating": "5",
          "reviewCount": "1375"
        }]}
      />

      <ParallaxHero
        image="https://images.unsplash.com/photo-1747007707254-62b65e20f7c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        alt="Table restaurant dressée avec verres de rosé restaurant Le Quai Narbonne"
        title="Avis Clients"
        subtitle="4.6/5 sur 1 375 avis Google — Ce que nos clients disent du Quai"
        height="55vh"
      />

      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">

          {/* Note globale */}
          <ScrollReveal>
            <div className="bg-white p-6 md:p-12 shadow-lg mb-10 md:mb-14 text-center rounded-2xl border border-border/30">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-6 md:w-8 h-6 md:h-8 ${i < Math.floor(averageRating) ? "fill-accent text-accent" : "text-muted"}`} />
                  ))}
                </div>
              </div>
              <div className="text-3xl md:text-5xl font-serif mb-2 text-primary">
                <strong>{averageRating.toFixed(1)}/5</strong>
              </div>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Basé sur <strong>{totalReviews.toLocaleString()} avis vérifiés Google</strong>
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {["Restaurant Narbonne", "Cuisine Méditerranéenne", "Terrasse Canal", "Partenaire RC Narbonne"].map((tag) => (
                  <span key={tag} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center mb-10">
              Nos <strong>clients</strong> témoignent de leur expérience au <strong>Quai</strong>.
              Découvrez pourquoi notre <strong>restaurant de Narbonne</strong> est considéré comme l'une des meilleures
              adresses de la ville : <em>cuisine raffinée</em>, <strong>service d'exception</strong>, <em>vue panoramique sur le canal</em>.{" "}
              <Link to="/reservation" className="text-accent hover:underline">Réservez votre table →</Link>
            </p>
          </ScrollReveal>

          <div className="space-y-4 md:space-y-5">
            {reviews.map((review, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white p-5 md:p-7 shadow-sm hover:shadow-lg transition-all rounded-xl border border-border/30 hover:border-accent/20">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-medium text-base md:text-lg mb-0.5">{review.author}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className={`w-4 h-4 ${j < review.rating ? "fill-accent text-accent" : "text-muted"}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{review.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Laisser un avis */}
          <ScrollReveal delay={100}>
            <div className="mt-10 md:mt-14 p-6 md:p-8 bg-secondary/30 text-center rounded-2xl">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="w-8 h-8 text-accent" />
                <h3 className="font-serif text-xl md:text-2xl text-primary">
                  Partagez votre <strong>expérience</strong>
                </h3>
              </div>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Vous avez apprécié votre visite au <strong>Quai</strong> ? Laissez-nous un <strong>avis Google</strong> !
              </p>
              <a
                href="https://maps.google.com/?q=Le+Quai+Restaurant+Narbonne+12+Quai+Vallière"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-6 md:px-8 py-3 hover:bg-accent/90 transition-colors rounded-lg text-sm md:text-base"
              >
                Laisser un avis Google
              </a>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal delay={80}>
            <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl mb-6 text-center text-primary">
                Questions sur les <strong>réservations &amp; avis</strong>
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
            <div className="mt-10 md:mt-14 bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl text-center">
              <h2 className="font-serif text-2xl md:text-3xl mb-4 text-accent">
                Rejoignez nos <strong>clients satisfaits</strong>
              </h2>
              <p className="text-sm md:text-base text-primary-foreground/80 mb-6">
                Découvrez pourquoi Le Quai est le restaurant préféré des Narbonnais et des touristes
              </p>
              <Link
                to="/reservation"
                className="inline-block bg-accent text-white px-8 md:px-10 py-3 md:py-4 text-sm md:text-base hover:bg-accent/90 transition-colors rounded-lg"
              >
                Réserver votre table
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
