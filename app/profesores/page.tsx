import { Mail, Award, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pageBackgrounds } from "@/config/page-backgrounds"

const teachers = [
  {
    name: "Juan Suazo",
    subject: "Física y Aritmética",
    bio: "Capacitador de Docentes para MINEDU, actualmente entrenador de FISICA EXPERIMENTAL para olimpiadas internacionales. Miembro de la Sociedad Peruana de Docentes de Física.",
    image: "/foto abuelito y papá micho.jpg",
  },
  {
    name: "Lic. María González",
    subject: "Lengua y Literatura",
    bio: "Licenciada en Literatura con maestría en Didáctica del Lenguaje. Apasionada por fomentar la lectura crítica.",
    image: "/professional-female-teacher-literature.jpg",
  },
  {
    name: "Ing. Roberto Silva",
    subject: "Ciencias",
    bio: "Ingeniero Químico con especialización en enseñanza de ciencias naturales. Promueve el aprendizaje experimental.",
    image: "/professional-male-teacher-science.jpg",
  },
  {
    name: "Prof. Ana Torres",
    subject: "Historia y Geografía",
    bio: "Profesora de Historia con 12 años de experiencia. Especialista en metodologías activas de enseñanza.",
    image: "/professional-female-teacher-history.jpg",
  },
  {
    name: "Lic. Jorge Ramírez",
    subject: "Inglés",
    bio: "Certificado TESOL con experiencia internacional. Enfoque comunicativo y preparación para certificaciones.",
    image: "/professional-male-teacher-english.jpg",
  },
  {
    name: "Prof. Laura Vega",
    subject: "Arte y Música",
    bio: "Artista plástica y musicóloga. Fomenta la creatividad y expresión artística en los estudiantes.",
    image: "/professional-female-teacher-art-music.jpg",
  },
]

export default function ProfesoresPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center"
        style={{ backgroundImage: `url('${pageBackgrounds.profesores}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-secondary/85" />
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-4 sm:mb-6 text-white">
              Nuestros Profesores
            </h1>
            <p className="text-base sm:text-lg text-white/95 text-pretty leading-relaxed">
              Conoce a nuestro equipo docente altamente calificado y comprometido con la excelencia educativa
            </p>
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                  <img
                    src={teacher.image || "/placeholder.svg"}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1">{teacher.name}</h3>
                      <div className="flex items-center gap-2 text-primary">
                        <BookOpen className="w-4 h-4" />
                        <span className="text-sm font-medium">{teacher.subject}</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{teacher.bio}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-3xl mx-auto text-center">
            
          </div>
        </div>
      </section>
    </div>
  )
}
