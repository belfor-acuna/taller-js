const attacks = require("./attacks.json");
const magicAttacks = attacks.filter(item => item.type === 'MAGIC');
const physicalAttacks = attacks.filter(item => item.type === 'PHYSICAL');
const classes = [ "MAGICIAN","FAIRY","KNIGHT","WARRIOR"]



clase1 = pickRandomClass();
clase2= pickRandomClass();

let fighter = {
    name: 'Belfor',
    clase: clase1,
    firstAtack: pickAtack(clase1),
    secondAttack: pickAtack(clase1)
  };

  let fighter2 = {
    name: 'Marco',
    clase: clase2,
    firstAtack: pickAtack(clase2),
    secondAttack: pickAtack(clase2)
  };

  function pickRandomClass(){
    const randomIndex = Math.floor(Math.random() * 4);
    return (classes[randomIndex])
}

function pickAtack(claseParametro){
    const randomIndex = Math.floor(Math.random() * 10);
    if (claseParametro === "FAIRY" || claseParametro==="MAGICIAN" ){
        return magicAttacks[randomIndex]
    }
    else if(claseParametro === "KNIGHT" || claseParametro==="WARRIOR"){
        return physicalAttacks[randomIndex]
    }
}

console.log(fighter)
console.log(fighter2)




