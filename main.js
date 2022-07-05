console.log("hola")

alert("Introduccion a JS")

// Tipos de variables

// Numéricas

var iva = 16;        // variable tipo entero
var total = 234.65;  // variable tipo decimal
var numero$1= 1
var variosNumeros = 12345351
console.log(iva)
console.log(total)
console.log(numero$1)
console.log(variosNumeros)

//  Cadenas de texto

var mensajeSimple = "Bienvenido";
var nombreProducto = 'Producto top';
var letraSeleccionada = 'A';
var ultimaLetra = "z"
console.log(mensajeSimple)
console.log(nombreProducto)
console.log(letraSeleccionada)
console.log(ultimaLetra)

// si un texto ya se encuentra encerrado en comillas dobles, lo correcto es encerrar el siguiente grupo 
// con comillas simples y viceversa
var texto1 = "Una frase con 'comillas simples' dentro";
var texto2 = 'Una frase con "comillas dobles" dentro';
var mensaje = "Hola Mundo! \n ejmplo de \'comillas simples\' \n y \"comillas dobles\" "
console.log(mensaje)
console.log(texto1)
console.log(texto2)

// Arrays
// Se pueden agrupar todas las variables relacionadas en una coleccion de variables o "array"
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
console.log(dias)
// Para acceder a un indice del Array, es necesario contar desde 0, donde cero es la primera poscionio hasta n-1 donde es la utlima posicion
var diaSeleccionado = dias[0];
var diaSeleccionado2 = dias[0];
console.log(diaSeleccionado)
console.log(diaSeleccionado2)
// alert(dias)

// Objetos
// Los objetos son variables que nos ayudan a almacenar diversas propiedades
// Pueden almacenar cualquier tipo de variable: texto1, numeros, arrays, mas objetos
// e incluso funciones
var personaReal = {
  nombre: "Javier",
  apellido: "Carrillo",
  edad: 50,
  hoobies: ["leer", "ver peliculas", "viajar"],
  vivo: true
}
console.log(personaReal)
console.log(personaReal.hoobies[2])
console.log(personaReal.hoobies)
console.log("En total son " + personaReal.hoobies.length + " hobbies")


// Booleanos
// Son variables de tipo logico. almacena un tipo especial de valor que solamente puede tomar dos valores 
// True (verdadero) o false (falso)

var clienteRegistrado = false;
var precioAcorde = true;
console.log(clienteRegistrado)
console.log(precioAcorde)

// Operaciones aritméticas con las variables
var x = 5;
var y = 10;
console.log(x)
console.log(y)
suma = x + y;
resta = y - x;
multi = x * y;
division = y / x;
console.log(suma)
console.log(resta)
console.log(multi)
console.log(division)

// Expresiones y Operadores

// Operadores de comparación

var var1 = 3;
var var2 = 4;
// igual
console.log(3 == var1) //true
console.log("3" == var1) //true
// No es igual
console.log(var1 != 4) //true
console.log(var1 != var2) //true
// es estrictament igual
console.log("3" === var1)//false
console.log(3 === var1) //true
//desigualdad estricta
console.log(var1 !== "3") //true
console.log(3 !== var1) //false
// Mayor que
console.log(var2 > var1) //true
console.log(var1 > var2) //false
// Menor que 
console.log(var1 < var2) //true
console.log(var2 < var1) //false
// Mayor o igual que
console.log(var1 >= var2) //false
console.log(var1 >= "3") //true
// Menor o igual que
console.log( var1 <= var2) //true
console.log("6" <= "8") // true

// Asignación AND lógico
var numero1 = 5;
var numero2 = 6;
// x &&= y  /*lo mismo que*/ x && (x = y)
console.log(numero1 && numero2 < 2); //false
// // Asignación OR lógico
console.log(numero1 > 1 || numero2 < 2) //true
// solo es necesario una afirmacion para que el elemento devuelva true
// x ||= y /*lo mismo que*/ x || (x = y)