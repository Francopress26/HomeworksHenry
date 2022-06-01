"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
 this.head=null;
}





LinkedList.prototype.add=function(value){
  var node = new Node(value)
  
  if(!this.head){ // Si la lista esta vacia this.head===null
    this.head=node; // Ahora apunta a mi nuevo nodo, y ese apunta a null
    return node
  }else{
    //Si la lista tiene al menos un elemento
    let current =this.head // le asigno al current el primero
    while(current.next){ // Mientras haya un siguiente
      current=current.next //le asigno al current el siguiente
    }
    current.next=node // el siguiente una vez sea null, pasa a tomar el valor del nodo que nos enviaron x parametro
    return node
  }


} 

LinkedList.prototype.remove=function () {
  let current = this.head
  if(!this.head){ // Si la lista esta vacia this.head===null
    return null
  }
  //Si tiene un solo elemento
  if(!current.next){
    let UnicoValue=current.value // guardo el unico valor de la lista
    this.head=null // dejo la lista en null
    return UnicoValue // retorno el ultimo valor que borre
  }
  while(current.next.next){ // Mientras el siguiente del siguiente exista(para no quedar parado en null)
    current=current.next // al actual le asigno el siguiente

  }
  let LastValue=current.next.value // guardo en un auxiliar el valor que voy a borrar
  current.next=null // lo borro
  return LastValue // lo devuelvo
}

LinkedList.prototype.search=function(arg){
  let current = this.head
  while(current){
    //es una funcion?
    if(typeof arg === 'function'){

      // Si esto me da true significa que arg es una funcion
      if(arg(current.value)){ // true??
        
        return current.value
      }
    }else{
    if(current.value===arg){
      return arg
    }
  }
    current=current.next 

  }
  //Si llega aca no encontró al valor buscado
  return null
}
function Node(value) {
  this.value=value
  this.next=null
}




/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
