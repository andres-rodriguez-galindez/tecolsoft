import subprocess
import os
import ctypes
import sys
import time

def ejecutar_comando(comando):
    """Ejecuta un comando en el terminal y devuelve el resultado."""
    try:
        print(f"\nEjecutando: {comando}")
        if "release" in comando:
            print("⚠ La conexión de red se desactivará temporalmente...")
        resultado = subprocess.run(comando, shell=True, capture_output=True, text=True, encoding='utf-8')
        print("-" * 50)
        if resultado.returncode == 0:
            print(f"✓ Comando ejecutado exitosamente")
            if "release" in comando:
                print("⚠ Conexión desactivada. Espere...")
                time.sleep(2)
            elif "renew" in comando:
                print("⚠ Reconectando... Esto puede tomar unos segundos...")
                time.sleep(5)
            print(resultado.stdout)
            return True
        else:
            print(f"✗ Error al ejecutar el comando")
            print(resultado.stderr)
            return False
    except subprocess.SubprocessError as e:
        print(f"✗ Error al ejecutar el proceso: {str(e)}")
        return False
    except Exception as e:
        print(f"✗ Error inesperado: {str(e)}")
        return False

def es_administrador():
    """Verifica si el script se está ejecutando como administrador."""
    try:
        return ctypes.windll.shell32.IsUserAnAdmin()
    except Exception as e:
        print(f"✗ Error al verificar permisos de administrador: {str(e)}")
        return False

def main():
    if not es_administrador():
        print("⚠ Este script debe ejecutarse como administrador")
        try:
            ctypes.windll.shell32.ShellExecuteW(None, "runas", sys.executable, __file__, None, 1)
        except Exception as e:
            print(f"✗ Error al elevar privilegios: {str(e)}")
        return

    print("\n=== INICIANDO PROCESO DE REFRESCADO DE RED ===")
    comandos = [
        "ipconfig /flushdns",
        "ipconfig /release",
        "ipconfig /renew"
    ]
    
    exitos = 0
    for comando in comandos:
        if ejecutar_comando(comando):
            exitos += 1
        time.sleep(1)

    print(f"\n=== PROCESO COMPLETADO ({exitos}/{len(comandos)} exitosos) ===")
    input("\nPresione Enter para cerrar...")

if __name__ == "__main__":
    main()