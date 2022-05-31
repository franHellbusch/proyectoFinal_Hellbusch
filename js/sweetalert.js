function alertaErrorFormulario() {
    Swal.fire({
        icon: 'error',
        title: 'Error de formulario',
        text: 'falta completar un campo o alguno es incorrecto!',
    })
}

function alertaFormularioConfirmado() {
    Swal.fire({
        icon: 'success',
        title: 'Formulario confirmado',
        text: 'disfrute de nuestro servicio! Presione Ir a la tienda',
        focusCancel: true,
        confirmButtonText:`Ir a la tienda`
    }).then((result) => {
        if (result.value) {
          window.location.href = `pages/compra.html`
        }
    })
}

function alertaCuentaYaCreada() {
    Swal.fire({
        icon: 'info',
        title: 'Ya tienes cuenta',
        text: 'Ya tienes una cuenta creada, presiona Log In',
    })
}

function alertaLogeadoCorrectamente() {
    Swal.fire({
        icon: 'success',
        title: 'Usuario correcto',
        text: 'disfrute de nuestro servicio! Presione Ir a la tienda',
        focusCancel: true,
        confirmButtonText:`Ir a la tienda`
    }).then((result) => {
        if (result.value) {
          window.location.href = `pages/compra.html`
        }
    })
}

function alertaErrorLogin() {
    Swal.fire({
        icon: 'error',
        title: 'completa todos los campos',
    })
}

function alertaErrorNoUsuarios() {
    Swal.fire({
        icon: 'error',
        title: 'No hay usuarios creados',
    })
}

function compraRealizada() {
    Swal.fire({
        icon: 'success',
        title: 'Su compra fue realizada con exito',
    })
}

function noHayProductos() {
    Swal.fire({
        icon: 'error',
        title: 'No hay productos en su carrito',
    })
}

function compraNoRealizada() {
    Swal.fire({
        icon: 'error',
        title: 'Usuario no logeado',
        text: 'Para realizar compras en la tienda debe estar logeado!',
        focusCancel: true,
        confirmButtonText:`Ir a logearse`
    }).then((result) => {
        if (result.value) {
          window.location.href = `../index.html`
        }
    })
}