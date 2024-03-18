// Carregar la imatge
let img;

function preload() {
    img = loadImage("imatges/imatge_color.png");
    canvas.style('cursor', 'default');
}

function setup() {
    // Obtenir l'element div amb id "lienzo"
    let lienzoDiv = select("#lienzo");

    // Crear un canvas dins del div
    let canvas = createCanvas(img.width, img.height);
    // Adjuntar el canvas al div
    canvas.parent(lienzoDiv);
    // Dibuixar la imatge al canvas
    image(img, 0, 0);

    // Obtindre els nivells RGB del píxel (50, 80)
    let pixelColor = get(50, 80);

    // Mostrar els nivells RGB a la pàgina web
    let rgbValuesDiv = select("#rgb-values");
    rgbValuesDiv.html(
        `R: ${pixelColor[0]}, G: ${pixelColor[1]}, B: ${pixelColor[2]}`
    );

    // Afegir un esdeveniment per a detectar quan l'usuari mou el cursor sobre la imatge
    canvas.mouseMoved(getPixelColor);
}

function getPixelColor() {
    // Obtindre les coordenades del píxel sobre el qual es troba el cursor
    let x = mouseX;
    let y = mouseY;

    // Arrodonir les coordenades a només tres dígits abans del punt decimal
    let truncatedX = Math.floor(x);
    let truncatedY = Math.floor(y);

    // Obtindre els nivells RGB del píxel en les coordenades (x, y)
    let pixelColor = get(x, y);

    // Mostrar les coordenades i els nivells RGB a la pàgina web
    let infoDiv = select('#info');
    infoDiv.html(`Coordenades del píxel: (${truncatedX}, ${truncatedY})<br>RGB: ${pixelColor[0]}, ${pixelColor[1]}, ${pixelColor[2]}`);

    // Mostrar el color
    let rgbColorview = select("#color-box");
    rgbColorview.style('background-color', `rgb(${pixelColor[0]}, ${pixelColor[1]}, ${pixelColor[2]})`);
    select('body').style('cursor', 'crosshair');
}
