function aplicarDescuento(total, porcentaje) {
  if (porcentaje < 0 || porcentaje > 100) {
    throw new Error("El porcentaje debe estar entre 0 y 100");
  }

  return total - (total * porcentaje / 100);
}
