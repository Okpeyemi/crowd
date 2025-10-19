import type React from "react";
import { Search, Flame, Megaphone, Users, Target, ShieldCheck } from "lucide-react";

type Item = {
  icon: React.ReactNode;
  text: string;
};

const items: Item[] = [
  {
    icon: <Search size={22} className="text-[#021332]" />,
    text:
      "Due diligence complète et préparation de la documentation juridique et financière réalisée par nos analystes",
  },
  {
    icon: <Flame size={22} className="text-[#021332]" />,
    text:
      "Campagne marketing sur-mesure avec votre Entrepreneur Success Manager",
  },
  {
    icon: <Megaphone size={22} className="text-[#021332]" />,
    text:
      "Communication auprès de notre écosystème et animation de vos événements par notre Chief Community Officer, ex-journaliste BFM Business",
  },
  {
    icon: <Users size={22} className="text-[#021332]" />,
    text:
      "Gestion des intentions d'investissement et support aux investisseurs par notre équipe commerciale",
  },
  {
    icon: <Target size={22} className="text-[#021332]" />,
    text:
      "Sollicitation de notre communauté d'investisseurs et génération de leads",
  },
  {
    icon: <ShieldCheck size={22} className="text-[#021332]" />,
    text:
      "Création et gestion de votre holding, suivi et reporting post-opération",
  },
];

export default function RecipeSection() {
  return (
    <section className="px-4 py-10 sm:py-14 md:px-6 lg:px-8 md:py-20">
      <h2 className="text-center font-heading text-xl sm:text-2xl font-extrabold text-[#0B1131] md:text-3xl lg:text-4xl">
        Notre recette pour réussir votre levée
      </h2>

      <div className="mt-8 grid gap-4 sm:gap-5 sm:mt-10 md:mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 rounded-xl bg-white p-4 sm:p-5 ring-1 ring-black/5 transition-transform hover:scale-105"
            style={{ boxShadow: "0 6px 10px -6px rgba(2,19,50,0.12)" }}
          >
            <div className="rounded-lg bg-[#EAF2FF] p-2.5 sm:p-3 h-16 w-16 sm:h-20 sm:w-20 flex items-center justify-center flex-shrink-0">
              {it.icon}
            </div>
            <p className="text-xs sm:text-sm flex-1 leading-relaxed text-[#0B1131] md:text-base">
              {it.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
