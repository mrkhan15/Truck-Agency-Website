const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
const sections = document.querySelectorAll("main section[id]");
const revealItems = document.querySelectorAll(".reveal");
const yearNode = document.getElementById("currentYear");
const langToggle = document.querySelector(".lang-toggle");
const metaDescription = document.getElementById("metaDescription");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const i18nAriaNodes = document.querySelectorAll("[data-i18n-aria-label]");

const translations = {
  en: {
    pageTitle: "Northstar Truck Agency",
    pageDescription:
      "Northstar Truck Agency provides dependable freight coordination, fleet support, and route planning for growing businesses.",
    brand: "Northstar Truck Agency",
    brandAria: "Northstar Truck Agency home",
    langToggleAria: "Switch language",
    navToggleAria: "Open navigation",
    navServices: "Services",
    navFleet: "Fleet",
    navProcess: "Process",
    navContact: "Contact",
    navCta: "Request a Quote",
    heroEyebrow: "Precision logistics for modern freight",
    heroTitle: "Reliable truck agency support built for fast-moving supply chains.",
    heroText:
      "We connect shippers with dependable fleet operations, route planning, dispatch coordination, and on-time delivery execution across regional and long-haul lanes.",
    heroPrimary: "Start Your Shipment",
    heroSecondary: "Explore Services",
    statOne: "Dispatch oversight",
    statTwo: "On-time movement rate",
    statThree: "Managed monthly loads",
    panelLabel: "Live lane coverage",
    metricOne: "Average response",
    metricTwo: "Dedicated coordinators",
    servicesEyebrow: "What we handle",
    servicesTitle: "End-to-end trucking support without the operational drag.",
    serviceOneTitle: "Freight Coordination",
    serviceOneText:
      "From pickup scheduling to delivery sequencing, we keep every load aligned with your timeline and customer commitments.",
    serviceTwoTitle: "Dispatch Management",
    serviceTwoText:
      "Real-time dispatch communication, route adjustments, and driver support designed to reduce idle time and missed windows.",
    serviceThreeTitle: "Route Planning",
    serviceThreeText:
      "Data-led routing for regional and interstate lanes, with cost, efficiency, and delivery performance balanced together.",
    serviceFourTitle: "Fleet Sourcing",
    serviceFourText:
      "Access vetted carrier capacity for dry van, refrigerated, and dedicated transport needs across changing demand cycles.",
    fleetEyebrow: "Built for scale",
    fleetTitle: "Flexible fleet options matched to the freight, not forced into a template.",
    fleetText:
      "Whether you need dependable weekly linehaul coverage or rapid spot support, we structure the right equipment and team around the load.",
    fleetCardOneTag: "Dry Van",
    fleetCardOneTitle: "General freight movement",
    fleetCardOneText:
      "Consistent coverage for retail, packaged goods, and palletized cargo.",
    fleetCardTwoTag: "Reefer",
    fleetCardTwoTitle: "Temperature-sensitive loads",
    fleetCardTwoText:
      "Cold chain support with monitored movement and tighter scheduling windows.",
    fleetCardThreeTag: "Dedicated",
    fleetCardThreeTitle: "Recurring route programs",
    fleetCardThreeText:
      "Fixed-lane capacity for businesses that need reliability every week.",
    processEyebrow: "How it works",
    processTitle: "A simple operating model that keeps freight moving with less friction.",
    processOneTitle: "Scope the load",
    processOneText:
      "We map freight type, lane, timing, and delivery priorities before execution starts.",
    processTwoTitle: "Assign capacity",
    processTwoText:
      "Our team aligns the right truck, driver support, and dispatch structure to the lane.",
    processThreeTitle: "Track and report",
    processThreeText:
      "Milestone visibility, issue response, and status reporting keep every shipment accountable.",
    testimonialsEyebrow: "Client confidence",
    testimonialsTitle:
      "Trusted by businesses that care about timing, visibility, and consistency.",
    quoteOneText:
      '"Northstar streamlined our regional freight schedule and gave us a single team that actually owns the outcome. That changed our delivery rhythm."',
    quoteOneAuthor: "Operations Director, West Coast Distribution",
    quoteTwoText:
      '"Fast response, clean communication, and dependable execution. We use them whenever a lane needs structure, not chaos."',
    quoteTwoAuthor: "Logistics Manager, Fresh Goods Supplier",
    ctaEyebrow: "Move freight with confidence",
    ctaTitle: "Need a trucking partner that stays responsive from dispatch to delivery?",
    footerBrand: "Northstar Truck Agency",
    footerText: "Responsive freight coordination for growing supply chains.",
    footerRights: "All rights reserved."
  },
  es: {
    pageTitle: "Northstar Agencia de Camiones",
    pageDescription:
      "Northstar Agencia de Camiones ofrece coordinacion de carga, soporte de flota y planificacion de rutas para empresas en crecimiento.",
    brand: "Northstar Agencia de Camiones",
    brandAria: "Inicio de Northstar Agencia de Camiones",
    langToggleAria: "Cambiar idioma",
    navToggleAria: "Abrir navegacion",
    navServices: "Servicios",
    navFleet: "Flota",
    navProcess: "Proceso",
    navContact: "Contacto",
    navCta: "Solicitar cotizacion",
    heroEyebrow: "Logistica precisa para carga moderna",
    heroTitle: "Soporte confiable de agencia de camiones para cadenas de suministro agiles.",
    heroText:
      "Conectamos a los cargadores con operaciones de flota confiables, planificacion de rutas, coordinacion de despacho y entregas puntuales en trayectos regionales y de larga distancia.",
    heroPrimary: "Iniciar envio",
    heroSecondary: "Ver servicios",
    statOne: "Supervision de despacho",
    statTwo: "Tasa de puntualidad",
    statThree: "Cargas gestionadas al mes",
    panelLabel: "Cobertura activa de rutas",
    metricOne: "Respuesta promedio",
    metricTwo: "Coordinadores dedicados",
    servicesEyebrow: "Lo que hacemos",
    servicesTitle: "Soporte integral de transporte sin friccion operativa.",
    serviceOneTitle: "Coordinacion de Carga",
    serviceOneText:
      "Desde la programacion de recogidas hasta la secuencia de entrega, mantenemos cada carga alineada con tu cronograma y compromisos.",
    serviceTwoTitle: "Gestion de Despacho",
    serviceTwoText:
      "Comunicacion en tiempo real, ajustes de ruta y soporte al conductor para reducir tiempos muertos y ventanas perdidas.",
    serviceThreeTitle: "Planificacion de Rutas",
    serviceThreeText:
      "Rutas guiadas por datos para trayectos regionales e interestatales, equilibrando costo, eficiencia y rendimiento.",
    serviceFourTitle: "Abastecimiento de Flota",
    serviceFourText:
      "Acceso a capacidad verificada para carga seca, refrigerada y transporte dedicado segun la demanda.",
    fleetEyebrow: "Preparado para escalar",
    fleetTitle: "Opciones de flota flexibles ajustadas a la carga, no a una plantilla fija.",
    fleetText:
      "Ya sea que necesites cobertura semanal o apoyo inmediato para cargas spot, estructuramos el equipo adecuado alrededor del envio.",
    fleetCardOneTag: "Caja Seca",
    fleetCardOneTitle: "Movimiento general de carga",
    fleetCardOneText:
      "Cobertura constante para retail, productos empacados y carga paletizada.",
    fleetCardTwoTag: "Refrigerado",
    fleetCardTwoTitle: "Cargas sensibles a temperatura",
    fleetCardTwoText:
      "Soporte de cadena fria con seguimiento y ventanas de programacion mas exigentes.",
    fleetCardThreeTag: "Dedicado",
    fleetCardThreeTitle: "Programas de rutas recurrentes",
    fleetCardThreeText:
      "Capacidad fija para empresas que necesitan confiabilidad cada semana.",
    processEyebrow: "Como funciona",
    processTitle: "Un modelo operativo simple que mantiene la carga en movimiento con menos friccion.",
    processOneTitle: "Definir la carga",
    processOneText:
      "Mapeamos tipo de carga, ruta, tiempos y prioridades de entrega antes de iniciar la ejecucion.",
    processTwoTitle: "Asignar capacidad",
    processTwoText:
      "Nuestro equipo alinea el camion correcto, el soporte al conductor y la estructura de despacho para cada ruta.",
    processThreeTitle: "Rastrear e informar",
    processThreeText:
      "La visibilidad de hitos, la respuesta a incidentes y los reportes mantienen cada envio bajo control.",
    testimonialsEyebrow: "Confianza del cliente",
    testimonialsTitle:
      "Empresas que valoran tiempo, visibilidad y consistencia confian en nuestro equipo.",
    quoteOneText:
      '"Northstar optimizo nuestro calendario regional y nos dio un solo equipo que realmente se hace responsable del resultado."',
    quoteOneAuthor: "Director de Operaciones, Distribucion Costa Oeste",
    quoteTwoText:
      '"Respuesta rapida, comunicacion clara y ejecucion confiable. Los usamos cuando una ruta necesita estructura."',
    quoteTwoAuthor: "Gerente de Logistica, Proveedor de Productos Frescos",
    ctaEyebrow: "Mueve carga con confianza",
    ctaTitle: "Necesitas un socio de transporte que responda desde el despacho hasta la entrega?",
    footerBrand: "Northstar Agencia de Camiones",
    footerText: "Coordinacion de carga responsive para cadenas de suministro en crecimiento.",
    footerRights: "Todos los derechos reservados."
  }
};

const setLanguage = (lang) => {
  const copy = translations[lang] || translations.en;

  document.documentElement.lang = lang;
  document.title = copy.pageTitle;

  if (metaDescription) {
    metaDescription.setAttribute("content", copy.pageDescription);
  }

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;

    if (copy[key]) {
      node.textContent = copy[key];
    }
  });

  i18nAriaNodes.forEach((node) => {
    const key = node.dataset.i18nAriaLabel;

    if (copy[key]) {
      node.setAttribute("aria-label", copy[key]);
    }
  });

  if (langToggle) {
    langToggle.classList.toggle("is-es", lang === "es");
    langToggle.setAttribute("aria-pressed", String(lang === "es"));
  }

  window.localStorage.setItem("site-language", lang);
};

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "es" ? "en" : "es";
    setLanguage(nextLanguage);
  });
}

const savedLanguage = window.localStorage.getItem("site-language");

if (savedLanguage === "es" || savedLanguage === "en") {
  setLanguage(savedLanguage);
} else {
  setLanguage("en");
}

if (navToggle && nav && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealItems.forEach((item) => observer.observe(item));

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          const targetId = link.getAttribute("href");
          link.classList.toggle("is-active", targetId === `#${entry.target.id}`);
        });
      });
    },
    {
      rootMargin: "-35% 0px -45% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
