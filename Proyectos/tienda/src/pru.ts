// Precios + IVA

import { products } from "./data/product";
import type { Product } from "./types/products";


const VAT = 0.21;

/**
*
* Recibe ula lista de productos y promete devolver uan lista de números con el precio con iva inclido
*
* */
export function pricesWithVat(productos: Product[]): number[] {

  return myProducts.map(product => Math.round(product.price * (1 + VAT)))


}


// Repaso metodos

products
  .filter(producto => product.stock > 3)
  .map(product => product.name)
  .some(n => n === "Auriculares")

console.log(products[0]?.vat)

// Calcular el valor de total de todos mis productos (suma precio+stock)

let total = 0
for (const p of products) {

}

//reduce
// product.reduce((Acumulador, elementoQueItera, posicion, ElArrayDePartida) => 0) 
product.reduce((totalProductValue, product) => totalProductValue + product.prece * product.stock, 0) // 0 es lo que vale la primera vez del totalProductValue

//
//
