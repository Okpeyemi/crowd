import type { Metadata, Viewport } from "next";
import { Lexend, DM_Sans } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Crowd - Levée de fonds participatif | Crowdfunding & Financement",
    template: "%s | Crowd"
  },
  description: "Levez des fonds pour votre entreprise avec Crowd. Plateforme de financement participatif reconnue par l'AMF. 135 000 investisseurs prêts à soutenir votre projet. Accompagnement complet de A à Z.",
  keywords: [
    "levée de fonds",
    "crowdfunding",
    "financement participatif",
    "crowdequity",
    "investissement",
    "startup",
    "PME",
    "financement entreprise",
    "capital",
    "investisseurs",
    "PSFP",
    "AMF",
    "financement alternatif"
  ],
  authors: [{ name: "Crowd SAS" }],
  creator: "Crowd SAS",
  publisher: "Crowd SAS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://crowd.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Crowd - Levée de fonds participatif pour votre entreprise",
    description: "Financez votre entreprise avec notre communauté de 135 000 investisseurs. Plateforme de crowdfunding reconnue par l'AMF.",
    url: "https://crowd.fr",
    siteName: "Crowd",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crowd - Plateforme de financement participatif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crowd - Levée de fonds participatif",
    description: "Financez votre entreprise avec 135 000 investisseurs. Plateforme reconnue par l'AMF.",
    images: ["/twitter-image.png"],
    creator: "@crowd_fr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "finance",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#7819D4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${lexend.variable} ${dmSans.variable} antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
