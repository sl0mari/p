const bkgImage = new Image();
bkgImage.src = "./img/map/testmap_base.png";

const walkAnim = new Image();
walkAnim.src = "./img/0025/Walk-Anim.png";

const attackAnim = new Image();
attackAnim.src = "./img/0025/Attack-Anim.png";

const quickStrikeAnim = new Image();
quickStrikeAnim.src = "./img/0025/QuickStrike-Anim.png";

const shootAnim = new Image();
shootAnim.src = "./img/0025/Shoot-Anim.png";

const shockAnim = new Image();
shockAnim.src = "./img/0025/Shock-Anim.png";

const sleepAnim = new Image();
sleepAnim.src = "./img/0025/Sleep-Anim.png";

const hurtAnim = new Image();
hurtAnim.src = "./img/0025/Hurt-Anim.png";

const idleAnim = new Image();
idleAnim.src = "./img/0025/Idle-Anim.png";

const swingAnim = new Image();
swingAnim.src = "./img/0025/Swing-Anim.png";

const doubleAnim = new Image();
doubleAnim.src = "./img/0025/Double-Anim.png";

const hopAnim = new Image();
hopAnim.src = "./img/0025/Hop-Anim.png";

const chargeAnim = new Image();
chargeAnim.src = "./img/0025/Charge-Anim.png";

const rotateAnim = new Image();
rotateAnim.src = "./img/0025/Rotate-Anim.png";

const eventSleepAnim = new Image();
eventSleepAnim.src = "./img/0025/EventSleep-Anim.png";

const wakeAnim = new Image();
wakeAnim.src = "./img/0025/Wake-Anim.png";

const eatAnim = new Image();
eatAnim.src = "./img/0025/Eat-Anim.png";

const tumbleAnim = new Image();
tumbleAnim.src = "./img/0025/Tumble-Anim.png";

const poseAnim = new Image();
poseAnim.src = "./img/0025/Pose-Anim.png";

const pullAnim = new Image();
pullAnim.src = "./img/0025/Pull-Anim.png";

const painAnim = new Image();
painAnim.src = "./img/0025/Pain-Anim.png";

const floatAnim = new Image();
floatAnim.src = "./img/0025/Float-Anim.png";

const deepBreathAnim = new Image();
deepBreathAnim.src = "./img/0025/DeepBreath-Anim.png";

const nodAnim = new Image();
nodAnim.src = "./img/0025/Nod-Anim.png";

const sitAnim = new Image();
sitAnim.src = "./img/0025/Sit-Anim.png";

const lookUpAnim = new Image();
lookUpAnim.src = "./img/0025/LookUp-Anim.png";

const sinkAnim = new Image();
sinkAnim.src = "./img/0025/Sink-Anim.png";

const tripAnim = new Image();
tripAnim.src = "./img/0025/Trip-Anim.png";

const layingAnim = new Image();
layingAnim.src = "./img/0025/Laying-Anim.png";

const leapForthAnim = new Image();
leapForthAnim.src = "./img/0025/LeapForth-Anim.png";

const cringeAnim = new Image();
cringeAnim.src = "./img/0025/Cringe-Anim.png";

const lostBalanceAnim = new Image();
lostBalanceAnim.src = "./img/0025/LostBalance-Anim.png";

const tumbleBackAnim = new Image();
tumbleBackAnim.src = "./img/0025/TumbleBack-Anim.png";

const faintAnim = new Image();
faintAnim.src = "./img/0025/Faint-Anim.png";

const hitGroundAnim = new Image();
hitGroundAnim.src = "./img/0025/HitGround-Anim.png";

//containers for frame indecies
const walkAnimations = [];
const attackAnimations = [];
const quickStrikeAnimations = [];
const shootAnimations = [];
const shockAnimations = [];
const sleepAnimations = [];
const hurtAnimations = [];
const idleAnimations = [];
const swingAnimations = [];
const doubleAnimations = [];
const hopAnimations = [];
const chargeAnimations = [];
const rotateAnimations = [];
const eventSleepAnimations = [];
const wakeAnimations = [];
const eatAnimations = [];
const tumbleAnimations = [];
const poseAnimations = [];
const pullAnimations = [];
const painAnimations = [];
const floatAnimations = [];
const deepBreathAnimations = [];
const nodAnimations = [];
const sitAnimations = [];
const lookUpAnimations = [];
const sinkAnimations = [];
const tripAnimations = [];
const layingAnimations = [];
const leapForthAnimations = [];
const headAnimations = [];
const cringeAnimations = [];
const lostBalanceAnimations = [];
const tumbleBackAnimations = [];
const faintAnimations = [];
const hitGroundAnimations = [];

const animState = [
  {
    name: "walk",
    frames: 4,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: walkAnim,
  },
  {
    name: "attack",
    frames: 10,
    frameWidth: 80,
    frameHeight: 80,
    playerImage: attackAnim,
  },
  {
    name: "quickStrike",
    frames: 10,
    frameWidth: 120,
    frameHeight: 136,
    playerImage: quickStrikeAnim,
  },
  {
    name: "shoot",
    frames: 11,
    frameWidth: 40,
    frameHeight: 56,
    playerImage: shootAnim,
  },
  {
    name: "shock",
    frames: 13,
    frameWidth: 48,
    frameHeight: 64,
    playerImage: shockAnim,
  },
  {
    name: "sleep",
    frames: 2,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: sleepAnim,
  },
  {
    name: "hurt",
    frames: 2,
    frameWidth: 48,
    frameHeight: 64,
    playerImage: hurtAnim,
  },
  {
    name: "idle",
    frames: 6,
    frameWidth: 40,
    frameHeight: 56,
    playerImage: idleAnim,
  },
  {
    name: "swing",
    frames: 9,
    frameWidth: 80,
    frameHeight: 96,
    playerImage: swingAnim,
  },
  {
    name: "double",
    frames: 16,
    frameWidth: 64,
    frameHeight: 64,
    playerImage: doubleAnim,
  },
  {
    name: "hop",
    frames: 10,
    frameWidth: 40,
    frameHeight: 88,
    playerImage: hopAnim,
  },
  {
    name: "charge",
    frames: 10,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: chargeAnim,
  },
  {
    name: "rotate",
    frames: 9,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: rotateAnim,
  },
  {
    name: "eventSleep",
    frames: 2,
    frameWidth: 24,
    frameHeight: 32,
    playerImage: eventSleepAnim,
  },
  {
    name: "wake",
    frames: 5,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: wakeAnim,
  },
  {
    name: "eat",
    frames: 4,
    frameWidth: 24,
    frameHeight: 48,
    playerImage: eatAnim,
  },
  {
    name: "tumble",
    frames: 8,
    frameWidth: 24,
    frameHeight: 40,
    playerImage: tumbleAnim,
  },
  {
    name: "pose",
    frames: 3,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: poseAnim,
  },
  {
    name: "pull",
    frames: 4,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: pullAnim,
  },
  {
    name: "pain",
    frames: 12,
    frameWidth: 40,
    frameHeight: 48,
    playerImage: painAnim,
  },
  {
    name: "float",
    frames: 4,
    frameWidth: 24,
    frameHeight: 32,
    playerImage: floatAnim,
  },
  {
    name: "deepBreath",
    frames: 9,
    frameWidth: 24,
    frameHeight: 48,
    playerImage: deepBreathAnim,
  },
  {
    name: "sit",
    frames: 3,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: sitAnim,
  },
  {
    name: "lookUp",
    frames: 3,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: lookUpAnim,
  },
  {
    name: "sink",
    frames: 12,
    frameWidth: 24,
    frameHeight: 40,
    playerImage: sinkAnim,
  },
  {
    name: "trip",
    frames: 5,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: tripAnim,
  },
  {
    name: "laying",
    frames: 1,
    frameWidth: 24,
    frameHeight: 32,
    playerImage: layingAnim,
  },
  {
    name: "leapForth",
    frames: 5,
    frameWidth: 24,
    frameHeight: 72,
    playerImage: leapForthAnim,
  },
  {
    name: "cringe",
    frames: 2,
    frameWidth: 24,
    frameHeight: 64,
    playerImage: cringeAnim,
  },
  {
    name: "lostBalance",
    frames: 2,
    frameWidth: 32,
    frameHeight: 46,
    playerImage: lostBalanceAnim,
  },
  {
    name: "tumbleBack",
    frames: 10,
    frameWidth: 32,
    frameHeight: 40,
    playerImage: tumbleBackAnim,
  },
  {
    name: "faint",
    frames: 4,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: faintAnim,
  },
  {
    name: "hitGround",
    frames: 8,
    frameWidth: 40,
    frameHeight: 40,
    playerImage: hitGroundAnim,
  },
];

const spriteDirections = [
  {
    name: "south",
    frames: 4,
  },
  {
    name: "southEast",
    frames: 4,
  },
  {
    name: "east",
    frames: 4,
  },
  {
    name: "northEast",
    frames: 4,
  },
  {
    name: "north",
    frames: 4,
  },
  {
    name: "northWest",
    frames: 4,
  },
  {
    name: "west",
    frames: 4,
  },
  {
    name: "southWest",
    frames: 4,
  },
];

function checkDirection() {
  //switch row of spritesheet for proper direction
  switch (true) {
    case angle <= 22.5 && angle > -22.5:
      //east
      player.playerDirection = spriteDirections[2].name;
      break;
    case angle <= 67.5 && angle > 22.5:
      //southeast
      player.playerDirection = spriteDirections[1].name;
      break;
    case angle <= 112.5 && angle > 67.5:
      //south
      player.playerDirection = spriteDirections[0].name;
      break;
    case angle <= 157.5 && angle > 112.5:
      //southwest
      player.playerDirection = spriteDirections[7].name;
      break;
    case angle <= -157.5 || angle > 157.5:
      //west
      player.playerDirection = spriteDirections[6].name;
      break;
    case angle <= -112.5 && angle > -157.5:
      //northwest
      player.playerDirection = spriteDirections[5].name;
      break;
    case angle <= -67.5 && angle > -112.5:
      //north
      player.playerDirection = spriteDirections[4].name;
      break;
    case angle <= -22.5 && angle > -67.5:
      //northeast
      player.playerDirection = spriteDirections[3].name;
      break;
  }
}

function stateCheck() {
  if (mouse.present == true) {
    player.playerState = "walk";
    player.stateType = 0;
  }
}

function spriteMapping() {
  for (let state = 0; state < 33; state++) {
    spriteDirections.map(function (x) {
      x.frames = animState[state];
      return x;
    });
    spriteDirections.forEach((face, index) => {
      let frames = {
        loc: [],
      };
      for (let j = 0; j < animState[state].frames; j++) {
        let positionX = j * animState[state].frameWidth;
        let positionY = index * animState[state].frameHeight;
        frames.loc.push({ x: positionX, y: positionY });
      }
      if (state == 0) walkAnimations[face.name] = frames;
      if (state == 1) attackAnimations[face.name] = frames;
      if (state == 2) quickStrikeAnimations[face.name] = frames;
      if (state == 3) shootAnimations[face.name] = frames;
      if (state == 4) shockAnimations[face.name] = frames;
      if (state == 5) sleepAnimations[face.name] = frames;
      if (state == 6) hurtAnimations[face.name] = frames;
      if (state == 7) idleAnimations[face.name] = frames;
      if (state == 8) swingAnimations[face.name] = frames;
      if (state == 9) doubleAnimations[face.name] = frames;
      if (state == 10) hopAnimations[face.name] = frames;
      if (state == 11) chargeAnimations[face.name] = frames;
      if (state == 12) rotateAnimations[face.name] = frames;
      if (state == 13) eventSleepAnimations[face.name] = frames;
      if (state == 14) wakeAnimations[face.name] = frames;
      if (state == 15) eatAnimations[face.name] = frames;
      if (state == 16) tumbleAnimations[face.name] = frames;
      if (state == 17) poseAnimations[face.name] = frames;
      if (state == 18) pullAnimations[face.name] = frames;
      if (state == 19) painAnimations[face.name] = frames;
      if (state == 20) floatAnimations[face.name] = frames;
      if (state == 21) deepBreathAnimations[face.name] = frames;
      if (state == 22) sitAnimations[face.name] = frames;
      if (state == 23) lookUpAnimations[face.name] = frames;
      if (state == 24) sinkAnimations[face.name] = frames;
      if (state == 25) tripAnimations[face.name] = frames;
      if (state == 26) layingAnimations[face.name] = frames;
      if (state == 27) leapForthAnimations[face.name] = frames;
      if (state == 28) cringeAnimations[face.name] = frames;
      if (state == 29) lostBalanceAnimations[face.name] = frames;
      if (state == 30) tumbleBackAnimations[face.name] = frames;
      if (state == 31) faintAnimations[face.name] = frames;
      if (state == 32) hitGroundAnimations[face.name] = frames;
    });
  }
}
spriteMapping();
