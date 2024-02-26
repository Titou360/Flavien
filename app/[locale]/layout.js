import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Le Café de la Place, Brocas",
  description: "Restaurant traditionnel au coeur des Landes, à Brocas, bar, brasserie, pizza et burgers, vente sur place et à emporter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-100`}>{children}</body>
    </html>
  );
}
