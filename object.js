// # [array], {object}

// >> create object using object literals
// >> must know about object literals
const player = {};

player.name = "Russell";
player.score = 74;
player.power = function () {
  console.log("Super human strength");
};
// console.log(player);
// player.power()

// >> must know this object
const player2 = {
  name: "Emi",
  score: 68,
  power: function () {
    console.log("Beyond sound barrier");
  },
};
// console.log(player2);
// player2.power()

// >> object constructor 0
const player5 = new Object();
// console.log(player);

// >> object constructor another
// >> must know about this too
class pilot{
  name = "emilia airHeart";
  skill =  "pilot";
  constructor(age, region){
    this.age = age;
    this.region = region;
  }
}
const playerAny = new pilot(23, "USA");
console.log(playerAny);

// >> object constructor
class Player {
  constructor(name, score, power) {
    this.name = name;
    this.score = score;
    this.power = power;
  }
}
const player3 = new Player("Tania", 79, function () {
  console.log("Super human strength");
});
// console.log(player3);
// player3.power()

// >> object create method
// >> know about prototype chaining methods
const mc = Object.create(player);
console.log(mc.name);

// >> object prototype
const player4 = Object.create(Player.prototype);
player4.name = "Anupama";
player4.score = 86;
player4.power = function () {
  console.log("Watch my Mech go brrrrrrrr");
};
// console.log(player4);
// player4.power()

// const protagonist = {}
// protagonist.name = "mk saadi"
// protagonist.status = "ultra instinct"
// protagonist.skill = function () {
//   console.log("web developer");
// }
// protagonist.skill()

// const protagonist = {
//   name: "mk_saadi",
//   status: "ultra_instinct",
//   skill: function () {
//     console.log("web_developer");
//   },
// }
// protagonist.skill()