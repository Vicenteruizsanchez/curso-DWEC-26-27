// Enunciado: Usos de array y tipado
// Autor: Nombre y apellidos
// Investigación: Fuentes consultadas
//

// como tipamos un array
//

const activos: boolean[] = [true, false, true, true]
const nombres: string[] = ["pepe", "luis", "carlos"]

// Nueva forma:

const edades: Array<number> = [12, 22, 18]

const precios = [65, 34, 18]

console.log(typeof precios)

// arrays con más de un tipo

const valores: (string | number)[] = ["Ana", 25, "Luis", 56]


// Esto es muy comodo pero para empezar mejor no (Demasiada inferencia)
//
const personas: [string, number] = ["Ana", 45]

// Como leer elementos de un array:
//

console.log(nombres[0]) // <-- "pepe"

nombres[0] = "Don pepe"

// Insetar y eliminar por delante y por detras
//

nombres.push("Sara") // Añade al final    // .push --> Muta el array (Prohibido en React)

nombres.pop() // Elimina el final del array (devuelve el nuevo array)

nombres.unshift("Pedro") // Añadir al comienzo del array (devuelve la longitud del array)

nombes.shift() // Elimina al inicio del array (devuelve el array)




// Metodos que mutan Y no mutan
//
// push, pop, shift, unshift, splice, short, reverse <--
//

// Metodo slice <-- devuelve una parte del array son mutar el arary *****

const numeros: number[] = [10, 20, 30, 40, 50]
const parte: Array<number> = numeros.slice(1, 4) // [20, 30, 40] <-- Coge la primera posición(1) pero no la última posición(4) // Y todo sin mutar el array

// Metodo splice <-- elimiar, añadir o sustituir elementos del array

numeros.splice(1, 2) // <-- Devuelve un Array con lo que borra [20, 30]

// Copiar los Arrays Spread Operator ************************************ Una de las cosas más importantes de React

const numb: number[] = [1, 2, 3]
const copiaNumb: number[] = [...numb] // Tiene una copia de num [1, 2, 3]
cosnt copiaNumb2 = [...copiaNumb, 5]

// Recorrer un array:

// for(let i=0; i<num.length; i++)

// for of --> Cuando solo queremos el valor
//

for (const precio of precios) {
  console.log(precio)

}

// forEach() --> Se usa como metodo (Se usa mucho en react)
// Se usará forEach() cada vez que queramos hacer algo con los elementos de un array.
// Se parece al map, pero el map es más potente en muchos casos.

precios.forEach((precio, indice) => { /// REVISAR

  console.log(`Precio: ${precio ** 2} - Posición: ${indice}`)

})

// Metodos que usan funciones CallBack
//
// forEach(), map(), filter, find() <--- Muy importantes en react
// un callback es una función, por tanto esos métodos reciben como parámetro una función
