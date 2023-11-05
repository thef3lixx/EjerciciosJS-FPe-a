// Encontrar duplicados
// Implementa la función 'encontrarDuplicados' que reciba un arreglo de números y
// devuelva un nuevo arreglo con los números que se repiten en el arreglo original.

function encontrarDuplicados(arreglo) {
    const duplicados = [];
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = i + 1; j < arreglo.length; j++) {
            if (arreglo[i] === arreglo[j] && !duplicados.includes(arreglo[i])) {
                duplicados.push(arreglo[i]);
            }
        }
    }
    return duplicados;
}

const numeros = [1, 2, 3, 2, 4, 5, 5, 6, 7, 8, 9, 1, 3];
console.log('Los numeros duplicados son: ',encontrarDuplicados(numeros));
