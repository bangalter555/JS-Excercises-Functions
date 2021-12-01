// Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
// Ejemplo: "hello world" pasaría a ser "hello world!"
// Tu código:
const agregarSimboloExclamacion = (str) => {
  if (!str) return console.warn(`You didn't pass any value`);
  if (typeof str !== "string") return console.error(`Value must be a string`);

  return `${str}!`;
};

// Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
// Ejemplo: "Soy", "Henry" -> "Soy Henry"
// Tu código:
const combinarNombres = (nombre, apellido) => {
  if (!nombre || !apellido) return console.warn(`You're missing a value`);
  if (typeof nombre !== "string" || typeof apellido !== "string")
    return console.error(`Values must be strings`);

  return `Yo soy ${nombre} ${apellido}`;
};

// Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
// "Martin" -> "Hola Martin!"
// Tu código:
const obtenerSaludo = (nombre) => {
  if (!nombre) return console.warn(`You didn't pass any value`);
  if (typeof nombre !== "string")
    return console.error(`Value must be a string`);

  return `Hola ${nombre}!`;
};

//Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
//Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle
//que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
// Si no es vocal, tambien debe devolver "Dato incorrecto".
//Escribe tu código aquí
const esVocal = (letra) => {
  if (!letra) return console.warn(`No pasaste ninguna letra`);
  if (letra.length > 1) return console.error(`Dato inncorrecto`);
  if (typeof letra !== "string")
    return console.error(`El valor debe ser una letra`);

  return /[aeiou]/gi.test(letra) ? `Es vocal` : `No es vocal`;
};

const devolverString = (str = undefined) => {
  if (!str) return console.warn(`You didn't pass any value`);
  if (typeof str !== "string") return console.error(`Value must be a string`);

  return str;
};

// "x" e "y" son números
// Suma "x" e "y" juntos y devuelve el valor
// Tu código:

const suma = (x = undefined, y = undefined) => {
  if (!x || !y) return console.warn("You're missing a value");
  if (typeof x !== "number" || typeof y !== "number")
    return console.error("Values must be numbers");

  return x + y;
};

// Devuelve "true" si "x" e "y" son iguales
// De lo contrario, devuelve "false"
// Tu código:

const sonIguales = (x, y) => {
  if (!x || !y) return console.warn("You're missing a value");
  if (typeof x !== "number" || typeof y !== "number")
    return console.error("Values must be numbers");

  return x === y;
};

// Devuelve "true" si las dos strings tienen la misma longitud
// De lo contrario, devuelve "false"
// Tu código:

const tienenMismaLongitud = (str1, str2) => {
  if (!str1 || !str2) return console.warn("You're missing a value");
  if (typeof str1 !== "string" || typeof str2 !== "string")
    return console.error("Values must be strings");

  return str1.length === str2.length;
};

// Devuelve "true" si el argumento de la función "num" es menor que noventa
// De lo contrario, devuelve "false"
// Tu código:
const menosQueNoventa = (num) => {
  if (!num) return console.warn(`You didn't pass any value`);
  if (typeof num !== "number") return console.error(`num must be a number`);

  return num < 90;
};

// Obten el resto de la división de "x" entre "y"
// Tu código:
const obtenerResto = (x, y) => {
  if (!x || !y) return console.warn("You're missing a value");
  if (typeof x !== "number" || typeof y !== "number")
    return console.error("Values must be numbers");

  return x % y;
};

// Devuelve "true" si "num" es par
// De lo contrario, devuelve "false"
// Tu código:

const esPar = (num) => {
  if (!num) return console.warn(`You didn't pass any value`);
  if (typeof num !== "number") return console.error(`num must be a number`);

  return num % 2 === 0;
};

// Devuelve "true" si "num" es impar
// De lo contrario, devuelve "false"
// Tu código:

const esImpar = (num) => {
  if (!num) return console.warn(`You didn't pass any value`);
  if (typeof num !== "number") return console.error(`num must be a number`);

  return num % 2 === 1;
};

// Devuelve el valor de "num" elevado al cuadrado
// ojo: No es raiz cuadrada!
// Tu código:
const elevarAlCuadrado = (num) => {
  if (!num) return console.warn(`You didn't pass any value`);
  if (typeof num !== "number") return console.error(`num must be a number`);

  return num * num;
};

// Devuelve el valor de "num" elevado al cubo
// Tu código:
const elevarAlCubo = (num) => {
  if (!num) return console.warn(`You didn't pass any value`);
  if (typeof num !== "number") return console.error(`num must be a number`);

  return Math.pow(num, 3);
};

// Devuelve el valor de "num" elevado al exponente dado en "exponent"
// Tu código:
const elevar = (num, exponent) => {
  if (!num || !exponent) return console.warn(`You're missinng a value`);
  if (typeof num !== "number" || typeof exponent !== "number")
    return console.error(`Values must be numbers`);

  return Math.pow(num, exponent);
};

// Redondea "num" al entero más próximo y devuélvelo
// Tu código:
const redondearNumero = (num) => {
  if (!num) return console.warn(`You didn't pass any value`);
  if (typeof num !== "number") return console.error(`num must be a number`);
  return Math.round(num);
};

// Redondea "num" hacia arriba (al próximo entero) y devuélvelo
// Tu código:
const redondearHaciaArriba = (num) => {
  if (!num) return console.warn(`You didn't pass any value`);
  if (typeof num !== "number") return console.error(`num must be a number`);
  return Math.ceil(num);
};

//Generar un número al azar entre 0 y 1 y devolverlo
//Pista: investigá qué hace el método Math.random()
const numeroRandom = () => {
  return Math.random();
};

//La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
//Si el número es positivo, devolver ---> "Es positivo"
//Si el número es negativo, devolver ---> "Es negativo"
//Si el número es 0, devuelve false
const esPositivo = (numero) => {
  if (!numero) return console.warn(`No ingresaste ningun valor`);
  if (typeof numero !== "number")
    return console.error(`El valor debe ser un numero`);
  if (Number.isInteger(numero) === false)
    return console.error(`El valor dee ser un numero entero`);
  if (numero === 0) return false;
  return numero > 0 ? `Es positivo` : `Es negativo`;
};

// Retornar el area de un rectángulo teniendo su altura y ancho
// Tu código:
const obtenerAreaRectangulo = (alto, ancho) => {
  if (!alto || !ancho) return console.warn(`No ingresaste un valor`);
  if (typeof alto !== "number" || typeof ancho !== "number")
    return console.error(`Los valores deben ser numericos`);

  return `El area del rectangulo es ${alto * ancho} mts2`;
};

//Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
//Escribe tu código aquí
const retornarPerimetro = (lado) => {
  if (!lado) return console.warn(`No ingresaste ningun valor`);
  if (typeof lado !== "number")
    return console.error(`El valor debe ser numerico`);
  return `El perimetro del cuadrado es ${lado * 4} mts`;
};

//Desarrolle una función que calcule el área de un triángulo.
//Escribe tu código aquí
const areaDelTriangulo = (base, altura) => {
  if (!base || !altura) return console.warn(`No ingresaste todos los valores`);
  if (typeof base !== "number" || typeof altura !== "number")
    return console.error(`Todos los valores deben ser numericos`);
  return `El area del triangulo es ${(base * altura) / 2} mts`;
};

//Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
//como parámetro un número de euros y calcule el cambio en dólares.
//Escribe tu código aquí
const deEuroAdolar = (euro) => {
  if (!euro) return console.warn(`No ingresaste ningun valor`);
  if (typeof euro !== "number")
    return console.error(`El valor ingresado debe ser numerico`);

  return `${euro} euros son ${(1.2 * euro) / 1} dolares`;
};