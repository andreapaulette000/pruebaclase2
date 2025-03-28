// Array de imágenes de perritos (puedes agregar más URLs)
const imagenesPerritos = [
    "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
];

document.getElementById("cambiarPerrito").addEventListener("click", function() {
    const imagenPerrito = document.querySelector("img");
    const indiceAleatorio = Math.floor(Math.random() * imagenesPerritos.length);
    imagenPerrito.src = imagenesPerritos[indiceAleatorio];
    imagenPerrito.alt = "Foto de perrito " + (indiceAleatorio + 1);
});