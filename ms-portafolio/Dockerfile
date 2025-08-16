# Imagen base de Python
FROM python:3.12-slim

# Establecer directorio de trabajo
WORKDIR /app

# Copiar requirements y código
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY ./app ./app

# Exponer puerto a utilizar
EXPOSE 8000

# PAra ejecutar la Api
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
