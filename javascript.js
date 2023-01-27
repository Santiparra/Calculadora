let operando1 = "";
let operando2 = "";

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

botones.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.className === "operando") {
            agregarNumeros(button.value);        
        } else if (button.className === "operador") {
            cambiarOperadorObj(button.value); 
        } else if (button.className === "simbolo") {
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

function posNeg() {
    if(pantallaAbajo.textContent > 0) {
        pantallaAbajo.textContent= "-"+ pantallaAbajo.textContent;
    } else {
        pantallaAbajo.textContent = pantallaAbajo.textContent *-1;
    }
}

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

function agregarNumeros(numero) {
  if (pantallaAbajo.textContent === "0" || limpiarPantalla)
    rehacerOperando1()
  pantallaAbajo.textContent += numero
}

function rehacerOperando1() {
  pantallaAbajo.textContent = "";
  limpiarPantalla = false;
}

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

function decimales() {
  if (limpiarPantalla) rehacerOperando1()
  if (pantallaAbajo.textContent === "")
    pantallaAbajo.textContent = "0"
  if (pantallaAbajo.textContent.includes(".")) return
  pantallaAbajo.textContent += "."
}

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