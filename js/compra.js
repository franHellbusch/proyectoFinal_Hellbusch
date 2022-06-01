let estaLogeado =  sessionStorage.getItem("logeado?")
let usuarioLogeado = JSON.parse(localStorage.getItem("usuarioLogeado"));

// carrito
let contenidoCarrito = [];

// cards
let cardDeck = document.getElementById("cardDeck");

function filtros(datos) {
    for (let propiedad in datos[num]){
        for (i = 0;i <1; i++){
            let cards = document.createElement("div");
            cards.className = "col mb-4";
            cards.innerHTML = `<div id="card" class="card${i + 1} border mt-3 rounded"><img id="img" src="../assets/img/${datos[num][propiedad].imagen}" class="card-img-top" alt="paisaje"><div id="card-body" class="card-body text-center"><h5 class="card-title">${datos[num][propiedad].nombre}</h5><p class="card-text">${datos[num][propiedad].desc}</p><botton id="${datos[num][propiedad].id}" class="btn btn-outline-success">COMPRAR ($${datos[num][propiedad].precio})</bottom></div></div>`;
            cardDeck.append(cards)
        }
    }
}

// funcion de Filtro: todos los productos
function todosFiltro(datos) {
    for (i = 0; i < 3; i++){
        for (let propiedad in datos[i]){
            for (index = 0;index <1; index++){
                let cards = document.createElement("div");
                cards.className = "col mb-4";
                cards.innerHTML = `<div id="card" class="card${i + 1} border mt-3 rounded"><img id="img" src="../assets/img/${datos[i][propiedad].imagen}" class="card-img-top" alt="paisaje"><div id="card-body" class="card-body text-center"><h5 class="card-title">${datos[i][propiedad].nombre}</h5><p class="card-text">${datos[i][propiedad].desc}</p><botton id="${datos[i][propiedad].id}" class="btn btn-outline-success">COMPRAR ($${datos[i][propiedad].precio})</botton></div></div>`;
                cardDeck.append(cards)
            }
        }
    }
}

// seccion de Carrito de compra
let carrito = document.getElementById("carritoContenido");
let vaciarCarrito = document.getElementById("borrarCarrito");
let totalCarrito = document.getElementById("totalCarrito");
let remera1
let remera2
let remera3
let pantalon1
let pantalon2
let pantalon3
let buzo1
let buzo2

vaciarCarrito.onclick = () => {
    while (carrito.firstChild) {
        carrito.removeChild(carrito.firstChild);
    }
    contenidoCarrito = []
    sacarTotal();
    badge()
}

function sacarTotal() {
    let total = contenidoCarrito.reduce ((acc,el) => acc + el.precio, 0);
    totalCarrito.innerHTML = `TOTAL: ${total}`;
}

function borrarProducto(nombre) {
    let position = contenidoCarrito.indexOf(nombre)
    contenidoCarrito.splice(position, 1);
    carrito.removeChild(carrito.childNodes[position])   
    sacarTotal();
    badge();
}

function comprarRemeras(datos) {
    let boton1 = document.getElementById("remeraCorta");
    let boton2 = document.getElementById("remeraLarga");
    let boton3 = document.getElementById("remeraMusculosa");
    boton1.onclick = () => {
        let remeraCorta = document.createElement("li");
        remeraCorta.className = "list-group-item ml-3 bg-transparent"
        remeraCorta.innerHTML = `Remera de mangas cortas ($2500) <buttom class="btn btn-danger" onclick="borrarProducto(remera1)">x</buttom>`;
        carrito.append(remeraCorta);
        remera1 = datos[0].remera1;
        contenidoCarrito.push(remera1);
        sacarTotal();
        badge();
    }
    boton2.onclick = () => {
        let remeraLarga = document.createElement("li");
        remeraLarga.className = "list-group-item ml-3 bg-transparent";
        remeraLarga.innerHTML = `Remera de mangas largas ($1900) <buttom class="btn btn-danger" onclick="borrarProducto(remera2)">x</buttom>`;
        carrito.append(remeraLarga);
        remera2 = datos[0].remera2;
        contenidoCarrito.push(remera2);
        sacarTotal();
        badge();
    }
    boton3.onclick = () => {
        let remeraMusculosa = document.createElement("li");
        remeraMusculosa.className = "list-group-item ml-3 bg-transparent";
        remeraMusculosa.innerHTML = `Remera de musculosa ($2100) <buttom class="btn btn-danger" onclick="borrarProducto(remera3)">x</buttom>`;
        carrito.append(remeraMusculosa);
        remera3 = datos[0].remera3;
        contenidoCarrito.push(remera3);
        sacarTotal();
        badge();
    }
}

function comprarPantalones(datos) {
    let boton1 = document.getElementById("pantalonCorto");
    let boton2 = document.getElementById("pantalonJean");
    let boton3 = document.getElementById("pantalonJogging");
    boton1.onclick = () => {
        let pantalonCorto = document.createElement("li");
        pantalonCorto.className = "list-group-item ml-3 bg-transparent";
        pantalonCorto.innerHTML = `Pantalon corto ($2700) <buttom class="btn btn-danger" onclick="borrarProducto(pantalon1)">x</buttom>`;
        carrito.append(pantalonCorto);
        pantalon1 = datos[1].pantalon1;
        contenidoCarrito.push(pantalon1);
        sacarTotal();
        badge();
    }
    boton2.onclick = () => {
        let pantalonJean = document.createElement("li");
        pantalonJean.className = "list-group-item ml-3 bg-transparent";
        pantalonJean.innerHTML = `Pantalon jean ($3000) <buttom class="btn btn-danger" onclick="borrarProducto(pantalon2)">x</buttom>`;
        carrito.append(pantalonJean);
        pantalon2 = datos[1].pantalon2;
        contenidoCarrito.push(pantalon2);
        sacarTotal();
        badge();
    }
    boton3.onclick = () => {
        let pantalonJogging = document.createElement("li");
        pantalonJogging.className = "list-group-item ml-3 bg-transparent";
        pantalonJogging.innerHTML = `Pantalon jogging ($2800) <buttom class="btn btn-danger" onclick="borrarProducto(pantalon3)">x</buttom>`;
        carrito.append(pantalonJogging);
        pantalon3 = datos[1].pantalon3;
        contenidoCarrito.push(pantalon3);
        sacarTotal();
        badge();
    }
}

function comprarBuzos(datos) {
    let boton1 = document.getElementById("buzoCapucha");
    let boton2 = document.getElementById("buzoSinCapucha");
    boton1.onclick = () => {
        let buzoCapucha = document.createElement("li");
        buzoCapucha.className = "list-group-item ml-3 bg-transparent";
        buzoCapucha.innerHTML = `Buzo con capucha ($4000) <buttom class="btn btn-danger" onclick="borrarProducto(buzo1)">x</buttom>`;
        carrito.append(buzoCapucha);
        buzo1 = datos[2].buzo1;
        contenidoCarrito.push(buzo1);
        sacarTotal();
        badge();
    }
    boton2.onclick = () => {
        let buzoSinCapucha = document.createElement("li");
        buzoSinCapucha.className = "list-group-item ml-3 bg-transparent";
        buzoSinCapucha.innerHTML = `Buzo sin capucha ($3500) <buttom class="btn btn-danger" onclick="borrarProducto(buzo2)">x</buttom>`;
        carrito.append(buzoSinCapucha);
        buzo2 = datos[2].buzo2;
        contenidoCarrito.push(buzo2);
        sacarTotal();
        badge();
    }
}

fetch(`../js/productos.json`)
.then((response) => response.json())
.then((data) => {
    console.log(data[1].pantalon1);
    todosFiltro(data);
    comprarRemeras(data);
    comprarPantalones(data);
    comprarBuzos(data);

    let botonRemeras = document.getElementById("remeras");
    let botonPantalones = document.getElementById("pantalones");
    let botonBuzos = document.getElementById("buzos");
    let botonTodos = document.getElementById("todos");


    botonRemeras.onclick = () => {
        while (cardDeck.firstChild) {
            cardDeck.removeChild(cardDeck.firstChild);
        }
        num = 0;
        filtros(data);
        comprarRemeras(data);
    }   

    botonPantalones.onclick = () => {
        while (cardDeck.firstChild) {
            cardDeck.removeChild(cardDeck.firstChild);
        }
        num = 1;
        filtros(data)
        comprarPantalones(data)
    }

    botonBuzos.onclick = () => {
        while (cardDeck.firstChild) {
            cardDeck.removeChild(cardDeck.firstChild);
        }
        num = 2;
        filtros(data)
        comprarBuzos(data)
    }

    botonTodos.onclick = () => {
        while (cardDeck.firstChild) {
            cardDeck.removeChild(cardDeck.firstChild);
        }
        todosFiltro(data);
        comprarBuzos(data);
        comprarRemeras(data);
        comprarPantalones(data);
    }
})
.catch((error) => console.error(`error`, error));

// side nav
let iconCarrito = document.getElementById("iconCarrito");
let closeSidenav = document.getElementById("closeSidenav");
let mySidenav = document.getElementById("mySidenav");
let badgeCarrito = document.getElementById("badgeCarrito");

iconCarrito.onclick = () => {
    mySidenav.style.width = "350px";
    sacarTotal();
}

function badge() {
    badgeCarrito.innerHTML = contenidoCarrito.length;
}

closeSidenav.onclick = () => {
    mySidenav.style.width = "0px";
}

// seccion de Filtros
// dropdown en mobile
let controlFiltros1 = document.getElementById("controlFiltros1");
let controlFiltros2 = document.getElementById("controlFiltros2");
let filtrosContenido = document.getElementById("controles");

controlFiltros1.onclick = () => {
    filtrosContenido.style.height = "auto";
    controlFiltros2.style.display = "block";
    controlFiltros1.style.display = "none";
}

controlFiltros2.onclick = () => {
    filtrosContenido.style.height = "0";
    controlFiltros1.style.display = "block";
    controlFiltros2.style.display = "none";
}

// compra realizada
let botonCompraRealizada = document.getElementById("realizarCompra");
let comprasAnteriores = document.getElementById("comprasAnteriores");

botonCompraRealizada.onclick = () => {
    if (estaLogeado == "no") {
        compraNoRealizada();
    } else {
        if (contenidoCarrito.length == 0) {
            noHayProductos();
        } else {
            compraRealizada();
            for (i = 0; i < contenidoCarrito.length; i++){
                let productosComprados = document.createElement("tr");
                productosComprados.setAttribute("scope", "row")
                productosComprados.innerHTML = `<th>${contenidoCarrito[i].nombre}</th> <td>$${contenidoCarrito[i].precio}</td>`;
                comprasAnteriores.append(productosComprados);
            }
            while (carrito.firstChild) {
                carrito.removeChild(carrito.firstChild);
            }
            contenidoCarrito = []
            sacarTotal();
            badge();
        }
    }
}

// seccion de usuario
function logOut() {
    estaLogeado = "no";
    console.log(estaLogeado)
    dropdownUser()
}

let dropdownUsuarioClick = document.getElementById("dropdownMenuClickableInside");
let dropdownUsuario = document.getElementById("dropdownUsuario");
let dropdownContent = document.createElement("div");
dropdownContent.className = "dropdown-content";

function dropdownUser() {
    while (dropdownUsuario.firstChild) {
        dropdownUsuario.removeChild(dropdownUsuario.firstChild);
    }
    if (estaLogeado == "no") {
        dropdownContent.innerHTML = `<h2 class="fs-4 fw-bold mt-3">No estas logeado</h2>
        <p>Para poder realizar compras debes estar logeado</p>
        <a href="../index.html"><button onclick="logIn()" class="btn btn-primary">Log In</button></a>
        <a href="../index.html#formularioSeccion"><button class="btn btn-success">Sing In</button></a>`
        dropdownUsuario.append(dropdownContent);
    } else {
        dropdownContent.innerHTML = `<img class="img-dropdown-menu rounded-circle w-25" src="../assets/img/usuario.png" alt="usuario">
        <h3 class="fs-6 mt-2"><b>Usuario:</b> ${usuarioLogeado.username}</h3>
        <h3 class="fs-6 mt-2 mb-2"><b>Email:</b> ${usuarioLogeado.email}</h3>
        <button id="logOut" onclick="logOut()" class="btn btn-secondary">Log Out</button>`
        dropdownUsuario.append(dropdownContent);
    }
}
dropdownUsuarioClick.onclick = () => {
    dropdownUser()
}