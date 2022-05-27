
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;

var c = function(a, b, c) {
  var x = 10;
  console.log(x); //10
  console.log(a); //8

  var f = function(a, b, c) {
    b = a; 
    console.log(b); // 8
    b = c; 
    var x = 5;
  }
  f(a,b,c); 
  console.log(b); 
}



c(8,9,10);

// imprime 10 (x) porque esta dentro del contexto de C

// despues imprime 8 (a) que fue el valor que se paso al invocar la funcion
// despues llama a la funcion f(8,10,funcion C)
// b pasa a valer 8 ( el valor de a)
// imprime 8 (b)
// b pasa a valer c (funcion)
// x pasa a valer 5
//termina la ejecucion de f(a,b,c) y vuelve al contexto de ejecución de c(8,9,10)
// console log de b que seria 9, dentro de este contexto
console.log(b);
// esto  imprime 10 porque anteriormente a pesar de haberse ejecutado la funcion, b se pasa por valor y no por referencia, entonces su valor sigue siendo 10 xq estamos en el contexto global
console.log(x);
// Imprime 1 porque estamos en el contexto global nuevamente
//10 8 8 9 10 1
```



```javascript
console.log(bar);
//undefined
console.log(baz);
// Error :( no esta definida
foo();
//"Hola!"
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
//franco
```

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
//Tony
//Franco
//Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
//The flash
//Reverse flash
//The flash
//Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"
//2 xq transforma a numero el 3
"2" * "3"
//6 xq transforma a numeros el 2 y el 3
4 + 5 + "px"
//9px porq x precedencia y asociatividad suma de izq a derecha
"$" + 4 + 5
// $45 por lo mismo de arriba
"4" - 2
//2 xq transforma a numero el 4
"4px" - 2
//NaN xq no puede transformar el 4px a numero
7 / 0
//Infinity
{}[0]
//0
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
//undefined, 2 Porque las funciones a ser de primera clase hacen el hoisting, la variable tambien lo hace, pero solo la declaracion, es decir existe pero no se le asigno el valor aun
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
//undefined xq hizo hoisting de var snack; pero no tiene valor
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //aurelio de rosa xq el this esta en la funcion del objeto prop{}

var test = obj.prop.getFullname; 

console.log(test()); // Juan perez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
//1 4 3 2  xq el timeout de 2 es mayor al de 3 supongo
```
