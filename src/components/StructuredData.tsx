import Script from 'next/script'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Crowd",
    "legalName": "Crowd SAS",
    "url": "https://crowd.fr",
    "logo": "https://crowd.fr/logo-dark.png",
    "description": "Plateforme de financement participatif (crowdfunding) reconnue par l'AMF. Levez des fonds pour votre entreprise avec 135 000 investisseurs.",
    "telephone": "+33142054445",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR",
      "addressLocality": "Paris",
      "postalCode": "75002"
    },
    "sameAs": [
      "https://www.linkedin.com/company/crowd",
      "https://www.facebook.com/crowd",
      "https://twitter.com/crowd_fr"
    ],
    "foundingDate": "2014",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "50"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Financement participatif",
    "provider": {
      "@type": "Organization",
      "name": "Crowd"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de financement",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Levée de fonds en crowdequity",
            "description": "Levez des fonds pour votre entreprise auprès de notre communauté de 135 000 investisseurs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Accompagnement entrepreneurial",
            "description": "Accompagnement complet de A à Z pour réussir votre levée de fonds"
          }
        }
      ]
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://crowd.fr"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Pourquoi lever des fonds en financement participatif ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le crowdequity n'est non seulement un moyen de lever des fonds, mais aussi une opportunité de développer votre business sur le long terme. En ouvrant votre capital à votre communauté et à vos clients, vous les engagez dans votre aventure entrepreneuriale, assurez leur fidélité et les transformez en ambassadeurs de votre marque."
        }
      },
      {
        "@type": "Question",
        "name": "Comment se rémunère Crowd auprès des entreprises ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous fonctionnons avec un modèle de rémunération aligné sur votre réussite, détaillé au démarrage de l'accompagnement."
        }
      },
      {
        "@type": "Question",
        "name": "Est-ce que mon entreprise est éligible pour lever des fonds avec Crowd ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous évaluons l'éligibilité selon plusieurs critères (maturité, traction, gouvernance…). Contactez-nous pour une évaluation rapide."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
