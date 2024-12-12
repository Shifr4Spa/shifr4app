import {
  BriefcaseIcon,
  CurrencyIcon,
  UsersIcon,
  TrophyIcon,
} from "@/app/components/Icons";


const testimonials = [
  {
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    name: "Mario Rodríguez",
    title: "Cliente Satisfecho",
    quote:
      "“El servicio en el spa fue una experiencia increíble. Desde el masaje relajante hasta el ambiente, todo estuvo perfectamente cuidado. Salí completamente renovado. ¡Definitivamente volveré!”",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Laura Gómez",
    title: "Cliente Satisfecho",
    quote:
      "“El trato en el spa fue excepcional. Me sentí completamente cuidada y relajada. La atención personalizada y la calidad de los servicios me hicieron sentir especial. ¡Altamente recomendado!”",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Alejandro Gómez",
    title: "Cliente Satisfecho",
    quote:
      "“Después de una larga semana de trabajo, un día en el spa fue justo lo que necesitaba. El servicio de masajes y el ambiente tranquilo me ayudaron a desconectar completamente. Sin duda, es el lugar perfecto para relajarse.”",
  },
];


const whyChooseServices = [
  {
    title: "Masajes Terapéuticos",
    description:
      "Disfruta de masajes personalizados que ayudan a aliviar tensiones musculares, mejorar la circulación y promover un estado general de relajación. Desde masajes relajantes hasta terapias más profundas, tenemos opciones para todos los gustos",
    icon: <BriefcaseIcon className="text-white" />,
  },
  {
    title: "Tratamientos Faciales",
    description:
      "Nuestros tratamientos faciales están diseñados para revitalizar la piel, brindando hidratación, limpieza profunda y rejuvenecimiento. Con productos de alta calidad y tecnología avanzada, tu rostro lucirá radiante y fresco",
    icon: <CurrencyIcon className="text-white" />,
  },
  {
    title: "Baños de Vapor y Sauna",
    description:
      "Relájate en nuestras modernas instalaciones de baño de vapor y sauna, ideales para desintoxicar el cuerpo, mejorar la circulación y relajar los músculos. Perfecto para una experiencia completa de bienestar",
    icon: <UsersIcon className="text-white" />,
  },
  {
    title: "Tratamientos Corporales",
    description:
      "Ofrecemos una variedad de envolturas y exfoliaciones que nutren la piel y ayudan a reducir la retención de líquidos, proporcionando una sensación de frescura y rejuvenecimiento.",
    icon: <TrophyIcon className="text-white" />,
  },
];

const services = [
  {
    title: "Manicura y Pedicura",
    description:
      "Cuida tus manos y pies con nuestros servicios de manicura y pedicura, que incluyen masajes, cuidado de uñas y piel, y aplicación de esmalte de alta calidad para un toque de elegancia y relajación.",
  },
  {
    title: "Yoga y Meditación",
    description:
      "Si buscas conectar cuerpo y mente, nuestras clases de yoga y meditación están diseñadas para ayudarte a encontrar el equilibrio, reducir el estrés y mejorar tu bienestar general.",
  },
  {
    title: "Paquetes Especiales",
    description:
      "Ofrecemos paquetes de servicios diseñados para brindarte una experiencia completa de relajación. Combinando masajes, tratamientos faciales y corporales, cada paquete está pensado para que disfrutes de un día de bienestar total.",
  },
  {
    title: "Masajes con Piedras Calientes",
    description:
      "El masaje con piedras calientes combina el poder terapéutico del calor con la técnica del masaje, ayudando a aliviar la tensión muscular y mejorar la circulación sanguínea. Las piedras volcánicas, al ser aplicadas sobre puntos clave del cuerpo, proporcionan un profundo relajamiento, reducen el estrés y promueven la sensación de bienestar.",
  },
  {
    title: "Tratamientos Anticelulitis y Reductores",
    description:
      "Ofrecemos tratamientos especializados para combatir la celulitis y reducir la apariencia de la piel de naranja. Con técnicas avanzadas de masaje y el uso de productos específicos, estos tratamientos estimulan la circulación, ayudan a la eliminación de toxinas y favorecen la reducción de volumen, mejorando la textura de la piel.",
  },
  {
    title: "Tratamientos Faciales Personalizados",
    description:
      "Nuestros tratamientos faciales están diseñados para cada tipo de piel, desde hidratación profunda hasta rejuvenecimiento. Utilizamos productos de alta calidad y técnicas especializadas para mejorar la apariencia de tu piel, dejando tu rostro radiante y renovado.",
  },
];



const teamLawyers = [
  {
    avatar:
      "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    name: "Adela",
    title: "Especialista en Masajes Terapéuticos",
    desc: "Laura es una masajista certificada con más de 8 años de experiencia en técnicas de relajación y terapias manuales. Se especializa en masajes descontracturantes, deportivos y con piedras calientes, ayudando a sus clientes a aliviar tensiones y a mejorar su bienestar general.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
    name: "Alexa Maste",
    title: "Dermatólogo Estético",
    desc: "Con una formación sólida en dermatología estética, el Dr. Mendoza se enfoca en tratamientos faciales, como la microdermoabrasión y la terapia con láser, para rejuvenecer la piel y tratar afecciones como el acné y la rosácea. Su enfoque es natural y personalizado, buscando siempre resultados saludables y duraderos.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Alicia",
    title: "Nutricionista y Asesora de Bienestar",
    desc: "Isabel es licenciada en nutrición y tiene una amplia experiencia ayudando a sus clientes a mejorar su salud a través de una alimentación balanceada. Ofrece planes de nutrición personalizados y asesoramiento sobre hábitos de vida saludable, combinando el bienestar físico y mental.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Dora",
    title: "Especialista en Tratamientos Anticelulitis y Reductores",
    desc: "Eduardo es experto en tratamientos corporales, con un enfoque especial en la reducción de celulitis y remodelación corporal. Utiliza técnicas avanzadas como la radiofrecuencia y masajes drenantes para mejorar la circulación y la apariencia de la piel, ayudando a los clientes a lograr una figura más tonificada y firme.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Elena",
    title: "Esteticista y Especialista en Tratamientos Faciales",
    desc: "Ana María es una esteticista altamente calificada con un enfoque en la belleza facial. Su especialidad es en tratamientos antiaging, faciales hidratantes, y limpieza profunda de la piel. Con su experiencia, proporciona soluciones efectivas para que los clientes luzcan una piel más joven, fresca y radiante.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    name: "Elizabeth",
    title: "Instructor de Yoga y Meditación",
    desc: "Juan es un instructor certificado en yoga y meditación con más de 10 años de experiencia. Sus clases están diseñadas para ayudar a los clientes a liberar el estrés, mejorar la flexibilidad y encontrar la calma interior. A través de su enfoque holístico, enseña técnicas que promueven la salud mental y física.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    name: "Fatima",
    title: "Instructor de Yoga y Meditación",
    desc: "Juan es un instructor certificado en yoga y meditación con más de 10 años de experiencia. Sus clases están diseñadas para ayudar a los clientes a liberar el estrés, mejorar la flexibilidad y encontrar la calma interior. A través de su enfoque holístico, enseña técnicas que promueven la salud mental y física.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Ilse",
    title: "Instructor de Yoga y Meditación",
    desc: "Juan es un instructor certificado en yoga y meditación con más de 10 años de experiencia. Sus clases están diseñadas para ayudar a los clientes a liberar el estrés, mejorar la flexibilidad y encontrar la calma interior. A través de su enfoque holístico, enseña técnicas que promueven la salud mental y física.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    name: "Lore",
    title: "Especialista en Masajes Terapéuticos",
    desc: "Laura es una masajista certificada con más de 8 años de experiencia en técnicas de relajación y terapias manuales. Se especializa en masajes descontracturantes, deportivos y con piedras calientes, ayudando a sus clientes a aliviar tensiones y a mejorar su bienestar general.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
    name: "Nancy",
    title: "Dermatólogo Estético",
    desc: "Con una formación sólida en dermatología estética, el Dr. Mendoza se enfoca en tratamientos faciales, como la microdermoabrasión y la terapia con láser, para rejuvenecer la piel y tratar afecciones como el acné y la rosácea. Su enfoque es natural y personalizado, buscando siempre resultados saludables y duraderos.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Norma",
    title: "Nutricionista y Asesora de Bienestar",
    desc: "Isabel es licenciada en nutrición y tiene una amplia experiencia ayudando a sus clientes a mejorar su salud a través de una alimentación balanceada. Ofrece planes de nutrición personalizados y asesoramiento sobre hábitos de vida saludable, combinando el bienestar físico y mental.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Sofi",
    title: "Especialista en Tratamientos Anticelulitis y Reductores",
    desc: "Eduardo es experto en tratamientos corporales, con un enfoque especial en la reducción de celulitis y remodelación corporal. Utiliza técnicas avanzadas como la radiofrecuencia y masajes drenantes para mejorar la circulación y la apariencia de la piel, ayudando a los clientes a lograr una figura más tonificada y firme.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Tete",
    title: "Esteticista y Especialista en Tratamientos Faciales",
    desc: "Ana María es una esteticista altamente calificada con un enfoque en la belleza facial. Su especialidad es en tratamientos antiaging, faciales hidratantes, y limpieza profunda de la piel. Con su experiencia, proporciona soluciones efectivas para que los clientes luzcan una piel más joven, fresca y radiante.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    name: "Rubi",
    title: "Instructor de Yoga y Meditación",
    desc: "Juan es un instructor certificado en yoga y meditación con más de 10 años de experiencia. Sus clases están diseñadas para ayudar a los clientes a liberar el estrés, mejorar la flexibilidad y encontrar la calma interior. A través de su enfoque holístico, enseña técnicas que promueven la salud mental y física.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    name: "Daniela",
    title: "Instructor de Yoga y Meditación",
    desc: "Juan es un instructor certificado en yoga y meditación con más de 10 años de experiencia. Sus clases están diseñadas para ayudar a los clientes a liberar el estrés, mejorar la flexibilidad y encontrar la calma interior. A través de su enfoque holístico, enseña técnicas que promueven la salud mental y física.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },

];

export { testimonials, whyChooseServices, services, teamLawyers };
