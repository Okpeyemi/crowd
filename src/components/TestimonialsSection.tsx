"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useRef } from "react";

type Testimonial = {
  name: string;
  role: string;
  company?: { name: string; href?: string };
  avatar: string;
  text: string;
  stars?: number; // 1..5
};

const testimonials: Testimonial[] = [
  {
    name: "Julien Tchernia",
    role: "co-fondateur EkWateur",
    company: { name: "EkWateur" },
    avatar: "/user1.png",
    text:
      "Crowd, ce sont clairement les meilleurs : ils connaissent très bien leur métier et nous accompagnent tout au long de la campagne. À la fin, on a levé plus du double de notre objectif initial.",
    stars: 5,
  },
  {
    name: "Thomas Perret",
    role: "fondateur Mon Petit Placement",
    company: { name: "Mon Petit Placement" },
    avatar: "/user2.png",
    text:
      "Nous sommes extrêmement fiers du succès rencontré et heureux d’avoir été accompagnés dans cette étape clé par Crowd. L’expertise des équipes ainsi que leur disponibilité ont fait toute la différence.",
    stars: 5,
  },
  {
    name: "Julien Tchernia",
    role: "co-fondateur EkWateur",
    company: { name: "EkWateur" },
    avatar: "/user1.png",
    text:
      "Crowd, ce sont clairement les meilleurs : ils connaissent très bien leur métier et nous accompagnent tout au long de la campagne. À la fin, on a levé plus du double de notre objectif initial.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#FFF6EC]">
      <div className="px-4 py-10 sm:py-14 md:px-6 lg:px-8 md:py-20 lg:ml-20 xl:ml-40">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          <div className="flex flex-col items-start gap-4 sm:gap-6 lg:gap-8 lg:min-w-[280px]">
            <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-[#0B1131] md:text-3xl lg:text-4xl">
              Ils ont levé des fonds avec <br /> Crowd
            </h2>

            <div className="hidden items-center gap-2 lg:flex">
              <button
                onClick={() => scrollBy("left")}
                className="rounded-l-full bg-[#6C2BD9] p-2.5 lg:p-3 text-white shadow hover:opacity-90 cursor-pointer transition-opacity"
                aria-label="Précédent"
              >
                <ArrowLeft size={18} />
              </button>
              <div className="h-6 w-px bg-white/40" />
              <button
                onClick={() => scrollBy("right")}
                className="rounded-r-full bg-[#6C2BD9] p-2.5 lg:p-3 text-white shadow hover:opacity-90 cursor-pointer transition-opacity"
                aria-label="Suivant"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex w-full snap-x snap-mandatory gap-4 sm:gap-6 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="w-full md:w-[320px] lg:w-[420px] flex-none snap-center md:snap-start rounded-2xl bg-[#E49D3E]/10 p-5 sm:p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={72}
                    height={72}
                    className="rounded-full object-cover sm:w-[88px] sm:h-[88px]"
                  />
                  <h3 className="mt-3 sm:mt-4 font-heading text-base sm:text-lg font-extrabold text-[#0B1131]">
                    {t.name}
                  </h3>
                  <div className="mt-1 text-xs sm:text-sm text-[#0B1131]/70">{t.role}</div>
                  {/* Stars */}
                  <div className="mt-2 sm:mt-3 flex items-center justify-center gap-1 text-[#F59E0B]">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={16}
                        className={`sm:w-[18px] sm:h-[18px] ${idx < (t.stars ?? 5) ? "fill-current" : ""}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm leading-relaxed text-[#0B1131]/80 md:text-base">
                  {t.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile nav */}
        <div className="mt-6 flex justify-center gap-3 lg:hidden">
          <button
            onClick={() => scrollBy("left")}
            className="rounded-full bg-[#6C2BD9] p-2.5 sm:p-3 text-white shadow hover:opacity-90 transition-opacity"
            aria-label="Précédent"
          >
            <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
          <button
            onClick={() => scrollBy("right")}
            className="rounded-full bg-[#6C2BD9] p-2.5 sm:p-3 text-white shadow hover:opacity-90 transition-opacity"
            aria-label="Suivant"
          >
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
