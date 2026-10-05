// Ejercicio uso de filter map y otros en TS
//
//
//  Crear programa que me muestre el nombre de datos de todos los alumnos,
//  Que calcule la media de cada uno,
//  Mostrar alumno con nota media más alta,
//  Calcular la media global de la clase.
//
//
//
// para declarar tipos de objetos en ts uso type y el objeto comienzo en mayus
//
//  -- Declaración de tipos --
//

type Alumno = {
  nombre: String;
  edad: Number;
  notas: number[];

}

// -- declaración de variables --
//

const alumnado : Alumno[] = [


{nombre: "Luis", edad: 22, notas: [5, 4, 6, 3]},
{nombre: "Sara", edad: 24, notas: [8, 6, 9, 3]},
{nombre: "Marta", edad: 22, notas: [4, 4, 2, 3]},
{nombre: "Antonio", edad: 21, notas: [8, 2, 6, 3]},
{nombre: "Lucas", edad: 21, notas: [4, 6, 8, 8]},
{nombre: "Maria", edad: 21, notas: [8, 5, 7, 7]},

]


// Obten los nombres de los alumnos
//

function obtenerNombres(alumnos : Alumno[]){


  return alumnos.map((alumno) => alumno.nombre)

}


Const obtenerNombresV2= (alumnos: Alumno[]) => alumnos.map((alumno) => alumno.nombre)

console.log("El nonbre de los alumnos es: " + obtenerNombresV2(Alumnado))

