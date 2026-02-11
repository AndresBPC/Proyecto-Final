// ==========================================
// BETWEEN SHADOWS & DECISSIONS v0.4.5 WEB
// Motor de Juego Interactivo (REESCRITO)
// ==========================================

class JuegoWeb {
    constructor() {
        console.log('Inicializando JuegoWeb...');
        
        // Esperar a que el DOM esté completamente listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        console.log('init() llamado');
        
        try {
            // Verificar que gameData existe
            if (typeof gameData === 'undefined') {
                console.error('ERROR: gameData no está definido. Asegúrate de que data.js se carga antes de game.js');
                setTimeout(() => this.init(), 500);
                return;
            }

            console.log('✓ gameData encontrado');
            console.log('  - Versión:', gameData.version);
            console.log('  - Personajes:', Object.keys(gameData.personajes).length);
            console.log('  - Escenas:', Object.keys(gameData.escenas).length);

            // Obtener elementos del DOM
            this.obtenerElementos();

            if (!this.estamosBien()) {
                console.error('ERROR: Faltan elementos del DOM necesarios');
                return;
            }

            // Inicializar variables
            this.escenaActual = null;
            this.nombreJugador = 'Adrián';
            this.escenaNum = 0;
            this.esperandoTecla = false;
            this.decisionTomada = false;
            this.totalEscenas = Object.keys(gameData.escenas).length;

            console.log('✓ Variables inicializadas');
            console.log('✓ Total de escenas:', this.totalEscenas);

            // Configurar listeners
            this.setupEventListeners();

            // Mostrar modal
            this.mostrarModalNombre();

            console.log('✓ Juego inicializado correctamente');
        } catch(error) {
            console.error('Error fatal:', error);
        }
    }

    obtenerElementos() {
        this.dialogBox = document.getElementById('dialogBox');
        this.optionsContainer = document.getElementById('optionsContainer');
        this.indicator = document.getElementById('indicator');
        this.imageDisplay = document.getElementById('imageDisplay');
        this.progressBar = document.getElementById('progressBar');
        this.sceneCounter = document.getElementById('sceneCounter');
        this.nameModal = document.getElementById('nameModal');
        this.playerNameInput = document.getElementById('playerName');
        this.startButton = document.getElementById('startButton');

        console.log('Elementos obtenidos:');
        console.log('  - dialogBox:', !!this.dialogBox);
        console.log('  - imageDisplay:', !!this.imageDisplay);
        console.log('  - nameModal:', !!this.nameModal);
        console.log('  - playerNameInput:', !!this.playerNameInput);
        console.log('  - startButton:', !!this.startButton);
    }

    estamosBien() {
        return this.dialogBox && this.imageDisplay && this.nameModal && 
               this.playerNameInput && this.startButton && this.sceneCounter;
    }

    setupEventListeners() {
        try {
            // Boton de descarga
            const downloadBtn = document.getElementById('downloadBtn');
            if (downloadBtn) {
                downloadBtn.addEventListener('click', () => this.descargarJuego());
            }

            // Boton de inicio
            this.startButton.addEventListener('click', () => this.iniciar());
            
            // Enter en input de nombre
            this.playerNameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.iniciar();
                }
            });

            // Navegación
            document.addEventListener('click', (e) => {
                if (!this.nameModal.classList.contains('active') && 
                    !e.target.classList.contains('option-button') &&
                    !e.target.classList.contains('download-button') &&
                    e.target.type !== 'text' &&
                    this.esperandoTecla && 
                    !this.decisionTomada) {
                    this.siguienteEscena();
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && this.esperandoTecla && !this.decisionTomada) {
                    e.preventDefault();
                    this.siguienteEscena();
                }
            });

            console.log('✓ Event listeners configurados');
        } catch(error) {
            console.error('Error configurando listeners:', error);
        }
    }

    descargarJuego() {
        try {
            console.log('Iniciando descarga del ejecutable...');
            
            const rutaEjecutable = '../dist/Between Shadows & Decissions/Between Shadows & Decissions.exe';
            
            fetch(rutaEjecutable)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Archivo no encontrado');
                    }
                    return response.blob();
                })
                .then(blob => {
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'BSD-v0.4.5.exe';
                    document.body.appendChild(link);
                    link.click();
                    
                    setTimeout(() => {
                        document.body.removeChild(link);
                        URL.revokeObjectURL(url);
                    }, 100);
                    
                    console.log('✓ Descarga iniciada');
                    alert('✓ Descarga iniciada!\n\nEl archivo se descargará a tu carpeta de Descargas.\nNombre: BSD-v0.4.5.exe\n\nUna vez descargado, haz doble clic para ejecutar el juego completo.');
                })
                .catch(error => {
                    console.error('Error:', error);
                    
                    // Fallback: intenta con link directo
                    const link = document.createElement('a');
                    link.href = rutaEjecutable;
                    link.download = 'BSD-v0.4.5.exe';
                    link.click();
                    
                    alert('✓ Descarga iniciada!\n\nEl archivo se descargará a tu carpeta de Descargas.\nNombre: BSD-v0.4.5.exe');
                });
        } catch(error) {
            console.error('Error descargando:', error);
            alert('⚠️ No se pudo descargar el archivo.\nIntenta descargarlo manualmente desde la carpeta del proyecto.');
        }
    }

    mostrarModalNombre() {
        try {
            // Limpiar clases y mostrar
            this.nameModal.classList.remove('hidden');
            this.nameModal.classList.add('active');
            this.nameModal.style.display = 'flex';

            // Focus en input
            setTimeout(() => {
                if (this.playerNameInput) {
                    this.playerNameInput.focus();
                    this.playerNameInput.value = '';
                }
            }, 100);

            console.log('✓ Modal de nombre mostrado');
        } catch(error) {
            console.error('Error mostrando modal:', error);
        }
    }

    iniciar() {
        console.log('Iniciando juego...');
        try {
            const nombre = this.playerNameInput.value.trim() || 'Adrián';
            this.nombreJugador = nombre;

            // Ocultar modal con clase y estilo
            this.nameModal.classList.remove('active');
            this.nameModal.classList.add('hidden');
            this.nameModal.style.display = 'none !important';
            this.nameModal.style.visibility = 'hidden';
            this.nameModal.style.opacity = '0';

            console.log('✓ Jugador:', this.nombreJugador);

            // Mostrar primera escena
            this.mostrarEscena('inicio');
        } catch(error) {
            console.error('Error iniciando juego:', error);
        }
    }

    mostrarEscena(idEscena) {
        try {
            console.log('Mostrando escena:', idEscena);

            const escena = gameData.escenas[idEscena];
            if (!escena) {
                console.error('Escena no encontrada:', idEscena);
                return;
            }

            this.escenaActual = idEscena;
            this.decisionTomada = false;
            this.escenaNum = escena.id || 0;

            // Actualizar contador y barra de progreso
            if (this.sceneCounter) {
                this.sceneCounter.textContent = `Escena ${this.escenaNum}/${this.totalEscenas}`;
            }
            if (this.progressBar) {
                this.progressBar.style.width = ((this.escenaNum / this.totalEscenas) * 100) + '%';
            }

            // Mostrar diálogo (reemplazar nombre)
            let texto = escena.texto;
            if (texto) {
                texto = texto.replace(/Adrián/g, this.nombreJugador);
                this.dialogBox.innerHTML = '<p>' + texto.split('\n').join('</p><p>') + '</p>';
            }

            // Mostrar personajes
            this.mostrarPersonajes(escena);

            // Mostrar opciones o indicador
            if (escena.opciones && Array.isArray(escena.opciones) && escena.opciones.length > 0) {
                this.mostrarOpciones(escena.opciones);
                if (this.indicator) this.indicator.style.display = 'none';
                this.esperandoTecla = false;
            } else {
                this.limpiarOpciones();
                if (escena.esFinal) {
                    if (this.indicator) this.indicator.style.display = 'none';
                    this.esperandoTecla = false;
                } else {
                    if (this.indicator) this.indicator.style.display = 'block';
                    this.esperandoTecla = true;
                }
            }

            // Scroll al diálogo
            if (this.dialogBox) {
                this.dialogBox.scrollTop = 0;
            }

            console.log('✓ Escena mostrada:', escena.nombre);
        } catch(error) {
            console.error('Error mostrando escena:', error);
        }
    }

    mostrarPersonajes(escena) {
        try {
            this.imageDisplay.innerHTML = '';

            // Cargar fondo de escena si existe
            const fondoId = escena.id;
            const rutaFondo = gameData.fondos && gameData.fondos[fondoId];
            
            if (rutaFondo) {
                this.imageDisplay.style.backgroundImage = `url('img/${rutaFondo}')`;
                this.imageDisplay.style.backgroundSize = 'cover';
                this.imageDisplay.style.backgroundPosition = 'center';
                this.imageDisplay.style.backgroundRepeat = 'no-repeat';
            } else {
                this.imageDisplay.style.backgroundImage = 'none';
                this.imageDisplay.style.backgroundColor = '#0a0a0a';
            }

            if (!escena.personajes || escena.personajes.length === 0) {
                // Sin personajes - solo mostrar fondo
                return;
            }

            // Mostrar personajes
            escena.personajes.forEach((char, index) => {
                // Manejar tanto strings como objetos
                const charName = typeof char === 'string' ? char : char.nombre;
                const personaje = gameData.personajes[charName];

                if (!personaje) {
                    console.warn('Personaje no encontrado:', charName);
                    return;
                }
                
                // Distribuir automáticamente si son múltiples personajes
                let posicion;
                if (typeof char === 'string') {
                    // Auto-distribuir basado en índice
                    const posicionesAuto = ['izquierda', 'centro', 'derecha'];
                    posicion = posicionesAuto[index % 3];
                } else {
                    posicion = char.posicion || 'centro';
                }

                const personajeDiv = document.createElement('div');
                personajeDiv.className = 'character';
                personajeDiv.style.position = 'absolute';
                personajeDiv.style.bottom = '-10px';
                personajeDiv.style.transform = 'translateX(-50%)';
                personajeDiv.style.zIndex = '10';

                // Posición
                const posiciones = {
                    'izquierda': '20%',
                    'centro': '50%',
                    'derecha': '80%',
                    'arriba': '15%',
                    'abajo': '70%'
                };

                const left = posiciones[posicion] || '50%';
                personajeDiv.style.left = left;

                // Mostrar imagen real del personaje
                const img = document.createElement('img');
                const carpeta = personaje.carpeta || personaje.nombre;
                const imagenFile = personaje.imagen || 'neutro.png';
                const rutaImagen = `img/personajes/${carpeta}/${imagenFile}`;
                
                img.src = rutaImagen;
                img.alt = personaje.nombre;
                img.style.maxHeight = '140px';
                img.style.maxWidth = '110px';
                img.style.objectFit = 'contain';
                img.style.filter = 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.5))';
                
                // Fallback si no carga la imagen
                img.onerror = function() {
                    // Si no encuentra la imagen, mostrar un círculo de color como fallback
                    const circle = document.createElement('div');
                    circle.style.width = '70px';
                    circle.style.height = '70px';
                    circle.style.backgroundColor = personaje.color || '#999';
                    circle.style.borderRadius = '50%';
                    circle.style.border = '3px solid white';
                    circle.style.display = 'flex';
                    circle.style.alignItems = 'center';
                    circle.style.justifyContent = 'center';
                    circle.style.fontSize = '12px';
                    circle.style.fontWeight = 'bold';
                    circle.style.color = 'white';
                    circle.style.textShadow = '0 2px 5px rgba(0,0,0,0.5)';
                    circle.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
                    const initials = personaje.nombre.substring(0, 2).toUpperCase();
                    circle.textContent = initials;
                    img.replaceWith(circle);
                };

                // Etiqueta (nombre del personaje - ARRIBA)
                const label = document.createElement('div');
                label.style.marginBottom = '6px';
                label.style.fontSize = '12px';
                label.style.color = personaje.color || '#fff';
                label.style.fontWeight = 'bold';
                label.style.textAlign = 'center';
                label.style.maxWidth = '150px';
                label.textContent = personaje.nombre.split(' ')[0];

                personajeDiv.appendChild(label);
                personajeDiv.appendChild(img);
                this.imageDisplay.appendChild(personajeDiv);
            });

            console.log('✓ Personajes mostrados');
        } catch(error) {
            console.error('Error mostrando personajes:', error);
        }
    }

    hexToRgb(hex) {
        if (!hex) return [0, 0, 0];
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ] : [0, 0, 0];
    }

    mostrarOpciones(opciones) {
        try {
            this.limpiarOpciones();

            opciones.forEach((opcion, index) => {
                const btn = document.createElement('button');
                btn.className = 'option-button';
                btn.textContent = `${index + 1}. ${opcion.texto}`;
                btn.addEventListener('click', () => this.seleccionarOpcion(opcion));
                this.optionsContainer.appendChild(btn);
            });

            console.log('✓ Opciones mostradas:', opciones.length);
        } catch(error) {
            console.error('Error mostrando opciones:', error);
        }
    }

    seleccionarOpcion(opcion) {
        try {
            this.decisionTomada = true;
            this.limpiarOpciones();

            if (opcion.siguiente) {
                setTimeout(() => {
                    this.mostrarEscena(opcion.siguiente);
                }, 300);
            }

            console.log('✓ Opción seleccionada, siguiente:', opcion.siguiente);
        } catch(error) {
            console.error('Error seleccionando opción:', error);
        }
    }

    limpiarOpciones() {
        this.optionsContainer.innerHTML = '';
    }

    siguienteEscena() {
        try {
            const escena = gameData.escenas[this.escenaActual];
            if (escena && escena.siguiente) {
                this.mostrarEscena(escena.siguiente);
            }

            console.log('✓ Siguiente escena');
        } catch(error) {
            console.error('Error en siguiente escena:', error);
        }
    }
}

// Iniciar cuando todo esté listo
console.log('game.js cargado');

if (typeof gameData !== 'undefined') {
    console.log('gameData ya disponible, inicializando...');
    window.juego = new JuegoWeb();
} else {
    console.log('Esperando a gameData...');
    // Esperar a que se cargue
    const waitForData = setInterval(() => {
        if (typeof gameData !== 'undefined') {
            console.log('gameData ahora disponible');
            clearInterval(waitForData);
            window.juego = new JuegoWeb();
        }
    }, 100);
    
    // Timeout de seguridad
    setTimeout(() => {
        if (typeof gameData === 'undefined') {
            console.error('TIMEOUT: gameData no se cargó en 10 segundos');
            clearInterval(waitForData);
        }
    }, 10000);
}

