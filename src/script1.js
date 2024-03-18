// Variable para almacenar la imagen original sin modificaciones
let imgOriginal;

// Variable para almacenar la imagen actual (con modificaciones)
let imgActual;

function preload() {
    // Carga la imagen original antes de que comience el programa
    imgOriginal = loadImage('images/imatge_color.png');
}

function setup() {
    // Obtener el elemento div con id "lienzo"
    let lienzoDiv = select('#lienzo');

    // Crear un lienzo dentro del div
    let canvas = createCanvas(imgOriginal.width, imgOriginal.height);
    // Adjuntar el lienzo al div
    canvas.parent(lienzoDiv);
    // Dibuja la imagen en el lienzo
    image(imgOriginal, 0, 0);

    // Al inicio, la imagen actual es la misma que la original
    imgActual = imgOriginal.get();
}
function showLastKey() {

    // Obtener el elemento <p> para mostrar la última letra pulsada
    let ultimaLetraElemento = select('#ultima-letra');
    // Actualizar el contenido del elemento <p> con la última letra pulsada
    ultimaLetraElemento.html('Última lletra polsada: ' + ultimaLetraPulsada);

}
function keyPressed() {
    ultimaLetraPulsada = key;
    // Restaura la imagen actual a la imagen original sin modificaciones
    imgActual = imgOriginal.get();
    switch (key) {
        case "L":
        case "l":
            // Realiza la erosión de la imagen
            imgActual.filter(ERODE);
            break;
        case "A":
        case "a":
            // Realiza la posterización de la imagen con nivel 3
            imgActual.filter(POSTERIZE, 3);
            break;
        case "R":
        case "r":
            // Realiza la binarización de la imagen con un umbral de 120
            imgActual.filter(THRESHOLD, 120);
            break;
        case "O":
        case "o":
            // Realiza el efecto negativo de la imagen
            imgActual.filter(INVERT);
            break;
        default:
            break;
    }
    // Actualiza la imagen en el lienzo
    updateCanvas();
    showLastKey();
}

function updateCanvas() {
    // Netejar el canva.
    clear();
    // Dibuixar la imatge modificada en el canva.
    image(imgActual, 0, 0);
}
