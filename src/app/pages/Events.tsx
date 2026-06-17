import { SEO, buildFAQSchema } from "../components/SEO";
import { ParallaxHero } from "../components/ParallaxHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { Link } from "react-router";
import { Tv, Trophy, Calendar, Users, Clock, MapPin, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Le restaurant diffuse-t-il tous les matchs de rugby de RC Narbonne ?",
    a: "En tant que partenaire officiel du RC Narbonne, nous diffusons l'ensemble des matchs du club sur nos écrans. Consultez notre programme ou suivez notre page pour connaître les prochaines retransmissions.",
  },
  {
    q: "Faut-il réserver pour regarder un match au restaurant ?",
    a: "La réservation est fortement recommandée lors des grands matchs, car le restaurant affiche souvent complet. Appelez-nous au 04 68 90 62 42 ou réservez via WhatsApp pour garantir votre place.",
  },
  {
    q: "Proposez-vous un menu spécial lors des soirs de match ?",
    a: "Oui ! Les soirs de match, nous proposons des formules tapas, planches et boissons à partager, idéales pour profiter du match entre amis. Notre sangria maison est incontournable !",
  },
  {
    q: "Quels sports sont diffusés en dehors du rugby ?",
    a: "Nous diffusons également les grands matchs de football (Ligue 1, Champions League), les tournois de rugby international (Top 14, Pro D2, Coupe du Monde), ainsi que les événements sportifs majeurs.",
  },
  {
    q: "Le restaurant peut-il accueillir des groupes pour un événement sportif ?",
    a: "Absolument ! Nous pouvons privatiser une partie de la salle ou la terrasse pour des groupes jusqu'à 30 personnes. Contactez-nous pour organiser votre soirée match privée.",
  },
];

const upcomingMatches = [
  {
    competition: "Pro D2",
    home: "RC Narbonne",
    away: "Brive",
    date: "Samedi",
    time: "19:00",
    badge: "🏉 Rugby",
  },
  {
    competition: "Ligue 1",
    home: "Paris SG",
    away: "Marseille",
    date: "Dimanche",
    time: "21:00",
    badge: "⚽ Football",
  },
  {
    competition: "Champions Cup",
    home: "Toulouse",
    away: "Leinster",
    date: "Samedi +1",
    time: "16:00",
    badge: "🏉 Rugby",
  },
];

export function Events() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Soirées Match Rugby & Football à Narbonne | Restaurant Le Quai — Partenaire Officiel RC Narbonne"
        description="Vivez les matchs de rugby RC Narbonne et de football en direct au restaurant Le Quai. Grand écran HD, ambiance conviviale, tapas et sangria maison. Partenaire officiel du Racing Club de Narbonne. Réservez votre place."
        path="/events"
        keywords="soirée match rugby Narbonne, retransmission rugby Narbonne, RC Narbonne restaurant partenaire, match RC Narbonne direct, restaurant écran géant Narbonne, rugby Narbonne restaurant, Pro D2 Narbonne, football retransmission Narbonne, soirée sport Narbonne"
        additionalSchemas={[buildFAQSchema(faqs)]}
      />

      <ParallaxHero
        image="https://images.unsplash.com/photo-1727334291228-188f30b43f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        alt="Soirée match rugby football restaurant Le Quai Narbonne écran géant"
        title="Événements & Matchs"
        subtitle="Partenaire Officiel du RC Narbonne — Vivez le sport en direct au Quai"
        height="65vh"
      />

      {/* Partenaire officiel */}
<section className="py-12 md:py-16 bg-primary text-primary-foreground">
  <div className="container mx-auto px-4 max-w-5xl text-center">
    <ScrollReveal>
      <div className="inline-flex items-center gap-3 bg-accent/20 border border-accent/40 px-6 py-3 rounded-full mb-6">
        <Trophy className="w-5 h-5 text-accent" />
        <span className="text-accent tracking-widest text-sm uppercase font-medium">
          Partenaires Officiels
        </span>
        <Trophy className="w-5 h-5 text-accent" />
      </div>

      <h2 className="font-serif text-3xl md:text-4xl mb-10">
        Le Quai & ses partenaires sportifs
      </h2>

      {/* CARTES PARTENAIRES */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* RC NARBONNE */}
        <ScrollReveal direction="left">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1727334291228-188f30b43f1f?auto=format&fit=crop&w=1920&q=80"
              alt="Partenaire RC Narbonne - Rugby"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-4 left-4">
              <span className="inline-block bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium">
                🏉 RC Narbonne
              </span>

              <a
                href="https://www.rcnarbonne.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-xs text-white/80 hover:text-white transition"
              >
                Site officiel →
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* NARBONNE VOLLEY */}
        <ScrollReveal direction="right">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1920&q=80"
              alt="Partenaire Narbonne Volley - Volley-ball"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-4 left-4">
              <span className="inline-block bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium">
                🏐 Narbonne Volley
              </span>

              <a
                href="https://www.narbonnevolley.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-xs text-white/80 hover:text-white transition"
              >
                Site officiel →
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </ScrollReveal>
  </div>
</section>

      {/* Prochains matchs */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3 font-medium">Programme Sportif</p>
              <h2 className="font-serif text-3xl md:text-4xl mb-3 text-primary">
                Prochaines <strong>retransmissions</strong>
              </h2>
              <div className="section-ornament">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                Programme indicatif — contactez-nous pour confirmer les horaires de diffusion.
              </p>
            </div>
          </ScrollReveal>
 <div className="grid md:grid-cols-3 gap-5 mb-12">
            {upcomingMatches.map((match, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-border/30 shadow-sm hover:shadow-xl hover:border-accent/25 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="bg-[#2A2A2A] px-4 py-3 flex items-center justify-between">
                    <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-medium">{match.competition}</span>
                    <span className="text-[10px] bg-accent/20 text-accent px-2.5 py-1 rounded-full tracking-wide">{match.badge}</span>
                  </div>
                  <div className="p-6 text-center">
                    <p className="font-serif text-base md:text-lg text-primary mb-2 leading-snug">{match.home}</p>
                    <div className="flex items-center justify-center gap-3 my-2">
                      <div className="h-px flex-1 bg-border/50" />
                      <span className="text-lg text-accent font-serif tracking-widest px-1">VS</span>
                      <div className="h-px flex-1 bg-border/50" />
                    </div>
                    <p className="font-serif text-base md:text-lg text-primary mb-4 leading-snug">{match.away}</p>
                    <div className="flex items-center justify-center gap-5 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        {match.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        {match.time}
                      </span>
                    </div>
                  </div>
         
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Tv, title: "Grand Écran HD", desc: "Retransmission haute définition sur écran géant dans la salle" },
              { icon: Trophy, title: "Partenaire RC Narbonne", desc: "Tous les matchs du club diffusés en direct au restaurant" },
              { icon: Users, title: "Jusqu'à 30 pers.", desc: "Privatisation possible pour vos soirées match privées" },
              { icon: MapPin, title: "Centre Narbonne", desc: "12 Quai Vallière, à 5 min des Halles de Narbonne" },
            ].map((f, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group text-center p-5 bg-white rounded-xl border border-border/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-accent/30">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3 group-hover:bg-accent transition-all duration-300">
                    <f.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-sm md:text-base mb-2 text-primary">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance / formules */}
      <section className="py-14 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="left">
              <h2 className="font-serif text-3xl md:text-4xl mb-5 text-primary">
                Vivez le match dans une <strong>ambiance unique</strong>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
                Au <strong>restaurant Le Quai Narbonne</strong>, les soirs de match se vivent à fond !
                Profitez de nos <strong>écrans haute définition</strong>, d'une <strong>ambiance chaleureuse</strong>
                et d'une cuisine de qualité pendant le coup d'envoi.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                Nos <strong>formules tapas &amp; partage</strong> sont parfaites pour les soirs de match :
                planches charcuterie-fromage, moules gratinées, sangria maison, bières pression. Le tout
                face à votre équipe favorite !
              </p>
              <div className="space-y-3">
                {[
                  "Formule tapas à partager",
                  "Sangria maison et cocktails",
                  "Menu burger &amp; frites pendant les matchs",
                  "Réservation conseillée les soirs de derby",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    <span
                      className="text-sm text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1727334291228-188f30b43f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
                  alt="Ambiance soirée match restaurant Le Quai Narbonne"
                  className="w-full h-80 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium">
                    🏉 Partenaire Officiel RC Narbonne
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-center text-primary">
              Questions <strong>fréquentes</strong>
            </h2>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-secondary/30 rounded-xl overflow-hidden border border-border/50">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
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
      <section className="py-14 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl mb-4 text-accent">
              Réservez votre place pour le prochain match
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Restaurant Le Quai — 12 Quai Vallière, 11100 Narbonne<br />
              <strong className="text-accent">04 68 90 62 42</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservation"
                className="inline-block bg-accent text-white px-8 py-4 rounded-lg text-sm md:text-base hover:bg-accent/90 transition-colors"
              >
                Réserver en ligne
              </Link>
              <a
                href="tel:0468906242"
                className="inline-block border-2 border-accent text-accent px-8 py-4 rounded-lg text-sm md:text-base hover:bg-accent hover:text-white transition-colors"
              >
                Appeler le restaurant
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
