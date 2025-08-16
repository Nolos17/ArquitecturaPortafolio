
# Microservicio de Optimización de Portafolio de Inversiones

Este microservicio permite calcular la combinación óptima de proyectos o inversiones para maximizar la ganancia sin exceder un presupuesto determinado. Implementado con **FastAPI** y un algoritmo de **programación dinámica**.

---

## Requisitos

- Python 3.10+
- FastAPI
- Uvicorn

---

## Instalación

1. **Crear entorno virtual**

```bash
py -m venv .venv
```

2. **Activar entorno virtual**

- Windows (Git Bash o CMD):
```bash
source .venv/Scripts/activate
```
- Linux / macOS:
```bash
source .venv/bin/activate
```

3. **Actualizar pip**

```bash
python -m pip install --upgrade pip
```

4. **Instalar dependencias**

```bash
pip install "fastapi[standard]"
```

---

## Ejecución

Para iniciar el servidor en modo desarrollo:

```bash
uvicorn app.main:app --reload --port 8000
```

El microservicio quedará disponible en:

- Swagger UI: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)  
- Redoc: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

---

## Endpoint principal

### `POST /optimizar`

Calcula la combinación óptima de proyectos según el presupuesto.

**Entrada (JSON)**

```json
{
  "capacidad": 10000,
  "objetos": [
    {"nombre": "A", "peso": 2000, "ganancia": 1500},
    {"nombre": "B", "peso": 4000, "ganancia": 3500},
    {"nombre": "C", "peso": 5000, "ganancia": 4000},
    {"nombre": "D", "peso": 3000, "ganancia": 2500}
  ]
}
```

**Salida (JSON)**

```json
{
  "seleccionados": ["B", "C"],
  "ganancia_total": 7500,
  "peso_total": 9000
}
```

---

## Pruebas recomendadas

- Casos de éxito:
  - Presupuesto suficiente para seleccionar los proyectos más rentables.
  - Presupuesto limitado, optimizando la combinación.
  - Proyectos de bajo costo con alta ganancia.
- Casos límite:
  - Capacidad = 0
  - Objetos duplicados
  - Pesos o ganancias = 0
- Casos de error:
  - Datos faltantes
  - Valores negativos
  - Formato incorrecto (ej: texto en lugar de número)

Se pueden realizar las pruebas desde **Swagger UI**, **Postman**, o mediante un cliente HTTP en React/Frontend.

---

## Documentación

- OpenAPI/Swagger: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)  
- Redoc: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

---

