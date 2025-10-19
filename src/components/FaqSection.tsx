"use client";

import { MoveRight, MoveDown } from "lucide-react";
import { useState } from "react";

type Faq = {
  q: string;
  a: string[]; // paragraphs
};

const faqs: Faq[] = [
  {
    q: "Pourquoi lever des fonds en financement participatif ?",
    a: [
      "Le crowdequity n’est non seulement un moyen de lever des fonds, mais aussi une opportunité de développer votre business sur le long terme.",
      "En ouvrant votre capital à votre communauté et à vos clients, vous les engagez dans votre aventure entrepreneuriale, assurez leur fidélité et les transformez en ambassadeurs de votre marque.",
      "Vous vous démarquez également grâce à une marque engageante, fédératrice et transparente.",
    ],
  },
  {
    q: "Comment se rémunère Crowd auprès des entreprises ?",
    a: [
      "Nous fonctionnons avec un modèle de rémunération aligné sur votre réussite, détaillé au démarrage de l’accompagnement.",
    ],
  },
  {
    q: "Est-ce que mon entreprise est éligible pour lever des fonds avec Crowd ?",
    a: [
      "Nous évaluons l’éligibilité selon plusieurs critères (maturité, traction, gouvernance…). Contactez-nous pour une évaluation rapide.",
    ],
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-4 py-10 sm:py-14 md:px-6 lg:px-8 md:py-20">
      <h2 className="text-center font-heading text-xl sm:text-2xl font-extrabold text-[#0B1131] md:text-3xl lg:text-4xl">
        Vos questions les plus fréquentes
      </h2>

      <div className="mt-6 sm:mt-8 md:mt-10 space-y-2 sm:space-y-3">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="rounded-lg cursor-pointer">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={`flex w-full items-center gap-2 sm:gap-3 rounded-md border px-3 py-3 sm:px-4 sm:py-4 text-left transition-all ${
                  isOpen
                    ? "border-[#F3CBA0] bg-[#FBF3E8]"
                    : "border-[#F3CBA0] bg-white hover:bg-[#FBF3E8]/50"
                }`}
              >
                {/* Left arrow that changes shape when open */}
                {isOpen ? (
                  <MoveDown className="size-3.5 sm:size-4 text-[#F3CBA0] flex-shrink-0" />
                ) : (
                  <MoveRight className="size-3.5 sm:size-4 text-[#F3CBA0] flex-shrink-0" />
                )}
                <span className="text-xs sm:text-sm font-medium text-[#0B1131] md:text-base">
                  {item.q}
                </span>
              </button>
              {isOpen && (
                <div className="rounded-b-md border-x border-b border-[#F3CBA0] bg-[#FBF3E8] px-3 py-3 sm:px-4 sm:py-4 text-[#0B1131] animate-in slide-in-from-top-2 duration-200">
                  {item.a.map((p, idx) => (
                    <p key={idx} className="mb-2 sm:mb-3 last:mb-0 text-xs sm:text-sm leading-relaxed md:text-base">
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
