// Define un objeto, mediante una expresión, que tenga dos propiedades: precio y descuento y un método neto.
// El método calculará el precio con el descuento aplicado. Los valores se pedirán por teclado

// resultado

const producto = {
  precio: 100,
  descuento: 10,
  neto: function () {
    if (this.descuento > this.precio) {
      return 0;
    }
    let descuento = (this.precio * this.descuento) / 100;

    if (descuento - this.precio > 0) {
      return 0;
    }
    return this.precio - descuento;
  },
};

producto.precio = 400;

producto.descuento = 10;

console.log(producto.neto());
