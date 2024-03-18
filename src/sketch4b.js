// Variable per emmagatzemar la imatge original
let img;

// Variables per a les dimensions originals de la imatge
let originalWidth;
let originalHeight;

// Variables per a les dimensions actuals de la imatge
let currentWidth;
let currentHeight;

function preload() {
    // Carregar la imatge abans que comenci el programa
    img = loadImage('imatges/imatge_color.png');
}

function setup() {
    // Crear un lienç del tamany de la finestra del navegador
    createCanvas(windowWidth, windowHeight);
    // Col·locar la imatge al centre del lienç
    imageMode(CENTER);
    // Emmagatzemar les dimensions originals de la imatge
    originalWidth = img.width;
    originalHeight = img.height;
    // Establir les dimensions actuals de la imatge
    currentWidth = originalWidth;
    currentHeight = originalHeight;
    // Dibuixar la imatge en el lienç
    dibuixarImatge();
}

function dibuixarImatge() {
    // Netejar el lienç
    clear();
    // Dibuixar la imatge al centre del lienç amb les seves dimensions actuals
    image(img, width / 2, height / 2, currentWidth, currentHeight);
}

function mouseClicked() {
    // Generar valors aleatoris per a les transformacions
    let newX = random(width);
    let newY = random(height);
    let rotació = random(TWO_PI);
    let factorEscalat = random(0.5, 2);

    // Aplicar les transformacions a la imatge
    push();
    translate(newX, newY);
    rotate(rotació);
    scale(factorEscalat);

    // Actualitzar les dimensions actuals de la imatge per assegurar que es mostri completament
    currentWidth = originalWidth * factorEscalat;
    currentHeight = originalHeight * factorEscalat;

    // Dibuixar la imatge en el lienç
    dibuixarImatge();
    pop();
}