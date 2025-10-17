import EntrepriseForm from "@/components/EntrepriseForm";

export default function EntrepriseSection() {
  return (
    <section className="mx-auto py-12 flex flex-col items-center">
      <h2 className="font-heading text-2xl font-extrabold text-black md:text-4xl">
        Parlez nous de votre entreprise
      </h2>
      <EntrepriseForm />
    </section>
  );
}
