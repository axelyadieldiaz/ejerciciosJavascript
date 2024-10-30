function contarRango(inferior, superior) {
    let contador = 0;

    for (let i = inferior + 1; i < superior; i++) {
        contador++;
    }

    return contador;
}

// código de prueba
console.log(contarRango(1, 9)); // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6)); // 0
