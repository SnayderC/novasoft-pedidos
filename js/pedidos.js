// Lógica principal de pedidos.

const items = [];

function calcularTotal(items) {
  const subtotal = items.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
  return subtotal + 2.5;
}

function agregarItem(producto, precio, cantidad) {
  if (!producto.trim()) {
    return "Ingresa el nombre del producto.";
  }
  if (!esNumeroPositivo(precio) || !esNumeroPositivo(cantidad)) {
    return "El precio y la cantidad deben ser mayores que cero.";
  }
  items.push({ producto: producto.trim(), precio, cantidad });
  return null;
}

function renderizar() {
  const lista = document.getElementById("lista-items");
  lista.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.producto} x${item.cantidad} — ${formatearMoneda(item.precio * item.cantidad)}`;
    lista.appendChild(li);
  });
  document.getElementById("total").textContent = formatearMoneda(calcularTotal(items));
}

document.addEventListener("DOMContentLoaded", () => {
  cargarClientes(document.getElementById("cliente"));

  document.getElementById("btn-agregar").addEventListener("click", () => {
    const producto = document.getElementById("producto").value;
    const precio = Number(document.getElementById("precio").value);
    const cantidad = Number(document.getElementById("cantidad").value);

    const error = agregarItem(producto, precio, cantidad);
    document.getElementById("mensaje").textContent = error || "";
    if (!error) renderizar();
  });
});
