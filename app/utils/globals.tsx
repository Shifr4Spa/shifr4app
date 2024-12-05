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
    title: "Inversiones Rápidas S.A.",
    quote:
      "“Agrod & Asociados hizo que el proceso de adquisición de propiedades fuera impecable. Su conocimiento en derecho inmobiliario y su enfoque proactivo hicieron toda la diferencia. ¡Altamente recomendados!“",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Laura Gómez",
    title: "Comercio Innovador Ltd.",
    quote:
      "“Enfrentar disputas legales es siempre desafiante, pero Agrod & Asociados demostró una habilidad excepcional en litigios comerciales. Su equipo legal competente y comprometido logró resultados favorables. Estamos agradecidos por su dedicación.“",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Alejandro Gómez",
    title: "InnovateTech Inc",
    quote:
      "“Necesitábamos orientación experta en derecho laboral y recursos humanos. Agrod & Asociados no solo proporcionó asesoramiento claro y estratégico, sino que también demostraron empatía hacia nuestras preocupaciones. Una elección sobresaliente para cuestiones legales laborales.“",
  },
];

const whyChooseServices = [
  {
    title: "Agilidad y Resultados",
    description:
      "En Agrod & Asociados, destacamos por nuestra eficiencia legal, ofreciendo soluciones rápidas y resultados efectivos.",
    icon: <BriefcaseIcon className="text-white" />,
  },
  {
    title: "Expertos en su Especialidad",
    description:
      "Elegirnos significa acceder a un equipo legal con profunda experiencia y conocimientos especializados en diversas áreas del derecho.",
    icon: <CurrencyIcon className="text-white" />,
  },
  {
    title: "Su Caso, Nuestra Prioridad",
    description:
      "En Agrod & Asociados, cada caso recibe atención personalizada. Nos comprometemos a entender sus necesidades y trabajar juntos para alcanzar sus objetivos legales.",
    icon: <UsersIcon className="text-white" />,
  },
  {
    title: "Comunicación Clara, Resultados Transparentes",
    description:
      "Destacamos por nuestra comunicación abierta y transparente. En Agrod & Asociados, construimos relaciones basadas en la confianza y ofrecemos resultados tangibles.",
    icon: <TrophyIcon className="text-white" />,
  },
];

const services = [
  {
    title: "Derecho Comercial Estratégico",
    description:
      "Optimice su Estrategia Empresarial. Brindamos asesoramiento legal integral para empresas, desde la constitución hasta la resolución de conflictos comerciales, asegurando un enfoque estratégico en cada etapa.",
  },
  {
    title: "Litigios Civiles y Comerciales",
    description:
      "Defendemos sus Intereses. Nuestro equipo experto en litigios está dedicado a la resolución efectiva de disputas civiles y comerciales, proporcionando representación legal sólida y enfocada en resultados.",
  },
  {
    title: "Derecho Laboral y Recursos Humanos",
    description:
      "Relaciones Laborales Armoniosas. Ofrecemos asesoramiento en derecho laboral para empleadores y empleados, garantizando prácticas laborales justas y resolviendo cuestiones relacionadas con recursos humanos.",
  },
  {
    title: "Propiedad Intelectual y Tecnologías",
    description:
      "Protegiendo su Innovación. Asesoramos en asuntos de propiedad intelectual, patentes y tecnologías emergentes, proporcionando protección legal para innovadores y empresas tecnológicas.",
  },
  {
    title: "Derecho Inmobiliario y Transacciones",
    description:
      "Facilitando Transacciones Inmobiliarias. Brindamos asesoramiento en transacciones inmobiliarias, desde contratos hasta disputas, asegurando un enfoque legal sólido en el complejo mundo del derecho inmobiliario.",
  },
  {
    title: "Cumplimiento Normativo y Ética Empresarial",
    description:
      "Conducción Empresarial Ética. Ayudamos a las empresas a navegar por el panorama normativo, garantizando el cumplimiento de regulaciones y promoviendo prácticas comerciales éticas y sostenibles.",
  },
];

const teamLawyers = [
  {
    avatar:
      "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    name: "Martina Díaz",
    title: "Abogada Especialista en Derecho Civil",
    desc: "Experta en resolver disputas civiles con enfoque estratégico y soluciones legales efectivas.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
    name: "Miguel Colón",
    title: "Abogado Especialista en Derecho Penal",
    desc: "Comprometido con la defensa de los derechos de sus clientes en casos penales.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Luis Brown",
    title: "Abogado Full Stack",
    desc: "Especializado en proporcionar asesoramiento legal integral desde litigios hasta transacciones.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Lysa Santiago",
    title: "Jefa de Abogados Laborales",
    desc: "Experta en relaciones laborales justas y resolución de conflictos en el ámbito laboral.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Daniel Martín",
    title: "Abogado Especialista en Propiedad Intelectual",
    desc: "Protegiendo la innovación y los derechos de propiedad intelectual de nuestros clientes.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    name: "Víctor Tanson",
    title: "Abogado de Negocios",
    desc: "Especializado en asesoramiento legal estratégico para empresas y transacciones comerciales.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
];

export { testimonials, whyChooseServices, services, teamLawyers };
