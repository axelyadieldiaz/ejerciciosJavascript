function fizzBuzz(numero) {
    let resultado = '';

    if (numero % 3 === 0) {
        resultado += 'fizz';
    }
    if (numero % 5 === 0) {
        resultado += 'buzz';
    }

    return resultado || numero;
}

// código de prueba
console.log(fizzBuzz(6));  // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8));  // 8
