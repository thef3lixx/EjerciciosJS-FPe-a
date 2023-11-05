// Calcular el promedio de notas
// Implementa la función 'calcularPromedioNotas' que reciba un arreglo de objetos que representan estudiantes.
// Cada estudiante tiene una propiedad 'nombre' (string) y 'notas' (arreglo de números).
// La función debe devolver un nuevo objeto que contenga el nombre del estudiante y el promedio de sus notas.

function calcularPromedioNotas(estudiantes) {
        const resultados = estudiantes.map(estudiante => {
        const notas = estudiante.notas;
        const promedio = notas.reduce((acumulador, nota) => acumulador + nota, 0) / notas.length;

        return {
            nombre: estudiante.nombre,
            promedio: promedio,
        };
    });

    return resultados;
}

const estudiantes = [
    { nombre: "Felix", notas: [90, 85, 75] },
    { nombre: "Amilcar", notas: [95, 88, 92] },
    { nombre: "Félix Amilcar", notas: [78, 80, 88] },
];

const promedios = calcularPromedioNotas(estudiantes);
console.log(promedios);
