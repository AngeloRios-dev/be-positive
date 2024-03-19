// seleccionando los elementos a validar
const nombre = document.getElementById('inputNombre');
const apellidos = document.getElementById('inputApellidos');
const email = document.getElementById('inputEmail');
const telefono = document.getElementById('inputTelefono');


// funcion para indicar el error
const setError = (elemento, mensaje) => {
    const mostrarMensaje = elemento.nextElementSibling;
    const setBorde = elemento;

    mostrarMensaje.innerText = mensaje;
    setBorde.classList.add('error');
    setBorde.classList.remove('exito');
}


// indicar que el valor es correcto
const setExito = (elemento) => {
    const eliminarMensaje = elemento.nextElementSibling;
    const setBorde = elemento;

    eliminarMensaje.innerText = '';
    setBorde.classList.add('exito');
    setBorde.classList.remove('error');
}


const validarNombre = (nombre) => {
    // Expresion para verificar que la longitud cumpla con lo espesificado
    const patron = /^[a-zA-Z]{4,15}$/;

    // comprobar que el valor coincida con el patron
    if (patron.test(nombre.value)) {
        // marcar como correcto si es correcto
        setExito(nombre)
    } else {
        // de ser invalido, mostrar mensaje de error
        setError(nombre, 'El nombre debe tener entre 4 y 15 caracteres alfabeticos.')
    }
}


const validarApellidos = (apellidos) => {
    // Expresion para verificar que la longitud cumpla con lo espesificado
    const patron = /^[a-zA-Z]{4,40}$/;

    // comprobar que el valor coincida con el patron
    if (patron.test(apellidos.value)) {
        // marcar como correcto si es correcto
        setExito(apellidos)
    } else {
        // de ser invalido, mostrar mensaje de error
        setError(apellidos, 'El nombre debe tener entre 4 y 40 caracteres alfabeticos.')
    }
}


const validarEmail = (email) => {
    const patron = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // comprobar que el valor coincida con el patron
    if (patron.test(email.value)) {
        // marcar como correcto si es correcto
        setExito(email);
    } else {
        // de ser invalido, mostrar mensaje de error
        setError(email, 'Por favor, introducta un correo valido. Ej: nnnnn_nnn@zzzz.xxx')
    }
}

const validarTelefono = (telefono) => {
    const patron = /^\d{9}$/;

    // comprobar que el valor coincida con el patron
    if (patron.test(telefono.value)) {
        // marcar como correcto si es correcto
        setExito(telefono);
    } else {
        // de ser invalido, mostrar mensaje de error
        setError(telefono, 'Por favor, introduzca un numero de 9 digitos.');
    }
}


// agregar un evento al campo nombre para validar lo introducido
nombre.addEventListener('blur', function() {
    validarNombre(nombre);
});

// agregar un evento al campo apellidos para validar lo introducido
apellidos.addEventListener('blur', function() {
    validarApellidos(apellidos);
});

// agregar un evento al campo email para validar lo introducido
email.addEventListener('blur', function() {
    validarEmail(email);
});


// agregar un evento al campo para validar lo introducido
telefono.addEventListener('blur', function() {
    validarTelefono(telefono)
});