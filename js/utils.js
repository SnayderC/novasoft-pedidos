// Funciones auxiliares compartidas.

function formatearMoneda(valor) {
  return "$" + Number(valor).toFixed(2);
}

function esNumeroPositivo(valor) {
  return typeof valor === "number" && Number.isFinite(valor) && valor > 0;
}
