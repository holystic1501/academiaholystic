"use client"

import { useState } from "react"
import { Calendar, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pageBackgrounds } from "@/config/page-backgrounds"

const galleryItems = [
  {
    type: "image",
    url: "/awelito holystic.jpg",
    title: "Se funda Holystic Academy",
    date: "17 de Octubre, 2023",
    description: "Estudiantes presentando sus proyectos innovadores en la feria anual de ciencias.",
  }

]

export default function GaleriaPage() {
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center"
        style={{ backgroundImage: `url('${pageBackgrounds.galeria}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-secondary/85" />
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-4 sm:mb-6 text-white">Galería</h1>
            <p className="text-base sm:text-lg text-white/95 text-pretty leading-relaxed">
              Revive los momentos más importantes de nuestra comunidad educativa
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                  <img
                    src={item.url || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-base sm:text-lg mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-3 sm:p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedItem.url || "/placeholder.svg"}
                alt={selectedItem.title}
                className="w-full aspect-video object-cover rounded-t-2xl"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setSelectedItem(null)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{selectedItem.title}</h2>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Calendar className="w-4 h-4" />
                <span className="text-sm sm:text-base">{selectedItem.date}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
