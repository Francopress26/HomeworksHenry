'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var array=[]
  array.push(1)
  let cont=2
  while(num>1){ 
    while(num%cont==0){ 
      
      num/=cont 
      array.push(cont) 
  }
  cont++
  }
  return array
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
    let aux;
    for (let i = 0; i < array.length; i++) {     
        for (let j = i+1; j < array.length; j++) {
          if(array[i]>array[j]){ 
            aux=array[j] 
            array[j]=array[i] 
            array[i]=aux 
          }
          
        }
      
    }
    return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
    
  let aux;
  let cont=                             //           i     j
  for (let i = 2; i < array.length; i++) { //[5,1,4,2,8]
      for (let j = array.length; j > array.length-1; j--) {
         if(array[i]<array[i-1]){
           aux=array[i]
           array[i]=array[i-i]
           array[i]=aux
         }else{
           
           while(array[i]>array[i]){
              i--
           }
         }
        
      }
    
  }
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
