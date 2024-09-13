
    const opciones = document.querySelectorAll('.opciones');
    const mainSections = document.querySelectorAll('.main');

    opciones.forEach(div => {
        div.addEventListener('click', function() {
            opciones.forEach(option => {
                option.removeAttribute('id');
            });

            this.id = "seleccionado";

            mainSections.forEach(section => {
                section.style.display = 'none';
            });

            const sectionId = `main-${this.textContent.toLowerCase()}`;
            const sectionToShow = document.getElementById(sectionId);
            if (sectionToShow) {
                sectionToShow.style.display = 'flex';
            }
        });
    });

    opciones[0].click();



// Obtener elementos del DOM
var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModal = document.getElementsByClassName("close")[0];

// Abrir el modal al hacer clic en el botón
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Cerrar el modal al hacer clic en la 'X'
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//-------------------------------//
// Obtener elementos del DOM
const cantidadInput = document.getElementById('cantidad');
const valorPedido = document.querySelector('.valor_pedido');
const extraItems = document.querySelectorAll('.cuadro_extras');

// Configurar valores iniciales
let precioBase = 30000; // Precio por defecto
let totalExtras = 0;

// Actualizar valor del pedido basado en la cantidad
function actualizarValorPedido() {
    const cantidad = parseInt(cantidadInput.value) || 1;
    valorPedido.textContent = `$${(precioBase + totalExtras) * cantidad}`;
}

// Manejar eventos de botones de sumar y restar en los extras
extraItems.forEach(item => {
    const sumarBtn = item.querySelector('.sumar');
    const restarBtn = item.querySelector('.restar');
    const cantidadExtra = item.querySelector('.cantidad-extra');
    const precioExtra = parseInt(item.querySelector('.precio-extra').textContent.replace(/\D/g, ''));

    let cantidad = 0;

    sumarBtn.addEventListener('click', () => {
        cantidad++;
        cantidadExtra.textContent = cantidad;
        totalExtras += precioExtra;
        actualizarValorPedido();
    });

    restarBtn.addEventListener('click', () => {
        if (cantidad > 0) {
            cantidad--;
            cantidadExtra.textContent = cantidad;
            totalExtras -= precioExtra;
            actualizarValorPedido();
        }
    });
});

// Actualizar el valor inicial del pedido al cargar
cantidadInput.addEventListener('input', actualizarValorPedido);
actualizarValorPedido();

//-------------------------------//
// Obtener elementos del DOM
var modal1 = document.getElementById("myModal1");
var closeModal1 = document.getElementsByClassName("close1")[0];

// Manejar clic en los contenedores de imagen
document.querySelectorAll('.contenedor_imagen').forEach(contenedor => {
    contenedor.addEventListener('click', function() {
        modal1.style.display = "block";
    });
});

// Cerrar el modal al hacer clic en la 'X'
closeModal1.onclick = function() {
    modal1.style.display = "none";
}

// Cerrar el modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
}


