// ============ DATA ============

const skillCategories = [
  {
    icon: "💻",
    title: "Lenguajes de programación",
    tags: ["Python", "Java", "C/C++", "JavaScript", "SQL", "Dart"],
  },
  {
    icon: "🧱",
    title: "Fundamentos",
    tags: ["Estructuras de datos", "Algoritmos", "Complejidad", "POO", "Git"],
  },
  {
    icon: "🌐",
    title: "Desarrollo web y móvil",
    tags: ["HTML5", "CSS3", "Bootstrap", "React", "Node.js", "Flutter"],
  },
  {
    icon: "🗄️",
    title: "Bases de datos",
    tags: ["PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    icon: "📊",
    title: "Big Data y ciencia de datos",
    tags: ["Apache Spark", "PySpark", "Hadoop/HDFS", "MapReduce", "DataFrames", "Kafka"],
  },
  {
    icon: "🤖",
    title: "Inteligencia artificial",
    tags: ["K-Means", "CNN", "FPGA/GPU/DSP"],
  },
  {
    icon: "📡",
    title: "Redes",
    tags: ["Cisco Packet Tracer", "OSPF", "VLANs", "STP", "EtherChannel", "HSRP", "ACLs", "NAT/PAT"],
  },
  {
    icon: "🏗️",
    title: "Arquitectura de software",
    tags: ["MVC", "PAC", "Microkernel", "UML", "BPMN 2.0", "CI/CD"],
  },
  {
    icon: "☁️",
    title: "Sistemas y nube",
    tags: ["Linux (Red Hat)", "Google Cloud Platform", "Cloudera", "APIs", "ISO 27001"],
  },
  {
    icon: "🔁",
    title: "Metodologías de trabajo",
    tags: ["Scrum", "Kanban"],
  },
];

const knowledgeAreas = [
  {
    icon: "💻",
    title: "Desarrollo de Software y Programación",
    html: `Diseño y análisis de complejidad de algoritmos; manipulación de arreglos, matrices, listas enlazadas,
    pilas, colas, árboles y diccionarios. Aplicación de <strong>abstracción, encapsulamiento, herencia y polimorfismo</strong>,
    estructurando código con patrones como <strong>MVC</strong> y Repositorio. Construcción de aplicaciones web fullstack con
    HTML5/CSS3/Bootstrap/React en el frontend y Node.js/Python en el backend.`,
  },
  {
    icon: "🗄️",
    title: "Gestión de Datos, Bases de Datos y Big Data",
    html: `Diseño de modelos Entidad-Relación, normalización hasta <strong>3FN</strong>, consultas complejas e implementación
    de lógica de negocio mediante <strong>Triggers y Stored Procedures</strong> en PostgreSQL. Modelado de datos jerárquicos en
    documentos JSON/BSON con <strong>MongoDB</strong>, validación con JSON Schema y consultas desde Python vía PyMongo.
    Operación sobre el ecosistema <strong>Hadoop (HDFS)</strong> y procesamiento de grandes volúmenes de datos en tiempo
    real y batch con <strong>Apache Spark (PySpark)</strong>.`,
  },
  {
    icon: "🤖",
    title: "Inteligencia Artificial y Aprendizaje Automático",
    html: `Entrenamiento e interpretación de modelos de clustering no supervisado (<strong>K-Means</strong>) para segmentación
    automática de datos. Comprensión de la arquitectura de <strong>Redes Neuronales Convolucionales (CNN)</strong> y de los
    principios de aceleración mediante hardware especializado (FPGAs, GPUs, DSPs).`,
  },
  {
    icon: "📡",
    title: "Redes de Computadores, Comunicaciones y Seguridad",
    html: `Diseño, configuración y resolución de problemas en topologías de red complejas con <strong>Cisco Packet Tracer</strong>.
    Configuración de <strong>OSPF</strong> monoárea y multiárea, VLANs, enlaces troncales, Spanning Tree (PVST/Rapid PVST),
    EtherChannel y HSRP. Implementación de <strong>ACLs</strong> estándar y extendidas, y traducción de direcciones
    <strong>NAT/PAT</strong> para proteger infraestructuras.`,
  },
  {
    icon: "🏗️",
    title: "Arquitectura de Software e Ingeniería de Procesos",
    html: `Modelado y optimización de procesos de negocio con <strong>BPMN 2.0</strong>. Identificación de atributos de
    calidad (disponibilidad, modificabilidad, seguridad, rendimiento) y diseño de arquitecturas adaptables.
    Conceptos de automatización, integración continua (<strong>CI</strong>) y entrega continua (<strong>CD</strong>).`,
  },
];

const experience = [
  {
    date: "Agosto 2025 – Actualmente",
    role: "Asistente de Salón VIP (Part-time)",
    org: "Grupo Expro",
    desc: "Coordino procesos operativos y logísticos en un entorno de alta exigencia, gestionando recursos y estándares de calidad con organización y atención al detalle, y resolviendo imprevistos bajo presión.",
  },
  {
    date: "Diciembre 2023 – Marzo 2025",
    role: "Asesor de Ventas (Part-time)",
    org: "Sparta",
    desc: "Utilicé software POS y Excel para el control operativo y análisis de stock, y analicé necesidades de clientes para proponer soluciones, desarrollando comunicación y resolución de problemas.",
  },
];

const projects = [
  {
    emoji: "🎵",
    badge: "Proyecto académico",
    title: "TuneFinder",
    desc: "Aplicación Android desarrollada con Dart y Flutter, con backend en Django (Python), que identifica la tonalidad musical de una canción a partir de un fragmento grabado con el micrófono del usuario.",
    stack: ["Flutter", "Dart", "Django", "Python"],
  },
  {
    emoji: "🎓",
    badge: "Proyecto académico",
    title: "Sistema de Gestión de Prácticas Profesionales",
    desc: "Plataforma web que digitalizó y automatizó el proceso de prácticas de la universidad —antes manual—, incluyendo roles de administrador y encargado de prácticas, seguimiento de avances, solicitud y calificación de informes, y comunicación con profesores y empresas.",
    stack: ["React", "Supabase"],
  },
];

const roles = [
  "Estudiante de Ingeniería Civil Informática",
  "Desarrollador Full-Stack en formación",
  "Entusiasta de Big Data & IA",
  "Buscando práctica profesional en TI",
];

// ============ RENDER ============

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = skillCategories
    .map(
      (c) => `
    <div class="skill-card reveal">
      <div class="skill-card-head">
        <span class="skill-icon">${c.icon}</span>
        <h3>${c.title}</h3>
      </div>
      <div class="skill-tags">
        ${c.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>`
    )
    .join("");
}

function renderKnowledge() {
  const acc = document.getElementById("accordion");
  acc.innerHTML = knowledgeAreas
    .map(
      (a, i) => `
    <div class="acc-item${i === 0 ? " open" : ""}" data-index="${i}">
      <div class="acc-head">
        <div class="acc-head-left">
          <span class="acc-icon">${a.icon}</span>
          <h3>${a.title}</h3>
        </div>
        <span class="acc-plus">+</span>
      </div>
      <div class="acc-body"><p>${a.html}</p></div>
    </div>`
    )
    .join("");

  acc.querySelectorAll(".acc-item").forEach((item) => {
    const head = item.querySelector(".acc-head");
    const body = item.querySelector(".acc-body");
    if (item.classList.contains("open")) body.style.maxHeight = body.scrollHeight + "px";
    head.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      acc.querySelectorAll(".acc-item").forEach((other) => {
        other.classList.remove("open");
        other.querySelector(".acc-body").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });
}

function renderTimeline() {
  const tl = document.getElementById("timeline");
  tl.innerHTML = experience
    .map(
      (e) => `
    <div class="tl-item reveal">
      <span class="tl-dot"></span>
      <span class="tl-date">${e.date}</span>
      <h3>${e.role}</h3>
      <span class="tl-org">${e.org}</span>
      <p>${e.desc}</p>
    </div>`
    )
    .join("");
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = projects
    .map(
      (p) => `
    <div class="project-card reveal">
      <div class="project-top">
        <span class="project-emoji">${p.emoji}</span>
        <span class="project-badge">${p.badge}</span>
      </div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="project-stack">
        ${p.stack.map((s) => `<span class="tag">${s}</span>`).join("")}
      </div>
    </div>`
    )
    .join("");
}

// ============ TYPEWRITER ============

function typewriter() {
  const el = document.getElementById("typewriter");
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 55);
  }
  tick();
}

// ============ THEME ============

function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  const stored = localStorage.getItem("theme");
  if (stored) document.documentElement.setAttribute("data-theme", stored);

  toggle.addEventListener("click", () => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current =
      document.documentElement.getAttribute("data-theme") || (prefersDark ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

// ============ NAV ============

function initNav() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });

  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });

  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

// ============ REVEAL ON SCROLL ============

function initReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
}

// ============ INIT ============

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  renderSkills();
  renderKnowledge();
  renderTimeline();
  renderProjects();
  typewriter();
  initTheme();
  initNav();
  initReveal();
});
