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
      <div className="ml-40 px-4 py-14 md:px-6 md:py-20 flex gap-8 items-start">
        <div className="flex flex-col items-start gap-8">
          <h2 className="font-heading text-2xl font-extrabold text-[#0B1131] md:text-4xl">
            Ils ont levé des fonds avec Sowefund
          </h2>

          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => scrollBy("left")}
              className="rounded-l-full bg-[#6C2BD9] p-3 text-white shadow hover:opacity-90 cursor-pointer"
              aria-label="Précédent"
            >
              <ArrowLeft size={18} />
            </button>
            <div className="h-6 w-px bg-white/40" />
            <button
              onClick={() => scrollBy("right")}
              className="rounded-r-full bg-[#6C2BD9] p-3 text-white shadow hover:opacity-90 cursor-pointer"
              aria-label="Suivant"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="min-w-[280px] flex-1 snap-start rounded-2xl bg-[#E49D3E]/10 p-6 md:min-w-[420px]"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={88}
                  height={88}
                  className="rounded-full object-cover"
                />
                <h3 className="mt-4 font-heading text-lg font-extrabold text-[#0B1131]">
                  {t.name}
                </h3>
                <div className="mt-1 text-sm text-[#0B1131]/70">{t.role}</div>
                {/* Stars */}
                <div className="mt-3 flex items-center justify-center gap-1 text-[#F59E0B]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={18}
                      className={idx < (t.stars ?? 5) ? "fill-current" : ""}
                    />
                  ))}
                </div>
              </div>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#0B1131]/80 md:text-base">
                {t.text}
              </p>
            </article>
          ))}
        </div>

        {/* Mobile nav */}
        <div className="mt-6 flex justify-center gap-3 md:hidden">
          <button
            onClick={() => scrollBy("left")}
            className="rounded-full bg-[#6C2BD9] p-3 text-white shadow hover:opacity-90"
            aria-label="Précédent"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => scrollBy("right")}
            className="rounded-full bg-[#6C2BD9] p-3 text-white shadow hover:opacity-90"
            aria-label="Suivant"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
