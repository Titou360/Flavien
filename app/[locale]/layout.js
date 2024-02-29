import { Inter } from "next/font/google";
import "./globals.css";
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Le Café de la Place, Brocas",
  description: "Restaurant traditionnel au coeur des Landes, à Brocas, bar, brasserie, pizza et burgers, vente sur place et à emporter",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={dir(locale)} className="scroll-smooth">
      <body className={`${inter.className} bg-gray-100`}>{children}</body>
    </html>
  );
}
