# ⚡ GUÍA DE PRUEBA - Versión Web

## 🎮 Cómo Probar la Versión Web

### Opción 1: Abrir Directamente (Más Fácil)
```bash
# Simplemente abre index.html con tu navegador
# Doble-click en: web_version/index.html
```

✅ Ventajas:
- No requiere servidor
- Funciona offline
- Sin instalaciones adicionales

### Opción 2: Usar Servidor Local (Recomendado)
```bash
# Windows: Doble-click en
web_version/servidor.bat

# Mac/Linux: En terminal
cd web_version
python3 -m http.server 8000

# Luego abre en tu navegador:
# http://localhost:8000
```

### Opción 3: Usar Visual Studio Code
```bash
# Extensión: Live Server (por Ritwick Dey)
# Click derecho en index.html
# Selecciona "Open with Live Server"
```

---

## ✅ Checklist de Pruebas

### Desktop
- [ ] Se carga la página correctamente
- [ ] Se muestra el título y versión
- [ ] Aparece el primer diálogo
- [ ] El indicador parpadea
- [ ] Se puede hacer click para continuar
- [ ] Los personajes se dibujan correctamente
- [ ] Las opciones aparecen cuando toca
- [ ] Se limpian los botones al seleccionar

### Móvil (iOS/Android)
- [ ] La página se adapta al tamaño
- [ ] El texto es legible sin zoom
- [ ] Los botones son tocables (>44px)
- [ ] Se puede tocar para continuar
- [ ] Se ve correctamente en landscape
- [ ] Sin scroll horizontal innecesario
- [ ] El canvas se ajusta correctamente

### Navegadores
- [ ] Chrome/Chromium ✅
- [ ] Firefox ✅
- [ ] Safari (macOS e iOS) ✅
- [ ] Edge ✅

---

## 🐛 Solución de Problemas

### El juego no carga
**Solución**: Abre la consola del navegador (F12) y busca errores

### Los botones no responden
**Solución**: Prueba en diferente navegador

### Se ve mal en móvil
**Solución**: Verifica que viewport meta esté correctamente en index.html

### Canvas en blanco
**Solución**: Canvas API podría no estar soportada - actualiza navegador

---

## 📊 Información Técnica

### Archivos Necesarios
```
web_version/
├── index.html      ← Página HTML (obligatorio)
├── styles.css      ← Estilos (obligatorio)
├── game.js         ← Lógica del juego (obligatorio)
├── data.js         ← Diálogos y datos (obligatorio)
└── servidor.bat    ← Servidor local (opcional)
```

### Tamaño Total
- index.html: ~3 KB
- styles.css: ~8 KB
- game.js: ~7 KB
- data.js: ~12 KB
- **Total: ~30 KB**

---

## 🚀 Próximos Pasos

1. ✅ Probar en tu navegador favorito
2. ✅ Probar en un dispositivo móvil
3. ✅ Verificar que todos los diálogos funcionan
4. ✅ Una vez estable, subir a un servidor web

---

## 💡 Consejos

- **Para desarrollo**: Usa `servidor.bat` o Live Server
- **Para producción**: Sube a Netlify, Vercel o GitHub Pages
- **Para actualizar**: Modifica `data.js` con nuevos diálogos
- **Para mejorar UI**: Edita `styles.css`

---

¡Listo para probar! 🎮
