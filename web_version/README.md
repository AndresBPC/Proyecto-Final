# Between Shadows & Decissions - Web Version

## 📱 Versión Web / Móvil

Esta es una versión completamente separada del juego desarrollada en **HTML5, CSS3 y JavaScript** para funcionar directamente en navegadores web, incluyendo dispositivos móviles.

### ✨ Características

- ✅ **Totalmente Responsivo**: Funciona en móviles, tablets y desktops
- ✅ **Sin Dependencias**: Solo HTML, CSS y JavaScript vanilla
- ✅ **Optimizado para Móvil**: Interfaz táctil completa
- ✅ **Rápido**: Carga instantánea sin compilación
- ✅ **Compatible**: Chrome, Firefox, Safari, Edge
- ✅ **PWA Ready**: Preparado para ser instalado como app

### 📂 Estructura

```
web_version/
├── index.html          📄 Página principal
├── styles.css          🎨 Estilos responsivos
├── game.js            🎮 Motor del juego
├── data.js            📝 Diálogos y datos
└── README.md          📖 Este archivo
```

### 🚀 Cómo Usar

#### Opción 1: Abrir Localmente
```bash
# Simplemente abre index.html en tu navegador
# Funciona sin servidor necesario
```

#### Opción 2: Servir con Python
```bash
# Python 3
python -m http.server 8000

# Luego abre: http://localhost:8000
```

#### Opción 3: Subir a un Servidor Web
```bash
# Copia todos los archivos al servidor
# Accede desde cualquier navegador
```

### 📱 Compatibilidad

| Dispositivo | Soporte |
|-------------|---------|
| iPhone/iPad | ✅ iOS 12+ |
| Android | ✅ Android 6+ |
| Windows Phone | ✅ Edge |
| Desktop Windows | ✅ Todos los navegadores |
| Desktop Mac | ✅ Todos los navegadores |
| Desktop Linux | ✅ Todos los navegadores |

### 🎯 Controles

- **Móvil**: Toca la pantalla para continuar
- **Desktop**: Click del ratón o presiona cualquier tecla
- **Opciones**: Toca/Haz clic en los botones de respuesta

### 🔧 Tecnologías

- **HTML5**: Canvas API para gráficos
- **CSS3**: Grid, Flexbox, Media Queries
- **JavaScript**: ES6+, sin frameworks
- **Responsive Design**: Mobile-first approach

### 📊 Rendimiento

- **Tamaño Total**: ~50KB (sin comprimir)
- **Tiempo de Carga**: < 1 segundo
- **Compatibilidad**: 98% de navegadores modernos

### 🎨 Personalización

#### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --color-primary: #00d4ff;    /* Azul cian */
    --color-secondary: #ffaa00;  /* Naranja */
    --color-button: #0066cc;     /* Botones */
}
```

#### Agregar Nuevas Escenas
Edita `data.js` y agrega en `gameData.escenas`:
```javascript
'nueva_escena': {
    personaje: 'adrian',
    posicion: 'derecha',
    texto: 'Nuevo diálogo aquí...',
    siguiente: 'siguiente_escena',
    opciones: null
}
```

#### Agregar Nuevos Personajes
Edita `data.js` en `gameData.personajes`:
```javascript
'nombre': { 
    color: '#ffffff', 
    initials: 'NM', 
    nombre: 'Nombre' 
}
```

### 🔒 Seguridad

- ✅ No requiere backend
- ✅ Todos los datos locales en el navegador
- ✅ Sin conexión a internet necesaria
- ✅ Sin cookies ni tracking

### 📈 Próximas Características

- [ ] Sistema de guardado (localStorage)
- [ ] Historial de decisiones
- [ ] Música y efectos de sonido
- [ ] Animaciones mejoradas
- [ ] Traducción a otros idiomas
- [ ] Tema oscuro/claro automático

### 🐛 Conocidos Issues

- Scrollbar en iOS puede parecer diferente
- Algunos devices antiguos pueden tener performance limitado

### 📝 Notas de Desarrollo

**Diferencias con versión Python:**
- Version Python (v0.1): Desktop Windows
- Version Web: Navegadores (Windows, Mac, Linux, iOS, Android)
- Ambas comparten la misma historia y diálogos

**Flujo de Actualización:**
1. Actualizar `data.js` con nuevos diálogos
2. Actualizar `game.js` si se necesita nueva lógica
3. Actualizar `styles.css` para cambios visuales
4. Subir cambios al servidor web

### 🌐 Despliegue Recomendado

**Hosting Gratuito:**
- Netlify (arrastrar y soltar)
- Vercel (compatible con git)
- GitHub Pages (simple)
- Firebase Hosting (con backend)

**Hosting Pagado:**
- Bluehost, GoDaddy, etc.

### 📞 Licencia

Proyecto de código abierto para uso educativo.

---

**Versión**: Web v0.1  
**Última actualización**: 29 de enero de 2026  
**Estado**: En desarrollo activo ✅
