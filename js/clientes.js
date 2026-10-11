// Datos de ejemplo de clientes y búsqueda.

const clientes = [
  { id: 1, nombre: "Comercial Andrade" },
  { id: 2, nombre: "Distribuidora del Valle" },
  { id: 3, nombre: "Ferretería La Esquina" }
];

function buscarCliente(id) {
  return clientes.find((cliente) => cliente.id === id) || null;
}

function cargarClientes(select) {
  clientes.forEach((cliente) => {
    const opcion = document.createElement("option");
    opcion.value = cliente.id;
    opcion.textContent = cliente.nombre;
    select.appendChild(opcion);
  });
}
