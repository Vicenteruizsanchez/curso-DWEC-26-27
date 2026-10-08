// Enunciado: Proyecto creación de una tienda
// Autor: Vicente Ruiz Sánchez
// Investigación: Fuentes consultadas
//

// --- IMPORTACIONES ---

import type { Product } from "./types/product";
import { products } from "./data/products"


// Mostrar todos los productos.

console.log("Catalogo de productos TechStore: ", products)


// Mostrar primer producto

const first: Product | undefined = products[0];
console.log("Primer producto: ", first)


// mostrar del primer producto el precio.

// console.log("Precio del primer producto", first.price)

