// Enunciado: Ejercicios de repaso de los métodos del array
// Autor: Vicente Ruiz Sánchez
// Investigación: Fuentes consultadas
//



/// ---------------------- DECLARACIÓN DE VARIABLES -----------------------
const notas: number[] = [6, 8, 4, 9, 7]



/// --------------------- DECLARACIÓN DE FUNCIONES ------------------------

// función que las muestre todas

function showNotes(notes: number[]): void {
  console.log(notes)


  // for(const note of notes) {
  //   console.log(" ", notes)
  // }
  //

  // notes.forEach((note: number) => console.log(" ", note))

  //console.log(...notes) // --> Verificar

}





// function que calcule las medias


function calculateAverage(notes: number[]) => {

  let suma = 0

  notes.forEach((note: number) => suma += note)
  console.log("La media es: " suma / notes.length())
}







// funcion que muestra la mayor
// funcion que la mayor y su posicion
// funcion que calcule la mediana
// funcion que devuelva un array con las notas junto con la nota pasada como parametro
//
// funcion que elimine la nota, recibe el array notas y como segundo parametro 1 o -1 si es 1 elimina la primera posicion del array y devuelve una copia, si es -1 elimina la ultima posicion del array devuelve una copia. No mutamos el array del parámetro, ojo, y se demestra con un clg del array del parametro para asegurar que no haya mutado.


function deleteGrade(notes: number[], t: (1 | -1)): void {
  const copyNotes = [...notes];

  if (t == 1) {
    copyNotes.shift()

  } else if (t == -1)
    copyNotes.pop()

}

console.log("copyNotes: ", copyNotes)


console.log(notes)
}



/// ------------------ FUNCIÓN DE EJECUCIÓN -------------------

export function ejercicio2(): void {

  showNotes(notas)
  calculateAverage(notas)
  deleteGrade(notas, -1)

}
