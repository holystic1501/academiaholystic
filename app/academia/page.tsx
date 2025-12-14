import { Target, Eye, Heart, BookOpen, Users, Award } from "lucide-react"
import { pageBackgrounds } from "@/config/page-backgrounds"

export default function AcademiaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center"
        style={{ backgroundImage: `url('${pageBackgrounds.academia}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-secondary/85" />
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-4 sm:mb-6 text-white">
              Las bases de Holystic
            </h1>
            <p className="text-base sm:text-lg text-white/95 text-pretty leading-relaxed">
              Conoce más sobre nuestra institución, nuestra misión educativa y los valores que nos guían
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Misión</h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Formar estudiantes integrales, desarrollando sus capacidades intelectuales,
                emocionales y sociales para que sean ciudadanos responsables y universitarios exitosos.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Visión</h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Ser reconocidos como una institución educativa líder en la formación integral de estudiantes,
                destacando por la calidad de nuestros alumnos y su impacto positivo en la sociedad.
              </p>
            </div>

            {/* Values */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Valores</h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Integridad, respeto, responsabilidad, excelencia y compromiso. Fomentamos el desarrollo de valores
                éticos que guíen a nuestros estudiantes en su vida personal y profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
              ¿Quiénes Somos?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Metodología Innovadora</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Implementamos metodologías activas de enseñanza, brindando posibilidades de aprendizaje práctico y
                  colaborativo que complementan el sistema tradicional de enseñanza.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Comunidad Educativa</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Contamos con una comunidad comprometida de docentes, estudiantes y familias que trabajan juntos por el
                  éxito académico y personal de cada alumno.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Resultados Comprobados</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Más de 30 ingresantes en las principales universidades del país en los últimos años, incluyendo
                  UNI, PUCP, UPCH y UNCP
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Enfoque Personalizado</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Reconocemos que cada estudiante es único y adaptamos nuestras estrategias para potenciar sus
                  fortalezas y apoyar sus áreas de mejora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
