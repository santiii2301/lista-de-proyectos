const contenHamburguesa = document.querySelector(".contenHamburguesa");
const burgerCheckbox = document.getElementById("burger");

burgerCheckbox.addEventListener("change", (e) => {
    if (burgerCheckbox.checked) {
        contenHamburguesa.style.right = "0"; // Mover el menú a la vista
    } else {
        contenHamburguesa.style.right = "-800px"; // Volver a ocultarlo
    }
});


