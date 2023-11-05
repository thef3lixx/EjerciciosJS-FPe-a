//Ejercicio 1: Contar la cantidad de palabras en un texto
//Implementa la función 'contarPalabras' que reciba un texto y devuelva la cantidad de
//palabras que contiene.
//Considera que las palabras están separadas por espacios y puede haber signos de
//puntuación.


function contarPalabras(texto) {
    const palabras = texto.split(" ");
    const palabrasValidas = palabras.filter(palabra => palabra.match(/[\wáéíóúÁÉÍÓÚüÜ]+/g));
    return palabrasValidas.length;
}

const texto = "Mi nombre es Félix Peña , este es el ejercicio uno de la tarea";
const cantidadPalabras = contarPalabras(texto);

console.log('El texto es: -', texto, '- y la cantidad de palabras es ',cantidadPalabras);

