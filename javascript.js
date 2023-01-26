function suma(a,b) {
    let resultado = a + b;
    console.log(resultado)
}

function resta(a,b) {
    let resultado = a - b;
    console.log(resultado)
}

function multiplicacion(a,b) {
    let resultado = a * b;
    console.log(resultado)
}

function division(a,b) {
    let resultado = a / b;
    console.log(resultado)
}

function calculo(operandoA, operador, operandoB) {
    if (operador === "+") {
        suma(operandoA, operandoB)
    } else if (operador === "-") {
        resta(operandoA, operandoB)
    } else if (operador === "*") {
        multiplicacion(operandoA, operandoB)
    } else if (operador === "/") {
        division(operandoA, operandoB)
    }
}

const numeroEnPantallaBaja = document.querySelector(".parteInferior");
const botonesOperando = document.querySelectorAll('#numeros > button');

botonesOperando.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.value);
        switch (button.value) {
            case "0":
                numeroEnPantallaBaja.textContent = 0;
                break;
            case "1":
                numeroEnPantallaBaja.textContent = 1;
                break;
            case "2":
                numeroEnPantallaBaja.textContent = 2;
                break;
            case "3":
                numeroEnPantallaBaja.textContent = 3;
                break;
            case "4":
                numeroEnPantallaBaja.textContent = 4;
                break;
            case "5":
                numeroEnPantallaBaja.textContent = 5;
                break;
            case "6":
                numeroEnPantallaBaja.textContent = 6;
                break;            
            case "7":
                numeroEnPantallaBaja.textContent = 7;
                break;    
            case "8":
                numeroEnPantallaBaja.textContent = 8;
                break;
            case "9":
                numeroEnPantallaBaja.textContent = 9;
                break;    
            default: 0
        }
    });
});

//calculo(2,"-",3)