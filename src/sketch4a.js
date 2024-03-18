// Variable per emmagatzemar la imatge original
let img;

// Variables per al tamany original de la imatge
let originalWidth;
let originalHeight;

function preload() {
    // Carregar la imatge abans que comenci el programa
    img = loadImage('imatges/imatge_color.png');
}

function setup() {
    // Crear un canvas del tamany de la finestra del navegador
    createCanvas(windowWidth, windowHeight);
    // Col·locar la imatge al centre del canvas
    imageMode(CENTER);
    // Emmagatzemar el tamany original de la imatge
    originalWidth = img.width;
    originalHeight = img.height;
    // Dibuixar la imatge al canvas
    drawImage();
}

function drawImage() {
    // Netejar el canvas
    clear();
    // Dibuixar la imatge al centre del canvas amb el seu tamany original
    image(img, width / 2, height / 2, originalWidth, originalHeight);
}

function mouseClicked() {
    // Generar valors aleatoris per a les transformacions
    let newX = random(width);
    let newY = random(height);
    let rotation = random(TWO_PI);
    let scaleFactor = random(0.5, 2);

    // Aplicar les transformacions a la imatge
    push();
    translate(newX, newY);
    rotate(rotation);
    scale(scaleFactor);

    // Dibuixar la imatge al canvas
    drawImage();
    pop();
}
