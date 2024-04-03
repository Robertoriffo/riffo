function mostrarDetalles(nombre, precio) {
    var nombreProducto = document.getElementById('nombre');
    var precioProducto = document.getElementById('precio');

    nombreProducto.textContent = "Nombre: " + nombre;
    precioProducto.textContent = "Precio: $" + precio;
}