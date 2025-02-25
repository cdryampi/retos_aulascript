// Un artículo tiene un nombre, un proveedor y un precio. Y un proveedor tiene un nombre, email y telefono.
// Se pide definir una clase (Proveedor) para implementar el objeto proveedor y otra (Articulo) para el obejto artículo.
// Este objeto tiene los siguientes atributos o propiedades:

// proveedor: un objeto proveedor, a quien se compra el artículo
// nombre: una cadena, nombre del artículo
// precio: un número, precio del artículo
// Y métodos:

// telefono(): devuelve un objeto con el nombre y teléfono del proveedor
// Por su parte el objeto proveedor tiene como propiedades

// nombre: cadena de texto, nombre del proveedor
// email: un email, correo del proveedor
// teléfono: una cadena de dígitos, teléfono del proveedor
// Puedes implementarlo con create, function o con class

// Ejemplo de uso:
class Proveedor {
  constructor(nombre, email, telefono) {
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
  }
}

class Articulo {
  constructor(nombre, proveedor, precio) {
    this.nombre = nombre;
    this.proveedor = proveedor;
    this.precio = precio;
  }
  telefono() {
    return `proveedor: ${this.proveedor.nombre}, telefono: ${this.proveedor.telefono}`;
  }
}

let proveedor_1 = new Proveedor("Juan", "juan@gmail.com", 123456);
let articulo_1 = new Articulo("Lapiz", proveedor_1, 10);
console.log(articulo_1.telefono()); // {nombre: "Juan",telefono: 123456}
