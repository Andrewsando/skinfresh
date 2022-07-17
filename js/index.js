let pieles = {
  seca: {
    productos: [
      {
        nombre: "Face Oil",
        precio: "USD $25",
        valor: 25,
      },
      {
        nombre: "Face Gel",
        precio: "USD $42",
        valor: 42,
      },
    ],
  },

  mixta: {
    productos: [
      {
        nombre: "Fixed Textured",
        precio: "USD $50",
        valor: 50,
      },
      {
        nombre: "Face Gel",
        precio: "USD $42",
        valor: 42,
      },
    ],
  },

  grasa: {
    productos: [
      {
        nombre: "Killing Oil",
        precio: "USD $30",
        valor: 30,
      },
      {
        nombre: "Oil cleaner",
        precio: "USD $48",
        valor: 48,
      },
    ],
  },
};
let carrito = [];
let nombre = prompt("Por favor ingresa tu nombre");
alert(
  `Hola ${nombre}, Por medio de la siguiente encuesta te diremos cuál es el producto que mejor se te acomoda!`
);
let tipoPiel = prompt(
  `${nombre}, ¿Qué tipo de piel tienes: seca, mixta o grasa?`
).toLowerCase();
function Piel() {
  while (tipoPiel != "seca" && tipoPiel != "mixta" && tipoPiel != "grasa") {
    tipoPiel = prompt("¡Vuelvelo a intentar!");
  }
  let respuesta = "";
  switch (tipoPiel) {
    case "seca":
      let productosPielSeca = "";
      let prodSeca = pieles.seca.productos;
      prodSeca.forEach((producto) => {
        productosPielSeca += producto.nombre + " " + producto.precio + " ";
      });
      respuesta = prompt(
        `Si tu piel es seca, te recomendamos el ${productosPielSeca}, los cuales te ayudarán a mejorar la textura de tu piel y evitar los signos de la edad, deseas agregarlo al carrito? (si/no)`
      ).toLowerCase();
      break;
    case "mixta":
      let productosPielMixta = "";
      let prodMixta = pieles.mixta.productos;
      prodMixta.forEach((producto) => {
        productosPielMixta += producto.nombre + " " + producto.precio + " ";
      });
      respuesta = prompt(
        `Si tu piel es mixta, te recomendamos los ${productosPielMixta}, los cuales te ayudarán a mejorar la textura de tu piel y evitar los signos de la edad, deseas agregarlos al carrito? (si/no)`
      ).toLowerCase();
      break;
    case "grasa":
      let productosPielGrasa = "";
      let prodGrasa = pieles.grasa.productos;
      prodGrasa.forEach((producto) => {
        productosPielGrasa += producto.nombre + " " + producto.precio + " ";
      });
      respuesta = prompt(
        `Si tu piel es grasa, te recomendamos los ${productosPielGrasa}, los cuales te ayudarán a conservar la lozanía de tu piel y controlar el exceso de grasa, deseas agregarlo al carrito? (si/no)`
      ).toLowerCase();
      break;
    default:
      alert(
        `Lo sentimos ${nombre}, debes ingresar una de las opciones que te dimos`
      );
  }
  if (respuesta == "si") {
    carrito = carrito.concat(pieles[tipoPiel].productos);
    carritoLleno();
  } else {
    carritoVacio();
  }
}
function carritoVacio() {
  let divUno = document.getElementById("respuestaUno");
  divUno.innerText = "No tienes productos en tu carrito";
}
let carritoLleno = () => {
  let divUno = document.getElementById("respuestaUno");

  carrito.forEach((producto) => {
    const divHUno = document.createElement("div");
    const parrafoUno = document.createElement("p");
    parrafoUno.innerText = `${producto.nombre}, ${producto.precio}`;
    divHUno.appendChild(parrafoUno);
    divUno.appendChild(divHUno);
  });

  let total = carrito.reduce((ant,producto) => ant + producto.valor,0);  
  const parrafoTotal = document.createElement("b");
  parrafoTotal.innerText = "El valor total es USD$" + total
  divUno.appendChild(parrafoTotal);

  let boton = document.getElementById("boton");
  boton.removeAttribute("disabled");
  let divDos = document.getElementById("respuestaDos");
  boton.addEventListener("click", () => {
    divDos.classList.remove("ocultar");
    boton.classList.add("ocultar")
  });
};


Piel();
