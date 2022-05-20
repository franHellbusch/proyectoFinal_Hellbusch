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
        title: 'completa los campos restantes',
    })
}