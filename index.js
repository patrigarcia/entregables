function multiplicar(num1, num2) {
  let producto = num1 * num2;
  return producto;
}

let producto = multiplicar(12, 2);
console.log(producto);

//--------------------------------------------//

function edades() {
  let edad = prompt("Ingresa tu edad en años: ");

  if (edad < 18) {
    console.log("Eres menor de edad");
  } else if (edad >= 18 && edad < 60) {
    console.log("Eres mayor de edad");
  } else {
    console.log("Eres un adulto mayor");
  }
}
edades();

//--------------------------------------------//

function sumaTresNumeros(n1, n2, n3) {
  if (
    typeof n1 !== "number" ||
    typeof n2 !== "number" ||
    typeof n3 !== "number"
  ) {
    return "Debo ser ejecutada con números";
  }

  return n1 + n2 + n3;
}

console.log(sumaTresNumeros(10, 5, 10));
console.log(sumaTresNumeros(10, "gato", 10));

//--------------------------------------------//
