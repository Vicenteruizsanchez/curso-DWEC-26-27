//crear una función que mientras sea verdad compruebe todos los números de un array pasado como parámetro,
// guarde los positivos en un array positivos y los negativos en negativos,
// y calcule la suma de cada uno de los arrays

// @author = Vicente Ruiz

//Declaración de variables
const datos:number[] = [1, -10, 25, 11, 9, 5, -6, 8, -5, 9, 12, -10]


function clasificarNumeros(numeros: number[]) {

  const positivos:number[] = []
  const negativos:number[] = []
  let sumaPositivos:number = 0
  let sumaNegativos:number = 0

  for(const numero of numeros){
    if(numero > 0){
      //añadimos el número al array de positivos con el metodo push
      
      positivos.push(numeros)
      sumaPositivos += numero
    } else {
      negativos.push(numero)
      sumaNegativos += numero

    }

  }

  //Antes de salir, retornamos valores pedidos.

  return {
    positivos, //positivos:positivos 
    negativos,
    sumaPositivos,
    sumaPositivos

  }

}


// --- Inicio Aplicación ---
//

const resultado = clasificarNumeros(datos)

console.log("El array de positivos es el siguiente: ", resultado.Positivos)
console.log("El array de SUMA positivos es el siguiente: ", resultado.sumaPositivos)
console.log(`El array de negativos es el siguiente: ${resultado.Negativos}´)
console.log(`El array de SUMA negativos es el siguiente: ${resultado.sumaNegativos}`)





