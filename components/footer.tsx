import Link from "next/link"
import { Facebook, Instagram, Zap, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <img src="/ikonik.png" alt="Logo" className="w-full h-full object-contain"/>
              </div>
              <span className="text-lg font-semibold">Holystic Academy</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Institución educativa comprometida con el desarrollo integral de nuestros
              estudiantes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/academia" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/profesores" className="text-muted-foreground hover:text-primary transition-colors">
                  Nuestros Profesores
                </Link>
              </li>
              <li>
                <Link href="/matriculas" className="text-muted-foreground hover:text-primary transition-colors">
                  Matrículas
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+51 920 508 944</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>holysticacademy@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Junín, Perú</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/juan.jose.suazo.sanchez.2025"
                rel="noopener noreferrer"
                target="_blank"
                className="w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/academiaholystic/"
                rel="noopener noreferrer"
                target="_blank"
                className="w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/51920508944?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20la%20Academia%20Holystic.%20Estoy%20interesado%20en%20sus%20cursos."
                rel="noopener noreferrer"
                target="_blank"
                className="w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <Zap className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Holystic Academy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
