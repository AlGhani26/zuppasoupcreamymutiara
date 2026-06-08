import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { OrderModalProvider } from "@/components/OrderModalProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://zuppasoupcreamymutiara.vercel.app";
const SITE_NAME = "Zuppa Soup Creamy Pondok Mutiara";
const SITE_DESCRIPTION =
  "Zuppa Soup Creamy Pondok Mutiara - Kelezatan rumahan dengan bahan premium di Cimahi. Menu zuppa soup, burger beef patty, pasta, dan catering. Buka 24 jam. Pesan via GoFood, GrabFood & ShopeeFood.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Zuppa Soup & Burger Terbaik di Cimahi`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "zuppa soup",
    "zuppa soup creamy",
    "zuppa soup cimahi",
    "zuppa soup pondok mutiara",
    "burger cimahi",
    "burger beef patty cimahi",
    "makanan cimahi",
    "kuliner cimahi",
    "restoran cimahi",
    "soup cream",
    "zupa soup",
    "catering cimahi",
    "makanan enak cimahi",
    "jual zuppa soup",
    "pesan zuppa soup online",
    "GoFood cimahi",
    "GrabFood cimahi",
    "ShopeeFood cimahi",
    "makanan buka 24 jam cimahi",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Zuppa Soup & Burger Terbaik di Cimahi`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/icon.jpeg",
        width: 512,
        height: 512,
        alt: "Logo Zuppa Soup Creamy Pondok Mutiara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Zuppa Soup & Burger Terbaik di Cimahi`,
    description: SITE_DESCRIPTION,
    images: ["/icon.jpeg"],
  },
  category: "food",
  other: {
    "geo.region": "ID-JB",
    "geo.placename": "Cimahi",
    "geo.position": "-6.876720959172517;107.55858263221718",
    ICBM: "-6.876720959172517, 107.55858263221718",
  },
};

// JSON-LD Structured Data for WebSite (controls site name in Google Search)
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: "Zuppa Soup Creamy",
  url: SITE_URL,
};

// JSON-LD Structured Data for Local Business / Restaurant
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SITE_NAME,
  image: `${SITE_URL}/icon.jpeg`,
  url: SITE_URL,
  telephone: "+6281223423406",
  email: "yantiheryanti08@gmail.com",
  description: SITE_DESCRIPTION,
  priceRange: "Rp 15.000 - Rp 48.000",
  servesCuisine: ["Indonesian", "Western", "Soup", "Burger"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Pondok Mutiara IV No.2",
    addressLocality: "Cibabat",
    addressRegion: "Kota Cimahi",
    postalCode: "40513",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.876720959172517,
    longitude: 107.55858263221718,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  hasMenu: {
    "@type": "Menu",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Zupa Zupa - Ayam",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Zupa Ayam + Jagung",
            description:
              "Potongan daging ayam lembut dengan jagung manis dalam krim sup kental.",
            offers: {
              "@type": "Offer",
              price: "28000",
              priceCurrency: "IDR",
            },
          },
          {
            "@type": "MenuItem",
            name: "Zupa Sosis Ayam + Jagung",
            description:
              "Lezatnya sosis ayam premium berpadu dengan jagung manis pilihan.",
            offers: {
              "@type": "Offer",
              price: "28000",
              priceCurrency: "IDR",
            },
          },
          {
            "@type": "MenuItem",
            name: "Zupa Mix Ayam",
            description:
              "Perpaduan lengkap: ayam, sosis ayam, dan jagung untuk rasa maksimal.",
            offers: {
              "@type": "Offer",
              price: "35000",
              priceCurrency: "IDR",
            },
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Zupa Zupa - Sapi",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Zupa Smoke Beef + Jagung",
            description:
              "Daging sapi asap berkualitas dengan aroma smoky dan jagung manis.",
            offers: {
              "@type": "Offer",
              price: "32500",
              priceCurrency: "IDR",
            },
          },
          {
            "@type": "MenuItem",
            name: "Zupa Sosis Sapi + Jagung",
            description:
              "Sosis sapi premium dengan tekstur padat dalam balutan krim sup lezat.",
            offers: {
              "@type": "Offer",
              price: "28000",
              priceCurrency: "IDR",
            },
          },
          {
            "@type": "MenuItem",
            name: "Zupa Mix Sapi",
            description:
              "Kombinasi smoke beef, sosis sapi, dan jagung untuk pencinta daging sapi.",
            offers: {
              "@type": "Offer",
              price: "35000",
              priceCurrency: "IDR",
            },
          },
        ],
      },
    ],
  },
  sameAs: [
    "https://wa.me/6281223423406",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${montserrat.variable} scroll-smooth`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TG9R9FMB');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TG9R9FMB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <OrderModalProvider>{children}</OrderModalProvider>
      </body>
    </html>
  );
}
