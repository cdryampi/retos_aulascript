export const check_number = (number) => {
  // Comprueba si el valor introducido es un número entero
  let numero = 0;
  if (isNaN(number) || number === "") {
    return false;
  }
  try {
    numero = parseInt(number);
  } catch (error) {
    return false;
  }
  return numero;
};
