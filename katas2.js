// comece a criar a sua função add na linha abaixo
function add(num1, num2){
   
    return num1 + num2

}

// descomente a linha seguinte para testar sua função
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(num1, num2){

    let conta = 0

    for(let i = 1; i <= num2; i++){
    conta = add(num1,conta)
    }   
    return conta

}

// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(numero,expoente){

    let conta = 1

    for(let i = 0; i < expoente; i++){
        conta = multiply(numero, conta)
    }

    return conta

}

// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(numero){

    let conta = 1
    for(let i = 1; i <= numero; i++){
        conta = multiply(conta,i)
    }

    return conta

}

// descomente a linha seguinte para testar sua função
 console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci

function fibonacci(numero){

    let valor1 = 0
    let valor2 = 1
    let conta = 0

    for(let i = 1; i < numero; i++){
        conta = add(valor1, valor2)
        valor1 = valor2
        valor2 = conta
    }

    return conta

}

// descomente a linha seguinte para testar sua função
 console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
