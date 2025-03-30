import type { Metadata } from "next";
import { Nunito, Bebas_Neue } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], variable: "--nunito", display:"swap" });
const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight:"400", variable: "--bebasNeue", display:"swap" });


export const metadata: Metadata = {
  title: "Jack Glenn",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${bebas_neue.variable}`}>
        <div className='header'>
          <h1>Jack Glenn</h1>
        </div>
        <div className="mainContent">
          {children}
        </div>
      </body>
    </html>
  );
}

