//paso 1 : declaracion de variable

let num1, num2;
let operaciones;

// paso 2 : funcion para realizar operaciones

function realizarOperaciones(num1, num2, operaciones) { // inicializacion de variables y funsiones 
    if(operaciones === "suma"){ // condicional para laa suma
        return num1 + num2 ; // operacion para sumar 
    } else if (operaciones === "resta") { // condicional para la resta
        return num1 - num2;
    } else if  (operaciones === "multiplicacion") {
        return nun1 * num2
    } else if (operaciones === "division") {
        if (num2 === 0 ){
            return "error divison por cero no permitida"
         
        }
    }  
}
//paso 3 bucle para realizar multiples operaciones 

while (true){
    // solicitar al usuario que ingrese el primer numero
    num1 = parseFloat(prompt("Ingrese el primer numero (o escriba salir para terminar)"));

    //si la entrada no es un numero termine el bucle
    if(isNaN(num1)){
        console.log("adios.");
        break;
    }

    //solicitar al usuario que ingrese el numero 2
    num2 = parseFloat(prompt("Ingrese el segundo numero"));

    //si el segundo numero no es valido 
    if(isNaN(num2)){
        console.log("por favor ingrese un numero valido");
        continue; //regresa al inicio del bucle
    }

    //solicita al usuario que ingrese la operacion deseada 

    operacion = prompt("ingrese la operacion (suma, resta, divison, multiplicacion)");

    // si el usuario ingresa salir terminal bucle
    if(operaciones === "salir"){
        console.log("adios.");
    }
    //llama la funcion operaciones con los datos proporcionados
    const resultado = realizarOperaciones(num1, num2, operacion.toLowerCase());

    console.log(`resultado: ${resultado}`);

}