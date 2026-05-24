import React, { useState, useEffect } from "react";
import {
  X,
  Calendar,
  Clock,
  Users,
  MessageSquare,
} from "lucide-react";

const WHATSAPP_NUMBER = "33671642789";

const timeSlots: string[] = [];

for (let h = 9; h <= 22; h++) {
  timeSlots.push(`${String(h).padStart(2, "0")}:00`);

  if (h < 22) {
    timeSlots.push(`${String(h).padStart(2, "0")}:30`);
  }
}

const guestOptions = [
  ...Array.from({ length: 12 }, (_, i) =>
    `${i + 1} personne${i > 0 ? "s" : ""}`
  ),
  "12+ personnes",
];

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const [lang, setLang] = useState<"fr" | "en">("fr");

  const [showBubble, setShowBubble] = useState(true);

  const [greetingIndex, setGreetingIndex] = useState(0);

  const greetings = [
    "🇫🇷 Vous souhaitez réserver une table ?",
    "🇬🇧 Would you like to book a table?",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    phone: "",
  });

  const texts = {
    fr: {
      title: "Restaurant Le Quai",
      status: "En ligne · Répond vite",
      greeting: "👋 Bonjour ! Réservez votre table en quelques secondes :",
      phone: "Téléphone (optionnel)",
      send: "📲 Confirmer via WhatsApp",
      choose: "Choisir...",
      howMany: "Combien ?",
      name: "Votre nom",
      click: "Cliquez pour réserver →",
    },

    en: {
      title: "Le Quai Restaurant",
      status: "Online · Fast reply",
      greeting: "👋 Hello! Book your table in seconds:",
      phone: "Phone (optional)",
      send: "📲 Confirm via WhatsApp",
      choose: "Choose...",
      howMany: "How many?",
      name: "Your name",
      click: "Click to book →",
    },
  };

  const t = texts[lang];

  const isFormValid =
    form.date &&
    form.time &&
    form.guests &&
    form.name;

  const handleSend = () => {
    const message =
      lang === "en"
        ? `Hello! I would like to book a table at Le Quai Narbonne.

📅 Date: ${form.date}
⏰ Time: ${form.time}
👥 Guests: ${form.guests}
👤 Name: ${form.name}
${form.phone ? `📞 Phone: ${form.phone}` : ""}

Thank you!`
        : `Bonjour ! Je souhaite réserver une table au restaurant Le Quai Narbonne.

📅 Date : ${form.date}
⏰ Heure : ${form.time}
👥 Personnes : ${form.guests}
👤 Nom : ${form.name}
${form.phone ? `📞 Téléphone : ${form.phone}` : ""}

Merci !`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

      {/* BUBBLE MESSAGE */}
      {showBubble && !isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="relative bg-white shadow-2xl border border-gray-200 rounded-2xl rounded-br-md px-4 py-3 mb-3 max-w-[240px] cursor-pointer transition-all hover:scale-[1.02]"
        >
          <p className="text-sm font-semibold text-gray-800 leading-snug">
            {greetings[greetingIndex]}
          </p>

          <p className="text-xs text-gray-400 mt-1">
            {lang === "fr"
              ? "Cliquez pour réserver →"
              : "Click to book →"}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowBubble(false);
            }}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* POPUP */}
      {isOpen && (
        <div className="w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 mb-3">

          {/* HEADER */}
          <div className="bg-[#075E54] px-4 py-3 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">

                {/* VRAI LOGO WHATSAPP */}
                <svg
                  viewBox="0 0 32 32"
                  className="w-6 h-6 text-[#25D366]"
                  fill="currentColor"
                >
                  <path d="M19.11 17.205c-.372-.186-1.102-.543-1.272-.605-.17-.062-.294-.093-.418.093-.124.186-.48.605-.588.729-.108.124-.217.14-.403.047-.186-.093-.785-.289-1.495-.923-.552-.492-.925-1.1-1.033-1.286-.108-.186-.011-.287.082-.38.084-.083.186-.217.279-.326.093-.108.124-.186.186-.31.062-.124.031-.233-.015-.326-.047-.093-.418-1.008-.573-1.38-.15-.36-.303-.31-.418-.316-.108-.005-.233-.006-.357-.006-.124 0-.326.047-.496.233-.17.186-.65.636-.65 1.55s.666 1.798.759 1.922c.093.124 1.31 2 3.176 2.804.444.192.79.306 1.06.39.445.142.85.122 1.17.074.357-.053 1.102-.45 1.257-.884.155-.434.155-.806.108-.884-.046-.077-.17-.124-.356-.217M16.003 3C8.82 3 3 8.82 3 16c0 2.54.743 4.91 2.02 6.9L3.5 28l5.243-1.49A12.93 12.93 0 0 0 16.003 29C23.18 29 29 23.18 29 16S23.18 3 16.003 3z"/>
                </svg>
              </div>

              <div>
                <p className="text-white font-bold text-sm">
                  {t.title}
                </p>

                <p className="text-white/70 text-xs">
                  {t.status}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* BODY */}
          <div className="bg-[#ECE5DD] p-4">

            {/* LANGUES */}
            <div className="flex justify-end gap-2 mb-4">

              <button
                type="button"
                onClick={() => setLang("fr")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold transition-all ${
                  lang === "fr"
                    ? "bg-[#25D366] border-[#25D366] text-white"
                    : "bg-white border-gray-300 text-gray-700"
                }`}
              >
                <span className="text-base leading-none">🇫🇷</span>
                FR
              </button>

              <button
                type="button"
                onClick={() => setLang("en")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold transition-all ${
                  lang === "en"
                    ? "bg-[#25D366] border-[#25D366] text-white"
                    : "bg-white border-gray-300 text-gray-700"
                }`}
              >
                <span className="text-base leading-none">🇬🇧</span>
                EN
              </button>
            </div>

            {/* GREETING */}
            <div className="bg-white rounded-xl p-3 shadow-sm mb-3">
              <p className="text-sm text-gray-800">
                {t.greeting}
              </p>
            </div>

            {/* DATE */}
            <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-[#075E54]" />

              <input
                type="date"
                value={form.date}
                onChange={(e) =>
                  setForm({
                    ...form,
                    date: e.target.value,
                  })
                }
                className="w-full text-sm outline-none bg-transparent"
              />
            </div>

            {/* TIME */}
            <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-[#075E54]" />

              <select
                value={form.time}
                onChange={(e) =>
                  setForm({
                    ...form,
                    time: e.target.value,
                  })
                }
                className="w-full text-sm outline-none bg-transparent"
              >
                <option value="">
                  {t.choose}
                </option>

                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            {/* GUESTS */}
            <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-[#075E54]" />

              <select
                value={form.guests}
                onChange={(e) =>
                  setForm({
                    ...form,
                    guests: e.target.value,
                  })
                }
                className="w-full text-sm outline-none bg-transparent"
              >
                <option value="">
                  {t.howMany}
                </option>

                {guestOptions.map((guest) => (
                  <option key={guest} value={guest}>
                    {guest}
                  </option>
                ))}
              </select>
            </div>

            {/* NAME */}
            <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-[#075E54]" />

              <input
                type="text"
                value={form.name}
                placeholder={t.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className="w-full text-sm outline-none bg-transparent"
              />
            </div>

            {/* PHONE */}
            <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-2 mb-4">

              <span className="text-sm">📞</span>

              <input
                type="tel"
                value={form.phone}
                placeholder={t.phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
                className="w-full text-sm outline-none bg-transparent"
              />
            </div>

            {/* SEND */}
            <button
              onClick={handleSend}
              disabled={!isFormValid}
              className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${
                isFormValid
                  ? "bg-[#25D366] text-white hover:opacity-90"
                  : "bg-gray-300 text-gray-500"
              }`}
            >
              {t.send}
            </button>
          </div>
        </div>
      )}

      {/* WHATSAPP BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-14 h-14 rounded-full bg-[#25D366] shadow-2xl flex items-center justify-center hover:scale-105 transition-transform"
      >
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 text-white"
          fill="currentColor"
        >
          <path d="M19.11 17.205c-.372-.186-1.102-.543-1.272-.605-.17-.062-.294-.093-.418.093-.124.186-.48.605-.588.729-.108.124-.217.14-.403.047-.186-.093-.785-.289-1.495-.923-.552-.492-.925-1.1-1.033-1.286-.108-.186-.011-.287.082-.38.084-.083.186-.217.279-.326.093-.108.124-.186.186-.31.062-.124.031-.233-.015-.326-.047-.093-.418-1.008-.573-1.38-.15-.36-.303-.31-.418-.316-.108-.005-.233-.006-.357-.006-.124 0-.326.047-.496.233-.17.186-.65.636-.65 1.55s.666 1.798.759 1.922c.093.124 1.31 2 3.176 2.804.444.192.79.306 1.06.39.445.142.85.122 1.17.074.357-.053 1.102-.45 1.257-.884.155-.434.155-.806.108-.884-.046-.077-.17-.124-.356-.217M16.003 3C8.82 3 3 8.82 3 16c0 2.54.743 4.91 2.02 6.9L3.5 28l5.243-1.49A12.93 12.93 0 0 0 16.003 29C23.18 29 29 23.18 29 16S23.18 3 16.003 3z"/>
        </svg>
      </button>
    </div>
  );
}