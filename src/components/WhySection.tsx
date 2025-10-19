import Image from "next/image";

const cards = [
  {
    icon: "/icon-communaute.png",
    text: "Engagez votre communauté",
  },
  {
    icon: "/icon-actionnaires.png",
    text: "Fidélisez vos clients actionnaires sur le long terme",
  },
  {
    icon: "/icon-investisseurs.png",
    text: "Accédez à nos 135 000 investisseurs",
  },
  {
    icon: "/icon-expertise.png",
    text: "Bénéficiez des 10 ans d’expertise des pionniers du secteur",
  },
];

export default function WhySection() {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundImage: "url('/why-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-4 py-10 sm:py-14 md:px-6 lg:px-8 md:py-20">
        <h2 className="text-center font-heading text-xl sm:text-2xl font-extrabold text-[#0B1131] md:text-3xl lg:text-4xl">
          Pourquoi lever des fonds avec nous ?
        </h2>

        <div className="mt-8 grid gap-4 sm:gap-5 sm:mt-10 md:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#D2AEF5] p-5 sm:p-6 text-center backdrop-blur-sm shadow-sm border border-white/30 transition-transform hover:scale-105"
            >
              <div className="flex items-center justify-center">
                <Image src={c.icon} alt="icon" width={64} height={64} className="sm:w-20 sm:h-20" />
              </div>
              <p className="mt-4 sm:mt-6 text-sm font-medium text-[#0B1131] md:text-base leading-relaxed">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
