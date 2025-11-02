// This file allows administrators to easily update background images for each page
// Simply replace the image paths below to change the backgrounds

export const pageBackgrounds = {
  inicio: "/backgrounds/awelito-holystic-2.jpeg",
  academia: "/backgrounds/clase holystic.jpg",
  profesores: "/backgrounds/teachers-classroom.jpg",
  galeria: "/backgrounds/gallery-events.jpg",
  solucionarios: "/backgrounds/study-materials.jpg",
  aulaVirtual: "/backgrounds/online-learning.jpg",
  interfazInstitucional: "/backgrounds/admin-office.jpg",
  matriculas: "/backgrounds/enrollment-desk.jpg",
  contacto: "/backgrounds/contact-reception.jpg",
} as const

export type PageBackgroundKey = keyof typeof pageBackgrounds
