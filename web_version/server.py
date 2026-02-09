#!/usr/bin/env python3
"""Servidor simple para la versión web del juego."""
import http.server
import socketserver
import os

# Cambiar a la carpeta del script
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Agregar headers para evitar caché
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def log_message(self, format, *args):
        # Log personalizado
        print(f"[{self.client_address[0]}] {format%args}")

PORT = 8000
Handler = MyHTTPRequestHandler

print("╔════════════════════════════════════════════════════════╗")
print("║  Servidor web - Between Shadows & Decissions")
print(f"║  Dirección: http://localhost:{PORT}")
print(f"║  Carpeta: {os.getcwd()}")
print("╚════════════════════════════════════════════════════════╝")
print()

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"✓ Servidor iniciado en puerto {PORT}")
        print("Presiona Ctrl+C para detener...")
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\n✓ Servidor detenido")
except Exception as e:
    print(f"✗ Error: {e}")
