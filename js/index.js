const player = {
  playerImage: sitAnim,
  playerState: "sit",
  stateType: 22,
  playerDirection: "south",
  moveSpeed: 0.001,
  positionY: 0,
  positionX: 0,
};
//difference between mouse and character's positions
let xD = 0;
let yD = 0;
//angle of the mouse relative to the character
let angle = 0;
//length of the vector from character to mouse
let hypotenuse = 0;

const mouse = {
  x: null,
  y: null,
  present: false,
  clicked: false,
  moved: false,
};

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.height = 1024;
canvas.width = 576;
//AA OFF
ctx.imageSmoothingEnabled = false;

let gameFrame = 0;
//anim speed
const staggerFrames = 10;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
console.log(bkgImage);

function atan2Normalized(x, y) {
  // let radians = Math.atan2(x, y);
  // let degrees = (radians * 180) / Math.PI;
  // if (radians <= 0) {
  //   degrees += 360;
  // }
  let degrees = (Math.atan2(y, x) * 180) / Math.PI;
  if (degrees >= 180) {
    degrees = 45 - degrees;
  } else {
    degrees = 90 - degrees;
  }
  return degrees;
}

function angleMath() {
  //base movement off of offset character coordinates to center  head of character
  xD =
    mouse.x - (player.positionX + animState[player.stateType].frameWidth / 2);
  yD =
    mouse.y - (player.positionY + animState[player.stateType].frameHeight / 8);
  //get the angle of the mouse relative to the character
  angle = atan2Normalized(yD, xD);
  //get the length of the vector from character to mouse
  hypotenuse = Math.hypot(xD, yD);
}

function moveCharacter() {
  angleMath();
  checkDirection();
  stateCheck();

  switch (true) {
    case hypotenuse <= animState[player.stateType].frameWidth / 2 ||
      !mouse.present:
      mouse.moved = false;
      break;
    case hypotenuse > animState[player.stateType].frameWidth / 8 &&
      mouse.present:
      mouse.moved = true;
      break;
  }

  let deltaX = xD / hypotenuse;
  let deltaY = yD / hypotenuse;
  //collision with edge of canvas, doesn't accommodate collision with other objects inside canvas
  if (
    player.positionX + deltaX >= 0 &&
    player.positionX + animState[player.stateType].frameWidth + deltaX <=
      canvas.width
  ) {
    player.positionX += deltaX * player.moveSpeed;
  }
  if (
    player.positionY + deltaY >= 0 &&
    player.positionY + animState[player.stateType].frameHeight + deltaY <=
      canvas.height
  ) {
    player.positionY += deltaY * player.moveSpeed;
  }
  //calling the angle math here adjusts character's movement even if mouse stops moving
  angleMath();
}

//mouse.moved = false;

function animate() {
  bkgImage.onload = () => {
    ctx.drawImage(bkgImage, 750, 750);
  };
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.addEventListener("mousemove", mouseMoveListener);
  function mouseMoveListener(e) {
    //get mouse coordinates within the canvas
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
    moveCharacter();
  }
  //Listen for mouse presence
  canvas.addEventListener("mouseover", mouseOverListener);
  function mouseOverListener(e) {
    mouse.present = true;
  }
  canvas.addEventListener("mouseout", mouseOutListener);
  function mouseOutListener(e) {
    mouse.present = false;
  }

  let position =
    Math.floor(gameFrame / staggerFrames) % animState[player.stateType].frames;

  let frameX = animState[player.stateType].frameWidth * position;
  let directionY = 0;

  if (player.playerState == "walk") {
    directionY = walkAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "attack") {
    directionY = attackAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "quickStrick") {
    directionY = quickStrikeAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "shoot") {
    directionY = shootAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "shock") {
    directionY = shockAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "sleep") {
    directionY = sleepAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "hurt") {
    directionY = hurtAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "idle") {
    directionY = idleAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "swing") {
    directionY = swingAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "double") {
    directionY = doubleAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "hop") {
    directionY = hopAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "charge") {
    directionY = chargeAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "rotate") {
    directionY = rotateAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "eventSleep") {
    directionY = eventSleepAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "wake") {
    directionY = wakeAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "eat") {
    directionY = eatAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "tumble") {
    directionY = tumbleAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "pose") {
    directionY = poseAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "pull") {
    directionY = pullAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "pain") {
    directionY = painAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "float") {
    directionY = floatAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "deepBreath") {
    directionY = deepBreathAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "sit") {
    directionY = sitAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "lookUp") {
    directionY = lookUpAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "sink") {
    directionY = sinkAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "trip") {
    directionY = tripAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "laying") {
    directionY = layingAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "leapForth") {
    directionY = leapForthAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "cringe") {
    directionY = cringeAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "lostBalance") {
    directionY = lostBalanceAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "tumbleBack") {
    directionY = tumbleBackAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "faint") {
    directionY = faintAnimations[player.playerDirection].loc[position].y;
  }
  if (player.playerState == "hitGround") {
    directionY = hitGroundAnimations[player.playerDirection].loc[position].y;
  }

  ctx.drawImage(
    animState[player.stateType].playerImage,
    frameX,
    directionY,
    animState[player.stateType].frameWidth,
    animState[player.stateType].frameHeight,
    player.positionX,
    player.positionY,
    animState[player.stateType].frameWidth,
    animState[player.stateType].frameHeight
  );

  gameFrame++;
  requestAnimationFrame(animate);
}

animate();

function poop() {
  let poop;
  for (var i = 0; i < poop.length; i++) {}
}
