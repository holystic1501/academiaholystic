import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Suspense } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Holystic Academy - Educación y Preparación Académica",
  description:
    "Academia educativa moderna en Perú. Preparación escolar, preuniversitaria y reforzamiento académico. Clases personalizadas y enfoque en resultados.",
  keywords: [
    "academia holystic",
    "academia huancayo",
    "preuniversitaria",
    "clases san jeronimo",
    "colegio",
    "Perú",
    "Holystic",
    "san jeronimo",
    "uncp",
    "universidad nacional del centro del Perú",
    "refuerzo escolar san jeronimo",
    "refuerzo académico",
    "clases preuniversitarias",
    "formación académica",
    "ingresantes uncp",
  ],
  authors: [{ name: "Holystic Academy" }],
  openGraph: {
    title: "Holystic Academy",
    description:
      "Formación académica moderna para estudiantes escolares y preuniversitarios.",
    url: "https://academiaholystic.vercel.app/",
    siteName: "Holystic Academy",
    locale: "es_PE",
    type: "website",
  },
  icons: {
    icon: "/ikonik.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      {/* ✅ Google Search Console verification */}
      <head>
        <meta
          name="google-site-verification"
          content="ZCgDoQODXJTrMuTmBpw91VEYL1Eecb2nEmmVIdlwhbE"
        />
      </head>

      <body className={`font-sans ${poppins.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          {children}
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
