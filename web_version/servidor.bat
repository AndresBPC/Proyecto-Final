@echo off
REM Servidor local para probar la versión web del juego
REM Requiere Python instalado

cd /d "%~dp0"

echo.
echo ====================================================
echo Between Shadows and Decissions - Web Server
echo ====================================================
echo.

REM Verificar si Python está instalado
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Python no está instalado o no está en el PATH
    echo.
    echo Soluciones:
    echo 1. Instala Python desde https://www.python.org
    echo 2. Marca "Add Python to PATH" durante la instalación
    echo.
    pause
    exit /b 1
)

echo [OK] Python detectado
echo.

REM Intentar con Python 3
python -m http.server 8000

echo.
echo Si el navegador no se abre automáticamente, ve a:
echo http://localhost:8000
echo.
pause
