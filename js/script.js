document.getElementById('matrimonio-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const favoriteCartoon = document.getElementById('favorite-cartoon').value;
    const favoriteColor = document.getElementById('favorite-color').value;

    // Guardar los datos y redirigir
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('favoriteCartoon', favoriteCartoon);
    localStorage.setItem('favoriteColor', favoriteColor);

    // Redirigir a la página del acta
    window.location.href = "acta.html";
});
