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

export default function EventsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Soirées Match Rugby & Football à Narbonne | Restaurant Le Quai — Partenaire Officiel RC Narbonne"
        description="Vivez les matchs de rugby RC Narbonne et de football en direct au restaurant Le Quai. Grand écran HD, ambiance conviviale, tapas et sangria maison."
        path="/events"
        keywords="soirée match rugby Narbonne, RC Narbonne restaurant, retransmission sport Narbonne"
        additionalSchemas={[buildFAQSchema(faqs)]}
      />

      <ParallaxHero
        image="https://images.unsplash.com/photo-1727334291228-188f30b43f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        alt="Soirée match rugby football restaurant Le Quai Narbonne"
        title="Événements & Matchs"
        subtitle="Partenaire Officiel du RC Narbonne — Vivez le sport en direct"
        height="65vh"
      />

      {/* PARTENAIRES */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 bg-accent/20 border border-accent/40 px-6 py-3 rounded-full mb-6">
              <Trophy className="w-5 h-5 text-accent" />
              <span className="text-accent uppercase text-sm font-medium">
                Partenaires Officiels
              </span>
              <Trophy className="w-5 h-5 text-accent" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl mb-10">
              Le Quai & ses partenaires sportifs
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* RC NARBONNE */}
              <ScrollReveal direction="left">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1727334291228-188f30b43f1f?auto=format&fit=crop&w=1920&q=80"
                    alt="RC Narbonne"
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-accent text-white px-4 py-2 rounded-lg text-sm">
                      🏉 RC Narbonne
                    </span>
                    <a
                      href="https://www.rcnarbonne.com"
                      className="block mt-2 text-xs text-white/80"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Site officiel →
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* VOLLEY */}
              <ScrollReveal direction="right">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://narbonnevolley.com/wp-content/uploads/2024/10/LogoCenturions_Footer.svg"
                    alt="Narbonne Volley"
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-accent text-white px-4 py-2 rounded-lg text-sm">
                      🏐 Narbonne Volley
                    </span>
                    <a
                      href="https://www.facebook.com/academienarbonnevolley"
                      className="block mt-2 text-xs text-white/80"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Facebook →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                icon: Tv,
                title: "Grand Écran HD",
                desc: "Retransmission haute définition",
              },
              {
                icon: Trophy,
                title: "Partenaire RC Narbonne",
                desc: "Matchs diffusés en direct",
              },
              {
                icon: Users,
                title: "Groupes",
                desc: "Jusqu’à 30 personnes",
              },
              {
                icon: MapPin,
                title: "Narbonne Centre",
                desc: "12 Quai Vallière",
              },
            ].map((f, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="text-center p-5 bg-white rounded-xl border">
                  <f.icon className="w-6 h-6 text-accent mx-auto mb-3" />
                  <h3 className="font-serif mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl text-center mb-8 font-serif">
            Questions fréquentes
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between p-4 text-left"
                >
                  <span>{faq.q}</span>
                  {openFaq === i ? <ChevronUp /> : <ChevronDown />}
                </button>

                {openFaq === i && (
                  <div className="p-4 text-sm text-muted-foreground">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-4 text-accent">
            Réservez votre place pour le prochain match
          </h2>

          <p className="mb-6">
            12 Quai Vallière, Narbonne — 04 68 90 62 42
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/reservation"
              className="bg-accent px-6 py-3 rounded-lg text-white"
            >
              Réserver
            </Link>
            <a
              href="tel:0468906242"
              className="border border-accent px-6 py-3 rounded-lg"
            >
              Appeler
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
