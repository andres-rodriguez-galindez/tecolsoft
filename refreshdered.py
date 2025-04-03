import subprocess
import os
import ctypes
import sys
import time

def ejecutar_comando(comando):
    """Ejecuta un comando en el terminal y devuelve el resultado."""
    try:
        print(f"\nEjecutando: {comando}")
        resultado = subprocess.run(comando, shell=True, capture_output=True, text=True, encoding='utf-8')
        print("-" * 50)
        if resultado.returncode == 0:
            print(f"✓ Comando ejecutado exitosamente")
            print(resultado.stdout)
            return True
        else:
            print(f"✗ Error al ejecutar el comando")
            print(resultado.stderr)
            return False

def es_administrador():
    """Verifica si el script se está ejecutando como administrador."""
    try:
        return ctypes.windll.shell32.IsUserAnAdmin()
    except:
        return False

def main():
    if not es_administrador():
        print("Este script debe ejecutarse como administrador.")
        # Reintentar ejecutarlo como administrador
        ctypes.windll.shell32.ShellExecuteW(None, "runas", sys.executable, __file__, None, 1)
        return

    print("Refrescando la red...")
    # Ejecutar los comandos necesarios
    ejecutar_comando(["ipconfig", "/flushdns"])
    ejecutar_comando(["ipconfig", "/release"])
    ejecutar_comando(["ipconfig", "/renew"])
    print("Proceso completado.")

if __name__ == "__main__":
    main()