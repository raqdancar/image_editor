
// Variable para almacenar la imagen original sin modificaciones
let imgOriginal;

// Variable para almacenar la imagen actual (con modificaciones)
let imgActual;

function preload() {
    imgOriginal = loadImage("images/imatge_grey.png");
}

function setup() {
    // Obtener el elemento div con id "lienzo"
    let lienzoDiv = select("#lienzo");
    // Crear un lienzo dentro del div
    let canvas = createCanvas(imgOriginal.width, imgOriginal.height);

    // Adjuntar el lienzo al div
    canvas.parent(lienzoDiv);
    // Dibuja la imagen en el lienzo
    image(imgOriginal, 0, 0);
    imgActual = imgOriginal.get();

}
function keyPressed() {
    // Clonar la imagen original para trabajar con una copia
    imgActual = imgOriginal.get();
    switch (key) {
        case "D":
        case "d":
            // Aplicar el filtro de erosión
            imgActual.filter(ERODE);

            break;
        case "L":
        case "l":
            // Aplicar el filtro de umbral
            imgActual.filter(THRESHOLD); 
            break;
        default:
            break;
    }
    // Actualizar el lienzo con la imagen modificada
    updateCanvas();
}

function keyReleased() {
    // Restaurar la imagen original cuando se suelta la tecla
    imgActual = imgOriginal.get();
    // Actualizar el lienzo con la imagen original
    updateCanvas();
}
function updateCanvas() {
    // Limpiar el lienzo
    clear();
    // Dibujar la imagen actual en el lienzo
    image(imgActual, 0, 0);
}