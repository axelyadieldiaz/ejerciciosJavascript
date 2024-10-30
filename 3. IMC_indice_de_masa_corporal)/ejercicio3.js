function bmi(peso, altura) {
    if (peso / (altura ** 2) < 18.5) {
        return "Bajo de peso";
    } else if (peso / (altura ** 2) <= 24.9) {
        return "Normal";
    } else if (peso / (altura ** 2) <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}

// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) // "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"
