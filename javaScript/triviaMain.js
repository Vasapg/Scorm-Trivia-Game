// Supongamos que tienes una función para obtener categorías de una API
function obtenerCategorias() {
    // Aquí realizarías la lógica para obtener las categorías de una API
    // En este ejemplo, asumiremos que las categorías se obtienen de un JSON
    const categorias = [
        { id: 1, nombre: "Categoría 1" },
        { id: 2, nombre: "Categoría 2" },
        // Puedes agregar más categorías aquí
    ];
    return categorias;
}

// Función para mostrar las categorías en la página
function mostrarCategorias() {
    const categorias = obtenerCategorias();
    const categoriasDiv = document.getElementById('categorias');

    categorias.forEach(categoria => {
        const button = document.createElement('button');
        button.textContent = categoria.nombre;
        button.classList.add('history');
        button.classList.add('history');
        button.addEventListener('click', () => {
            // Redirigir a otra página pasando el ID de la categoría seleccionada
            console.log("Me pulsaste")
        });
        categoriasDiv.appendChild(button);
    });
}



// Llamamos a la función para mostrar las categorías cuando la página se carga
window.onload = mostrarCategorias;
