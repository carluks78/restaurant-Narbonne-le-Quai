import { useState } from "react";
import { SEO, buildFAQSchema } from "../components/SEO";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    comments: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (
  e: React.FormEvent,
  method: "whatsapp" | "sms"
) => {
  e.preventDefault();

  const reservationDate = new Date(formData.date);
const day = reservationDate.getDay(); // 0 = dimanche, 3 = mercredi

if (day === 3) {
  toast.error(
    "Le restaurant est fermé tous les mercredis. Merci de choisir une autre date."
  );
  return;
}

  const message = `Bonjour, je souhaite réserver une table au Restaurant Le Quai.

Nom : ${formData.name}
Téléphone : ${formData.phone}
Email : ${formData.email}

Date : ${formData.date}
Heure : ${formData.time}
Personnes : ${formData.guests}

Commentaires : ${formData.comments || "Aucun"}
`;

  if (method === "whatsapp") {
    window.open(
      `https://wa.me/33671642789?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  if (method === "sms") {
    window.location.href = `sms:+33671642789?body=${encodeURIComponent(
      message
    )}`;
  }

  setSubmitted(true);
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const timeSlots = [
    "12:00", "12:30", "13:00", "13:30",
    "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
  ];

  if (submitted) {
    return (
      <>
        <SEO
          title="Réservation Confirmée - Restaurant Le Quai Narbonne"
          description="Votre réservation au restaurant Le Quai Narbonne a été confirmée."
          path="/reservation"
        />
        <section className="min-h-[80vh] flex items-center justify-center bg-background py-20">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <CheckCircle className="w-20 h-20 text-accent mx-auto mb-6" />
            <h1 className="font-serif text-4xl mb-4 text-primary">Réservation Confirmée</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Merci {formData.name}, votre table pour {formData.guests} personne(s) est réservée le{" "}
              {new Date(formData.date).toLocaleDateString("fr-FR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
              })}{" "}
              à {formData.time}.
            </p>
            <div className="bg-white p-8 shadow-md mb-8">
              <h2 className="text-xl font-serif mb-4">Détails de votre réservation</h2>
              <div className="space-y-3 text-left">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">Nom</span>
                  <span className="font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-medium">{formData.email}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">Téléphone</span>
                  <span className="font-medium">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">Date & Heure</span>
                  <span className="font-medium">{new Date(formData.date).toLocaleDateString("fr-FR")} à {formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nombre de personnes</span>
                  <span className="font-medium">{formData.guests}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Un email de confirmation vous a été envoyé à {formData.email}.
            </p>
            <p className="text-sm text-muted-foreground">
              Pour toute modification, contactez-nous au <a href="tel:0468906242" className="text-accent hover:underline">04 68 90 62 42</a>
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Réserver une Table — Restaurant Le Quai Narbonne | Réservation en Ligne 24h/24"
        description="Réservez votre table au restaurant Le Quai à Narbonne en ligne ou par téléphone au 04 68 90 62 42. Confirmation immédiate. Terrasse vue canal de la Robine. Groupes et occasions spéciales bienvenus."
        path="/reservation"
        keywords="réservation restaurant Narbonne, réserver table Narbonne, restaurant réservation en ligne Narbonne, table restaurant Narbonne, réserver pour groupe Narbonne, anniversaire restaurant Narbonne, réservation soirée Narbonne"
      />

      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Réservation</h1>
          <p className="text-xl text-primary-foreground/80">Réservez votre table en quelques clics</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-8 md:p-12 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-foreground">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm mb-2 text-foreground">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-foreground">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="jean.dupont@exemple.fr"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm mb-2 text-foreground">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm mb-2 text-foreground">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Heure *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Sélectionner</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm mb-2 text-foreground">
                    <Users className="w-4 h-4 inline mr-2" />
                    Personnes *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "personne" : "personnes"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm mb-2 text-foreground">
                  Commentaires (allergies, préférences...)
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  value={formData.comments}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Informations complémentaires..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
  <button
    type="button"
    onClick={(e) => handleSubmit(e, "whatsapp")}
    className="w-full bg-[#25D366] text-white px-8 py-4 text-lg tracking-wide hover:opacity-90 transition-colors rounded-md"
  >
    Réserver via WhatsApp
  </button>

  <button
    type="button"
    onClick={(e) => handleSubmit(e, "sms")}
    className="w-full bg-blue-600 text-white px-8 py-4 text-lg tracking-wide hover:opacity-90 transition-colors rounded-md"
  >
    Réserver par SMS
  </button>
</div>

              <p className="text-xs text-muted-foreground text-center">
                En réservant, vous acceptez de recevoir une confirmation par email et SMS.
              </p>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white shadow-sm">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-accent" />
              <h3 className="font-serif mb-2">Réservation En ligne</h3>
              <p className="text-sm text-muted-foreground">Confirmation instantanée en ligne</p>
            </div>
            <div className="p-6 bg-white shadow-sm">
              <Clock className="w-8 h-8 mx-auto mb-3 text-accent" />
              <h3 className="font-serif mb-2">Service</h3>
              <p className="text-sm text-muted-foreground">Midi et soir sauf le Mercredi (fermé) et le dimanche service du midi uniquement</p>
            </div>
            <div className="p-6 bg-white shadow-sm">
              <Users className="w-8 h-8 mx-auto mb-3 text-accent" />
              <h3 className="font-serif mb-2">Groupes Bienvenus</h3>
              <p className="text-sm text-muted-foreground">Jusqu'à 50 personnes</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
