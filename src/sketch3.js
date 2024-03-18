// Variable per emmagatzemar la imatge original sense modificacions
let imgOriginal;

// Variable per emmagatzemar la imatge actual (amb modificacions)
let imgActual;

function preload() {
    // Carregar la imatge original abans que comenci el programa
    imgOriginal = loadImage("imatges/imatge_grey.png");
}

function setup() {
    // Obtindre l'element div amb id "lienzo"
    let lienzoDiv = select("#lienzo");
    // Crear un canvas dins del div
    let canvas = createCanvas(imgOriginal.width, imgOriginal.height);

    // Adjuntar el canvas al div
    canvas.parent(lienzoDiv);
    // Dibuixar la imatge al canvas
    image(imgOriginal, 0, 0);
    imgActual = imgOriginal.get();
}

function keyPressed() {
    // Clonar la imatge original per treballar amb una còpia
    imgActual = imgOriginal.get();
    switch (key) {
        case "D":
        case "d":
            // Aplicar el filtre d'erosió
            imgActual.filter(ERODE);
            break;
        case "L":
        case "l":
            // Aplicar el filtre de llindar
            imgActual.filter(THRESHOLD);
            break;
        default:
            break;
    }
    // Actualitzar el canvas amb la imatge modificada
    updateCanvas();
}

function keyReleased() {
    // Restaurar la imatge original quan es deixa anar la tecla
    imgActual = imgOriginal.get();
    // Actualitzar el canvas amb la imatge original
    updateCanvas();
}

function updateCanvas() {
    // Netejar el canvas
    clear();
    // Dibuixar la imatge actual al canvas
    image(imgActual, 0, 0);
}
