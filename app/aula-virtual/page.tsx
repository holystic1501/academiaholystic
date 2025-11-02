import { BookOpen, Video, FileText, MessageSquare, Calendar, Clock, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { pageBackgrounds } from "@/config/page-backgrounds"

const features = [
  {
    icon: BookOpen,
    title: "Materiales de Estudio",
    description: "Accede a material adicional, guías y recursos educativos organizados por materia",
  },
  {
    icon: Video,
    title: "Clases Grabadas",
    description: "Refuerza las clases cuando lo necesites con nuestro archivo de videos educativos",
  },
  {
    icon: FileText,
    title: "Tareas y Evaluaciones",
    description: "Entrega tus trabajos y realiza evaluaciones en línea de manera sencilla",
  },
  {
    icon: MessageSquare,
    title: "Publicación de Notas",
    description: "Visualiza los resultados de tus examenes y evaluaciones en tiempo real",
  },
  {
    icon: Calendar,
    title: "Calendario Académico",
    description: "Mantente al día con fechas importantes, exámenes y eventos",
  },
  {
    icon: Clock,
    title: "Horarios Personalizados",
    description: "Consulta tu horario de clases y actividades extracurriculares",
  },
]

export default function AulaVirtualPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center"
        style={{ backgroundImage: `url('${pageBackgrounds.aulaVirtual}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-secondary/85" />
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Plataforma Educativa</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-4 sm:mb-6 text-white">
              Aula Virtual
            </h1>
            <p className="text-base sm:text-lg text-white/95 text-pretty leading-relaxed mb-6 sm:mb-8">
              Accede a nuestra plataforma educativa en línea para continuar tu aprendizaje desde cualquier lugar. Todos
              tus recursos académicos en un solo lugar.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <LogIn className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Funcionalidades del Aula Virtual
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Herramientas diseñadas para facilitar tu experiencia de aprendizaje
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6 text-center">
                ¿Cómo acceder al Aula Virtual?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Obtén tus credenciales</h3>
                    <p>
                      Al matricularte, te brindaremos tu usuario y contraseña para acceder a la plataforma.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Inicia sesión</h3>
                    <p>Haz clic en el botón "Iniciar Sesión" y usa tus credenciales para entrar a la plataforma.</p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Explora y aprende</h3>
                    <p>Accede a todos los recursos, materiales y herramientas disponibles para tu nivel académico.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">¿Problemas para acceder?</p>
                <Button variant="outline" asChild className="bg-transparent">
                  <Link href="/contacto">Contactar Soporte Técnico</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
