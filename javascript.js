let operando1 = "";
let operando2 = "";
// Funciones basicas para llamar mas tarde
function suma(a, b) {
    return a + b;
}
  
function resta(a, b) {
    return a - b;
}
  
function multiplicacion(a, b) {
    return a * b;
}
  
function division(a, b) {
    return a / b;
}

let operadorObj = null;
let limpiarPantalla = false;

const botones = document.querySelectorAll("#tecla");

//Funcion que filtra el input y llama a la subfuncion correspondiente

botones.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classtecla === "operando") {
            agregarNumeros(button.value);        
        } else if (button.classtecla === "operador") {
            cambiarOperadorObj(button.value); 
        } else if (button.classtecla === "simbolo") {
            switch (button.value) {  
                case "=":
                 comprobacion();
                    break;
                case "C":
                    resetear();
                    break;
                case "borrar":
                    borrarNumero();
                    break;
                case ".":
                    decimales();
                    break;        
                case "negativos":
                    posNeg();
                    break;                        
            }
        }               
    });
});

const pantallaArriba = document.querySelector(".parteSuperior");
const pantallaAbajo = document.querySelector(".parteInferior");

//Pasar numeros de positivo a negativo y visceversa

function posNeg() {
    if(pantallaAbajo.textContent > 0) {
        pantallaAbajo.textContent= "-"+ pantallaAbajo.textContent;
    } else {
        pantallaAbajo.textContent = pantallaAbajo.textContent *-1;
    }
}

// Add event listener on keyup
document.addEventListener("keydown", (event) => {
  var tecla = event.key;
  switch (tecla) {
    case "0":
      agregarNumeros(event.key);
      break;
    case "1":
      agregarNumeros(event.key);
      break;
    case "2":
      agregarNumeros(event.key);
      break;
    case "3":
      agregarNumeros(event.key);
      break;
    case "4":
      agregarNumeros(event.key);
      break;
    case "5":
      agregarNumeros(event.key);
      break;
    case "6":
      agregarNumeros(event.key);
      break;
    case "7":
      agregarNumeros(event.key);
      break;
    case "8":
      agregarNumeros(event.key);
      break;
    case "9":
      agregarNumeros(event.key);
      break;
    case "/":
      cambiarOperadorObj(event.key);
      break;
    case "*":
      cambiarOperadorObj(event.key);
      break;
    case "-":
      cambiarOperadorObj(event.key);
      break;
    case "+":
      cambiarOperadorObj(event.key);
      break; 
    case "=":
      comprobacion();
      break; 
    case "Enter":
      comprobacion();
      break; 
    case "Backspace":
      borrarNumero();
      break;
    case "|":
      posNeg();
      break;
    case ".":
      decimales();
      break;
    case ",":
      decimales();
      break;                              
    default:
      break;
  }
}, false);

// Funcion que toma 3 strings y llama a la funcion correspondiente

function calcular(a, operador, b) {
    a = Number(a);
    b = Number(b);
    switch (operador) {
      case "+":
        return suma(a, b);
      case "-":
        return resta(a, b);
      case "*":
        return multiplicacion(a, b);
      case "/":
        if (b === 0) return null
        else return division(a, b);
      default:
        return null
    }
}

//Estas 2 funciones solo se encargan de procesar los input en strings

function agregarNumeros(numero) {
  if (pantallaAbajo.textContent === "0" || limpiarPantalla)
    rehacerOperando1()
  pantallaAbajo.textContent += numero
}

function rehacerOperando1() {
  pantallaAbajo.textContent = "";
  limpiarPantalla = false;
}

//funciones de borrado y reseteo

function resetear() {
  operando1 = "";
  operando2 = "";
  operadorObj = null;
  pantallaAbajo.textContent = "0";
  pantallaArriba.textContent = "";
}

function borrarNumero() {
  pantallaAbajo.textContent = pantallaAbajo.textContent
    .toString()
    .slice(0, -1)
}

//Agregar decimales, solo 1 coma por valor

function decimales() {
  if (limpiarPantalla) rehacerOperando1()
  if (pantallaAbajo.textContent === "")
    pantallaAbajo.textContent = "0"
  if (pantallaAbajo.textContent.includes(".")) return
  pantallaAbajo.textContent += "."
}

//Esta comprobacion revisa si hay alguna cuenta por hacer, avisa que no se puede dividir entre 0 si se da el caso y llama a calcular

function comprobacion() {
  if (operadorObj === null || limpiarPantalla) return
  if (operadorObj === "/" && pantallaAbajo.textContent === "0") {
    alert("No se puede dividir entre 0")
    return
  }
  operando2 = pantallaAbajo.textContent
  pantallaAbajo.textContent = redondeo(
    calcular(operando1, operadorObj, operando2)
  )
  pantallaArriba.textContent = `${operando1} ${operadorObj} ${operando2} =`
  operadorObj = null
}

//Funciones extras, solo maneja el operador en la cuenta y el historial de cuentas realizadas, la otra simplemente redondea decimales para que solo haya 2 numeros despues de la coma 

function cambiarOperadorObj(operador) {
  if (operadorObj !== null) comprobacion()
  operando1 = pantallaAbajo.textContent
  operadorObj = operador
  pantallaArriba.textContent = `${operando1} ${operadorObj}`
  limpiarPantalla = true
}

function redondeo(number) {
  return Math.round(number * 100) / 100
}