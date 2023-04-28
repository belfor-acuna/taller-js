const attacks = require("./attacks.json");
const magicAttacks = attacks.filter(item => item.type === 'MAGIC');
const physicalAttacks = attacks.filter(item => item.type === 'PHYSICAL');

console.log(magicAttacks)
console.log(physicalAttacks)





