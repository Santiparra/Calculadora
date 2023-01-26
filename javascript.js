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

const operando1 = [0,];
const operando2 = [];
const operadorObj = []; 

const numeroEnPantallaBaja = document.querySelector(".parteInferior");
const numerosEnPantallaBaja = document.querySelectorAll('.parteInferior > p');
const botonesOperando = document.querySelectorAll('#tecla');


botonesOperando.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.className === "operando") {
            switch (button.value) {
                case "0":
                    operando1.push(0);
                    break;
                case "1":
                    operando1.push(1);
                    break;
                case "2":
                    operando1.push(2);
                    break;
                case "3":
                    operando1.push(3);
                    break;
                case "4":
                    operando1.push(4);
                    break;
                case "5":
                    operando1.push(5);
                    break;
                case "6":
                    operando1.push(6);
                    break;            
                case "7":
                    operando1.push(7);
                    break;    
                case "8":
                    operando1.push(8);
                    break;
                case "9":
                    operando1.push(9); 
                    break;              
            }    
        } else if (button.className === "operador") {
            switch (button.value) {
                case "+":
                    operadorObj.splice(0, 1, "+");
                    break;    
                case "-":
                    operadorObj.splice(0, 1, "-");
                    break;    
                case "*":
                    operadorObj.splice(0, 1, "*");
                    break;
                case "/":
                    operadorObj.splice(0, 1, "/");
                    break;                                     
            } 
        } else if (button.className === "simbolo") {
            switch (button.value) {  
                case "=":
                    numeroEnPantallaBaja.textContent = "=";
                    console.log(operando1 + operadorObj);
                    break;
                case "C":
                    numeroEnPantallaBaja.textContent = "C";
                    break;                    
            }
        }         
        
    });
});

//function mostrarEnPantalla(operadores, operandos) {
    
//}

console.log(operando1)
//const pulsoOperadorOSimbolo = pantallaArriba.some(function(pulsaciones) {
//    if(currentYear - person.year >= 19) {
//        return true;
//    }
//});

//calculo(2,"-",3)