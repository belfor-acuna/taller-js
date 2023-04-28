const attacks = require("./attacks.json");
const magicAttacks = attacks.filter(item => item.type === 'MAGIC');
const physicalAttacks = attacks.filter(item => item.type === 'PHYSICAL');
const classes = [ "MAGICIAN","FAIRY","KNIGHT","WARRIOR"]
let logs_pelea = [];



clase1 = pickRandomClass();
clase2= pickRandomClass();
let turno = 0;

let fighter1 = {
    name: 'German',
    clase: clase1,
    firstAtack: pickAtack(clase1),
    secondAttack: pickAtack(clase1),
    health: pickRandomHealth(),
    speed: pickRandomSpeed(),
    fails:0,
    isDead:false
  };
  
 let fighter2 = {name: 'Marco',
    clase: clase2,
    firstAtack: pickAtack(clase2),
    secondAttack: pickAtack(clase2),
    health: pickRandomHealth(),
    speed: pickRandomSpeed(),
    fails:0,
    isDead: false
  };

  function pickRandomSpeed(){
    return Math.floor(Math.random() * 11) + 1
  }

  function pickRandomHealth(){
    return Math.floor(Math.random() * 101) + 100;
  }

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

function showFighters(){
	logs_pelea.push(fighter1.name +" | Class: " +fighter1.clase + " | Health: " + fighter1.health + " VS " + fighter2.name +" | Class: " +fighter2.clase + " | Health: " + fighter2.health)
}

function pickSpell(character){
    const randomAtack = Math.floor(Math.random() * 2)+1;
    if (randomAtack===1){
        return character.firstAtack;
    }else{
        return character.secondAttack;
    }
}

function attack(atacker, defender){
    let multiplicator = Math.floor(Math.random() * 10);
    turno++;
    let spell = pickSpell(atacker);
    let probability = (spell.accuracy*multiplicator)
    
    if(probability>=450 && healthCheck()==true){
        logs_pelea.push(" Turno: "+turno);
        defender.health -= spell.damage;
        logs_pelea.push(atacker.name + " ataca con " + spell.name + "... DA EN ELBLANCO! La vida de " + defender.name+" queda en " + defender.health);
    }else if(probability<500){
        logs_pelea.push(" Turno: "+turno);
        logs_pelea.push(atacker.name + " ataca con " + spell.name + "... FALLÓ! La vida de " + defender.name+" se mantiene en " + defender.health);
        atacker.fails++;
    }
}

function healthCheck (){
    if (fighter1.health <= 0){
        fighter1.isDead = true;
        logs_pelea.push("EL COMBATE TERMINA!")
        logs_pelea.push(fighter1.name + " no puede continuar")
        logs_pelea.push(fighter2.name + " GANA LA BATALLA!")
        return false;
    }if (fighter2.health<=0){
        fighter2.isDead = true;
        logs_pelea.push("EL COMBATE TERMINA!")
        logs_pelea.push(fighter2.name + " no puede continuar")
        logs_pelea.push(fighter1.name + " GANA LA BATALLA!")
        return false;
    }else{
        return true
    }
}

function fight(){
    showFighters();
    while ( fighter1.isDead==false && fighter2.isDead==false){
        if (fighter1.speed>=fighter2.speed){
            attack(fighter1,fighter2);
            if(fighter1.health <=0 || fighter2.health <=0){
                healthCheck();
                break;
            }
            attack(fighter2,fighter1)
            if(fighter1.health <=0 || fighter2.health <=0){
                healthCheck();
                break;
            }
        }else if (fighter2.speed>fighter1.speed) {
            attack(fighter2,fighter1);
            if(fighter1.health <=0 || fighter2.health <=0){
                healthCheck();
                break;
            }
            attack(fighter1,fighter2)
            if(fighter1.health <=0 || fighter2.health <=0){
                healthCheck();
                break;
            }
        }
    }

    logs_pelea.push(fighter1.name+ " falló " + fighter1.fails +" veces sus ataques");
    logs_pelea.push(fighter2.name+ " falló " + fighter2.fails +" veces sus ataques")


}

fight()
console.log(logs_pelea)







