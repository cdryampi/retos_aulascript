// En esta ocasión tienes una lista de clientes, cada cliente es un objeto con atributos: nombre, email, telefono.

// Se quiere crear una clase Factura para gestionar las facturas emitidas a los clientes. Las propiedades de esta clase son

// idCliente: número de cliente (su lugar en la lista de clientes)
// total: número con el imorte total de la factura
// estado: pagada o pendiente
// Los métodos serán

// cobrar(): pone el estado en pagada.
// imprimir(): imprime los datos de la factura
// Para probar crea tres clieentes y al menos una factura.

class Cliente {
  constructor(nombre, email, telefono) {
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
  }
}

class Factura {
  constructor(idCliente, total, estado) {
    this.idCliente = idCliente;
    this.total = total;
    this.estado = "pendiente";
  }
  cobrar() {
    if (this.estado === "pendiente") {
      this.estado = "pagada";
    } else {
      console.log("La factura ya fue pagada");
    }
  }
  imprimir() {
    console.log(`Cliente: ${lista_clientes[this.idCliente].nombre}`);
    console.log(`Email: ${lista_clientes[this.idCliente].email}`);
    console.log(`Telefono: ${lista_clientes[this.idCliente].telefono}`);
    console.log(`Total: ${this.total}`);
    console.log(`Estado: ${this.estado}`);
  }
}

const lista_clientes = [
  new Cliente("Juan", "juan@gmail.com", 123456789),
  new Cliente("Maria", "maria@gmail.com", 987654321),
  new Cliente("Pedro", "pedro@gmail.com", 456789123),
];

const facturas = [
  new Factura(0, 100, "pendiente"),
  new Factura(1, 200, "pendiente"),
  new Factura(2, 300, "pendiente"),
];

for (let factura in facturas) {
  facturas[factura].imprimir();
  facturas[factura].cobrar();
  facturas[factura].imprimir();
  console.log("---------------------");
}
