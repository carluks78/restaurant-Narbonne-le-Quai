import { SEO, buildFAQSchema } from "../components/SEO";
import { ParallaxHero } from "../components/ParallaxHero";
import { ScrollReveal } from "../components/ScrollReveal";
import { Link } from "react-router";
import { Star, Award, ChevronDown, ChevronUp, Clock, Users } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "La carte change-t-elle selon les saisons ?",
    a: "Oui ! Notre carte évolue régulièrement selon les arrivages du marché et les saisons. Nous travaillons avec des producteurs locaux du Languedoc pour toujours vous proposer le meilleur des produits frais.",
  },
  {
    q: "Proposez-vous des plats pour les végétariens ?",
    a: "Oui, nous avons plusieurs options végétariennes : pizza végétarienne, salade estivale méditerranéenne, et certains plats peuvent être adaptés. N'hésitez pas à demander à l'équipe.",
  },
  {
    q: "Prenez-vous en compte les allergies alimentaires ?",
    a: "Absolument. Notre équipe est formée aux allergènes et peut vous renseigner sur la composition de chaque plat. Signalez vos allergies au moment de la réservation ou en arrivant au restaurant.",
  },
  {
    q: "Quelle est la fourchette de prix du menu ?",
    a: "Nos entrées sont entre 8€ et 20€, nos plats entre 14€ et 30€, et nos pizzas entre 11€ et 17€. Des menus à 27€ et 37€ sont disponibles. Tous les prix sont nets, service compris.",
  },
  {
    q: "Peut-on commander des pizzas à emporter ?",
    a: "Oui ! Nous proposons les pizzas à emporter. Appelez-nous au 04 68 90 62 42 pour passer commande. Idéal pour une soirée match rugby à la maison !",
  },
];

const prixFixeMenus = [
  {
    title: "Menu",
    price: "27€",
    note: "Servis jusqu'à 22h",
    courses: [
      {
        label: "Entrée au choix",
        items: ["Salade chèvre chaud", "César", "Saumon fumé"],
      },
      {
        label: "Plat au choix",
        items: ["Pièce de boeuf / sauce au choix, Brochette de poulet, saumon grillé, seiches grillées"],
      },
      {
        label: "Dessert au choix",
        items: ["Crêpe", "Crème brûlée", "Panna cotta", "2 boules glaces"],
      },
    ],
  },
  {
    title: "Menu",
    price: "37€",
    note: "Servis jusqu'à 22h",
    popular: true,
    courses: [
      {
        label: "Entrée au choix",
        items: ["Salade périgourdine", "Salade de la mer", "Foie gras maison"],
      },
      {
        label: "Plat au choix",
        items: ["Entrecôte / sauce au choix", "Brochette de magret", "Gambas flambées"],
      },
      {
        label: "Dessert au choix",
        items: ["Moelleux au chocolat", "Trilogie de desserts", "Tiramisu", "3 boules glaces"],
      },
    ],
  },
  {
    title: "Menu Bambino",
    price: "10€",
    note: "Pour les enfants",
    badge: "Enfants",
    courses: [
      {
        label: "Plat au choix",
        items: ["Steack haché frais", "Pizza bambino", "Nuggets"],
      },
      {
        label: "Inclus",
        items: ["Boisson", "Push Up Haribo"],
      },
    ],
  },
];

const parfumsGlaces = {
  glaces: [
    "Vanille", "Chocolat-Menthe", "Chocolat", "Caramel beurre salé", "Pistache", "Fraise",
    "Café", "Rhum-Raisin", "Noix de coco", "Marron", "Vanille Framboise meringuée",
  ],
  sorbets: [
    "Citron", "Pêche de Méditérranée", "Mangue", "Fruit de la Passion",
  ],
  pricing: [
    { label: "2 boules", price: "3.50€" },
    { label: "3 boules", price: "4.50€" },
    { label: "Push Up Haribo", price: "3€" },
  ],
};

type MenuDish = {
  name: string;
  description?: string;
  price: string;
  popular?: boolean;
};

type MenuCategory = {
  category: string;
  note?: string;
  dishes: MenuDish[];
};

const menuCategories: MenuCategory[] = [
  {
    category: "Nos Entrées",
    dishes: [
      { name: "L'Avocat au chèvre gratiné", description: "Salade, tomates, oeuf dur, avocat, chèvre", price: "12€", popular: true },
      { name: "La César", description: "Salade, tomate, oignons, blanc de poulet, oeuf dur, copeaux de parmesan, croutons", price: "8 / 13€" },
      { name: "L'Incontournable au chèvre", description: "Salade, tomates, toasts de chèvre au miel, jambon de pays, poivrons, aubergines", price: "9 / 15€", popular: true },
      { name: "L'Oeuf cocotte au foie gras", description: "Salade, tomates, oeuf, crème fraiche, fromage, foie gras frais, toasts grillés", price: "15€" },
      { name: "La Sicilienne", description: "Brochetta chaude de tomates, poivrons marinés, jambon de pays, mozzarella", price: "9 / 15€" },
      { name: "La Saveur d'Italie", description: "Carpaccio de boeuf, aubergine, poivrons, copeaux de parmesan, linguines al pesto", price: "18€" },
      { name: "La Périgourdine", description: "Salade, tomates, gésiers confits, magret fumé, foie gras maison", price: "12 / 17€" },
      { name: "La Salade de la mer", description: "Salade, crevettes, saumon fumé, anchois, moules gratinées", price: "18€" },
      { name: "La salade du Quai", description: "Salade, tomates, oeuf dur, avocat, poivrons, magret fumé, St jacques, saumon", price: "20€" },
      { name: "La Belle italienne", description: "Salade, tomates, jambon de pays, aubergine, copeaux de parmesan, poivrons, mozzarella", price: "9€ / 16€" },
      { name: "Les moules gratinées", price: "13€" },
      { name: "Les tomates mozzarella", price: "11€" },
      { name: "Le carpaccio de boeuf", price: "12€" },
      { name: "Le foie gras de canard maison", price: "18€" },
      { name: "Le camembert au miel", price: "14€" },
    ],
  },
  {
    category: "Nos Plats",
    dishes: [
      { name: "Steack à cheval", price: "14€", popular: true },
      { name: "Brochette de poulet mariné", price: "15€" },
      { name: "Bavette grillée à la plancha", description: "Sauce à l'échalotte", price: "18€" },
      { name: "Tournedos Rossini de faux-filet", description: "Faux-filet entouré de lard et sa sauce aux cèpes", price: "22€", popular: true },
      { name: "Escalope de dinde à la crème", price: "16€" },
      { name: "Escalope de dinde pannée", description: "Sauce tomate maison", price: "15€" },
      { name: "Tartare de boeuf", description: "Poêlé ou préparé", price: "Simple 16€ / Double 29€" },
      { name: "Entrecôte grillée", price: "26€" },
      { name: "Brochette de magret de canard", price: "18€" },
      { name: "Magret de canard entier", price: "26€" },
      { name: "Magret de canard entier farci au foie gras et sa sauce aux cèpes", price: "30€" },
      { name: "Pavé de saumon et sa crème de poireaux", price: "19€" },
      { name: "Seiches grillées à la plancha", price: "18€" },
      { name: "Tartare de saumon frais", price: "19€" },
      { name: "Seiches à la Valenciane", description: "Sauce tomate, chorizo, crevettes, moules", price: "19€" },
      { name: "Gambas flambées", price: "20€" },
      { name: "Poêlée de St-Jacques", description: "Crevettes et Moules", price: "22€" },
      { name: "Assiette du Quai", description: "Tartare de saumon frais, pavé de saumon grillé et noix de St-Jacques", price: "25€" },
      { name: "Parillade de poisson", price: "30€" },
    ],
  },
  {
    category: "Nos Burgers",
    dishes: [
      { name: "Le Quai", price: "15€", popular: true },
      { name: "Le Kebab", price: "15€" },
      { name: "Au chèvre", price: "16€" },
      { name: "Au foie gras", price: "18€", popular: true },
      { name: "Supplément sauce", description: "poivre, rocquefort, échalotte, béarnaise, cèpes", price: "1.50€" },
    ],
  },
  {
    category: "Nos Tagliatelles",
    dishes: [
      { name: "Carbonnara", price: "12.50€", popular: true },
      { name: "Cèpes", price: "15€" },
      { name: "Rocquefort", price: "14€" },
    ],
  },
  {
    category: "Nos Linguines",
    dishes: [
      { name: "Pesto", price: "13€", popular: true },
      { name: "Gambas", price: "18€" },
      { name: "St-Jacques et cèpes", price: "21€" },
    ],
  },
  {
    category: "Portion de frites",
    dishes: [
      { name: "Petite", price: "2.50€" },
      { name: "Grande", price: "4€" },
    ],
  },
  {
    category: "Nos Pizzas",
    dishes: [
      { name: "Margarita", description: "Sauce Tomate, Mozzarella, Olives", price: "11€" },
      { name: "Reine", description: "Sauce tomate, Jambon blanc, Emmental, Mozzarella, Olives", price: "13€" },
      { name: "Indienne", description: "Crème fraiche, Poulet curry, Poivrons, Oignons, Olives", price: "14€" },
      { name: "Napolitaine", description: "Sauce tomate, Anchois, Câpres, Mozzarella, Olives", price: "14€" },
      { name: "Kebab", description: "Sauce tomate, Oignons, Viande kebab, Tomates cerises, Olives", price: "14.50€" },
      { name: "Chèvre", description: "Crème Fraiche, Fromage de chèvre, Miel, Emmental, Origan, Olives", price: "15€" },
      { name: "Royale", description: "Sauce tomate, Champignons, Jambon blanc, Emmental, Mozzarella, Olives", price: "15€" },
      { name: "Végétarienne", description: "Sauce tomate, Aubergines, Poivrons, Champignons, Tomates cerises, Emmental, Olives", price: "15.50€" },
      { name: "4 Fromages", description: "Sauce tomate, Mozzarella, Chèvre, Roquefort, Emmental, Olives, Basilic", price: "16€" },
      { name: "Norvégienne", description: "Crème fraiche, Mozzarella, Saumon fumé, Emmental, Ciboulette, Olives", price: "16€" },
      { name: "Calzone", description: "Sauce tomate, Champignons, Jambon blanc, Mozzarella, Œuf", price: "17€" },
      { name: "Parmigiana", description: "Sauce tomate, Mozzarella, Bœuf haché, Aubergines, Parmesan, Olives", price: "17€" },
      { name: "Le Quai", description: "Sauce tomate, Boule de mozzarella, Jambon de pays, Tomates cerises, Copeaux de parmesan, Roquette, Olives", price: "17€", popular: true },
    ],
  },
  {
    category: "Nos Gaufres Maison",
    dishes: [
      { name: "Nutella, chocolat ou marron", price: "7€", popular: true },
      { name: "Caramel", description: "Caramel beurre salé", price: "8€" },
      { name: "Gaufre du Quai", description: "Spécialité maison", price: "8€", popular: true },
    ],
  },
  {
    category: "Nos Coupes Glacées",
    dishes: [
      { name: "Café liégeois", description: "Glace café, café froid, chantilly", price: "7€" },
      { name: "Chocolat liégeois", description: "Glace chocolat, chocolat froid, chantilly", price: "7€" },
      { name: "Mont Blanc", description: "Glace marron, crème de marron, chantilly", price: "7€" },
      { name: "Dame Blanche", description: "Glace vanille, sauce chocolat chaude, chantilly", price: "7€", popular: true },
      { name: "Coupe fruitée du Quai", description: "Sorbets de saison, coulis de fruits, chantilly", price: "7€" },
    ],
  },
  {
    category: "Nos Coupes Alcoolisées",
    dishes: [
      { name: "Colonel", description: "Sorbet citron et vodka", price: "9€", popular: true },
      { name: "After Eight", description: "Glace menthe, crème de menthe, chocolat", price: "9€" },
      { name: "Coupe de l'Aude", description: "Spécialité maison aux saveurs du Languedoc", price: "9€", popular: true },
    ],
  },
  {
    category: "Nos Desserts Maison",
    dishes: [
      { name: "Dessert du jour", price: "6€", popular: true },
      { name: "Crème Brûlée", price: "6.50€" },
      { name: "Panna cotta", price: "6.50€" },
      { name: "Mousse au chocolat", price: "6.50€" },
      { name: "Tiramisu à l'Amaretto", price: "7€" },
      { name: "Profiteroles glacées", price: "8€" },
      { name: "Brioche perdu", description: "1 boule vanille, caramel, amandes grillées, chantilly", price: "8€" },
      { name: "Moelleux au chocolat", description: "1 boule vanille crème anglaise, chantilly", price: "8€" },
      { name: "Fromage blanc", description: "Miel / amandes, fruits rouges ou crème de marron", price: "5€" },
      { name: "Café Affogato", description: "1 boule vanille et 1 express", price: "4.50€" },
      { name: "Café gourmand", description: "Panaché de desserts maison", price: "9.50€" },
      { name: "Assiette de fromage", price: "7€" },
    ],
  },
  {
    category: "Nos Crêpes Maison",
    dishes: [
      { name: "Sucre", price: "3€", popular: true },
      { name: "Nutella, chocolat ou marron", price: "4€" },
      { name: "Rhum ou Grand Marnier", price: "6€" },
      { name: "Caramel", description: "1 boule de vanille, caramel beurre salé, amandes grillées, chantilly", price: "5.50€" },
      { name: "La Marronière", description: "1 boule de vanille, 1 boule de marron, crème de marron et chantilly", price: "7€" },
    ],
  },
  {
    category: "Les Cocktails",
    note: "Cocktails faits maison",
    dishes: [
      { name: "Virgin Mojito", description: "Sans alcool — citron vert, menthe, sucre de canne, eau gazeuse", price: "7€" },
      { name: "Le Rio", description: "Sans alcool — fruits exotiques, citron vert, gingembre", price: "7€" },
      { name: "Spritz", description: "Prosecco, Aperol, eau gazeuse, orange", price: "9€", popular: true },
      { name: "Mojito", description: "Rhum blanc, citron vert, menthe, sucre de canne, eau gazeuse", price: "9€", popular: true },
      { name: "Sex on the Beach", description: "Vodka, pêche, jus d'ananas, jus d'orange, grenadine", price: "9€" },
      { name: "Caïpirinha", description: "Cachaça, citron vert, sucre de canne", price: "9€" },
      { name: "Planteur", description: "Rhum, jus de fruits exotiques, grenadine", price: "9€" },
      { name: "Le Quai", description: "Cocktail signature de la maison", price: "9€", popular: true },
    ],
  },
  {
    category: "Sangria Maison",
    note: "Rouge ou Blanche — fruits frais de saison",
    dishes: [
      { name: "Au verre", price: "3.50€" },
      { name: "Carafe ½ litre", description: "Pour 2 personnes", price: "8€", popular: true },
      { name: "Carafe 1 litre", description: "Pour 4 personnes", price: "12€", popular: true },
    ],
  },
];

const planchestapas = [
  { label: "Planche 2 personnes", price: "9€", icon: "🧀" },
  { label: "Planche 4 personnes", price: "15€", icon: "🍖" },
  { label: "Planche 6 personnes", price: "19€", icon: "🥂" },
];

// Groupes de filtres
type FilterKey =
  | "all"
  | "entrees"
  | "plats"
  | "pizzas"
  | "burgers"
  | "pates"
  | "desserts"
  | "boissons";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Tout voir" },
  { key: "entrees", label: "Entrées" },
  { key: "plats", label: "Plats" },
  { key: "pizzas", label: "Pizzas" },
  { key: "burgers", label: "Burgers" },
  { key: "pates", label: "Pâtes" },
  { key: "desserts", label: "Desserts" },
  { key: "boissons", label: "Boissons" },
];

const CATEGORY_FILTER_MAP: Record<string, FilterKey> = {
  "Nos Entrées": "entrees",
  "Nos Plats": "plats",
  "Nos Pizzas": "pizzas",
  "Nos Burgers": "burgers",
  "Nos Tagliatelles": "pates",
  "Nos Linguines": "pates",
  "Portion de frites": "plats",
  "Nos Gaufres Maison": "desserts",
  "Nos Coupes Glacées": "desserts",
  "Nos Coupes Alcoolisées": "boissons",
  "Nos Desserts Maison": "desserts",
  "Nos Crêpes Maison": "desserts",
  "Les Cocktails": "boissons",
  "Sangria Maison": "boissons",
};

export function Menu() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filteredCategories =
    activeFilter === "all"
      ? menuCategories
      : menuCategories.filter(
          (cat) => CATEGORY_FILTER_MAP[cat.category] === activeFilter
        );

  return (
    <>
      <SEO
        title="Menu & Carte Restaurant Le Quai Narbonne | Cuisine Méditerranéenne — Pizzas, Poissons, Viandes"
        description="Menu complet du restaurant Le Quai Narbonne : menus 27€ et 37€, entrées, plats viandes et poissons frais, pizzas artisanales, desserts maison, cocktails, sangria. Cuisine méditerranéenne raffinée à Narbonne. Prix 3€ à 37€."
        path="/menu"
        keywords="menu restaurant Narbonne, carte restaurant Narbonne, prix restaurant Narbonne, pizza Narbonne, poissons frais Narbonne, menu midi Narbonne, restaurant pas cher Narbonne, desserts maison Narbonne, cocktails bar Narbonne, sangria Narbonne, fruits de mer menu Narbonne"
        additionalSchemas={[buildFAQSchema(faqs)]}
      />

      <ParallaxHero
        image="https://images.unsplash.com/photo-1663530761401-15eefb544889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        alt="Menu restaurant Le Quai Narbonne plats méditerranéens"
        title="Notre Menu"
        subtitle="Cuisine méditerranéenne raffinée — produits frais du marché de Narbonne"
        height="50vh"
      />

      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3 font-medium">Notre Carte</p>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
                Une cuisine de <strong>saison</strong> &amp; de <em>terroir</em>
              </h2>
              <div className="section-ornament">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Notre <strong>carte</strong> évolue selon les arrivages du marché et les saisons.
                Poissons de <strong>Méditerranée</strong>, légumes des <strong>Halles de Narbonne</strong>,
                viandes sélectionnées — une <strong>cuisine méditerranéenne raffinée</strong> au cœur du <em>Languedoc</em>.{" "}
                <Link to="/galerie" className="text-accent hover:underline">Voir la galerie →</Link>
              </p>
            </div>
          </ScrollReveal>

          {/* Nos Menus Prix-Fixe */}
          <ScrollReveal>
            <div className="mb-12 md:mb-16">
              <div className="text-center mb-6 md:mb-8 pb-4 border-b border-accent/30">
                <h2 className="font-serif text-2xl md:text-3xl text-primary mb-1">Nos Menus</h2>
                <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Servis jusqu'à 22h</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                {prixFixeMenus.map((menu, i) => (
                  <div
                    key={i}
                    className={`relative rounded-2xl overflow-hidden border-2 flex flex-col ${
                      menu.popular
                        ? "border-accent shadow-lg shadow-accent/10"
                        : "border-border/40 shadow-sm"
                    } bg-white`}
                  >
                    {menu.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-accent text-white text-xs text-center py-1.5 tracking-widest uppercase">
                        Le plus populaire
                      </div>
                    )}
                    {menu.badge && (
                      <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-xs text-center py-1.5 tracking-widest uppercase">
                        {menu.badge}
                      </div>
                    )}
                    <div className={`p-5 md:p-6 ${menu.popular || menu.badge ? "pt-9 md:pt-10" : ""}`}>
                      <div className="text-center mb-5">
                        <h3 className="font-serif text-lg md:text-xl text-primary mb-1">{menu.title}</h3>
                        <span className="text-3xl md:text-4xl font-serif text-accent">{menu.price}</span>
                        {menu.note && (
                          <p className="text-xs text-muted-foreground mt-1">{menu.note}</p>
                        )}
                      </div>
                      <div className="space-y-4">
                        {menu.courses.map((course, j) => (
                          <div key={j}>
                            <p className="text-xs uppercase tracking-widest text-accent mb-2 font-medium">{course.label}</p>
                            <ul className="space-y-1">
                              {course.items.map((item, k) => (
                                <li key={k} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0 mt-1.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Les Planches de Tapas */}
          <ScrollReveal>
            <div className="mb-12 md:mb-16">
              <h2 className="font-serif text-2xl md:text-3xl mb-6 md:mb-8 text-center pb-4 border-b border-accent/30 text-primary">
                Les Planches de Tapas
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {planchestapas.map((planche, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-6 text-center border border-border/40 shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
                  >
                    <div className="text-3xl mb-3">{planche.icon}</div>
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-accent" />
                      <h3 className="font-serif text-base text-primary">{planche.label}</h3>
                    </div>
                    <span className="text-2xl font-serif text-accent">{planche.price}</span>
                    <p className="text-xs text-muted-foreground mt-2">Charcuterie, fromages, légumes marinés</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── FILTRES CLIQUABLES ── */}
          <ScrollReveal>
            <div className="mb-8 md:mb-10">
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {FILTERS.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                      activeFilter === filter.key
                        ? "bg-accent text-white border-accent shadow-md shadow-accent/20"
                        : "bg-white text-primary border-border/50 hover:border-accent/50 hover:text-accent"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Standard menu categories */}
          {filteredCategories.map((category, i) => (
            <ScrollReveal key={i} delay={40}>
              <div className="mb-12 md:mb-16 last:mb-0">
                <div className="text-center mb-6 md:mb-8">
                  <h2 className="font-serif text-2xl md:text-3xl text-primary mb-1">{category.category}</h2>
                  {category.note && (
                    <p className="text-xs text-muted-foreground mt-1 tracking-wide italic">{category.note}</p>
                  )}
                  <div className="flex items-center justify-center gap-3 mt-3">
                    <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-accent/40" />
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-accent/40" />
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  {category.dishes.map((dish, j) => (
                    <div
                      key={j}
                      className="bg-white p-4 md:p-6 shadow-sm hover:shadow-md transition-all border-l-4 border-transparent hover:border-accent rounded-r-xl group"
                    >
                      <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-3">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <h3 className="text-base md:text-lg font-serif text-primary">{dish.name}</h3>
                            {dish.popular && (
                              <span className="flex items-center gap-1 bg-accent/10 text-accent px-2 py-0.5 text-xs tracking-wide rounded-full whitespace-nowrap">
                                <Star className="w-3 h-3 fill-accent" />
                                Populaire
                              </span>
                            )}
                          </div>
                          {dish.description && (
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{dish.description}</p>
                          )}
                        </div>
                        <div className="text-xl md:text-2xl font-serif text-accent whitespace-nowrap">
                          {dish.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Nos Parfums Glaces et Sorbets */}
          <ScrollReveal>
            <div className="mb-12 md:mb-16">
              <h2 className="font-serif text-2xl md:text-3xl mb-6 md:mb-8 text-center pb-4 border-b border-accent/30 text-primary">
                Nos Parfums Glaces &amp; Sorbets
              </h2>
              <div className="bg-white rounded-2xl border border-border/40 shadow-sm p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent mb-3 font-medium">Glaces</p>
                    <div className="flex flex-wrap gap-2">
                      {parfumsGlaces.glaces.map((parfum) => (
                        <span key={parfum} className="bg-secondary/50 text-primary text-sm px-3 py-1.5 rounded-full border border-border/30">
                          {parfum}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent mb-3 font-medium">Sorbets</p>
                    <div className="flex flex-wrap gap-2">
                      {parfumsGlaces.sorbets.map((sorbet) => (
                        <span key={sorbet} className="bg-blue-50 text-primary text-sm px-3 py-1.5 rounded-full border border-blue-100/60">
                          {sorbet}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="border-t border-border/30 pt-5 flex flex-wrap justify-center gap-4 md:gap-8">
                  {parfumsGlaces.pricing.map((p) => (
                    <div key={p.label} className="text-center">
                      <span className="block text-2xl font-serif text-accent">{p.price}</span>
                      <span className="text-xs text-muted-foreground">{p.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Note qualité */}
          <ScrollReveal>
            <div className="mt-4 md:mt-6 p-6 md:p-8 bg-secondary/30 text-center rounded-2xl">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="w-8 h-8 text-accent" />
                <h3 className="font-serif text-xl md:text-2xl text-primary">
                  Engagement <strong>Qualité</strong>
                </h3>
              </div>
              <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                Tous nos plats sont préparés <em>minute</em> avec des <strong>produits frais de saison</strong>.
                Nous travaillons avec des <strong>producteurs locaux</strong> du <em>Languedoc</em> et les{" "}
                <strong>pêcheurs de Méditerranée</strong>.
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mb-1">
                <strong>Prix nets</strong>, service compris · Menu susceptible de modifications selon arrivages
              </p>
              <p className="text-xs text-muted-foreground">
                <strong>Allergènes</strong> : notre équipe se tient à votre disposition
              </p>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal>
            <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl mb-6 text-center text-primary">
                Questions sur la <strong>carte</strong>
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

          {/* CTA */}
          <ScrollReveal delay={100}>
            <div className="mt-10 md:mt-14 bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl text-center">
              <h2 className="font-serif text-2xl md:text-3xl mb-4 text-accent">
                Envie de découvrir notre <strong>cuisine</strong> ?
              </h2>
              <p className="text-sm md:text-base text-primary-foreground/80 mb-6">
                Réservez votre table au <strong>Quai</strong> et laissez-vous séduire par notre carte raffinée
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/reservation"
                  className="inline-block bg-accent text-white px-8 md:px-10 py-3 md:py-4 text-sm md:text-base hover:bg-accent/90 transition-colors rounded-lg"
                >
                  Réserver maintenant
                </Link>
                <Link
                  to="/galerie"
                  className="inline-block border-2 border-accent text-accent px-8 md:px-10 py-3 md:py-4 text-sm md:text-base hover:bg-accent hover:text-white transition-colors rounded-lg"
                >
                  Voir la galerie
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
