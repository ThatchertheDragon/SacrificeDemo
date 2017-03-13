//Player
var player_step;
var playerR;
var playerL;
var playerX;
var playerY;
var player;
var player_animation;
//Pomegranates
var pomHeld;
var pom;
var pomX;
var pomY;
//Temples
var where;
var room;
//Hermes
var hermesFly1;
var hFly1_animation;
var hermesFly2;
var hFly2_animation;
var hermesFloat;
var hFloat_animation;
var exposition;
var expoEnd;
//Athena
var oliveTree;
var oliveTree_animation;
var offerA;
var oliveSeed;
var oliveX;
var oliveY;
var oliveHeld;
//Zeus
var torchL;
var torchR;
var torchR_animation;
var torchL_animation;
var offerZ;
//Poseidon
var goatDeath;
var goatDeath_animation;
var offerP;
//Hades
var door;
var door_animation;
var offerH;
var underworld;
var cerberus;
var cerberus_animation;
//Hades Warning
var hadesUp;
var hadesUp_animation;
var hadesStill;
var hadesDown;
var hadesDown_animation;
var hadesAct;
var warning;
var warningEnd;
//Apollo
var libations;
var libations_animation;
var offerAp;
//Baby
var babe;
var babeX;
var babeY;
var cradle;
var babeHeld;
var babyDeath;
var babyDeath_animation;
//Goat
var goat;
var goatStill;
var goatL;
var goat_animation;
var goatX;
var goatY;
var goat_step;
var goatHeld;
//Wine
var wine;
var wineX;
var wineY;
var wineHeld;
//Game Over
var gameOverBack;
var gameOverBack_animation;
var gameOverFront;
var gameOverFront_animation;
var gameOver;
//Endings
var end1;
var ending1;
var ending2;
var end2;
var endText;
var reveal;
var endInst;

function preload() {
    //Hermes
    hermesFly1 = loadSpriteSheet("Sacrifice/HermesFly1.png", 500, 500, 12);
    hFly1_animation = loadAnimation(hermesFly1);
    hFly1_animation.frameDelay = 5;
    hermesFloat = loadSpriteSheet("Sacrifice/HermesFloat.png", 500, 500, 6);
    hFloat_animation = loadAnimation(hermesFloat);
    hFloat_animation.frameDelay = 10;
    hermesFly2 = loadSpriteSheet("Sacrifice/HermesFly2.png", 500, 500, 15);
    hFly2_animation = loadAnimation(hermesFly2);
    hFly2_animation.frameDelay = 5;
    //Hades Warning
    hadesUp = loadSpriteSheet("Sacrifice/HadesUp.png", 200, 200, 21);
    hadesUp_animation = loadAnimation(hadesUp);
    hadesUp_animation.frameDelay = 5;
    hadesDown = loadSpriteSheet("Sacrifice/HadesDown.png", 200, 200, 23);
    hadesDown_animation = loadAnimation(hadesDown);
    hadesDown_animation.frameDelay = 5;
    hadesStill = loadImage("Sacrifice/HadesPlain.png", 200, 200);
    //Pomegranates
    pom = loadImage("Sacrifice/Pomegranates.png", 32, 32);
    //Baby
    babe = loadImage("Sacrifice/Baby.png", 64, 64);
    cradle = loadImage("Sacrifice/Cradle.png", 200, 200);
    babyDeath = loadSpriteSheet("Sacrifice/BabyDeath.png", 200, 200, 12);
    babyDeath_animation = loadAnimation(babyDeath);
    babyDeath_animation.frameDelay = 10;
    //Wine
    wine = loadImage("Sacrifice/Liquid.png", 75, 75);
    //Goat
    goat = loadSpriteSheet("Sacrifice/GoatIP.png", 75, 75, 4);
    goatL = loadSpriteSheet("Sacrifice/GoatLIP.png", 75, 75, 4);
    goatStill = loadImage("Sacrifice/Goat.gif", 75, 75);
    goat_animation = loadAnimation(goat);
    goat_animation.frameDelay = 10;
    //Temple
    where = loadImage("Sacrifice/AthenianHouse.png", 500, 500);
    //Zeus
    torchL = loadSpriteSheet("Sacrifice/ZeusTorch.png", 125, 125, 2);
    torchL_animation = loadAnimation(torchL);
    torchL_animation.frameDelay = 23;
    torchR = loadSpriteSheet("Sacrifice/ZeusTorchR.png", 125, 125, 2);
    torchR_animation = loadAnimation(torchR);
    torchR_animation.frameDelay = 20;
    //Apollo
    libations = loadSpriteSheet("Sacrifice/Libations.png", 90, 90, 8);
    libations_animation = loadAnimation(libations);
    libations_animation.frameDelay = 20;
    //Athena
    oliveTree = loadSpriteSheet("Sacrifice/AthenaTreeIP.png", 200, 200, 13);
    oliveTree_animation = loadAnimation(oliveTree);
    oliveTree_animation.frameDelay = 10;
    oliveSeed = loadImage("Sacrifice/OliveSeed.png", 25, 25)
        //Poseidon
    goatDeath = loadSpriteSheet("Sacrifice/GoatDeath.png", 200, 200, 15);
    goatDeath_animation = loadAnimation(goatDeath);
    goatDeath_animation.frameDelay = 10;
    //Hades
    door = loadSpriteSheet("Sacrifice/HadesDoor.png", 300, 300, 14);
    door_animation = loadAnimation(door);
    door_animation.frameDelay = 10;
    cerberus = loadSpriteSheet("Sacrifice/CerberusHead.png", 300, 300, 3);
    cerberus_animation = loadAnimation(cerberus);
    cerberus_animation.frameDelay = 20;
    //Player
    player = loadImage("Sacrifice/AthenianStand.png", 150, 150);
    playerR = loadSpriteSheet("Sacrifice/AthenianRIP.png", 150, 150, 3);
    playerL = loadSpriteSheet("Sacrifice/AthenianLIP.png", 150, 150, 3);
    player_animation = loadAnimation(player);
    player_animation.frameDelay = 10;
    //Game Over
    gameOverBack = loadSpriteSheet("Sacrifice/GameOverFull.png", 500, 500, 21);
    gameOverBack_animation = loadAnimation(gameOverBack);
    gameOverBack_animation.frameDelay = 10;
    //Endings
    end1 = loadImage("Sacrifice/TheEnd1.png", 500, 500);
    end2 = loadImage("Sacrifice/TheEnd2.png", 500, 500);
}
//Move Player
function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        player_step = -3;
        player_animation = loadAnimation(playerL);
        player_animation.frameDelay = 10;
    }
    else if (keyCode == RIGHT_ARROW) {
        player_step = 3;
        player_animation = loadAnimation(playerR);
        player_animation.frameDelay = 10;
    }
    else if (keyCode == ENTER && room == 99 && expoEnd == false && exposition == 1) {
        exposition = 2;
    }
    else if (keyCode == ENTER && room == 99 && expoEnd == false && exposition == 2) {
        exposition = 3;
    }
    else if (keyCode == ENTER && room == 99 && expoEnd == false && exposition == 3) {
        exposition = 4;
    }
    else if (keyCode == ENTER && room == 99 && expoEnd == false && exposition == 4) {
        exposition = 5;
    }
    else if (keyCode == ENTER && room == 0 && warningEnd == false && warning == 1){
        warning = 2;
    }
    else if (keyCode == ENTER && room == 0 && warningEnd == false && warning == 2){
        warning = 3;
    }
    else if (keyCode == ENTER && room == 0 && warningEnd == false && warning == 3){
        warning = 4;
    }
    else if (keyCode == ENTER && room == 0 && warningEnd == false && warning == 4){
        warning = 5;
    }
    else if (keyCode == ENTER && room == 10 && reveal == 1){
        reveal = 2;
    }
    else if (keyCode == ENTER && room == 10 && reveal == 2){
        reveal = 3;
    }
    else if (keyCode == ENTER && room == 10 && reveal == 3){
        reveal = 4;
    }
    else if (keyCode == ENTER && room == 10 && reveal == 4){
        reveal = 5;
    }
    else if (keyCode == ENTER && room == 10 && reveal == 5){
        reveal = 6;
    }
    else if (keyCode == ENTER && room == 10 && reveal == 6){
        reveal = 7;
    }
}

function keyReleased() {
    player_step = 0;
    player_animation = loadAnimation(player);
    player_animation.frameDelay = 10;
}

function setup() {
    createCanvas(500, 500);
    //Room
    room = 99;
    //Hermes
    exposition = 1;
    expoEnd = false;
    //Athena
    offerA = false;
    oliveX = 25;
    oliveY = 415;
    oliveHeld = false;
    //Poseidon
    offerP = false;
    //Goat
    goatX = 0;
    goatY = 400;
    goatHeld = false;
    goat_step = 1;
    //Pomegranates
    pomHeld = false;
    pomX = 400;
    pomY = 400;
    //Baby
    babeX = 53;
    babeY = 361;
    babeHeld = false;
    //Wine
    wineHeld = false;
    wineX = 400;
    wineY = 370;
    //Player
    player_step = 0;
    playerX = 190;
    playerY = 350;
    //Hades
    offerH = false;
    //Hades Warning
    hadesAct = hadesUp_animation;
    warning = 1;
    warningEnd = false;
    //Zeus
    offerZ = false;
    //Apollo
    offerAp = false;
    //Game Over
    gameOver = false;
    //Endings
    reveal = 1;
}

function draw() {
    background(where);
    //Ending 1
    if (offerA == true && offerP == true && offerAp == true && offerZ == true && gameOver == false) {
        textSize(20);
        fill(0);
        text("The Gods have been sated.", 125,100);
        text("Return to your home.", 150,120);
        textSize(12);
    }
    if (offerA == true && offerP == true && offerAp == true && offerZ == true && room == 99) {
        gameOver = true;
        where = image(end1);
    }
    //Ending 2
    if (offerH == true && room == 10 && babeHeld == false) {
        fill(255, 0, 0);
        textSize(20);
        text("Bring the Child", 180, 100);
        textSize(12);
    }
    if (offerH == true && room == 10 && babeHeld == true && reveal == 1) {
        fill(255, 0, 0);
        noStroke();
        textSize(25);
        text("Your child was fathered by Zeus,", 70, 40);
        text("disguised as your husband.", 100, 63);
        textSize(12);
        fill(0);
    }
    if (offerH == true && room == 10 && babeHeld == true && reveal == 2) {
        fill(255, 0, 0);
        noStroke();
        textSize(25);
        text("Your daughter could become powerful", 40, 40);
        text("enough to overthrow the Gods.", 75, 63);
        textSize(12);
        fill(0);
    }
    if (offerH == true && room == 10 && babeHeld == true && reveal == 3) {
        fill(255, 0, 0);
        noStroke();
        textSize(25);
        text("That is why Zeus wants her dead.", 60, 40);
        textSize(12);
        fill(0);
    }
    if (offerH == true && room == 10 && babeHeld == true && reveal == 4) {
        fill(255, 0, 0);
        noStroke();
        textSize(25);
        text("She is a threat to him",125,40);
        text("and will never be safe as long as he lives.",20, 63);
        textSize(12);
        fill(0);
    }
    if (offerH == true && room == 10 && babeHeld == true && reveal == 5) {
        fill(255, 0, 0);
        noStroke();
        textSize(25);
        text("If raised correctly,", 150,40);
        text("she could overthrow the Gods", 75,63);
        text("that would kill you both.", 120, 86);
        //text("Join me, I will help you raise her, and together we can rule this world.", 1, 100);
        textSize(12);
        fill(0);
    }
    if (offerH == true && room == 10 && babeHeld == true && reveal == 6) {
        fill(255, 0, 0);
        noStroke();
        textSize(25);
        text("Join me,", 200,40);
        text("I will help you raise her,", 120,63);
        text("and together we will rule this world.", 50, 86);
        fill(255);
        textSize(12);
        fill(0);
    }
    if (offerH == true && room == 10 && babeHeld == true && reveal == 7) {
        fill(255, 0, 0);
        noStroke();
        textSize(30);
        text("What do you say?", 125, 80);
        fill(255);
        textSize(15);
        text("Shift for Yes, Backspace for No",135,125);
        textSize(12);
        fill(0);
    }
    if (keyCode == SHIFT && room == 10 && babeHeld == true && reveal == 7) {
        image(end2, 0, 0);
        gameOver = true;
    }
    if (keyCode == BACKSPACE && room == 10 && babeHeld == true && reveal == 7) {
        animation(gameOverBack_animation,250,250);
        gameOver = true;
    }
    //Game Over Olive
    if (keyCode == ENTER && playerX >= 215 && playerX <= 290 && oliveHeld == true && room == 5 || keyCode == ENTER && playerX >= 215 && playerX <= 290 && oliveHeld == true && room == 6 || keyCode == ENTER && playerX >= 215 && playerX <= 290 && oliveHeld == true && room == 8 || keyCode == ENTER && playerX >= 215 && playerX <= 290 && oliveHeld == true && room == 9) {
        animation(gameOverBack_animation, 250, 250);
        gameOver = true;
    }
    //Game Over Goat
    if (keyCode == ENTER && playerX >= 215 && playerX <= 290 && goatHeld == true && room == 6 || keyCode == ENTER && playerX >= 215 && playerX <= 290 && goatHeld == true && room == 7 || keyCode == ENTER && playerX >= 215 && playerX <= 290 && goatHeld == true && room == 8 || keyCode == ENTER && playerX >= 215 && playerX <= 290 && goatHeld == true && room == 9) {
        animation(gameOverBack_animation, 250, 250);
        gameOver = true;
    }
    //Game Over Pomegranantes
    if (keyCode == ENTER && playerX >= 215 && playerX <= 290 && pomHeld == true && room == 5 || keyCode == ENTER && playerX >= 215 && playerX <= 290 && pomHeld == true && room == 6 || keyCode == ENTER && playerX >= 215 && playerX <= 290 && pomHeld == true && room == 7 || keyCode == ENTER && playerX >= 215 && playerX <= 290 && pomHeld == true && room == 8) {
        animation(gameOverBack_animation, 250, 250);
        gameOver = true;
    }
    //Game Over Baby
    if (keyCode == ENTER && playerX >= 215 && playerX <= 290 && babeHeld == true && room == 5 || keyCode == ENTER && playerX >= 215 && playerX <= 290 && babeHeld == true && room == 7 || keyCode == ENTER && playerX >= 215 && playerX <= 290 && babeHeld == true && room == 8 || keyCode == ENTER && playerX >= 215 && playerX <= 290 && babeHeld == true && room == 9) {
        animation(gameOverBack_animation, 250, 250);
        gameOver = true;
    }
    //Game Over Wine
    if (keyCode == ENTER && playerX >= 215 && playerX <= 290 && wineHeld == true && room == 5 || keyCode == ENTER && playerX >= 215 && playerX <= 290 && wineHeld == true && room == 6 || keyCode == ENTER && playerX >= 215 && playerX <= 290 && wineHeld == true && room == 7 || keyCode == ENTER && playerX >= 215 && playerX <= 290 && wineHeld == true && room == 9) {
        animation(gameOverBack_animation, 250, 250);
        gameOver = true;
    }
    //Hermes1 Freeze Frame
    if (hFly1_animation.getFrame() == hFly1_animation.getLastFrame()) hFly1_animation.changeFrame(10);
    //Hermes2 Freeze Frame
    if (hFly2_animation.getFrame() == hFly2_animation.getLastFrame()) hFly2_animation.changeFrame(13);
    //HadesUp Freeze Frame
    if (hadesUp_animation.getFrame() == hadesUp_animation.getLastFrame()) hadesUp_animation.changeFrame(19);
    //HadesDown Freeze Frame
    if (hadesDown_animation.getFrame() == hadesDown_animation.getLastFrame()) hadesDown_animation.changeFrame(21);
    //Hermes2 Freeze Frame
    if (hFly2_animation.getFrame() == hFly2_animation.getLastFrame()) hFly2_animation.changeFrame(13);
    //Game Over Freeze Frame
    if (gameOverBack_animation.getFrame() == gameOverBack_animation.getLastFrame()) gameOverback_animation.changeFrame(21);
    //Olive Tree Freeze Frame
    if (oliveTree_animation.getFrame() == oliveTree_animation.getLastFrame()) oliveTree_animation.changeFrame(11);
    //Goat Death Freeze Frame
    if (goatDeath_animation.getFrame() == goatDeath_animation.getLastFrame()) goatDeath_animation.changeFrame(13);
    //Libations Freeze Frame
    if (libations_animation.getFrame() == libations_animation.getLastFrame()) libations_animation.changeFrame(6);
    //Door to the Underworld Freeze Frame
    if (door_animation.getFrame() == door_animation.getLastFrame()) door_animation.changeFrame(12);
    //Door to the Underworld Freeze Frame
    if (babyDeath_animation.getFrame() == babyDeath_animation.getLastFrame()) babyDeath_animation.changeFrame(10);
    //Hermes Fly and Instructions
    if (room == 99 && expoEnd == false) {
        animation(hFly1_animation, 250, 250);
    }
    
    if (frameCount >= 50 && room == 99 && expoEnd == false) {
        animation(hFloat_animation, 250, 250);
    }
    if (exposition == 1 && expoEnd == false && room == 99) {
        fill(255);
        rect(50, 50, 250, 100);
        noStroke();
        fill(0);
        text("Good citizen, it is I, your God Hermes!", 53, 70);
        text("I come bearing a terrible message.", 53, 83);
        text("The Gods are displeased with your lack of", 53, 96);
        text("devotion. They have plans to destroy your city!", 53, 109);
        fill(150);
        text("Press Enter to Continue", 160, 145);
    }
    if (exposition == 2 && expoEnd == false && room == 99) {
        fill(255);
        rect(50, 50, 250, 100);
        noStroke();
        fill(0);
        text("Unless you make sacrifices to the four patron", 51, 70);
        text("Gods of your city, Apollo, Athena, Poseidon,", 51, 83);
        text("and Zeus, all will perish. But beware, make the", 51, 96);
        text("right sacrifices or the Gods will destroy you!", 52, 109);
        fill(150);
        text("Press Enter to Continue", 160, 145);
    }
    if (exposition == 3 && expoEnd == false && room == 99) {
        fill(255);
        rect(50, 50, 250, 100);
        noStroke();
        fill(0);
        text("Gather items in your city and offer them to the", 53, 70);
        text("gods according to the clues written on the", 53, 83);
        text("temple columns. Press up and down arrows", 53, 96);
        text("near doors to enter and exit temples and side", 53, 109);
        text("arrows to move.", 53, 120);
        fill(150);
        text("Press Enter to Continue", 160, 145);
    }
    if (exposition == 4 && expoEnd == false && room == 99) {
        fill(255);
        rect(50, 50, 250, 100);
        noStroke();
        fill(0);
        text("The fate of your city rests with you, citizen!", 53, 70);
        text("I wish you luck.", 53, 83);
        fill(150);
        text("Press Enter to Continue", 160, 145);
    }
    if (exposition == 5 && expoEnd == false) {
        expoEnd = true;
    }
    if (expoEnd == true) {
        animation(hFly2_animation, 250, 250);
    }
    //Hades Warning Animation
    if (room == 0 && warningEnd == false) {
        animation(hadesAct, 400, 340);
    }
    if (room == 0 && warning == 1 && warningEnd == false) {
        fill(255);
        rect(150, 100, 250, 100);
        noStroke();
        fill(255, 0, 0);
        textSize(45);
        text("Halt Mortal!", 153, 150);
        textSize(12);
        fill(150);
        text("Press Enter to Continue", 270, 195);
    }
    if (room == 0 && warning == 2 && warningEnd == false) {
        fill(255);
        rect(150, 100, 250, 100);
        noStroke();
        fill(0)
        text("Do not trust my brother, Zeus, he cares only", 153, 120);
        text("for himself, no amount of sacrifices will ever", 153, 130);
        text("satisfiy him. I offer you another choice.", 153, 140);
        fill(150);
        text("Press Enter to Continue", 270, 195);
    }
    if (room == 0 && warning == 3 && warningEnd == false) {
        fill(255);
        rect(150, 100, 250, 100);
        noStroke();
        fill(0)
        text("My temple is to the East, outside the city,", 153, 120);
        text("bring me a sacrifice and I shall open the door", 153, 130);
        text("to my kingdom. Travel there with your child", 153, 140);
        text("and I shall protect you both.", 153, 150);
        fill(150);
        text("Press Enter to Continue", 270, 195);
    }
    if (room == 0 && warning == 4 && warningEnd == false) {
        fill(255);
        rect(150, 100, 250, 100);
        noStroke();
        fill(0)
        text("If you refuse, Zeus will take everything from", 153, 120);
        text("you, one way or another, so if you care for", 153, 130);
        text("your child, your city, or yourself,", 153, 140);
        text("you will come to me.", 153, 150);
        fill(150);
        text("Press Enter to Continue", 240, 195);
    }
    if (room == 0 && warning == 5 && warningEnd == false) {
        warningEnd = true;
    }
    if (warningEnd == true && room == 0) {
        hadesAct = hadesDown_animation;
        animation(hadesAct, 400, 340);
    }
    //Try to Stop You Text
    if (offerH == true && babeHeld == true && room == 4) {
        textSize(20);
        fill(0);
        text("Turn back Mortal", 125,100);
        textSize(12);
    }
    if (offerH == true && babeHeld == true && room == 11) {
        textSize(20);
        fill(0);
        text("Hades decieves you.", 125,100);
        textSize(12);
    }
    if (offerH == true && babeHeld == true && room == 12) {
        textSize(20);
        fill(0);
        text("This path leads to your doom.", 125,100);
        textSize(12);
    }
    if (offerH == true && babeHeld == true && room == 13) {
        textSize(20);
        fill(0);
        text("Stop now before it is too late.", 125,100);
        textSize(12);
    }
    if (offerH == true && babeHeld == true && room == 14) {
        textSize(20);
        fill(0);
        text("You are choosing death.", 125,100);
        textSize(12);
    }
    //Apollo Offering Animation
    if (offerAp == true && room == 8 && gameOver == false) {
        animation(libations_animation, 232, 288);
    }
    //Athena Offering Animation
    if (offerA == true && room == 7 && gameOver == false) {
        animation(oliveTree_animation, 252, 325);
    }
    //Poseidon Offering Animation
    if (offerP == true && room == 5 && gameOver == false) {
        goatHeld = false;
        animation(goatDeath_animation, 252, 330);
    }
    //Hades Offering Animation
    if (offerH == true && room == 9 && gameOver == false) {
        pomHeld = false;
        animation(door_animation, 252, 145);
    }
    if (offerH == true && room == 9 && gameOver == false && pomHeld == false) {
        image(pom, 235, 285);
    }
    //Zeus Offering Animation
    if (offerZ == true && room == 6 && gameOver == false) {
        babeHeld = false;
        animation(babyDeath_animation, 252, 330);
    }
    //Cerberus Animation
    if (room == 10 && offerH == true && gameOver == false) {
        animation(cerberus_animation, 235, 280);
    }
    //Draw the Main Stuff
    if (gameOver == false) {
        noStroke();
        fill(0);
        text("Inventory", 10, 455);
        noFill();
        stroke(1);
        rect(1, 443, 70, 460);
        fill(0);
        noStroke();
        animation(player_animation, playerX, playerY);
        //Move Player
        playerX = playerX + player_step;
        //Move Goat
        goatX = goatX + goat_step;
    }
    //Moving Side to Side Rooms
    if (playerX > width && room == 99) {
        where = loadImage("Sacrifice/PoseidonTempleOut.png", 500, 500);
        room = 0;
        playerX = 10;
        playerY = 350;
    }
    if (playerX < 0 && room == 0) {
        where = loadImage("Sacrifice/AthenianHouse.png", 500, 500);
        playerX = 490;
        playerY = 350;
        room = 99;
    }
    if (playerX > width && room == 0) {
        where = loadImage("Sacrifice/ZeusTempleOut.png", 500, 500);
        room = 1;
        playerX = 10;
        playerY = 350;
    }
    if (playerX < 0 && room == 1) {
        where = loadImage("Sacrifice/PoseidonTempleOut.png", 500, 500);
        playerX = 490;
        playerY = 350;
        room = 0;
    }
    if (playerX > width && room == 1) {
        where = loadImage("Sacrifice/AthenaTempleOut.png", 500, 500);
        playerX = 10;
        playerY = 350;
        room = 2;
    }
    if (playerX < 0 && room == 2) {
        where = loadImage("Sacrifice/ZeusTempleOut.png", 500, 500);
        playerX = 490;
        playerY = 350;
        room = 1;
    }
    if (playerX > width && room == 2) {
        where = loadImage("Sacrifice/ApolloTempleOut.png", 500, 500);
        playerX = 10;
        playerY = 350;
        room = 3;
    }
    if (playerX < 0 && room == 3) {
        where = loadImage("Sacrifice/AthenaTempleOut.png", 500, 500);
        playerX = 490;
        playerY = 350;
        room = 2;
    }
    if (playerX > width && room == 3) {
        where = loadImage("Sacrifice/GreekCountry1.png", 500, 500);
        playerX = 10;
        playerY = 350;
        room = 4;
    }
    if (playerX < 0 && room == 4) {
        where = loadImage("Sacrifice/ApolloTempleOut.png", 500, 500);
        playerX = 490;
        playerY = 350;
        room = 3;
    }
    if (playerX > width && room == 4) {
        where = loadImage("Sacrifice/GreekCountry2.png", 500, 500);
        playerX = 10;
        playerY = 350;
        room = 11;
    }
    if (playerX < 0 && room == 11) {
        where = loadImage("Sacrifice/GreekCountry1.png", 500, 500);
        playerX = 490;
        playerY = 350;
        room = 4;
    }
    if (playerX > width && room == 11) {
        where = loadImage("Sacrifice/GreekCountry4.png", 500, 500);
        playerX = 10;
        playerY = 350;
        room = 12;
    }
    if (playerX < 0 && room == 12) {
        where = loadImage("Sacrifice/GreekCountry2.png", 500, 500);
        playerX = 490;
        playerY = 350;
        room = 11;
    }
    if (playerX > width && room == 12) {
        where = loadImage("Sacrifice/GreekCountry1.png", 500, 500);
        playerX = 10;
        playerY = 350;
        room = 13;
    }
    if (playerX < 0 && room == 13) {
        where = loadImage("Sacrifice/GreekCountry4.png", 500, 500);
        playerX = 490;
        playerY = 350;
        room = 12;
    }
    if (playerX > width && room == 13) {
        where = loadImage("Sacrifice/GreekCountry3.png", 500, 500);
        playerX = 10;
        playerY = 350;
        room = 14;
    }
    if (playerX < 0 && room == 14) {
        where = loadImage("Sacrifice/GreekCountry1.png", 500, 500);
        playerX = 490;
        playerY = 350;
        room = 13;
    }
    if (playerX > width && room == 14) {
        where = loadImage("Sacrifice/HadesTempleOut.png", 500, 500);
        playerX = 10;
        playerY = 350;
        room = 15;
    }
    if (playerX < 0 && room == 15) {
        where = loadImage("Sacrifice/GreekCountry1.png", 500, 500);
        playerX = 490;
        playerY = 350;
        room = 14;
    }
    //Zeus Temple Torches
    if (room == 6 && gameOver == false) {
        animation(torchL_animation, 62, 100);
        animation(torchR_animation, 438, 100);
    }
    //Make Things Stay in Inventory
    if (room == 99 && offerZ == false && gameOver == false) {
        image(cradle, 0, 297);
        image(babe, babeX, babeY);
    }
    if (room == 99 && offerZ == true && gameOver == false) {
        image(cradle, 0, 297);
    }
    if (room == 0 && babeHeld == true && gameOver == false) {
        image(babe, babeX, babeY);
    }
    if (room == 1 && babeHeld == true && gameOver == false) {
        image(babe, babeX, babeY);
    }
    if (room == 2 && babeHeld == true && gameOver == false) {
        image(babe, babeX, babeY);
    }
    if (room == 3 && babeHeld == true && gameOver == false) {
        image(babe, babeX, babeY);
    }
    if (room == 4 && babeHeld == true && gameOver == false) {
        image(babe, babeX, babeY);
    }
    if (room == 5 && babeHeld == true && gameOver == false) {
        image(babe, babeX, babeY);
    }
    if (room == 6 && babeHeld == true && gameOver == false) {
        image(babe, babeX, babeY);
    }
    if (room == 7 && babeHeld == true && gameOver == false) {
        image(babe, babeX, babeY);
    }
    if (room == 8 && babeHeld == true && gameOver == false) {
        image(babe, babeX, babeY);
    }
    if (room == 9 && babeHeld == true && gameOver == false) {
        image(babe, babeX, babeY);
    }
    if (room == 10 && babeHeld == true && gameOver == false && ending2 == false) {
        image(babe, babeX, babeY);
    }
    if (room == 11 && babeHeld == true && gameOver == false) {
        image(babe, babeX, babeY);
    }
    if (room == 12 && babeHeld == true && gameOver == false) {
        image(babe, babeX, babeY);
    }
    if (room == 13 && babeHeld == true && gameOver == false) {
        image(babe, babeX, babeY);
    }
    if (room == 14 && babeHeld == true && gameOver == false) {
        image(babe, babeX, babeY);
    }
    if (room == 15 && babeHeld == true && gameOver == false) {
        image(babe, babeX, babeY);
    }
    if (room == 6 && wineHeld == false && offerAp == false && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 99 && wineHeld == true && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 10 && wineHeld == true && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 11 && wineHeld == true && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 12 && wineHeld == true && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 13 && wineHeld == true && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 14 && wineHeld == true && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 15 && wineHeld == true && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 0 && wineHeld == true && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 1 && wineHeld == true && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 2 && wineHeld == true && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 3 && wineHeld == true && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 4 && wineHeld == true && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 5 && wineHeld == true && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 6 && wineHeld == true && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 7 && wineHeld == true && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 8 && wineHeld == true && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 9 && wineHeld == true && gameOver == false) {
        image(wine, wineX, wineY);
    }
    if (room == 7 && offerP == false && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 8 && offerA == false && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    if (room == 1 && goatHeld == true && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 99 && goatHeld == true && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 10 && goatHeld == true && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 11 && goatHeld == true && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 12 && goatHeld == true && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 13 && goatHeld == true && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 14 && goatHeld == true && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 15 && goatHeld == true && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 2 && goatHeld == true && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 0 && goatHeld == true && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 3 && goatHeld == true && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 0 && oliveHeld == true && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    if (room == 1 && oliveHeld == true && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    if (room == 99 && oliveHeld == true && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    if (room == 10 && oliveHeld == true && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    if (room == 11 && oliveHeld == true && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    if (room == 12 && oliveHeld == true && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    if (room == 13 && oliveHeld == true && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    if (room == 14 && oliveHeld == true && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    if (room == 15 && oliveHeld == true && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    if (room == 2 && oliveHeld == true && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    if (room == 3 && oliveHeld == true && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    if (room == 5 && offerH == false && gameOver == false) {
        image(pom, pomX, pomY);
    }
    if (room == 1 && pomHeld == true && gameOver == false) {
        image(pom, pomX, pomY);
    }
    if (room == 2 && pomHeld == true && gameOver == false) {
        image(pom, pomX, pomY);
    }
    if (room == 3 && pomHeld == true && gameOver == false) {
        image(pom, pomX, pomY);
    }
    if (room == 4 && pomHeld == true && gameOver == false) {
        image(pom, pomX, pomY);
    }
    if (room == 4 && goatHeld == true && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 4 && oliveHeld == true && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    if (room == 0 && pomHeld == true && gameOver == false) {
        image(pom, pomX, pomY);
    }
    if (room == 99 && pomHeld == true && gameOver == false) {
        image(pom, pomX, pomY);
    }
    if (room == 10 && pomHeld == true && gameOver == false) {
        image(pom, pomX, pomY);
    }
    if (room == 11 && pomHeld == true && gameOver == false) {
        image(pom, pomX, pomY);
    }
    if (room == 12 && pomHeld == true && gameOver == false) {
        image(pom, pomX, pomY);
    }
    if (room == 13 && pomHeld == true && gameOver == false) {
        image(pom, pomX, pomY);
    }
    if (room == 14 && pomHeld == true && gameOver == false) {
        image(pom, pomX, pomY);
    }
    if (room == 15 && pomHeld == true && gameOver == false) {
        image(pom, pomX, pomY);
    }
    if (room == 5 && goatHeld == true && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 5 && oliveHeld == true && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    if (room == 6 && pomHeld == true && gameOver == false) {
        image(pom, pomX, pomY);
    }
    if (room == 6 && goatHeld == true && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 6 && oliveHeld == true && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    if (room == 7 && pomHeld == true && gameOver == false) {
        image(pom, pomX, pomY);
    }
    if (room == 7 && goatHeld == true && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 7 && oliveHeld == true && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    if (room == 8 && pomHeld == true && gameOver == false) {
        image(pom, pomX, pomY);
    }
    if (room == 8 && goatHeld == true && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 8 && oliveHeld == true && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    if (room == 9 && pomHeld == true && gameOver == false) {
        image(pom, pomX, pomY);
    }
    if (room == 9 && goatHeld == true && gameOver == false) {
        animation(goat_animation, goatX, goatY);
    }
    if (room == 9 && oliveHeld == true && gameOver == false) {
        image(oliveSeed, oliveX, oliveY);
    }
    //Goat Walks Back and Forth
    if (goatX == 490) {
        goat_animation = loadAnimation(goatL);
        goat_step = -1;
        goat_animation.frameDelay = 10;
    }
    if (goatX == 10) {
        goat_animation = loadAnimation(goat);
        goat_step = 1;
        goat_animation.frameDelay = 10;
    }
    //Pick up Pomegranates
    if (playerX >= pomX - 20 && playerX <= pomX + 30 && playerY == pomY - 50 && room == 5 && goatHeld == false && oliveHeld == false && babeHeld == false) {
        text("Take pomegranates?", 250, 455);
        text("Press enter to take.", 250, 465)
    }
    if (keyCode == ENTER && playerX >= pomX - 20 && playerX <= pomX + 30 && goatHeld == false && room == 5 && oliveHeld == false && babeHeld == false) {
        pomHeld = true;
        pomX = 20;
        pomY = 460;
    }
    //Offer Pomegranates
    if (playerX >= 215 && playerX <= 290 && pomHeld == true && gameOver == false && room == 5 || playerX >= 215 && playerX <= 290 && pomHeld == true && gameOver == false && room == 6 || playerX >= 215 && playerX <= 290 && pomHeld == true && gameOver == false && room == 7 || playerX >= 215 && playerX <= 290 && pomHeld == true && gameOver == false && room == 8 || playerX >= 215 && playerX <= 290 && pomHeld == true && gameOver == false && room == 9) {
        text("Offer pomegranates?", 250, 455);
        text("Press enter to offer.", 250, 465)
    }
    if (keyCode == ENTER && playerX >= 215 && playerX <= 290 && pomHeld == true && room == 9) {
        offerH = true;
        pomHeld = false;
    }
    //Pick up Libations
    if (playerX >= wineX - 20 && playerX <= wineX + 30 && playerY == wineY - 20 && room == 6 && goatHeld == false && oliveHeld == false && babeHeld == false && pomHeld == false) {
        text("Take libations?", 250, 455);
        text("Press enter to take.", 250, 465)
    }
    if (keyCode == ENTER && playerX >= wineX - 20 && playerX <= wineX + 30 && goatHeld == false && room == 6 && oliveHeld == false && babeHeld == false && pomHeld == false) {
        wineHeld = true;
        wineX = 0;
        wineY = 440;
    }
    //Offer Libations
    if (playerX >= 215 && playerX <= 290 && wineHeld == true && gameOver == false && room == 5 || playerX >= 215 && playerX <= 290 && wineHeld == true && gameOver == false && room == 6 || playerX >= 215 && playerX <= 290 && wineHeld == true && gameOver == false && room == 7 || playerX >= 215 && playerX <= 290 && wineHeld == true && gameOver == false && room == 8 || playerX >= 215 && playerX <= 290 && wineHeld == true && gameOver == false && room == 9) {
        text("Offer libations?", 250, 455);
        text("Press enter to offer.", 250, 465)
    }
    if (keyCode == ENTER && playerX >= 215 && playerX <= 290 && wineHeld == true && room == 8) {
        offerAp = true;
        wineHeld = false;
    }
    //Pick Up Goat
    if (playerX >= goatX - 20 && playerX <= goatX + 30 && playerY == goatY - 50 && room == 7 && pomHeld == false && oliveHeld == false && babeHeld == false) {
        text("Take goat?", 250, 455);
        text("Press enter to take.", 250, 465)
    }
    if (keyCode == ENTER && playerX >= goatX - 20 && playerX <= goatX + 30 && playerY == goatY - 50 && room == 7 && pomHeld == false && oliveHeld == false && babeHeld == false) {
        goatHeld = true;
        goatX = 30;
        goatY = 475;
        goat_step = 0;
    }
    //Offer Goat
    if (playerX >= 215 && playerX <= 290 && goatHeld == true && gameOver == false && room == 5 || playerX >= 215 && playerX <= 290 && goatHeld == true && gameOver == false && room == 6 || playerX >= 215 && playerX <= 290 && goatHeld == true && gameOver == false && room == 7 || playerX >= 215 && playerX <= 290 && goatHeld == true && gameOver == false && room == 8 || playerX >= 215 && playerX <= 290 && goatHeld == true && gameOver == false && room == 9) {
        text("Offer goat?", 250, 455);
        text("Press enter to offer.", 250, 465)
    }
    if (keyCode == ENTER && playerX >= 215 && playerX <= 290 && goatHeld == true) {
        offerP = true;
    }
    //Pick Up Olive Seed
    if (playerX >= oliveX - 20 && playerX <= oliveX + 20 && playerY == oliveY - 65 && room == 8 && pomHeld == false && goatHeld == false && babeHeld == false) {
        text("Take olive seed?", 250, 455);
        text("Press enter to take.", 250, 465)
    }
    if (keyCode == ENTER && playerX >= oliveX - 20 && playerX <= oliveX + 20 && playerY == oliveY - 65 && room == 8 && pomHeld == false && goatHeld == false && babeHeld == false) {
        oliveHeld = true;
        oliveX = 25;
        oliveY = 475;
    }
    //Offer Olive Seed
    if (playerX >= 215 && playerX <= 290 && oliveHeld == true && gameOver == false && room == 5 || playerX >= 215 && playerX <= 290 && oliveHeld == true && gameOver == false && room == 6 || playerX >= 215 && playerX <= 290 && oliveHeld == true && gameOver == false && room == 7 || playerX >= 215 && playerX <= 290 && oliveHeld == true && gameOver == false && room == 8 || playerX >= 215 && playerX <= 290 && oliveHeld == true && gameOver == false && room == 9) {
        text("Offer seed?", 250, 455);
        text("Press enter to offer.", 250, 465)
    }
    if (keyCode == ENTER && playerX >= 215 && playerX <= 290 && oliveHeld == true && room == 7) {
        offerA = true;
        oliveHeld = false;
    }
    //Pick Up Baby
    if (playerX >= babeX - 20 && playerX <= babeX + 50 && playerY == babeY - 11 && room == 99 && pomHeld == false && oliveHeld == false && goatHeld == false) {
        text("Take baby?", 250, 455);
        text("Press enter to take.", 250, 465)
    }
    if (keyCode == ENTER && playerX >= babeX - 20 && playerX <= babeX + 50 && playerY == babeY - 11 && room == 99 && pomHeld == false && oliveHeld == false && goatHeld == false) {
        babeHeld = true;
        babeX = 5;
        babeY = 450;
    }
    //Offer Baby
    if (playerX >= 215 && playerX <= 290 && babeHeld == true && gameOver == false && room == 5 || playerX >= 215 && playerX <= 290 && babeHeld == true && gameOver == false && room == 6 || playerX >= 215 && playerX <= 290 && babeHeld == true && gameOver == false && room == 7 || playerX >= 215 && playerX <= 290 && babeHeld == true && gameOver == false && room == 8 || playerX >= 215 && playerX <= 290 && babeHeld == true && gameOver == false && room == 9) {
        text("Offer baby?", 250, 455);
        text("Press enter to offer.", 250, 465)
    }
    if (keyCode == ENTER && playerX >= 215 && playerX <= 290 && babeHeld == true) {
        offerZ = true;
    }
    //Moving Up and Down Rooms
    if (keyCode == DOWN_ARROW && playerX >= 210 && playerX <= 290 && room == 5) {
        where = loadImage("Sacrifice/PoseidonTempleOut.png", 500, 500);
        room = 0;
    }
    if (keyCode == UP_ARROW && playerX >= 210 && playerX <= 290 && room == 0) {
        where = loadImage("Sacrifice/PoseidonTemple.gif", 500, 500);
        room = 5;
    }
    if (keyCode == DOWN_ARROW && playerX >= 210 && playerX <= 290 && room == 6) {
        where = loadImage("Sacrifice/ZeusTempleOut.png", 500, 500);
        room = 1;
    }
    if (keyCode == UP_ARROW && playerX >= 210 && playerX <= 290 && room == 1) {
        where = loadImage("Sacrifice/ZeusTemple.png", 500, 500);
        room = 6;
    }
    if (keyCode == DOWN_ARROW && playerX >= 210 && playerX <= 290 && room == 7) {
        where = loadImage("Sacrifice/AthenaTempleOut.png", 500, 500);
        room = 2;
    }
    if (keyCode == UP_ARROW && playerX >= 210 && playerX <= 290 && room == 2) {
        where = loadImage("Sacrifice/AthenaTemple.png", 500, 500);
        room = 7;
    }
    if (keyCode == DOWN_ARROW && playerX >= 210 && playerX <= 290 && room == 8) {
        where = loadImage("Sacrifice/ApolloTempleOut.png", 500, 500);
        room = 3;
    }
    if (keyCode == UP_ARROW && playerX >= 210 && playerX <= 290 && room == 3) {
        where = loadImage("Sacrifice/ApolloTemple.png", 500, 500);
        room = 8;
    }
    if (keyCode == DOWN_ARROW && playerX >= 210 && playerX <= 290 && room == 9) {
        where = loadImage("Sacrifice/HadesTempleOut.png", 500, 500);
        room = 15;
    }
    if (keyCode == UP_ARROW && playerX >= 210 && playerX <= 290 && room == 15) {
        where = loadImage("Sacrifice/HadesTemple.png", 500, 500);
        room = 9;
    }
    if (keyCode == DOWN_ARROW && playerX >= 210 && playerX <= 290 && room == 10 && offerH == true) {
        where = loadImage("Sacrifice/HadesTemple.png", 500, 500);
        room = 9;
    }
    if (keyCode == UP_ARROW && playerX >= 210 && playerX <= 290 && room == 9 && offerH == true & gameOver == false) {
        where = loadImage("Sacrifice/Underworld.png", 500, 500);
        room = 10;
        playerX = 400;
    }
    if (keyCode == ENTER && playerX >= 30 && playerX <= 50 && room == 12) {
       where = loadImage("Sacrifice/EasterEgg.png", 500,500);  
    }
}