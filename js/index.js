// alertas
var alertPlaceholder1 = document.getElementById('liveAlertPlaceholder1');
var alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2');
var alertPlaceholder3 = document.getElementById('liveAlertPlaceholder3');
var alertPlaceholder4 = document.getElementById('liveAlertPlaceholder4');
var wrapper = ""

function alert2(message, type) {
  wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible d-flex align-items-center" role="alert"> <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg> <div>' + message + '</div><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
}
// seccion de formulario
sessionStorage.setItem("logeado?", "no")
class Usuario{
    constructor (nombre, apellido, email, username, filtro){
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.username = username
        this.filtro = filtro
    }
}
let confirmarFormularioLink = document.getElementById("confirmarFormularioLink");
let usuarioNombre = ""
let usuarioApellido = ""
let usuarioEmail = ""
let usuarioUsername = ""
let usuarioFiltro = ""
let usuarioLogeado = {}

function validarFormulario() {
    let campoNombre = document.getElementById("nombreFormulario").value;
    (campoNombre == "" || typeof campoNombre != "string") && (campoNombre = "");
    usuarioNombre = campoNombre.toUpperCase();
    let campoApellido = document.getElementById("apellidoFormulario").value;
    (campoApellido == "" || typeof campoApellido != "string") && (campoApellido = "");
    usuarioApellido = campoApellido.toUpperCase();
    let campoEmail = document.getElementById("emailFormulario").value;
    (campoEmail.includes("@") == false || campoEmail.includes(".") == false) && (campoEmail = "");
    usuarioEmail = campoEmail;
    let campoUsername = document.getElementById("usernameFormulario").value;
    (campoUsername == "" || campoUsername.length >= 20) && (campoUsername = "");
    usuarioUsername = campoUsername;
    let campoFiltro = document.getElementById("filtroFormulario").value;
    (campoFiltro == "Que producto prefieres") && (campoEmail = "");
    usuarioFiltro = campoFiltro;

    if (usuarioNombre == "" || usuarioApellido == "" || usuarioEmail == "" || usuarioUsername == "" || usuarioFiltro == ""){
        alertaErrorFormulario()
    } else {
        alertaFormularioConfirmado()
        usuarioLogeado = new Usuario (usuarioNombre, usuarioApellido, usuarioEmail, usuarioUsername, usuarioFiltro);
        localStorage.setItem("usuarioLogeado", JSON.stringify(usuarioLogeado));
        sessionStorage.setItem("logeado?", "si")
    }
}

let confirmarFormulario = document.getElementById("confirmarFormulario");
confirmarFormulario.onclick = () => {
    let usuarioLoging = JSON.parse(localStorage.getItem("usuarioLogeado"));
    usuarioLoging !== null ? alertaCuentaYaCreada() : validarFormulario();
}

// seccion de log in
let botonVerificar = document.getElementById("verificar");
let botonIngresar = document.getElementById("ingresar");

function login() {
    let campoUsername = document.getElementById("usernameLogin").value;
    if (campoUsername == "") {
        campoUsername = "";
    } else if (campoUsername.length >= 20) {
        alert2("El campo Username no puede ser tan largo, hasta 20 caracteres", "danger");
        alertPlaceholder2.append(wrapper);
        campoNombre = ""
    }
    let campoEmail = document.getElementById("emailLogin").value;
    if (campoEmail == "") {
        campoEmail = "";
    } else if (campoEmail.includes("@") == false || campoEmail.includes(".") == false) {
        alert2("email mal ingresado", "danger");
        alertPlaceholder3.append(wrapper);
        campoEmail = "";
    }

    let usuarioLoging = JSON.parse(localStorage.getItem("usuarioLogeado"));
    if (usuarioLoging === null) {
        alertaErrorNoUsuarios();
    } else {
        if (campoUsername == "" || campoEmail == "") {
            alertaErrorLogin()
        } else if (usuarioLoging.username !== campoUsername || usuarioLoging.email !== campoEmail) {
            alert2("Uno de los dos campos es incorrecto, o no esta logeado", "info");
            alertPlaceholder4.append(wrapper);
        } else {
            sessionStorage.setItem("logeado?", "si")
            alertaLogeadoCorrectamente();
        }
    }
}

botonVerificar.onclick = () => {
    login()
}

// eliminar local storage
let eliminarLocalStorage = document.getElementById("eliminarLocalStorage");
eliminarLocalStorage.onclick = () => {
    localStorage.clear();
}

function consola(){
    console.log("hola mundo");
}