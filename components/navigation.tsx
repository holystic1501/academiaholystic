"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/academia", label: "Academia" },
  { href: "/profesores", label: "Profesores" },
  { href: "/galeria", label: "Galería" },
  { href: "/solucionarios", label: "Solucionarios" },
  { href: "/aula-virtual", label: "Aula Virtual" },
  { href: "/matriculas", label: "Matrículas" },
  { href: "/contacto", label: "Contacto" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <img
    src="/ikonik completo.png"
    alt="Logo Holystic"
    className="h-12 sm:h-16 w-auto object-contain"
  />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  "hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5",
                  "relative group",
                  pathname === item.href ? "text-primary bg-primary/10" : "text-foreground/70",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300",
                    pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            ))}
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Menú"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-3 space-y-1 border-t border-border mt-2 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  "hover:bg-primary hover:text-primary-foreground",
                  pathname === item.href ? "text-primary bg-primary/10" : "text-foreground/70",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
