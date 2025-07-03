const carrusel = document.getElementById('carrusel');
const flechaIzquierda = document.querySelector('.flecha.izquierda');
const flechaDerecha = document.querySelector('.flecha.derecha');

function actualizarFlechas() {
  const scrollLeft = carrusel.scrollLeft;
  const scrollWidth = carrusel.scrollWidth;
  const clientWidth = carrusel.clientWidth;

  // Si está al inicio, ocultar flecha izquierda
  if (scrollLeft <= 0) {
    flechaIzquierda.style.display = 'none';
  } else {
    flechaIzquierda.style.display = 'block';
  }

  // Si está al final, ocultar flecha derecha
  if (scrollLeft + clientWidth >= scrollWidth - 1) {
    flechaDerecha.style.display = 'none';
  } else {
    flechaDerecha.style.display = 'block';
  }
}

// Inicializar flechas al cargar
actualizarFlechas();

// Actualizar flechas al hacer scroll
carrusel.addEventListener('scroll', actualizarFlechas);

// Desplazar al hacer click
flechaIzquierda.addEventListener('click', () => {
  carrusel.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});

flechaDerecha.addEventListener('click', () => {
  carrusel.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});
