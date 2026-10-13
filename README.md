# NovaSoft · Sistema de gestión de pedidos

Proyecto académico de la asignatura **Gestión de la Configuración de Software (UNEMI)**.

El objetivo no es construir un sistema completo, sino demostrar operaciones de control de
versiones con Git sobre un proyecto pequeño: revert, rebase interactivo, recuperación de
archivos, resolución de conflictos y etiquetado de versiones.

## Estructura

```
index.html        Interfaz básica para registrar pedidos
css/styles.css    Estilos
js/utils.js       Funciones auxiliares (formato de moneda)
js/clientes.js    Datos y búsqueda de clientes
js/pedidos.js     Lógica de pedidos (cálculo de totales)
```

## Cómo ejecutarlo

Abrir `index.html` en el navegador. No requiere instalación.

## Situaciones demostradas

| N.º | Situación                                   | Operación                |
|-----|---------------------------------------------|--------------------------|
| 1   | Error introducido directamente en `main`    | `git revert`             |
| 2   | Commit que no debe integrarse               | `git rebase -i` (drop)   |
| 3   | Archivo eliminado accidentalmente           | `git restore --source`   |
| 4   | Conflicto por cambios en la misma sección   | `git merge` + resolución |
| 5   | Identificar versión estable                 | `git tag -a v1.0.0`      |

## Integrantes

- Snayder
- Jenny Vasquez
- Ezequiel Jaramillo
- Julio Jimenez
- Francisco Ronquillo
