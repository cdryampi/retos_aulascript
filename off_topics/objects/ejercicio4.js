// Construye una clase usando function para implementar una cuenta de efectivo.
// Poseerá dos propiedades: nombre del titular y saldo. Además debe tener dos métodos: ingresar() y retirar().
// El primero incrementa el saldo en la cantidad indicada en el argumento y el segundo lo reduce.
// No se puede sacar más de lo que exista en el saldo.

const cuenta = {
  titular: "",
  saldo: 0,
  ingresar: function (cantidad) {
    if (cantidad >= 0) {
      this.saldo += cantidad;
    } else {
      console.log("No se puede ingresar una cantidad negativa");
    }
    return this.saldo;
  },
  retirar: function (cantidad) {
    if (this.saldo >= cantidad) {
      this.saldo -= cantidad;
    } else {
      console.log("No hay suficiente saldo");
    }
    return this.saldo;
  },
  totalNeto: function () {
    return this.saldo;
  },
  default: function (callback) {
    callback();
    return this;
  },
};

const cuenta_nueva = Object.create(cuenta);
cuenta_nueva.titular = "Juan";
console.log(cuenta_nueva.ingresar(100));
console.log(cuenta_nueva.retirar(50));
console.log(cuenta_nueva.retirar(100));
console.log(cuenta_nueva.ingresar(-100));
console.log(
  cuenta_nueva.default(function () {
    console.log("Hola");
  })
);
console.log(cuenta_nueva.totalNeto());
