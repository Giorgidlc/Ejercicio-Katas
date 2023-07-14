//Kata 04
const sheepes = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true, false]

const counter = () => {
  let sleepSheep = 0; 
  for (let i = 0; i < sheepes.length; i++) {
    if (sheepes[i] === true) {
      sleepSheep++
    }
  }
return sleepSheep;
};

console.log(`Ovejas durmiendo = ${counter()}`);