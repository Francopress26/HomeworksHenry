01-'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let Decimal = 0;

    for (let i = 0; i < num.length; i++) {
       Decimal = Decimal +num[i] *  Math.pow(2,num.length - 1 - i);
    }
    return Decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
let Numbinario = ""
while (num>0){
  Numbinario= (num %2) + Numbinario // El resto de num % 2 se guarda en Numbinario
  num=Math.floor(num/2) // Divido el numero en 2 hasta que quede 0 y redondeo la parte entera
  
}
return Numbinario
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}