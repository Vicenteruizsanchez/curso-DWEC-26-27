let celsius = 32


function ceslsiusToKoelvin01 (celsius){
  return celsius + 273.15
  
}


// Funcióm arrow (Solo cuendo hay una unica linea, en caso contrario con corchetes)
const celsiusToKelvin02 = (celsius) =>  celsius + 273.15

// EJERCICIO
// Función que le pase por parámetro 2 números y que los ordene.

let num1 = 18
let num2 = 15

function ordenarNumeros (num1, num2){
  let arrayOrdenado

  if (num1 >= num2) {
    return arrayOrdenado = [num2, num1]
  } else {
    return arrayOrdenado = [num1, num2]
  }
}

// Función que pase de Celsius a kelvin pero comprobando que Celsius es un numero,
// que la temperatura no puede estar por debajo del 0 absoluto (-273 ),
// el resultado con 2 decimales.

function celsiusToKelvin03 (celsius) {
  
  if (typeof celsius === "number") {
    
    if (celsius >= (-273.15)){
      let conversion = celsius + 273.15
      return conversion.toFixed(2)

    } else {
      return "El valor introducido es nenor que el 0 absoluto"
    
    }
    
  } else {
      
    return "Has ingresado un valor no numerico."
  }
  
}


