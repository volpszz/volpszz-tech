import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "./language-provider";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arthur Volpato | Software e Cibersegurança",
  description:
    "Portfólio de Arthur Volpato: projetos de software, sistemas e cibersegurança. Estudos em Engenharia de Software e trajetória em Segurança da Informação.",
  openGraph: {
    title: "Arthur Volpato | Software e Cibersegurança",
    description:
      "Projetos em Rust, Python e desenvolvimento web. Contexto técnico, arquitetura e aprendizado contínuo em cibersegurança.",
    type: "website",
  },
  twitter: { card: "summary" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
