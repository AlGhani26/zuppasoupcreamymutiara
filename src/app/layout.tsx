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

export const metadata: Metadata = {
  title: "Zuppa Soup Creamy Pondok Mutiara",
  description:
    "Kehangatan Zuppa Soup Creamy Pondok Mutiara. Kelezatan rumahan yang dibuat dengan bahan premium.",
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
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        <OrderModalProvider>{children}</OrderModalProvider>
      </body>
    </html>
  );
}
