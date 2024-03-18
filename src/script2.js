// Cargar la imatge
let img;

function preload() {
    img = loadImage("images/imatge_color.png");
    canvas.style('cursor', 'default');

}

function setup() {
    // Obtener el elemento div con id "lienzo"
    let lienzoDiv = select("#lienzo");

    
    // Crear un lienzo dentro del div
    let canvas = createCanvas(img.width, img.height);
    // Adjuntar el lienzo al div
    canvas.parent(lienzoDiv);
    // Dibuja la imagen en el lienzo
    image(img, 0, 0);

    // Obtener los niveles RGB del píxel (50, 80)
    let pixelColor = get(50, 80);

    // Mostrar los niveles RGB en la página web
    let rgbValuesDiv = select("#rgb-values");
    rgbValuesDiv.html(
        `R: ${pixelColor[0]}, G: ${pixelColor[1]}, B: ${pixelColor[2]}`
    );

    // Agregar un evento para detectar cuando el usuario pasa el puntero sobre la imagen
    canvas.mouseMoved(getPixelColor);

}

function getPixelColor() {
    // Obtener las coordenadas del píxel sobre el que se encuentra el puntero
    let x = mouseX;
    let y = mouseY;

    // Truncar las coordenadas a solo tres números antes del punto decimal
    let truncatedX = Math.floor(x);
    let truncatedY = Math.floor(y);
    
    // Obtener los niveles RGB del píxel en las coordenadas (x, y)
    let pixelColor = get(x, y);

    // Mostrar las coordenadas y los niveles RGB en la página web
    let infoDiv = select('#info');
    infoDiv.html(`Coordenadas del píxel: (${truncatedX}, ${truncatedY})<br>RGB: ${pixelColor[0]}, ${pixelColor[1]}, ${pixelColor[2]}`);

    // Mostrar el color
    let rgbColorview = select("#color-box");
    rgbColorview.style('background-color', `rgb(${pixelColor[0]}, ${pixelColor[1]}, ${pixelColor[2]})`);
    select('body').style('cursor', 'crosshair');


}