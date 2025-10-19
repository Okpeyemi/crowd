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
      <div className="px-4 py-10 md:px-40 md:py-14">
        {/* Top row: logo + link columns */}
        <div className="grid gap-10 md:grid-cols-5">
          <div className="space-y-4">
            <Image src="/logo-white.png" alt="crowd" width={90} height={24} />
            <div className="flex items-center gap-2">
              <Link
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </Link>
              <Link
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </Link>
              <Link
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/15"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold">Liens utiles</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li><Link href="#">Se connecter</Link></li>
              <li><Link href="#">S'inscrire</Link></li>
              <li><Link href="#">Prendre rendez-vous</Link></li>
              <li><Link href="#">Lever des fonds</Link></li>
              <li><Link href="#">Nous rejoindre</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold">À propos</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li><Link href="#">Qui sommes-nous</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Investir avec nous</Link></li>
              <li><Link href="#">Partenaires distributeurs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold">Informations légales et conformité</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li><Link href="#">Mentions légales</Link></li>
              <li><Link href="#">Conditions générales d'utilisation (CGU)</Link></li>
              <li><Link href="#">Risques liés à l'investissement</Link></li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-10 flex flex-col items-center gap-8">
          <div className="text-sm font-semibold text-white/90 flex items-start w-full">Ils nous soutiennent</div>
          <div className="mt-4 flex flex-wrap items-center gap-4 md:gap-6">
            {partners.map((src, i) => (
              <div
                key={i}
                className="flex h-14 w-28 items-center justify-center"
              >
                <Image src={src} alt={`partner-${i}`} width={96} height={40} className="object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex items-center justify-between text-sm text-white/80">
          <div>© Crowd SAS 2024</div>
          <div className="flex items-center gap-2"><Phone size={16} /> 01 42 05 44 45</div>
        </div>

        <hr className="my-6 border-white/20" />

        {/* Disclaimers */}
        <div className="space-y-3 text-xs leading-relaxed text-[#6B7280]">
          <p>
            Sowefund est un Prestataire de Services de Financement Participatif (PSFP) reconnu et immatriculé sous le numéro FP-2023-9 par l'Autorité des Marchés Financiers (AMF).
            Nous vous rappelons que l'investissement au capital de jeunes entreprises comporte des risques pouvant aller jusqu'à la perte totale du capital investi, ainsi qu'un risque d'absence de liquidité à l'issue de la période d'investissement. Nous vous conseillons d'inscrire vos investissements sur Sowefund dans une démarche de diversification de votre portefeuille afin de mitiger ces risques.
          </p>
          <p>
            SOWEFUND est enregistré sous l'identifiant 753409 par l'Autorité de Contrôle et de Résolution (ACPR) comme agent prestataire de services de paiement de Lemonway (établissement de paiement dont le siège social est situé au 8 rue du Sentier, 75002 Paris, agréé par l'ACPR sous le numéro 16568) - https://www.regafi.fr
          </p>
        </div>
      </div>
    </footer>
  );
}
