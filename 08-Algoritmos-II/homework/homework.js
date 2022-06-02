'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let pivot = [array[0]] // Pos 0: 5
  let arrMay = []
  let arrMen= []
    for (let i = 0; i < array.length; i++) {
          if(array[i]>pivot[0] && array.length>1){
            arrMay.push[array[i]]
          }else{
            arrMen.push[array[i]]
          }
      quickSort(array)
    }
  return array
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
