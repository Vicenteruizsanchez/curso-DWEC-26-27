

// Un tipo escribe la forma de un dato.
export type Category = "monitors" | "audio" | "GPU" | "peripherals";


// Una interfaz es como un contrato con los valores qe debe tener y el tipo. Typescript lo firma... si se rompe, llora. (Propiedades que tien un objeto obligatoriamente)
//
// Los elementos de una interface van separados por ;
export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  stock: number;
}
