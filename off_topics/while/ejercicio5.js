// Escribir un script que pida al usuario una contraseña.
// Si coincide con la clave definida en el script le devolverá el mensaje "Acceso concedido" y si no coincide le devolverá el mensaje "Acceso Denegado" .
// Si falla tres veces se emitirá el mensaje "Alerta, intruso"

const check_password = (password = "") => {
  const password = "1234";
  let intentos = 0;
  let pass = "";
  while (intentos < 3 && pass !== password) {
    pass = prompt("Introduce la contraseña");
    if (pass === password) {
      console.log("Acceso concedido");
      return;
    }
    console.log("Acceso denegado");
    intentos++;
  }
  return 0;
};
