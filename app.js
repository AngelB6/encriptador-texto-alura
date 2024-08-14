// Obtenemos los elementos del DOM
const buttonEncriptar = document.getElementById("buttonEncriptar");
const buttonDesencriptar = document.getElementById("buttonDesencriptar");

// Definimos dos diccionarios con el clave y valor de cada de las posibilidades
const llaves = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};
const llavesInverso = {
  enter: "e",
  imes: "i",
  ai: "a",
  ober: "o",
  ufat: "u",
};

// Definimos las variables que seran utilizadas por cada función
let letra = "",
  texto = "";
let largoOracion = 0;
let oracionFinal = [];

// Fución para obtener el texto ingresado en el input
function obtenerTexto() {
  const textoInput = document.getElementById("textoInput");
  return textoInput.value.toLowerCase();
}

// Funcion para obtener el largo del texto ingresado en el input
function obtenerLargoTexto(texto) {
  return texto.length;
}

// Función para encriptar el texto
function encriptarTexto(texto, largoOracion) {
  letra = texto.split("");
  oracionFinal = [];
  for (let i = 0; i < largoOracion; i++) {
    if (letra[i] in llaves) {
      letra[i] = llaves[letra[i]];
      oracionFinal.push(letra[i]);
    } else {
      oracionFinal.push(letra[i]);
    }
  }
  return oracionFinal;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
  oracionFinal = [];
  for (let [clave, valor] of Object.entries(llavesInverso)) {
    texto = texto.replaceAll(clave, valor);
  }
  oracionFinal.push(texto);
  return oracionFinal;
}

// Función para mostrar el resultado en el elemento del DOM
function mostrarTexto(oracionFinal) {
  const textoResultado = document.getElementById("textoResultado");
  textoResultado.innerHTML = oracionFinal.join("");
}

// Escuchamos el evento click del botón de encriptación y ejecutamos la serie de funciones necesarias para encriptar el texto
buttonEncriptar.addEventListener("click", () => {
  texto = obtenerTexto();
  largoOracion = obtenerLargoTexto(texto);
  oracionFinal = encriptarTexto(texto, largoOracion);
  mostrarTexto(oracionFinal);
});

// Escuchamos el evento click del botón de desencriptación y ejecutamos la serie de funciones necesarias para desencriptar el texto
buttonDesencriptar.addEventListener("click", () => {
  texto = obtenerTexto();
  oracionFinal = desencriptarTexto(texto);
  mostrarTexto(oracionFinal);
});
