function numeroDeAes(cadena) {
    let contador = 0
    for (let char of cadena) {
        if (char.toLowerCase() === 'a') {
            contador++
        }
    }
    return contador
}

// Código de prueba
console.log(numeroDeAes("abracadabra")); // 5
console.log(numeroDeAes("etinol")); // 0
console.log(numeroDeAes("")); // 0
