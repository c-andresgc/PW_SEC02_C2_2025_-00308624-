function cambiarLayout() {
    const main = document.getElementById("cities");
    main.classList.toggle("column-layout");
}

function cambiarTitulo() {
    const title = document.getElementById("main-title");
    if (title.textContent === "University Demo") {
        title.textContent = "HTML & CSS: Curso práctico avanzado";
    } else {
        title.textContent = "University Demo";
    }
}

function cambiarColores() {
    const cities = document.querySelectorAll(".city");
    cities.forEach(city => {
        const title = city.querySelector("h2");
        const paragraphs = city.querySelectorAll("p");

        if (title.style.color !== "crimson") {
            title.style.color = "crimson";
            paragraphs.forEach(p => p.style.color = "darkblue");
        } else {
            title.style.color = "";
            paragraphs.forEach(p => p.style.color = "");
        }
    });
}

function agregarImagen() {
    const footer = document.getElementById("footer");
    const existingImg = footer.querySelector("img");

    if (!existingImg) {
        const img = document.createElement("img");
        img.src = "images/footer.jpg";
        img.alt = "Imagen Footer";
        footer.appendChild(img);
    } else {
        existingImg.remove();
    }
}
