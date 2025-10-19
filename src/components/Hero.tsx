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

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-12 text-center sm:py-16 md:px-6 md:py-20 lg:py-28">
        <h1 className="font-heading text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Levez des fonds avec Crowd.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-white/90 sm:text-base md:mt-4 md:text-lg lg:text-xl">
          Financez votre entreprise avec notre communauté de 135 000 investisseurs
        </p>
        <div className="mt-6 md:mt-8">
          <Button className="bg-white/25 px-5 py-2.5 text-sm text-white backdrop-blur hover:bg-white/35 md:px-6 md:py-3 md:text-base">
            Lever des fonds
          </Button>
        </div>
      </div>
    </section>
  );
}
