// Tienes que crear un script que gestione una lista de la compra.
// Para ello tienes dos listas de artículos: compra, pendiente.
// Cada elemento de la lista compra es un objeto con dos propiedades: nombre del artículo y estado.
// Estado es un booleano true si el artículo se compró, false en caso contrario. Pendiente es una lista con los nombres de los artículos que faltan por comprar.
// La función que debes crear recibe como argumento la lista de compra y devuelve la lista de pendientes.

const lista_compra = [
  { nombre: "manzanas", estado: false },
  { nombre: "peras", estado: false },
  { nombre: "plátanos", estado: false },
  { nombre: "fresas", estado: false },
  { nombre: "uvas", estado: true },
  { nombre: "kiwis", estado: true },
  { nombre: "naranjas", estado: true },
  { nombre: "melocotones", estado: true },
  { nombre: "sandías", estado: false },
  { nombre: "melones", estado: true },
  { nombre: "piñas", estado: false },
  { nombre: "mangos", estado: false },
  { nombre: "papayas", estado: true },
  { nombre: "cerezas", estado: false },
  { nombre: "ciruelas", estado: false },
  { nombre: "albaricoques", estado: true },
  { nombre: "frambuesas", estado: false },
  { nombre: "arándanos", estado: false },
  { nombre: "moras", estado: false },
];

const filtrar_compra = (lista_compra) => {
  const pendientes = lista_compra
    .filter((item) => {
      if (item.estado === false) {
        return item.nombre;
      }
    })
    .map((item) => item.nombre);

  return pendientes;
};

const result = filtrar_compra(lista_compra);

console.table(result);
