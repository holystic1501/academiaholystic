import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Users, Award } from "lucide-react"
import { pageBackgrounds } from "@/config/page-backgrounds"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12 sm:py-16 md:py-24 lg:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url('${pageBackgrounds.inicio}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Garantizamos tu aprendizaje</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-4 sm:mb-6 text-white">
               <span className="text-white drop-shadow-lg">Holystic Academy</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/95 text-pretty leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
              Formamos estudiantes integros, capaces de ingresar y mantenerse con buen rendimiento en la universidad. Nuestra misión es
              desarrollar el máximo potencial de cada estudiante en un ambiente de aprendizaje moderno y profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Link href="/matriculas">Matrículas Abiertas</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-1 bg-transparent"
              >
                <Link href="/aula-virtual">Aula Virtual</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">¿Por qué Holystic?</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Ofrecemos una educación de calidad con vista al ingreso y buen desarrollo del estudiante dentro de la Universidad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Niveles Académicos</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Aulas separadas por niveles, logrando un aprendizaje real.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Docentes Calificados</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Equipo docente altamente capacitado y comprometido
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Recursos Modernos</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Plataforma virtual y materiales educativos actualizados
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Formación Integral</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Desarrollo académico, personal y valores éticos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              ¿Listo para comenzar tu camino educativo?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-white/90">
              Únete a nuestra comunidad académica y alcanza tu máximo potencial
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Link href="/matriculas">Inscríbete Ahora</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
