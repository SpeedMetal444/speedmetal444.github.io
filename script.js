const proyectos = [
  {
    titulo: "HardAgenda",
    desc: "Sistema de gestión de turnos médicos. Python + PyQt6 + FastAPI + PostgreSQL. Con servidor FastAPI compartido, versión Android y auto-refresh.",
    lenguaje: "Python",
    url: "https://github.com/SpeedMetal444/HardAgenda"
  },
  {
    titulo: "HardAgenda Android",
    desc: "Versión Android del sistema de turnos. Kotlin. Se conecta al mismo servidor FastAPI que la versión desktop.",
    lenguaje: "Kotlin",
    url: "https://github.com/SpeedMetal444/HardAgenda-Android"
  },
  {
    titulo: "HardForms",
    desc: "Gestión de pacientes, estudios y diagnósticos médicos. Python + PyQt6 + SQLite + ReportLab. Genera informes PDF en escala de grises.",
    lenguaje: "Python",
    url: "https://github.com/SpeedMetal444/HardForms"
  },
  {
    titulo: "InsCarProject",
    desc: "Sistema de gestión de pacientes con PyQt6 y PostgreSQL. Busca, agrega, actualiza y elimina pacientes, renueva planes y verifica vencimientos.",
    lenguaje: "Python",
    url: "https://github.com/SpeedMetal444/InsCarProject"
  },
  {
    titulo: "Lippia AutomationExercise",
    desc: "Proyecto de automatización web E2E con Lippia (Cucumber + TestNG + Selenium). Pruebas positivas y negativas sobre AutomationExercise.",
    lenguaje: "Java",
    url: "https://github.com/SpeedMetal444/lippia-automationexercise-web-project"
  },
  {
    titulo: "Tella Testing Android",
    desc: "Pasantía como QA Automation. Pruebas manuales y automatizadas para la app Tella con Lippia Mobile Framework.",
    lenguaje: "Java",
    url: "https://github.com/Horizontal-org/Tella-Testing-Android"
  }
];

const programitas = [
  {
    titulo: "Hyperblog",
    desc: "Proyecto de curso - Blog de ejemplo con Git y GitHub.",
    lenguaje: "HTML",
    url: "https://github.com/SpeedMetal444/Hyperblog"
  },
  {
    titulo: "CookieCutter Personal",
    desc: "Template de proyectos Python con Cookiecutter.",
    lenguaje: "Python",
    url: "https://github.com/SpeedMetal444/cookiecutter-personal"
  }
];

function crearTarjetas(data, contenedorId) {
  const grid = document.getElementById(contenedorId);
  grid.innerHTML = data.map(item => `
    <div class="card">
      <h3>${item.titulo}</h3>
      <p>${item.desc}</p>
      <span class="lang">${item.lenguaje}</span>
      <br>
      <a href="${item.url}" target="_blank">Ver en GitHub →</a>
    </div>
  `).join("");
}

crearTarjetas(proyectos, "proyectos-grid");
crearTarjetas(programitas, "programitas-grid");
