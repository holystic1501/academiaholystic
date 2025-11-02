"use client"
import { useEffect, useState } from "react"
import { Download, FileText, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pageBackgrounds } from "@/config/page-backgrounds"
import { supabase } from "../../lib/supabaseClient"

type Solucionario = {
  id: number
  title: string
  subject: string
  grade: string
  date: string
  file_url: string
}

export default function SolucionariosPage() {
  const [solucionarios, setSolucionarios] = useState<Solucionario[]>([])

  useEffect(() => {
    async function fetchSolucionarios() {
      const { data, error } = await supabase
        .from("PDF") // Tu tabla en Supabase
        .select("*")
        .order("date", { ascending: false })

      if (error) {
        console.error("Error al obtener solucionarios:", error)
      } else if (data) {
        setSolucionarios(data as Solucionario[])
      }
    }

    fetchSolucionarios()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center"
        style={{ backgroundImage: `url('${pageBackgrounds.solucionarios}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-secondary/85" />
        <div className="container mx-auto px-3 sm:px-4 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Solucionarios
          </h1>
          <p className="text-base sm:text-lg text-white/95 leading-relaxed">
            Accede a los exámenes resueltos para reforzar tu aprendizaje.
          </p>
        </div>
      </section>

      {/* Lista de Solucionarios */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-5xl mx-auto space-y-4">
            {solucionarios.length === 0 ? (
              <p className="text-center text-muted-foreground">
                No hay solucionarios disponibles.
              </p>
            ) : (
              solucionarios.map((item) => (
                <div
                  key={item.id}
                  className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          {item.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            {item.subject || "Sin materia"}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <span className="w-2 h-2 bg-secondary rounded-full" />
                            {item.grade || "Sin grado"}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {item.date || "Sin fecha"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-md transition-all duration-300 md:flex-shrink-0 w-full md:w-auto"
                      size="sm"
                    >
                      <a
                        href={item.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Descargar
                      </a>
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
