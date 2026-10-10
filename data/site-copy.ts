export const siteCopy = {
  en: {
    languageLabel: "Language",
    navigation: {
      about: "About",
      career: "Career",
      work: "Selected work",
      demos: "Demos",
      contact: "Let's talk",
      label: "Main navigation",
    },
    hero: {
      role: "SOFTWARE ENGINEER",
      headline: ["Good software", "makes hard things", "feel simple."],
      intro:
        "I'm Oscar, a product-minded engineer working across web, mobile, cloud, and AI. I like getting close to the problem, then building the right thing end to end.",
      journey: "Explore my journey",
      aside: "ENGINEERING, END TO END",
      scroll: "SCROLL TO EXPLORE",
    },
    about: {
      kicker: "THE SHORT VERSION",
      heading: ["Engineer by craft.", "Builder by instinct."],
      lead: "From the first sketch to the cloud deployment, I enjoy understanding how the whole system fits together.",
      paragraphs: [
        "Over the past few years, I've helped build products in fundraising, marketing automation, and AI. My work moves between interface details, backend services, third-party integrations, and the infrastructure that gets software into people's hands.",
        "I've also mentored developers, contributed to hiring and training, and stepped into technical leadership when the team needed it. I value clear thinking, collaborative teams, and solutions that hold up beyond the demo.",
      ],
      capabilities: [
        { label: "Product interfaces", detail: "React · Flutter · Angular" },
        { label: "Full-stack systems", detail: "Python · JavaScript · APIs" },
        { label: "Cloud & delivery", detail: "AWS · Azure · Terraform" },
        {
          label: "Applied AI",
          detail: "AI agents · evaluation · prompt engineering",
        },
      ],
    },
    career: {
      kicker: "THE CAREER JOURNEY",
      heading: "Each role, a wider lens.",
      intro:
        "Product work, platform thinking, and a little more ownership at every step.",
      education: "EDUCATION",
      degree: "BSc, Computer Science",
    },
    work: {
      kicker: "SELECTED WORK",
      heading: ["Three problems.", "Three different scales."],
      intro:
        "The portfolio is taking shape. For now, here's a closer look at the products and challenges behind my recent work.",
      note: "Detailed case studies coming soon",
    },
    demos: {
      kicker: "INDEPENDENT DEMOS",
      heading: "Built to be played with.",
      intro:
        "Small interactive experiments, shared as demos rather than client or product case studies.",
      open: "Open demo",
    },
    contact: {
      kicker: "HAVE A GOOD PROBLEM?",
      heading: ["Let's build", "what's next."],
      email: "Email me",
      whatsapp: "WhatsApp",
      linkedin: "Connect on LinkedIn",
    },
    footer: {
      updated: "Updated at",
      timeZone: "ECUADOR TIME",
      location: "SOFTWARE ENGINEER · GUAYAQUIL, EC",
      backToTop: "BACK TO TOP ↑",
    },
  },
  es: {
    languageLabel: "Idioma",
    navigation: {
      about: "Sobre mí",
      career: "Trayectoria",
      work: "Proyectos",
      demos: "Demos",
      contact: "Hablemos",
      label: "Navegación principal",
    },
    hero: {
      role: "INGENIERO DE SOFTWARE",
      headline: ["El buen software", "hace simples", "las cosas difíciles."],
      intro:
        "Soy Oscar, un ingeniero con enfoque en producto que trabaja en aplicaciones web y móviles, la nube y la inteligencia artificial. Me gusta entender el problema y construir la solución de principio a fin.",
      journey: "Conoce mi trayectoria",
      aside: "INGENIERÍA DE PRINCIPIO A FIN",
      scroll: "DESLIZA PARA EXPLORAR",
    },
    about: {
      kicker: "EN POCAS PALABRAS",
      heading: ["Ingeniero por oficio.", "Constructor por instinto."],
      lead: "Desde el primer boceto hasta el despliegue en la nube, disfruto entender cómo encaja el sistema completo.",
      paragraphs: [
        "En los últimos años he ayudado a crear productos para recaudación de fondos, automatización de marketing e inteligencia artificial. Mi trabajo abarca interfaces, servicios backend, integraciones con terceros e infraestructura para llevar el software a las personas.",
        "También he acompañado a otros desarrolladores, participado en procesos de contratación y formación, y asumido responsabilidades de liderazgo técnico cuando el equipo lo necesitaba. Valoro el pensamiento claro, la colaboración y las soluciones que funcionan más allá de una demostración.",
      ],
      capabilities: [
        {
          label: "Interfaces de producto",
          detail: "React · Flutter · Angular",
        },
        { label: "Sistemas full stack", detail: "Python · JavaScript · APIs" },
        { label: "Nube y despliegues", detail: "AWS · Azure · Terraform" },
        {
          label: "Inteligencia artificial",
          detail: "Agentes · evaluación · diseño de prompts",
        },
      ],
    },
    career: {
      kicker: "MI TRAYECTORIA",
      heading: "Cada rol, una mirada más amplia.",
      intro:
        "Producto, visión de plataforma y más responsabilidad en cada etapa.",
      education: "FORMACIÓN",
      degree: "Ingeniería en Ciencias de la Computación",
    },
    work: {
      kicker: "PROYECTOS DESTACADOS",
      heading: ["Tres problemas.", "Tres escalas distintas."],
      intro:
        "Mi portafolio sigue creciendo. Por ahora, aquí puedes conocer los productos y retos detrás de algunos de mis proyectos recientes.",
      note: "Próximamente: casos de estudio detallados",
    },
    demos: {
      kicker: "DEMOS INDEPENDIENTES",
      heading: "Hechos para probarlos.",
      intro:
        "Pequeños experimentos interactivos, presentados como demos y no como casos de clientes o productos.",
      open: "Abrir demo",
    },
    contact: {
      kicker: "¿TIENES UN BUEN RETO?",
      heading: ["Construyamos", "lo que sigue."],
      email: "Escríbeme",
      whatsapp: "WhatsApp",
      linkedin: "Conecta en LinkedIn",
    },
    footer: {
      updated: "Actualizado",
      timeZone: "HORA ECUADOR",
      location: "INGENIERO DE SOFTWARE · GUAYAQUIL, EC",
      backToTop: "VOLVER ARRIBA ↑",
    },
  },
} as const;

export type Locale = keyof typeof siteCopy;
