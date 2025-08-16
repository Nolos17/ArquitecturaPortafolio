# Proyecto Optimizador de Portafolio

## Requisitos

- Docker
- Docker Compose

## Estructura de carpetas

```
/ArquitecturaPortafolio
  /ms-portafolio
    Dockerfile
    requirements.txt
    /app
  /portafolio-front
    Dockerfile
    package.json
  docker-compose.yml
```

## Instrucciones de despliegue

1. Abrir terminal en la raíz del proyecto.
2. Construir los contenedores:

```bash
docker-compose build
```

3. Levantar los contenedores:

```bash
docker-compose up
```

4. Acceder:

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:8000/docs](http://localhost:8000/docs)
- Para mas detalles del funcionamiento revise el archivo **README.md** de cada proyecto

## Nota

- Las llamadas Axios del frontend apuntan al backend automáticamente mediante `VITE_BACKEND_URL`.
- Para reiniciar contenedores:

```bash
docker-compose down
docker-compose up --build
```
