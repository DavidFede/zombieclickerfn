const zombie = document.getElementById("zombie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoclickUpgrade = document.getElementById("autoclickUpgrade");
let numberOfZombies = 0;
let zombieIncrease = 1;
let autoclickIncrease = 0;
let autoclicker;
let clickUpgradeCost = 50;
let autoclickerCost = 100;

zombie.onclick = () => {
  numberOfZombies += zombieIncrease;
  counter.innerHTML = `Points: ${numberOfZombies}`;
};

clickUpgrade.onclick = () => {
  
  if (numberOfZombies >=clickUpgradeCost) {
    numberOfZombies -= clickUpgradeCost;
    clickUpgradeCost *= 2;
    clickUpgrade.innerHTML = `Buy Click Upgrade: ${clickUpgradeCost}`;
    counter.innerHTML = `Points: ${numberOfZombies}`;
    zombieIncrease++;
  }
};

autoclickUpgrade.onclick = () => {
  if (numberOfZombies >= autoclickerCost) {
    numberOfZombies -= autoclickerCost;
    autoclickerCost *= 2;
    autoclickUpgrade.innerHTML = `Buy AutoClick Upgrade: ${autoclickerCost}`;
    counter.innerHTML = `Points: ${numberOfZombies}`;
    autoclickIncrease++;
    clearInterval(autoclicker);
    autoclicker = setInterval(() => {
        console.log("Interval");
        numberOfZombies += autoclickIncrease;
        counter.innerHTML = `Points: ${numberOfZombies}`;
    }, 1000);
  }
};

function cheats() {
  numberOfZombies += 9999;
  counter.innerHTML = `Points: ${numberOfZombies}`;
}

const superCheats = () => {
  numberOfZombies += 10000000;
  counter.innerHTML = `Points: ${numberOfZombies}`;
};
zombie = 0
cheats();
cheats();
cheats();
superCheats();
superCheats();
