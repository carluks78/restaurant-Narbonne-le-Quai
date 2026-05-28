import { Link } from "react-router";
import { Star, MapPin, Users, Wine, Fish, Pizza, Award, Utensils, ChevronDown, ChevronUp } from "lucide-react";
import { SEO, buildFAQSchema } from "../components/SEO";
import { ScrollReveal } from "../components/ScrollReveal";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../../imports/hero-1.jpg";
import entrecoteImage from "../../imports/entrecote.jpg";
import brochetteImage from "../../imports/brochette.jpg";
import pizzaImage from "../../imports/pizza.jpg";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Quel est le meilleur restaurant à Narbonne ?",
    a: "Le Quai est considéré comme le meilleur restaurant de Narbonne selon les avis clients (4.6/5 sur 1 375 avis Google). Notre restaurant propose une cuisine méditerranéenne raffinée avec terrasse vue canal du Midi.",
  },
  {
    q: "Où manger en bord de canal à Narbonne ?",
    a: "Le restaurant Le Quai est situé au 12 Quai Vallière, directement en bord du canal de la Robine. Notre terrasse offre une vue panoramique unique sur le quai.",
  },
  {
    q: "Quel restaurant pour fruits de mer à Narbonne ?",
    a: "Le Quai est spécialisé en poissons frais et fruits de mer de Méditerranée : gambas, Saint-Jacques, calamars, moules, daurade, loup. Pêche du marché quotidien.",
  },
  {
    q: "Le restaurant est-il ouvert tous les jours ?",
    a: "Oui, Le Quai est ouvert 7 jours sur 7 dès 09h00. Nous servons le petit-déjeuner, le déjeuner et le dîner. Réservation recommandée le week-end.",
  },
  {
    q: "Le restaurant diffuse-t-il les matchs de rugby ?",
    a: "Oui ! Le Quai est partenaire officiel du RC Narbonne et diffuse tous les matchs de rugby sur grand écran. Consultez notre page Événements pour le programme.",
  },
];

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (!heroRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      // Parallaxe image seulement — le contenu H1 reste visible
      gsap.to(imageRef.current, {
        yPercent: 28,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const dishes = [
    {
  name: "Entrecôte grillée",
  description: "Entrecôte grillée",
  price: "26€",
  image: entrecoteImage,
  popular: true,
},
    {
      name: "Pizza Le Quai",
      description: "Boule de mozzarella, jambon de pays, tomates cerises, copeaux de parmesan, roquette",
      price: "17€",
      image: pizzaImage,
    },
    {
      name: "Assiette du Quai",
      description: "Brochettes de poulet, gambas grillées, noix de Saint-Jacques, calamars, riz",
      price: "25€",
      image: brochetteImage,
      popular: true,
    },
  ];

  const features = [
    { icon: MapPin, text: "Vue Canal de la Robine" },
    { icon: Wine, text: "Vins Languedoc Corbières" },
    { icon: Fish, text: "Poissons Méditerranée Frais" },
    { icon: Pizza, text: "Pizzas Artisanales Maison" },
  ];

  return (
    <>
      <SEO
        title="Restaurant Le Quai Narbonne ⭐ Meilleur Restaurant Centre-Ville | Cuisine Méditerranéenne Terrasse Canal"
        description="Restaurant Le Quai Narbonne ⭐ 4.6/5 sur 1 375 avis. Meilleur restaurant Narbonne centre-ville, terrasse bord canal de la Robine. Cuisine méditerranéenne, poissons frais, pizzas artisanales, fruits de mer. Ouvert 7j/7 dès 09h. Réservez : 04 68 90 62 42."
        path="/"
        keywords="restaurant Narbonne, meilleur restaurant Narbonne, restaurant bord canal Narbonne, restaurant terrasse Narbonne, cuisine méditerranéenne Narbonne, restaurant romantique Narbonne, où manger Narbonne, restaurant groupe Narbonne, brasserie Narbonne, restaurant ouvert dimanche Narbonne, restaurant poisson fruits de mer Narbonne, pizzeria Narbonne, restaurant canal de la Robine, restaurant Quai Vallière Narbonne"
        additionalSchemas={[buildFAQSchema(faqs)]}
      />

      {/* Hero — H1 jamais caché au scroll */}
      <section ref={heroRef} className="relative h-[92svh] flex items-end justify-center overflow-hidden pb-16 md:pb-24">
        <div ref={imageRef} className="absolute inset-0 scale-110">
          <img
            src={heroImage}
            alt="Restaurant Le Quai Narbonne bord canal du Midi cuisine méditerranéenne terrasse"
            className="w-full h-full object-cover object-center md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-accent/90 mb-4 font-medium">
            ✦ Narbonne · Canal de la Robine ✦
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-5 md:mb-7 leading-tight drop-shadow-2xl" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
            <strong>Restaurant Narbonne</strong><br />
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9em" }}>Le Quai — Cuisine Méditerranéenne</em>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
            <div className="h-px w-12 bg-white/40" />
            <p className="text-sm md:text-base text-white/80 tracking-wider">
              Terrasse vue canal · Poissons frais · Pizzas artisanales
            </p>
            <div className="h-px w-12 bg-white/40" />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8">
            <Link
              to="/reservation"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 md:px-12 py-3.5 md:py-4 text-sm md:text-base tracking-wide hover:bg-accent/90 transition-all hover:scale-105 rounded-full shadow-xl shadow-accent/30"
            >
              Réserver une table
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 border border-white/60 text-white px-8 md:px-12 py-3.5 md:py-4 text-sm md:text-base tracking-wide hover:bg-white/10 transition-all rounded-full backdrop-blur-sm"
            >
              Voir le menu
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 md:w-4 h-3.5 md:h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-xs md:text-sm text-white/80">
              <strong>4.6/5</strong> · 1 375 avis Google · Meilleur restaurant Narbonne
            </span>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="py-6 md:py-8 bg-[#2A2A2A] border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-center gap-3 text-white/80 px-4 md:px-6 py-2 md:py-0">
                  <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-xs md:text-sm leading-snug">{f.text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEO intro */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3 font-medium">Au cœur de Narbonne</p>
              <h2 className="text-2xl md:text-4xl font-serif text-primary mb-4">
                Le Quai — <strong>Meilleur Restaurant Narbonne </strong><br className="hidden md:block" />
                <em>Canal de la Robine · Cuisine Méditerranéenne</em>
              </h2>
              <div className="section-ornament">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="grid md:grid-cols-3 gap-8 seo-prose text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                <strong>Le Quai</strong> est le <strong>restaurant incontournable de Narbonne</strong>, situé au cœur du
                <em> centre-ville</em>, en bordure du célèbre <strong>Canal de la Robine</strong> classé UNESCO. Notre
                <strong> restaurant Narbonne</strong> vous accueille avec une <em>terrasse vue canal </em>
                pour vos <strong>déjeuners</strong> et <strong>dîners</strong>.
              </p>
              <p>
                Notre <strong>cuisine méditerranéenne raffinée</strong> :
                <strong> poissons frais de Méditerranée</strong>, <strong>fruits de mer</strong>,
                <strong>gambas grillées</strong>, <strong>pizzas artisanales maison...</strong> Nous travaillons avec les meilleurs <em>producteurs
                locaux du Languedoc</em> et sommes <strong>partenaire officiel du RC Narbonne</strong>.
              </p>
              <p>
                Situé au <strong>12 Quai Vallière</strong>, à 5 min des <strong>Halles de Narbonne </strong>
                et de la <strong>Cathédrale Saint-Just</strong>. <strong>Restaurant ouvert 7j/7</strong> dès 09h00.
                <Link to="/visiter-narbonne" className="text-accent hover:underline block mt-2">
                  Découvrez les sites à visiter près du restaurant →
                </Link>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Spécialités */}
      <section className="py-14 md:py-24 bg-[#FEFDF9]">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3 font-medium">Notre Cuisine</p>
              <h2 className="font-serif text-3xl md:text-5xl mb-4 text-primary">
                Nos <strong>Spécialités</strong>
              </h2>
              <div className="section-ornament">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Entrecôte grillée, fruits de mer frais, pizzas artisanales.
                Produits frais du marché de Narbonne chaque matin.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {dishes.map((dish, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group rounded-2xl border border-border/30">
                  <div className="relative h-56 md:h-72 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={`${dish.name} — restaurant Le Quai Narbonne cuisine méditerranéenne`}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    {dish.popular && (
                      <span className="absolute top-4 left-4 bg-accent text-white px-3 py-1.5 text-xs tracking-wide flex items-center gap-1.5 rounded-full shadow-lg">
                        <Award className="w-3 h-3" />
                        Spécialité Maison
                      </span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <h3 className="text-white font-serif text-lg md:text-xl drop-shadow-md">{dish.name}</h3>
                      <span className="text-white font-serif text-xl bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-lg">{dish.price}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{dish.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="text-center mt-12 md:mt-16">
              <Link
                to="/menu"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 md:px-12 py-3.5 md:py-4 hover:bg-accent transition-all duration-300 text-sm md:text-base rounded-full shadow-lg hover:shadow-accent/30 hover:shadow-xl tracking-wide"
              >
                Découvrir la carte complète
                <span className="text-accent group-hover:text-white">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pourquoi Le Quai */}
      <section className="py-14 md:py-20 bg-[#FEFDF9]">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3 font-medium">Notre Différence</p>
              <h2 className="text-2xl md:text-4xl font-serif text-primary">
                Pourquoi Choisir <strong>Le Quai</strong> à Narbonne ?
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                icon: Utensils,
                title: "Spécialités Méditerranéennes",
                text: "Poissons frais du marché (daurade, loup, thon rouge), fruits de mer (gambas, Saint-Jacques, calamars, moules), pizzas artisanales, pâtes fraîches maison, viandes grillées, planches charcuterie fromage du Languedoc.",
              },
              {
                icon: MapPin,
                title: "Emplacement Exceptionnel",
                text: "Au 12 Quai Vallière, terrasse panoramique vue canal de la Robine. À 5 min à pied des Halles de Narbonne, de la Cathédrale Saint-Just et du centre historique. Parking public à proximité.",
                link: { to: "/visiter-narbonne", label: "Voir les sites touristiques →" },
              },
              {
                icon: Award,
                title: "4.6/5 sur 1 375 Avis Google",
                text: "Reconnu pour sa qualité constante, son service attentionné, ses produits frais locaux et son excellent rapport qualité-prix. Recommandé par les guides touristiques et les habitants de Narbonne.",
              },
              {
                icon: Users,
                title: "Pour Toutes Vos Occasions",
                text: "Restaurant familial, romantique, d'affaires ou pour groupes jusqu'à 30 personnes. Déjeuner, dîner, anniversaire, repas d'entreprise, soirée match rugby RC Narbonne. Ouvert 7j/7 dès 09h00.",
                link: { to: "/events", label: "Soirées matchs 🏉 →" },
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group bg-white p-6 md:p-8 rounded-2xl border border-border/30 hover:border-accent/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <item.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-serif mb-2 text-primary">
                        <strong>{item.title}</strong>
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
                      {item.link && (
                        <Link to={item.link.to} className="inline-block mt-3 text-accent text-xs hover:underline tracking-wide">
                          {item.link.label}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 md:py-14 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: "4.6/5", label: "Note Google" },
              { value: "1 375", label: "Avis clients" },
              { value: "7j/7", label: "Ouvert" },
              { value: "+15 ans", label: "D'expérience" },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div>
                  <div className="font-serif text-2xl md:text-3xl text-accent mb-1">{stat.value}</div>
                  <div className="text-xs tracking-widest uppercase text-white/50">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-8">
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3 font-medium">FAQ</p>
              <h2 className="text-2xl md:text-3xl font-serif text-primary">
                Questions <strong>fréquentes</strong>
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white rounded-xl overflow-hidden border border-border/50 shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
                  >
                    <span className="font-medium text-sm md:text-base text-primary pr-4">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#1E1E1E] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=40')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <p className="text-[10px] tracking-[0.35em] uppercase text-accent mb-4 font-medium">Votre Table Vous Attend</p>
            <h2 className="font-serif text-3xl md:text-5xl mb-5 text-white">
              <strong>Réservez</strong> au Restaurant <em>Le Quai</em>
            </h2>
            <div className="section-ornament mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>
            <p className="text-sm md:text-base text-white/60 mb-8 md:mb-10 max-w-xl mx-auto">
              Cuisine Méditerranéenne · Terrasse Canal de la Robine · Partenaire RC Narbonne<br />
              <a href="tel:0468906242" className="text-accent hover:text-accent/80 transition-colors">
                04 68 90 62 42
              </a>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservation"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-10 md:px-14 py-4 text-sm md:text-base tracking-wide hover:bg-accent/90 transition-all hover:scale-105 rounded-full shadow-xl shadow-accent/30"
              >
                Réserver maintenant
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-10 md:px-14 py-4 text-sm md:text-base hover:bg-white/10 transition-all rounded-full"
              >
                Soirées match 🏉
              </Link>
            </div>
            <p className="text-xs text-white/30 mt-8">
              12 Quai Vallière · 11100 Narbonne · Ouvert 7j/7 dès 09:00
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
