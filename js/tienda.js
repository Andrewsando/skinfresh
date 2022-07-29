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
let combosPiel = document.getElementById("combos");

let tPrincipal = document.createElement("h1");
tPrincipal.setAttribute("id", "Principal");
tPrincipal.innerText = "COMBOS";
combosPiel.appendChild(tPrincipal);
tPrincipal.classList.add("tituloCombos");

let tUno = document.createElement("h2");
tUno.setAttribute("id", "tituloUno");
tUno.innerText = "COMBO PIEL SECA";
combosPiel.appendChild(tUno);
tUno.classList.add("subtitulosCombos");

let pUno = document.createElement("p");
pUno.innerText =
  "Para esto te recomendamos face oil que cuesta USD$25 y Face gel que cuesta USD$42, este combo te cuesta USD$67";
combosPiel.appendChild(pUno);
pUno.classList.add("combos");

let imgUno = document.createElement("img");
imgUno.setAttribute("src", "https://images.unsplash.com/photo-1629380106825-771f7aefc6fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
combosPiel.appendChild(imgUno);
imgUno.classList.add("imagenesCombos");

let imgDos = document.createElement("img");
imgDos.setAttribute("src", "https://images.unsplash.com/photo-1629732047847-50219e9c5aef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
combosPiel.appendChild(imgDos);
imgDos.classList.add("imagenesCombos");


function guardar (prods) {
    console.log(prods)
    let carrito = JSON.parse(localStorage.getItem("carrito") || "[]")
    carrito.push(...prods)
    localStorage.setItem("carrito", JSON.stringify(carrito))

    let itemsNumber = document.getElementById("itemsNumber");
    itemsNumber.innerText=carrito.length
}

let botonUno = document.createElement("button");
botonUno.setAttribute("id", "botonOne");
botonUno.innerText = "Comprar";
combosPiel.appendChild(botonUno);
botonUno.classList.add("botonCompras");
botonUno.addEventListener("click", ()=> guardar(pieles.seca.productos));

let tDos = document.createElement("h2");
tDos.setAttribute("id", "tituloDos");
tDos.innerText = "COMBO PIEL MIXTA";
tDos.classList.add("subtitulosCombos");
combosPiel.appendChild(tDos);

let pDos = document.createElement("p");
pDos.innerText =
  "Para esto te recomendamos Fixed Textured que cuesta USD$50 y Face gel que cuesta USD$42, este combo te cuesta USD$92";
combosPiel.appendChild(pDos);
pDos.classList.add("combos");

let imgTres = document.createElement("img");
imgTres.setAttribute("src", "https://images.unsplash.com/photo-1629380107944-e72da9ec91f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
combosPiel.appendChild(imgTres);
imgTres.classList.add("imagenesCombos");

let imgCuatro = document.createElement("img");
imgCuatro.setAttribute("src", "https://images.unsplash.com/photo-1629732046253-e9c2641f7cd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
combosPiel.appendChild(imgCuatro);
imgCuatro.classList.add("imagenesCombos");


let botonDos = document.createElement("button");
botonDos.setAttribute("id", "botonTwo");
botonDos.innerText = "Comprar";
combosPiel.appendChild(botonDos);
botonDos.classList.add("botonCompras");

botonDos.addEventListener("click",  ()=> guardar(pieles.mixta.productos));

let tTres = document.createElement("h2");
tTres.setAttribute("id", "tituloTres");
tTres.innerText = "COMBO PIEL GRASA";
tTres.classList.add("subtitulosCombos");
combosPiel.appendChild(tTres);

let pTres = document.createElement("p");
pTres.innerText =
  "Para esto te recomendamos Killing Oil que cuesta USD$30 y Oil cleaner que cuesta USD$48, este combo te cuesta USD$78";
combosPiel.appendChild(pTres);
pTres.classList.add("combos");

let imgCinco = document.createElement("img");
imgCinco.setAttribute("src", "https://images.unsplash.com/photo-1629732048532-d809cada61c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
combosPiel.appendChild(imgCinco);
imgCinco.classList.add("imagenesCombos");

let imgSeis = document.createElement("img");
imgSeis.setAttribute("src", "https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
combosPiel.appendChild(imgSeis);
imgSeis.classList.add("imagenesCombos");

let botonTres = document.createElement("button");
botonTres.setAttribute("id", "botonThree");
botonTres.innerText = "Comprar";
combosPiel.appendChild(botonTres);
botonTres.classList.add("botonCompras");

let {productos, nombre} = pieles.grasa
botonTres.addEventListener("click",  ()=> guardar(productos));
let carrito = JSON.parse(localStorage.getItem("carrito") || "[]")
let itemsNumber = document.getElementById("itemsNumber");
itemsNumber.innerText=carrito.length || 0