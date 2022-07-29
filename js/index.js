
let carrito = JSON.parse(localStorage.getItem("carrito") || "[]");

function carritoVacio() {
  console.log("vaciooo")
  let divUno = document.getElementById("respuestaUno");
  divUno.innerText = "No tienes productos en tu carrito";
}

let carritoLleno = () => {
  let divUno = document.getElementById("respuestaUno");

  carrito.forEach((producto) => {
    const {nombre, precio} = producto
    const divHUno = document.createElement("div");
    const parrafoUno = document.createElement("p");
    parrafoUno.innerText =`${nombre},${precio}`
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
    localStorage.clear()
  });
};


carrito.length == 0 ? carritoVacio(): carritoLleno()
