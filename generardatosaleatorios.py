import pandas as pd
import numpy as np
from faker import Faker
import random
from datetime import datetime, timedelta

# Configurar Faker para datos en español
fake = Faker('es_ES')

# Función para generar fechas aleatorias
def random_date(start_date, end_date):
    time_between = end_date - start_date
    days_between = time_between.days
    random_days = random.randrange(days_between)
    return start_date + timedelta(days=random_days)

# Definir fechas
start_date = datetime(2023, 1, 1)
end_date = datetime(2025, 4, 11)

# Crear datos para cada hoja
# 1. Hoja de Ventas (5,000 filas)
ventas = {
    'ID_Venta': range(1, 5001),
    'Fecha': [random_date(start_date, end_date) for _ in range(5000)],
    'ID_Cliente': [random.randint(1, 1000) for _ in range(5000)],
    'ID_Producto': [random.randint(1, 500) for _ in range(5000)],
    'ID_Empleado': [random.randint(1, 200) for _ in range(5000)],
    'ID_Region': [random.randint(1, 50) for _ in range(5000)],
    'Cantidad': [random.randint(1, 20) for _ in range(5000)],
    'Precio_Unitario': [round(random.uniform(10, 500), 2) for _ in range(5000)]
}
ventas['Total'] = [q * p for q, p in zip(ventas['Cantidad'], ventas['Precio_Unitario'])]
df_ventas = pd.DataFrame(ventas)

# 2. Hoja de Clientes (2,000 filas)
clientes = {
    'ID_Cliente': range(1, 2001),
    'Nombre': [fake.name() for _ in range(2000)],
    'Email': [fake.email() for _ in range(2000)],
    'Ciudad': [fake.city() for _ in range(2000)],
    'ID_Region': [random.randint(1, 50) for _ in range(2000)],
    'Segmento': [random.choice(['Pequeño', 'Mediano', 'Grande']) for _ in range(2000)]
}
df_clientes = pd.DataFrame(clientes)

# 3. Hoja de Productos (2,000 filas)
productos = {
    'ID_Producto': range(1, 2001),
    'Nombre_Producto': [fake.word().capitalize() + " " + str(i) for i in range(1, 2001)],
    'Categoría': [random.choice(['Electrónica', 'Ropa', 'Hogar', 'Alimentos', 'Juguetes']) for _ in range(2000)],
    'Precio_Estandar': [round(random.uniform(5, 600), 2) for _ in range(2000)]
}
df_productos = pd.DataFrame(productos)

# 4. Hoja de Empleados (2,000 filas)
empleados = {
    'ID_Empleado': range(1, 2001),
    'Nombre': [fake.name() for _ in range(2000)],
    'Rol': [random.choice(['Vendedor', 'Supervisor', 'Gerente']) for _ in range(2000)],
    'ID_Region': [random.randint(1, 50) for _ in range(2000)],
    'Fecha_Contratacion': [random_date(datetime(2018, 1, 1), end_date) for _ in range(2000)]
}
df_empleados = pd.DataFrame(empleados)

# 5. Hoja de Inventario (2,000 filas)
inventario = {
    'ID_Producto': range(1, 2001),
    'Stock_Actual': [random.randint(0, 1000) for _ in range(2000)],
    'Stock_Minimo': [random.randint(10, 100) for _ in range(2000)],
    'Ultima_Actualizacion': [random_date(start_date, end_date) for _ in range(2000)]
}
df_inventario = pd.DataFrame(inventario)

# 6. Hoja de Regiones (2,000 filas)
regiones = {
    'ID_Region': range(1, 2001),
    'Nombre_Region': [fake.state() for _ in range(2000)],
    'País': ['España' for _ in range(2000)],
    'Gerente_Regional': [fake.name() for _ in range(2000)]
}
df_regiones = pd.DataFrame(regiones)

# Guardar todo en un archivo Excel
with pd.ExcelWriter('DatosParaDashboard.xlsx', engine='openpyxl') as writer:
    df_ventas.to_excel(writer, sheet_name='Ventas', index=False)
    df_clientes.to_excel(writer, sheet_name='Clientes', index=False)
    df_productos.to_excel(writer, sheet_name='Productos', index=False)
    df_empleados.to_excel(writer, sheet_name='Empleados', index=False)
    df_inventario.to_excel(writer, sheet_name='Inventario', index=False)
    df_regiones.to_excel(writer, sheet_name='Regiones', index=False)

print("Archivo 'DatosParaDashboard.xlsx' creado exitosamente.")