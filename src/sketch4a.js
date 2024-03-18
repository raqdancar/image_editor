// Variable para almacenar la imagen original
let img;

// Variables para el tamaño original de la imagen
let originalWidth;
let originalHeight;

function preload() {
    // Cargar la imagen antes de que comience el programa
    img = loadImage('images/imatge_color.png');
}

function setup() {
    // Crear un lienzo del tamaño de la ventana del navegador
    createCanvas(windowWidth, windowHeight);
    // Colocar la imagen en el centro del lienzo
    imageMode(CENTER);
    // Almacenar el tamaño original de la imagen
    originalWidth = img.width;
    originalHeight = img.height;
    // Dibujar la imagen en el lienzo
    drawImage();
}

function drawImage() {
    // Limpiar el lienzo
    clear();
    // Dibujar la imagen en el centro del lienzo con su tamaño original
    image(img, width / 2, height / 2, originalWidth, originalHeight);
}

function mouseClicked() {
    // Generar valores aleatorios para las transformaciones
    let newX = random(width);
    let newY = random(height);
    let rotation = random(TWO_PI);
    let scaleFactor = random(0.5, 2);

    // Aplicar las transformaciones a la imagen
    push();
    translate(newX, newY);
    rotate(rotation);
    scale(scaleFactor);

    // Dibujar la imagen en el lienzo
    drawImage();
    pop();
}
