@echo off
echo ╔════════════════════════════════════════════════════════╗
echo ║  Iniciando servidor web para Between Shadows & Decissions
echo ║  Dirección: http://localhost:8000
echo ╚════════════════════════════════════════════════════════╝
echo.

REM Cambiar a la carpeta actual
cd /d "%~dp0"

REM Iniciar servidor Python HTTP
python -m http.server 8000

pause
