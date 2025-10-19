import Button from "@/components/Button";

const steps = [
  {
    title: "1. Dépôt de dossier",
    desc: "Soumettez votre dossier et recevez une réponse rapidement",
  },
  {
    title: "2. Due diligence",
    desc: "Nos experts réalisent une analyse complète de votre société",
  },
  {
    title: "3. Préparation de votre levée",
    desc: "Notre équipe prépare tout pour que votre levée de fonds soit un succès",
  },
  {
    title: "4. Lancement",
    desc: "Nous vous conseillons et agissons pour maximiser le montant levé",
  },
  {
    title: "5. Collecte des fonds et clôture",
    desc: "Nous mobilisons notre communauté, collectons les fonds et suivons le volet juridique",
  },
  {
    title: "6. Accompagnement post-levée",
    desc: "Nous restons à vos côtés dans la durée et vous aidons à gérer vos nouveaux actionnaires",
  },
];

export default function StepsSection() {
  return (
    <section className="px-4 py-14 md:px-6 md:py-20">
      <h2 className="text-center font-heading text-2xl font-extrabold text-[#0B1131] md:text-4xl">
        6 étapes pour lever des fonds
      </h2>

      <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl bg-[#F2CE9F] p-6 text-center shadow-sm ring-1 ring-black/5"
          >
            <h3 className="font-heading text-lg font-extrabold text-[#0B1131] md:text-xl">
              {s.title}
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-[#0B1131]/80 md:text-base">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button>Lever des fonds</Button>
      </div>
    </section>
  );
}
