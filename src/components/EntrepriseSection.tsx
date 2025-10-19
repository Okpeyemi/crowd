import EntrepriseForm from "@/components/EntrepriseForm";

export default function EntrepriseSection() {
  return (
    <section className="px-4 py-8 sm:py-10 md:py-12 flex flex-col items-center">
      <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-black md:text-3xl lg:text-4xl text-center">
        Parlez nous de votre entreprise
      </h2>
      <EntrepriseForm />
    </section>
  );
}
