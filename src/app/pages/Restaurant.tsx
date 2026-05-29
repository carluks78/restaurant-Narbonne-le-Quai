import { SEO, buildFAQSchema } from "../components/SEO";
import { ParallaxHero } from "../components/ParallaxHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { Award, Heart, Sparkles, Users, ChefHat, Star, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import heroImage from "../../imports/hero-1.jpg";
import photoImage from "../../imports/photo.jpg";
import photo1Image from "../../imports/photo1.JPG";
import photo2Image from "../../imports/photo2.JPG";

const faqs = [
  {
    q: "Depuis combien de temps le restaurant Le Quai existe-t-il ?",
    a: "Le Quai est établi au cœur de Narbonne depuis plus de 15 ans. Ce qui était autrefois un simple bistrot s'est transformé en une adresse incontournable de la ville, alliant tradition culinaire française et saveurs méditerranéennes.",
  },
  {
    q: "Le restaurant propose-t-il une terrasse avec vue sur le canal ?",
    a: "Oui ! Notre terrasse chauffée, disponible toute l'année, offre une vue magnifique sur le Quai Vallière et le Canal de la Robine. Un cadre unique pour un déjeuner ou dîner romantique à Narbonne.",
  },
  {
    q: "Combien de couverts le restaurant peut-il accueillir ?",
    a: "Le Quai peut accueillir jusqu'à 80 couverts entre la salle intérieure et la terrasse. Pour les groupes et événements privatisés, nous pouvons organiser des soirées jusqu'à 30 personnes.",
  },
  {
    q: "Le restaurant propose-t-il des menus du midi ?",
    a: "Oui, nous proposons des formules déjeuner rapides en semaine. Consultez notre carte ou appelez-nous au 04 68 90 62 42 pour connaître les formules du moment.",
  },
  {
    q: "Le restaurant est-il partenaire du RC Narbonne ?",
    a: "Absolument ! Le Quai est partenaire officiel du Racing Club de Narbonne. Nous diffusons tous les matchs de rugby et de football sur nos écrans. Consultez notre page Événements pour le programme.",
  },
];

export function Restaurant() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Le Restaurant Le Quai Narbonne | Histoire, Terrasse Canal de la Robine & Cuisine Méditerranéenne"
        description="Découvrez le restaurant Le Quai à Narbonne : 15 ans d'excellence culinaire en bord du canal de la Robine. Terrasse panoramique, cuisine méditerranéenne raffinée, produits frais du Languedoc. Partenaire officiel RC Narbonne."
        path="/restaurant"
        keywords="restaurant Quai Vallière Narbonne, terrasse canal de la Robine Narbonne, restaurant avec vue Narbonne, restaurant histoire Narbonne, cuisine terroir Languedoc Narbonne, restaurant brasserie Narbonne, restaurant privatisation Narbonne"
        additionalSchemas={[buildFAQSchema(faqs)]}
      />

      <ParallaxHero
        image={heroImage}
        alt="Terrasse restaurant Le Quai Narbonne vue canal de la Robine bord quai"
        title="Le Restaurant"
        subtitle="Une histoire de passion culinaire et d'excellence méditerranéenne"
        height="60vh"
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Histoire */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center mb-16 md:mb-20">
            <ScrollReveal direction="left">
              <h2 className="font-serif text-3xl md:text-4xl mb-4 md:mb-6 text-primary">
                Notre <strong>Histoire</strong>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                Établi au cœur de <strong>Narbonne</strong> depuis plus de <strong>15 ans</strong>, <em>Le Quai</em> s'est
                imposé comme une <strong>référence culinaire</strong> dans la région <strong>Languedoc-Roussillon</strong>.
                Situé au <strong>12 Quai Vallière</strong>, notre restaurant bénéficie d'un
                emplacement privilégié offrant une <em>vue imprenable sur le Canal de la Robine</em> classé UNESCO.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                Ce qui était autrefois un simple bistrot s'est transformé en une <strong>adresse
                incontournable</strong>, alliant <em>tradition culinaire française</em> et touches <strong>méditerranéennes
                contemporaines</strong>. Notre engagement : sublimer les <strong>produits du terroir</strong> et les
                <em>saveurs de saison</em>.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Chaque jour, notre <strong>équipe passionnée</strong> s'engage à vous offrir une <strong>expérience
                culinaire mémorable</strong>, dans un <em>cadre élégant et chaleureux</em> face au quai. Le Quai a été
                reconnu par les <strong>guides culinaires</strong> et plébiscité par nos <strong>1 375 avis clients Google</strong>.{" "}
                <Link to="/avis" className="text-accent hover:underline">Lire les avis →</Link>
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={photoImage}
                  alt="Salle restaurant Le Quai Narbonne décoration élégante"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </ScrollReveal>
          </div>

          {/* Valeurs */}
          <div className="grid sm:grid-cols-3 gap-5 md:gap-6 mb-16 md:mb-20">
            {[
              { icon: Award, title: "Excellence Culinaire", text: "Cuisine française raffinée avec des produits frais et locaux du marché de Narbonne. 4.6/5 sur 1 375 avis Google." },
              { icon: Heart, title: "Passion & Engagement", text: "Une équipe dévouée qui met son cœur dans chaque assiette, servie en terrasse avec vue sur le canal de la Robine." },
              { icon: Sparkles, title: "Cadre d'Exception", text: "Vue panoramique sur le Quai Vallière dans un décor élégant et chaleureux, idéal pour toutes vos occasions." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group text-center p-6 md:p-8 bg-white rounded-2xl border border-border/30 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent transition-all duration-300">
                    <item.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base md:text-lg font-serif mb-3 text-primary">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Philosophie */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center mb-16 md:mb-20">
            <ScrollReveal direction="left">
              <div className="relative h-80 md:h-96 order-2 md:order-1 rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1663530761401-15eefb544889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Chef restaurant Le Quai préparant plat Narbonne"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="order-1 md:order-2">
                <h2 className="font-serif text-3xl md:text-4xl mb-4 md:mb-6 text-primary">
                  Notre <strong>Philosophie Culinaire</strong>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                  Au <strong>Quai</strong>, nous croyons que la <strong>cuisine</strong> est un <em>art qui se partage</em>.
                  Notre <strong>chef</strong> et son équipe travaillent en étroite collaboration avec des
                  <strong> producteurs locaux</strong> du <em>Languedoc</em> pour vous garantir des <strong>produits
                  d'exception</strong> : poissons de <em>Méditerranée</em>, légumes du <strong>marché de Narbonne</strong>,
                  viandes de qualité.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                  Chaque plat est pensé comme une <em>œuvre culinaire</em>, alliant
                  <strong> esthétique</strong> et <strong>saveurs raffinées</strong>. Nous privilégions les
                  <em>circuits courts</em>, les <strong>poissons frais de la côte</strong> et les <strong>légumes de
                  saison</strong> pour une <em>cuisine responsable</em>.
                </p>
                <div className="flex items-start gap-3 md:gap-4 p-4 bg-accent/10 rounded-xl mb-4 md:mb-6">
                  <ChefHat className="w-8 md:w-10 h-8 md:h-10 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1 text-sm md:text-base">Notre Chef</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Formé dans les grandes maisons, passionné par les <em>saveurs méditerranéennes</em>
                    </p>
                  </div>
                </div>
                <Link to="/menu" className="inline-block bg-accent text-white px-6 py-3 rounded-lg text-sm hover:bg-accent/90 transition-colors">
                  Découvrir la carte →
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Chiffres */}
          <ScrollReveal>
            <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl mb-16 md:mb-20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
                {[
                  { icon: Users, value: "1 375+", label: "Avis clients Google" },
                  { icon: Star, value: "4.6/5", label: "Note moyenne" },
                  { icon: Award, value: "15 ans", label: "Au cœur de Narbonne" },
                ].map((stat, i) => (
                  <div key={i}>
                    <stat.icon className="w-10 md:w-12 h-10 md:h-12 mx-auto mb-3 text-accent" />
                    <div className="text-3xl md:text-4xl font-serif mb-2 text-accent">{stat.value}</div>
                    <p className="text-sm md:text-base text-primary-foreground/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Ambiance */}
<section className="mb-14 md:mb-16">
  <ScrollReveal>
    <div className="text-center mb-8">
      <h2 className="font-serif text-3xl md:text-4xl mb-4 text-primary">
        L'<strong>Ambiance</strong> du Quai
      </h2>
      <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
        Un cadre élégant et intime pour vos moments privilégiés. Notre terrasse chauffée vous accueille
        toute l'année avec une vue imprenable sur le Quai Vallière et le Canal de la Robine.
        Parfait pour vos <Link to="/reservation" className="text-accent hover:underline">dîners romantiques</Link>,
        repas d'affaires ou <Link to="/events" className="text-accent hover:underline">soirées match rugby 🏉</Link>.
      </p>
    </div>
  </ScrollReveal>

  <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
    <ScrollReveal direction="left">
      <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1670603999602-af0ddca5e5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
          alt="Terrasse restaurant Le Quai Narbonne vue canal"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
    </ScrollReveal>
    <ScrollReveal direction="right">
      <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1776993298422-3e8c397d0235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
          alt="Intérieur restaurant Le Quai Narbonne ambiance chaleureuse"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
    </ScrollReveal>
  </div>

  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
    <ScrollReveal direction="left">
      <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80">
        <ImageWithFallback
          src={photo1Image}
          alt="Terrasse restaurant Le Quai Narbonne vue canal"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
    </ScrollReveal>
    <ScrollReveal direction="right">
      <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80">
        <ImageWithFallback
          src={photo2Image}
          alt="Intérieur restaurant Le Quai Narbonne ambiance chaleureuse"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
    </ScrollReveal>
  </div>
</section>

          {/* FAQ */}
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl mb-6 text-center text-primary">
                Questions sur <strong>Le Restaurant</strong>
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-secondary/30 rounded-xl overflow-hidden border border-border/50">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/60 transition-colors"
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
        </div>
      </section>
    </>
  );
}
