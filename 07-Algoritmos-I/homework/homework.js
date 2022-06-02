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
      //Empiezo en el segundo termino para tener con q comparar a la izq
    for (let i = 1; i < array.length; i++) {
     let j =i-1;// Con j voy a comparar i
     let aux=array[i]; // "Me guardo" i 
     while (j>=0 && array[j]>aux) { // Si j es mayor a 0, es decir que luego de restarle 1 no se haya ido de rango del array y el array[j] es mayor al auxiliar, entonces los swapeo
       array[j+1]= array[j] // piso el valor de i con el de j, pero no importa porque i lo guarde en aux
       j-- // resto j para que siga preguntando hacia la izquierda, hasta q encuentre un numero mas chico o se salga de rango del array, lo que significaria que no hay un numero mas chico
     }
     // Cuando salgo del while a array[j+1] le asigno el auxiliar que me habia guardado, porque si salio del while significa que ahi seria su lugar
      array[j+1]=aux
      // Despues repito todo hasta terminar de recorrer el array
    }
    return array
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
      let min = i;
      for (let j = i+1; j < array.length; j++) {
        if(array[j]<array[min]){
        min=j
      }
    
  }
  let aux=array[i];
  array[i]=array[min]
  array[min]=aux
}
return array
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
