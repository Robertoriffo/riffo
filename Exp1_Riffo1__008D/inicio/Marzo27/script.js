function mostrarDetalles(producto) {
    var nombre = producto.getAttribute('data-nombre');
    var precio = producto.getAttribute('data-precio');
    var nombreElemento = document.getElementById('nombre');
    var precioElemento = document.getElementById('precio');

    nombreElemento.textContent = "Nombre: " + nombre;
    precioElemento.textContent = "Precio: $" + precio;
}