// Objeto para almacenar elementos del formulario
const formElements = {
    nombre: document.getElementById('inputNombre'),
    apellidos: document.getElementById('inputApellidos'),
    email: document.getElementById('inputEmail'),
    telefono: document.getElementById('inputTelefono'),
    material: document.getElementById('tipoMaterial'),
    plazoEnvio: document.getElementById('plazoEnvio'),
    textoDisenio: document.getElementById('textoDisenio'),
    colorPersonalizado: document.getElementById('colorPersonalizado'),
    tipografiaPersonalizada: document.getElementById('tipografiaPersonalizada'),
    donacionCaridad: document.getElementById('donacionCaridad'),
    cantidadCamisetas: document.getElementById('cantidadCamisetas'),
    presupuestoEstimado: document.getElementById('presupuestoEstimado'),
    aceptarTerminos: document.getElementById('aceptarTerminos'),
    solicitarPresupuesto: document.getElementById('solicitarPresupuesto'),
};

// Funcion para indicar el error en un campo
const setError = (elemento, mensaje) => {
    const mostrarMensaje = elemento.nextElementSibling;
    const setBorde = elemento;

    mostrarMensaje.innerText = mensaje;
    setBorde.classList.add('error');
    setBorde.classList.remove('exito');
}

// Funcion para indicar que el valor de un campo es correcto
const setExito = (elemento) => {
    const eliminarMensaje = elemento.nextElementSibling;
    const setBorde = elemento;

    eliminarMensaje.innerText = '';
    setBorde.classList.add('exito');
    setBorde.classList.remove('error');
}

// Funcion para validar el nombre
const validarNombre = () => {
    const nombre = formElements.nombre;
    const patron = /^[a-zA-Z ]{4,15}$/;

    if (patron.test(nombre.value)) {
        setExito(nombre);
        return true;
    } else {
        setError(nombre, 'El nombre debe tener entre 4 y 15 caracteres alfabeticos.');
        return false;
    }
}

// Funcion para validar los apellidos
const validarApellidos = () => {
    const apellidos = formElements.apellidos;
    const patron = /^[a-zA-Z ]{4,40}$/;

    if (patron.test(apellidos.value)) {
        setExito(apellidos);
        return true;
    } else {
        setError(apellidos, 'Los apellidos deben tener entre 4 y 40 caracteres alfabeticos.');
        return false;
    }
}

// Funcion para validar el email
const validarEmail = () => {
    const email = formElements.email;
    const patron = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (patron.test(email.value)) {
        setExito(email);
        return true;
    } else {
        setError(email, 'Por favor, introduce un correo valido.');
        return false;
    }
}

// Funcion para validar el telefono
const validarTelefono = () => {
    const telefono = formElements.telefono;
    const patron = /^\d{9}$/;

    if (patron.test(telefono.value)) {
        setExito(telefono);
        return true;
    } else {
        setError(telefono, 'Por favor, introduce un número de telefono valido.');
        return false;
    }
}

// indicar al usuario que debe verificar algun campo faltante
const indicarVerificar = () => {
    const enviarSolicitud = formElements.solicitarPresupuesto;
    setError(enviarSolicitud, 'Por favor, verificar que todos los campos esten cumplimentados.');
} 

// Funcion para calcular el descuento en el presupuesto
const calcularDescuento = (subTotal) => {
    let descuento = 0;
    const costoEnvio = parseFloat(formElements.plazoEnvio.value);
    if (!isNaN(costoEnvio) && costoEnvio > 1) {
        descuento = subTotal - (subTotal * costoEnvio);
    }
    return descuento;
}

// Funcion para verificar la cantidad mínima de camisetas
const verificarCantidad = () => {
    const cantidad = parseFloat(formElements.cantidadCamisetas.value);
    const materialSeleccionado = formElements.material.value;
    if (materialSeleccionado !== 'Elige...' && isNaN(cantidad)) {
        formElements.cantidadCamisetas.value = 1;
    }
}

// Funcion para calcular el presupuesto
const calcularPresupuesto = () => {
    verificarCantidad();
    let subTotal = 0;

    // Obtener los valores de los elementos del formulario
    const valorMaterial = parseFloat(formElements.material.value);
    const costoDisenio = formElements.textoDisenio.checked ? parseFloat(formElements.textoDisenio.value) : 0;
    const costoColor = formElements.colorPersonalizado.checked ? parseFloat(formElements.colorPersonalizado.value) : 0;
    const costoTipografia = formElements.tipografiaPersonalizada.checked ? parseFloat(formElements.tipografiaPersonalizada.value) : 0;
    const donacion = formElements.donacionCaridad.checked ? parseFloat(formElements.donacionCaridad.value) : 0;
    const cantidad = parseFloat(formElements.cantidadCamisetas.value);

    // Agregar los valores al subtotal
    if (!isNaN(valorMaterial)) subTotal += valorMaterial;
    if (!isNaN(costoDisenio)) subTotal += costoDisenio;
    if (!isNaN(costoColor)) subTotal += costoColor;
    if (!isNaN(costoTipografia)) subTotal += costoTipografia;
    if (!isNaN(donacion)) subTotal += donacion;
    if (!isNaN(cantidad) && cantidad >= 1) subTotal *= cantidad;

    // Calcular el descuento
    const descuento = calcularDescuento(subTotal);

    // Calcular el total
    const total = subTotal + descuento;

    // Mostrar el presupuesto estimado
    formElements.presupuestoEstimado.value = total;
}

// Event listeners para validar los campos del formulario
formElements.nombre.addEventListener('blur', validarNombre);
formElements.apellidos.addEventListener('blur', validarApellidos);
formElements.email.addEventListener('blur', validarEmail);
formElements.telefono.addEventListener('blur', validarTelefono);

// Event listener para calcular el presupuesto cuando cambia algun campo relevante
const camposACalcular = [
    formElements.material,
    formElements.plazoEnvio,
    formElements.textoDisenio,
    formElements.colorPersonalizado,
    formElements.tipografiaPersonalizada,
    formElements.donacionCaridad,
    formElements.cantidadCamisetas,
];
camposACalcular.forEach(campo => {
    campo.addEventListener('change', calcularPresupuesto);
});

const validarFormulario = (event) => {
    event.preventDefault();

    // Verificar campos de datos personales
    if (!validarNombre() || !validarApellidos() || !validarEmail() || !validarTelefono()) {
        indicarVerificar()
        return;
    }

    // Verificar checkbox de aceptacion de terminos
    if (!formElements.aceptarTerminos.checked) {
        alert('Debes aceptar los terminos y condiciones para enviar el formulario.');
        return;
    }

    // Si todos los campos estan completos y el checkbox esta marcado, enviar el formulario
    if (formElements.presupuestoEstimado.value === '' || formElements.presupuestoEstimado.value === 0) {
        alert('Nos pondremos en contacto con usted lo mas pronto posible.');
    } else {
        alert('Solicitud enviada. Le contactaremos pronto.');
    }
    document.getElementById('formPresupuesto').submit();
} 

// Agregar el event listener al submit del formulario
document.getElementById('formPresupuesto').addEventListener('submit', validarFormulario);
