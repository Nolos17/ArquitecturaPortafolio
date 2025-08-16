# Frontend - Microservicio de Optimización de Portafolio

Este proyecto frontend permite interactuar con el microservicio de optimización de portafolio, ingresando proyectos y capacidad para obtener la combinación óptima de inversiones. Se ha estilizado con **Bootstrap** para una interfaz simple y responsive.

---

## Requisitos

- Node.js 18+
- NPM

---

## Instalación y ejecución

1. **Instalar dependencias**

```bash
npm install
```

2. **Ejecutar proyecto en modo desarrollo**

```bash
npm run dev
```

3. El frontend estará disponible en:

```
http://localhost:5173
```

---

## Configuración de la API

El proyecto consume la API del backend en la siguiente URL:

```
http://localhost:8000/optimizar
```

Asegúrese de que el backend esté ejecutándose antes de usar el frontend.

---

## Validación

- Ingrese la capacidad total y agregue los proyectos mediante el formulario dinámico.
- Presione **Calcular** para obtener los proyectos seleccionados, ganancia total y peso total.
- La información se muestra en una tabla y puede incluir gráficos opcionales.

---

## Estilo

Se utilizó **Bootstrap** para:

- Formularios responsivos.
- Botones y tablas estilizados.
- Divs/cards para resultados claros.

---
