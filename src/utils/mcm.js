export const mcm = (num1, num2) => {
  // Función para calcular el mínimo común múltiplo de dos números
  let mcm = [];
  let i = 2;
  while (num1 > 1 || num2 > 1) {
    if (num1 % i === 0 || num2 % i === 0) {
      mcm.push(i);
      if (num1 % i === 0) {
        num1 = num1 / i;
      }
      if (num2 % i === 0) {
        num2 = num2 / i;
      }
    } else {
      i++;
    }
  }
  console.log(mcm);
  return mcm.reduce((a, b) => a * b, 1);
};
