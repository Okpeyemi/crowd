import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook, Twitter, Phone } from "lucide-react";

const partners = [
  "/partenaires/link.png",
  "/partenaires/link1.png",
  "/partenaires/link2.png",
  "/partenaires/link3.png",
  "/partenaires/link4.png",
  "/partenaires/link5.png",
  "/partenaires/link6.png",
  "/partenaires/link7.png",
  "/partenaires/link8.png",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#541295] text-white">
      <div className="px-4 py-8 sm:py-10 md:px-8 lg:px-20 xl:px-40 md:py-14">
        {/* Top row: logo + link columns */}
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-3 sm:space-y-4">
            <Image src="/logo-white.png" alt="crowd" width={80} height={21} className="sm:w-[90px] sm:h-[24px]" />
            <div className="flex items-center gap-2">
              <Link
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </Link>
              <Link
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </Link>
              <Link
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base sm:text-lg font-semibold">Liens utiles</h4>
            <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/90">
              <li><Link href="#" className="hover:text-white transition-colors">Se connecter</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">S&apos;inscrire</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Prendre rendez-vous</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Lever des fonds</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Nous rejoindre</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base sm:text-lg font-semibold">À propos</h4>
            <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/90">
              <li><Link href="#" className="hover:text-white transition-colors">Qui sommes-nous</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Investir avec nous</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Partenaires distributeurs</Link></li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <h4 className="font-heading text-base sm:text-lg font-semibold">Informations légales et conformité</h4>
            <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/90">
              <li><Link href="#" className="hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Conditions générales d&apos;utilisation (CGU)</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Risques liés à l&apos;investissement</Link></li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-8 sm:mt-10 flex flex-col gap-8 sm:gap-10 items-center">
          <div className="text-xs sm:text-sm font-semibold text-white/90 items-start flex w-full">Ils nous soutiennent</div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 md:gap-6">
            {partners.map((src, i) => (
              <div
                key={i}
                className="flex h-12 w-24 sm:h-14 sm:w-28 items-center justify-center"
              >
                <Image src={src} alt={`partner-${i}`} width={96} height={40} className="object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-white/80">
          <div>© Crowd SAS 2024</div>
          <div className="flex items-center gap-2"><Phone size={14} className="sm:w-4 sm:h-4" /> 01 42 05 44 45</div>
        </div>

        <hr className="my-4 sm:my-6 border-white/20" />

        {/* Disclaimers */}
        <div className="space-y-2 sm:space-y-3 text-[10px] sm:text-xs leading-relaxed text-[#6B7280]">
          <p>
            Sowefund est un Prestataire de Services de Financement Participatif (PSFP) reconnu et immatriculé sous le numéro FP-2023-9 par l&apos;Autorité des Marchés Financiers (AMF).
            Nous vous rappelons que l&apos;investissement au capital de jeunes entreprises comporte des risques pouvant aller jusqu&apos;à la perte totale du capital investi, ainsi qu&apos;un risque d&apos;absence de liquidité à l&apos;issue de la période d&apos;investissement. Nous vous conseillons d&apos;inscrire vos investissements sur Sowefund dans une démarche de diversification de votre portefeuille afin de mitiger ces risques.
          </p>
          <p>
            SOWEFUND est enregistré sous l&apos;identifiant 753409 par l&apos;Autorité de Contrôle et de Résolution (ACPR) comme agent prestataire de services de paiement de Lemonway (établissement de paiement dont le siège social est situé au 8 rue du Sentier, 75002 Paris, agréé par l&apos;ACPR sous le numéro 16568) - https://www.regafi.fr
          </p>
        </div>
      </div>
    </footer>
  );
}
