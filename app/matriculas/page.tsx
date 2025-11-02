"use client"

import { useState } from "react"
import { GraduationCap, CheckCircle2, Calendar, CreditCard, FileText, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { pageBackgrounds } from "@/config/page-backgrounds"
import { supabase } from "@/lib/supabaseClient"

const benefits = [
  "Acceso completo al aula virtual",
  "Materiales educativos incluidos",
  "Seguimiento personalizado",
  "Acceso completo a la biblioteca",
]

const steps = [
  { icon: FileText, title: "Completa el formulario", description: "Llena tus datos personales y académicos" },
  { icon: Calendar, title: "Agenda una entrevista", description: "Coordinaremos una reunión informativa" },
  { icon: CreditCard, title: "Realiza el pago", description: "Confirma tu matrícula con el pago inicial" },
  { icon: CheckCircle2, title: "¡Listo para empezar!", description: "Recibe tus credenciales y comienza" },
]

export default function MatriculasPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    grado: "",
    mensaje: "",
  })

  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatusMessage("")

    const { error } = await supabase.from("Matriculas").insert([
      {
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        telefono: formData.telefono,
        grado: formData.grado,
        mensaje: formData.mensaje,
      },
    ])

    if (error) {
      setStatusMessage("Ocurrió un error al enviar la solicitud. Intenta nuevamente.")
      console.error("Error Supabase:", error)
    } else {
      setStatusMessage("¡Solicitud enviada correctamente!")
      setFormData({ nombre: "", apellido: "", email: "", telefono: "", grado: "", mensaje: "" })
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center"
        style={{ backgroundImage: `url('${pageBackgrounds.matriculas}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-secondary/85" />
        <div className="container mx-auto px-3 sm:px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Matrículas Abiertas 2024</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-4 sm:mb-6 text-white">
            Inscríbete en Holystic Academy
          </h1>
          <p className="text-base sm:text-lg text-white/95 text-pretty leading-relaxed">
            Únete a nuestra comunidad educativa y comienza tu camino hacia la excelencia académica
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
              Beneficios de Matricularte
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-card border border-border rounded-lg p-3 sm:p-4">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6 text-center">
                Formulario de Matrícula
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Nombre y Apellido */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellido">Apellido</Label>
                    <Input
                      id="apellido"
                      name="apellido"
                      placeholder="Tu apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Teléfono */}
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="+51 999 999 999"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Grado/Nivel */}
                <div className="space-y-2">
                  <Label htmlFor="grado">Nivel de Interés</Label>
                  <select
                    id="grado"
                    name="grado"
                    value={formData.grado}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Selecciona un nivel</option>
                    <option value="Básico">Básico</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje Adicional (Opcional)</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Cuéntanos sobre tus expectativas o consultas..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                {/* Status Message */}
                {statusMessage && (
                  <p className="text-center text-sm sm:text-base font-medium text-primary mt-2">
                    {statusMessage}
                  </p>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                  Enviar Solicitud de Matrícula
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
              Proceso de Matrícula
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
