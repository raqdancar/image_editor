// Variable per enmmagatzemar la imatge original sense modificacions
let imgOriginal;

// Variable per enmmagatzemar la imatge modificada i que es mostra actualment a l'aplicació
let imgActual;

function preload() {
    // Carregar la imatge original abans de que començi el programa
    imgOriginal = loadImage('imatges/imatge_color.png');
}

function setup() {
    // Obtenir l'element div amb la id "lienzo"
    let lienzoDiv = select('#lienzo');

    // Crear un "lienzo" dins del div
    let canvas = createCanvas(imgOriginal.width, imgOriginal.height);
    // Adjuntar el "lienzo" al div
    canvas.parent(lienzoDiv);
    // Dibuixar l'imatge a dins el "lienzo"
    image(imgOriginal, 0, 0);

    // A l'inici, la imatge actual es la mateixa que l'original
    imgActual = imgOriginal.get();
}

function showLastKey() {
    // Obtenir l'element <p> per mostrar l'última lletra polsada
    let ultimaLetraElemento = select('#ultima-letra');
    // Actualitzar el contingut de l'element <p> amb la última lletra polsada
    ultimaLetraElemento.html('Última lletra polsada: ' + ultimaLetraPulsada);
}

function keyPressed() {
    ultimaLetraPulsada = key;
    // Restaura l'imatge actual a la imatge original sense modificacions
    imgActual = imgOriginal.get();
    switch (key) {
        case "L":
        case "l":
            // Realitza l'erosió de l'imatge
            imgActual.filter(ERODE);
            break;
        case "A":
        case "a":
            // Realitza la posterizació de la imatge amb nivell 3
            imgActual.filter(POSTERIZE, 3);
            break;
        case "R":
        case "r":
            // Realitza la binarización de la imatge amb un ombral de 120
            imgActual.filter(THRESHOLD, 120);
            break;
        case "O":
        case "o":
            // Realitza el efecte negatiu de l'imatge
            imgActual.filter(INVERT);
            break;
        default:
            break;
    }
    // Actualitza l'imatge a dins del "lienzo"
    updateCanvas();
    showLastKey();
}

function updateCanvas() {
    // Netejar el canva.
    clear();
    // Dibuixar la imatge modificada en el canva.
    image(imgActual, 0, 0);
}
