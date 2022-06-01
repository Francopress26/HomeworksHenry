"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
this.value=value;
this.left=null
this.right=null
}




BinarySearchTree.prototype.insert=function(value){ 
   if(value >this.value){
     //el valor a insertar es mas grande q el valor del nodo actual
     if(!this.right){// this.right ===null
      //la posicion esta libre
     this.right= new BinarySearchTree(value)
    }else{
      //La posicion esta ocupada
      // this.right ---> =BinarySearchTree
      this.right.insert(value) // aplico recursividad
    }
   }else{ // el valor a insertar es mas chico :
     if(!this.left){
       this.left = new BinarySearchTree(value)
     }else{
       this.left.insert(value)
     }
   }
}




BinarySearchTree.prototype.size=function(){
  //Leaf node
  if(this.right==null && this.left==null) return 1
  // Nodo con hijo left
  if(!this.right){return 1 + this.left.size() }
  // nodo con hijo derecho  
  if(!this.left){ return 1 + this.right.size();}
  //nodo con 2 hijos
  return 1 + this.left.size()+ this.right.size()
}

BinarySearchTree.prototype.contains=function(value){
  // Voy resolviendo segun los casos posibles:

  //Si el primer nodo es el mismo q el valor retorno true
  if(this.value === value){return true} 
  //Sino, si el valor es mas grande q el nodo, me voy hacia la derecha
  if(value > this.value){
    //Si la derecha esta vacia retorno false xq signifuca que el valor no esta
      if(!this.right){return false
      }else{ // Sino aplico recursividad y retorno la funcion
        return this.right.contains(value)
      }
  } else{
      if(!this.left){
        return false
      }else{
        return this.left.contains(value)
      }
  }

}

BinarySearchTree.prototype.depthFirstForEach=function(cb,order){
  // Otra forma dehacerlo: this.left && this.left.depthFirstForEach(cb); Si el primero es verdad, ejecuto el segundo, porque asi funciona javascript
  //Si no tengo order, aplico in-order, a menos q me pasen x parametro
  if(!order ||order ==='in-order'){
    // Si tengo izquierda, aplico recursividad sobre la izquierda
  if(this.left) this.left.depthFirstForEach(cb,order);
  cb(this.value) // Esto lo "recorre"
  //Si tengo derecha aplico recursividad sobre la derecha
  if(this.right) this.right.depthFirstForEach(cb,order)
  }else if(order ==='pre-order'){// Es lo mismo, cambia el orden 
    cb(this.value)//Primero me ejecuto a mi
    if(this.left) this.left.depthFirstForEach(cb,order)//Despues la izquierda
    if(this.right) this.right.depthFirstForEach(cb,order)// Despues la derecha

  }else{
    if(this.left) this.left.depthFirstForEach(cb,order)//Primero mi izquierda
    if(this.right) this.right.depthFirstForEach(cb,order)// Despues la derecha
    cb(this.value)//Ultimo "yo"
  }
}

BinarySearchTree.prototype.breadthFirstForEach=function(cb,array=[]){
  cb(this.value) // Primero recorro el primero

  // Despues tengo que ir en orden, entonces tengo que guardar una referencia a cual ir primero y cual ir segundo, comienzo x izquierda
  if(this.left ) array.push(this.left) // Si tenes izquierda, guardamelo en el array que despues lo recorro, esto es para ir guardando en orden
  if(this.right) array.push(this.right)// Si tenes derecha, guardamelo en el array que despues lo recorro
  // Una vez guarde la referencia del orden en el que voy a recorrer, tengo que sacar del array el que voy a recorrer primero
  let nextNode = array.shift(); //Aca voy a sacar el this.left porque lo guarde primero, si es que habia
  if(nextNode) nextNode.breadthFirstForEach(cb,array)// aca por ultimo pregunto:
                                                    // si sigue habiendo un nodo para recorrer en el array, entonces aplico recursividad sobre el elemento que saque y asigne a nextNode
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
