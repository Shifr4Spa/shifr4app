export const spaServices = [
  {
    id: 1,
    name: "Masaje Relajante",
    description:
      "Un masaje de cuerpo completo diseñado para aliviar la tensión y promover la relajación profunda.",
    duration: "60 minutos",
    price: 80,
    image: "/masajes.jpg",
  },
  {
    id: 2,
    name: "Facial Rejuvenecedor",
    description:
      "Tratamiento facial que combina limpieza profunda, exfoliación y mascarilla para una piel radiante.",
    duration: "45 minutos",
    price: 65,
    image: "/facial.jpg",
  },
  {
    id: 3,
    name: "Tratamiento Capilar Hidratante",
    description:
      "Terapia intensiva para el cabello que restaura la hidratación y brillo natural.",
    duration: "30 minutos",
    price: 50,
    image: "/aparatologia.jpg",
  },
  {
    id: 4,
    name: "Manicura y Pedicura Spa",
    description:
      "Cuidado completo de manos y pies, incluyendo exfoliación, masaje y esmalte.",
    duration: "75 minutos",
    price: 70,
    image: "/silla.jpg",
  },
];

export type SpaService = (typeof spaServices)[number];
