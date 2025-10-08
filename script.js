const menuData = [
  {
    label: "SERVICIOS",
    sections: [
      {
        title: "Usuarios",
        items: [
          { label: "Diseño Web", href: "#" },
          { label: "Desarrollo de Software", href: "#" },
          { label: "Aplicaciones Móviles", href: "#" }
        ]
      },
      {
        title: "Negocios",
        items: [
          { label: "Soluciones Empresariales", href: "#" },
          { label: "Estrategias Digitales", href: "#" }
        ]
      }
    ]
  },
  {
    label: "PLANES Y PRODUCTOS",
    sections: [
      {
        title: "",
        items: [
          { label: "Planes Básicos", href: "#" },
          { label: "Planes Avanzados", href: "#" }
        ]
      }
    ]
  },
  {
    label: "MEMBRESÍAS",
    sections: [
      {
        title: "",
        items: [
          { label: "Plan Individual", href: "#" },
          { label: "Plan Corporativo", href: "#" }
        ]
      }
    ]
  },
  {
    label: "SOLICITUDES",
    sections: [
      {
        title: "",
        items: [
          { label: "Solicitudes Generales", href: "#" },
          { label: "Colaboraciones", href: "#" },
          { label: "Proyectos Educativos", href: "#" }
        ]
      }
    ]
  },
  {
    label: "SOPORTE",
    sections: [
      {
        title: "",
        items: [
          { label: "Centro de Ayuda", href: "#" },
          { label: "Contáctanos", href: "#" },
          { label: "Preguntas Frecuentes", href: "#" }
        ]
      }
    ]
  }
];

const secondaryMenu = document.querySelector(".secondary-menu");

function buildSecondaryMenu() {
  menuData.forEach(menu => {
    const item = document.createElement("div");
    item.textContent = menu.label;

    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");

    menu.sections.forEach(section => {
      const sectionDiv = document.createElement("div");

      if (section.title) {
        const title = document.createElement("h4");
        title.textContent = section.title;
        sectionDiv.appendChild(title);
      }

      section.items.forEach(link => {
        const a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.label;
        sectionDiv.appendChild(a);
      });

      dropdown.appendChild(sectionDiv);
    });

    item.appendChild(dropdown);
    secondaryMenu.appendChild(item);
  });
}

buildSecondaryMenu();

// --- SLIDER CONFIGURACIÓN ---
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
let index = 0;

function showSlide(i) {
  if (i >= images.length) index = 0;
  if (i < 0) index = images.length - 1;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  index++;
  showSlide(index);
});

document.querySelector(".prev").addEventListener("click", () => {
  index--;
  showSlide(index);
});

setInterval(() => {
  index++;
  showSlide(index);
}, 4000);