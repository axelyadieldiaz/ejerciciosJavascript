function numeroDeCaracteres(cadena, caracter) {
    let contador = 0
    for (let char of cadena) {
        if (char === caracter) {
            contador++
        }
    }
    return contador
}

// Código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", "e")); // 4
