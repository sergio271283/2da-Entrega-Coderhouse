
const estudiantes = [
    { nombre: 'Ana', calificacion: 65 , estado: 'aprobado'},
    { nombre: 'Luis', calificacion: 51 , estado: 'aprobado'},
    { nombre: 'Carlos', calificacion: 39 , estado: 'reprobado'},
    { nombre: 'Maria', calificacion: 60 , estado: 'aprobado'},
    { nombre: 'Juan', calificacion: 29 , estado: 'reprobado'},
    { nombre: 'Jose', calificacion: 55 , estado: 'aprobado'},
    { nombre: 'Nicolas', calificacion: 34 , estado: 'reprobado'},
    { nombre: 'Sergio', calificacion: 63 , estado: 'aprobado'},
    { nombre: 'Fernanda', calificacion: 70 , estado: 'aprobado'},
];

// Para Bucar estado de alumno

let nombreestudiante = prompt('Ingrese el nombre que desea buscar')

const alumnobuscado = estudiantes.find( estudiante => estudiante.nombre === nombreestudiante)

if (alumnobuscado) {
    console.log("estado de alumno es",  alumnobuscado.estado)
}

let filtraralumnos = estudiantes.filter(estudiante => estudiante.calificacion >= 40)

console.log(filtraralumnos)

/* // Función para filtrar estudiantes por calificación mínima
function filtrarEstudiantes(calificacionMinima) {
    return estudiantes.filter(estudiante => estudiante.calificacion >= calificacionMinima);
}

// Función para mostrar los resultados en la consola
function mostrarResultados() {
    console.log("Lista de estudiantes:");
    estudiantes.forEach(estudiante => console.log(`Nombre: ${estudiante.nombre}, Calificación: ${estudiante.calificacion}`));

    const estudianteBuscado = buscarEstudiante('Carlos');
    console.log(`\nEstudiante buscado: Nombre: ${estudianteBuscado.nombre}, Calificación: ${estudianteBuscado.calificacion}`);

    const estudiantesFiltrados = filtrarEstudiantes(92);
    console.log("\nEstudiantes con calificación mayor o igual a 85:");
    estudiantesFiltrados.forEach(estudiante => console.log(`Nombre: ${estudiante.nombre}, Calificación: ${estudiante.calificacion}`));
}

// Llamamos a la función para mostrar los resultados
mostrarResultados();
 */