import Button from "@/components/Button";

export default function Hero() {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundImage: "url('/hero-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center md:px-6 md:py-24 lg:py-28">
        <h1 className="font-heading text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
          Levez des fonds avec Crowd.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
          Financez votre entreprise avec notre communauté de 135 000 investisseurs
        </p>
        <div className="mt-8">
          <Button className="bg-white/25 px-6 py-3 text-white backdrop-blur hover:bg-white/35">
            Lever des fonds
          </Button>
        </div>
      </div>
    </section>
  );
}
