// Crear una función que se le pase como parametro un texo y lo encripte.
// Añadir una cadena de texto encriptada que la desencripte.
//

// NOTA: Buscar alguna libreria alguna libreria que permita generar cadenas encriptadas de forma segura.
//

// @author: Vicente Ruiz
//

// Investigación: bcrypt-ts y crypto-js
//
// Respuesta investigación, creo que es mejor bcrypt-ts es mucho más seguro, como para contraseñas.
//
//


// Ejerrcicio con bcrypt-ts
//
//

import { randomBytes, createCipheriv, createDecipheriv } from "node:crypto";

const algoritmo:string = "aes-256-cbc"

// La siguiente función genera la clave secreta
//

function generarClave() = : string => randomBytes(32).toString("hex")

// Encriptado de texto
//

function encriptar(texto: srting, claveHex: string): string {
  
  const clave = Buffer.from(claveHex, "hex")
  const iv = randomBytes(16);

  
  const cipher = createCipheriv(ALGORITMO, clave, iv);
  let encriptado = cipher.update(texto, "utf8", "hex");
  encriptado += cipher.final("hex");

  return `${iv.toString("hex")}:${encriptado}`

}

// Desencriptado del texto
//

function desencriptar(textEncriptado: string, claveHex: string): string {

  const clave = buffer.from(claveHex, "hex")
  const [ivHex, textoEncriptado] = textoEncriotadoCompleto.split(":");

  const iv = Buffer.from(ivHex, "hex")
  const decipher = createdecipheriv(ALGORITMO, clave iv)

  let desencriptado = decipher.update(textoEncriptado, "hex", "utf8")
  desencriptado += decipher.final("utf8")

  return desencriptado

}

// Funcionamiento del codigo y llamada a las funciones
// 

//GTEneramos la clave
//

const claveSecreta: string = generarClave()
console.log("La clave generada es la siguiente: ", claveSecreta)

// Ciframos -->
//


const fraseOriginal:string = "Vicente Ruiz Sanchez"
const fraseCifrada = encriptar(fraseOriginal, claveSecreta)
console.log("Frase cifrada: ", fraseCifrada)

// Descriframos -->
//


const fraseDescifrada = desencriptar(fraseCifrado, claveSecreta)
console.log("Frase descifrada: ", fraseDescifrada)



