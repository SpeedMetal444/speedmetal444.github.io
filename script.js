const proyectos = [
  {
    titulo: "Mi Proyecto",
    desc: "Descripción breve de tu proyecto principal.",
    lenguaje: "Python",
    url: "https://github.com/tu-usuario/proyecto"
  },
  {
    titulo: "Web App",
    desc: "Una aplicación web que construí con HTML, CSS y JS.",
    lenguaje: "JavaScript",
    url: "https://github.com/tu-usuario/web-app"
  },
  {
    titulo: "CLI Tool",
    desc: "Herramienta de línea de comandos para automatizar tareas.",
    lenguaje: "Go",
    url: "https://github.com/tu-usuario/cli-tool"
  }
];

const programitas = [
  {
    titulo: "Hola Mundo",
    desc: "Mi primer programa.",
    lenguaje: "Python",
    url: "https://github.com/tu-usuario/hola-mundo"
  },
  {
    titulo: "Calculadora",
    desc: "Calculadora simple en la terminal.",
    lenguaje: "C",
    url: "https://github.com/tu-usuario/calculadora"
  },
  {
    titulo: "To-Do List",
    desc: "App de tareas pendientes.",
    lenguaje: "JavaScript",
    url: "https://github.com/tu-usuario/todo-list"
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
