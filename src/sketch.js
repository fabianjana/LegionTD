function preload() {
    grass = loadImage('textures/grass.png');
    tree = loadImage('textures/tree.png');
    cat = loadImage('textures/cat.jpg');
    impact = loadFont('fonts/impact.ttf');
}

function setup() {
    createCanvas(700, 700, WEBGL);
    mapX = 0;
    mapY = 0;
    camX = 0;
    camY = 0;
    camZ = 1000;
}

function draw() {
    background(135,206,235);
    camera(camX, camY, camZ, 0, 0, 0, 0, 1, 0);

    drawMap();
}

function drawMap() {
    translate(mapX, mapY);
    push();
    noStroke();
    fill(0,125,0);
    texture(grass);
    plane(4000, 3000);
    translate(-1000, 1900);
    plane(1000, 800);
    translate(2000, 0);
    plane(1000, 800);
    pop();

    push();
    strokeWeight(5);
    fill(125,0,0);
    translate(-1950, 0, 25);
    box(100,3000,50);
    translate(1950, 0, 0);
    box(200,3000,50);
    translate(1950, 0, 0);
    box(100,3000,50);
    pop();

    push();
    strokeWeight(5);
    fill(200);
    translate(-1000,-850,25);
    box(1000,1300,50);
    translate(-325,1700,0);
    box(350,1300,50);
    translate(650,0,0);
    box(350,1300,50);
    translate(1350,0,0);
    box(350,1300,50);
    translate(650,0,0);
    box(350,1300,50);
    translate(-325,-1700,0);
    texture(cat);
    box(1000,1300,50);
    pop();

    push();
    texture(tree);
    noStroke();
    translate(-1000,-1350,150);
    rotateX(90);
    cone(100,200,24,1);
    pop();

    fill(0);
    textFont(impact);
    textSize(50);
    text("camX: " + mapX +
        "\ncamY: " + mapY +
        "\ncamZ: " + camZ, 100, 0);
}

function mouseWheel(event) {
    if ((camZ >= 500 || event.delta > 0) &&
        (camZ <= 3500 || event.delta < 0)) {
        camZ += event.delta;
        if (camZ < 400) camZ = 400;
        if (camZ > 3600) camZ = 3600;
    }
}

function mouseDragged() {
    if (mouseButton === RIGHT) {
        mapX += movedX*camZ/3000;
        mapY += movedY*camZ/2000;
        if (mapX > 3000) mapX = 3000;
        if (mapX < -3000) mapX = -3000;
        if (mapY > 2000) mapY = 2000;
        if (mapY < -2000) mapY = -2000;
    }
    if (mouseButton === LEFT) {
        camX += movedX;
        camY += movedY;
    }
    return false;
}