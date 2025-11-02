"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { pageBackgrounds } from "@/config/page-backgrounds"
import { supabase } from "@/lib/supabaseClient"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })

  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatusMessage("")

    const { error } = await supabase.from("Contactos").insert([
      {
        nombre: formData.nombre,
        email: formData.email,
        asunto: formData.asunto,
        mensaje: formData.mensaje,
      },
    ])

    if (error) {
      console.error("Error Supabase:", error)
      setStatusMessage("Ocurrió un error al enviar tu mensaje. Intenta nuevamente.")
    } else {
      setStatusMessage("¡Mensaje enviado con éxito! Te responderemos pronto.")
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" })
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center"
        style={{ backgroundImage: `url('${pageBackgrounds.contacto}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-secondary/85" />
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-4 sm:mb-6 text-white">
              Contáctanos
            </h1>
            <p className="text-base sm:text-lg text-white/95 text-pretty leading-relaxed">
              Estamos aquí para responder tus preguntas y ayudarte en lo que necesites
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Información de Contacto</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm sm:text-base">Teléfono</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">+51 920 508 944</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">+51 981 597 558</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm sm:text-base">Email</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">holysticacademy@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm sm:text-base">Dirección</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">Jr.28 de Julio 398</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">(frente a la Municipalidad de Saño)</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">Jr.Ica 482</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">(Parque Municipal San Jerónimo)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm sm:text-base">Horario de Atención</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">Lunes a Viernes: 4:00 PM - 8:30 PM</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">Sábados: 4:00 PM - 8:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold mb-4 text-sm sm:text-base">Síguenos en Redes Sociales</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/juan.jose.suazo.sanchez.2025"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/51920508944?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20la%20Academia%20Holystic.%20Estoy%20interesado%20en%20sus%20cursos."
                    rel="noopener noreferrer"
                    target="_blank"
                    className="w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                    aria-label="WhatsApp"
                  >
                    <Zap className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
                <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre Completo</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre completo"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>

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

                  <div className="space-y-2">
                    <Label htmlFor="asunto">Asunto</Label>
                    <Input
                      id="asunto"
                      name="asunto"
                      placeholder="¿Sobre qué quieres consultarnos?"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Escribe tu mensaje aquí..."
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>

                  {statusMessage && (
                    <p className="text-center text-sm sm:text-base font-medium text-primary mt-2">
                      {statusMessage}
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {loading ? "Enviando..." : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Nuestra Ubicación</h2>
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.3692741217096!2d-75.28579482610733!3d-11.948915140084216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910eb92093c864c9%3A0xa4492c624f351413!2sAcademia%20Holystic!5e0!3m2!1ses-419!2spe!4v1760590138657!5m2!1ses-419!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación de Holystic Academy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
