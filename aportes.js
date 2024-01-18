function calcularAportes() {
  let cedula = document.getElementById('cedula').value;
  let billetes5 = parseInt(document.getElementById('billetes5').value) || 0;
  let billetes10 = parseInt(document.getElementById('billetes10').value) || 0;
  let billetes20 = parseInt(document.getElementById('billetes20').value) || 0;

  let montoTotal = (billetes5 * 5) + (billetes10 * 10) + (billetes20 * 20);
  alert(`Monto total aportado por ${cedula}: $${montoTotal}`);

  let totalDiaAnterior = 0;  // Debes inicializarla con el total acumulado hasta el día anterior
  let totalDiaActual = totalDiaAnterior + montoTotal;
  let totalIncluyendoAnteriores = totalDiaActual + totalDiaAnterior;
  let porcentajeBilletes20 = (billetes20 / (billetes5 + billetes10 + billetes20)) * 100;

  console.log(`Total reunido en el día: $${totalDiaActual}`);
  console.log(`Total incluyendo días anteriores: $${totalIncluyendoAnteriores}`);
  console.log(`Porcentaje de billetes de $20: ${porcentajeBilletes20}%`);
}
