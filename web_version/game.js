// ==========================================
// BETWEEN SHADOWS & DECISSIONS v0.4.5 WEB
// Motor de Juego Interactivo
// ==========================================

class JuegoWeb {
    constructor() {
        try {
            this.escenaActual = null;
            this.nombreJugador = 'Adrián';
            this.escenaNum = 0;
            
            // Obtener elementos del DOM con validación
            this.dialogBox = document.getElementById('dialogBox');
            this.optionsContainer = document.getElementById('optionsContainer');
            this.indicator = document.getElementById('indicator');
            this.imageDisplay = document.getElementById('imageDisplay');
            this.progressBar = document.getElementById('progressBar');
            this.sceneCounter = document.getElementById('sceneCounter');
            this.nameModal = document.getElementById('nameModal');
            this.playerNameInput = document.getElementById('playerName');
            this.startButton = document.getElementById('startButton');
            
            // Validar que todos los elementos existan
            if (!this.nameModal || !this.playerNameInput || !this.startButton) {
                throw new Error('Elementos del DOM no encontrados');
            }
            
            this.esperandoTecla = false;
            this.decisionTomada = false;
            this.totalEscenas = Object.keys(gameData.escenas).length;

            this.setupEventListeners();
            this.mostrarModalNombre();
            
            console.log('✓ Juego inicializado correctamente. Total escenas:', this.totalEscenas);
        } catch(error) {
            console.error('Error inicializando juego:', error);
        }
    }

    setupEventListeners() {
        // Entrada del nombre
        this.startButton.addEventListener('click', () => this.iniciar());
        this.playerNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.iniciar();
        });

        // Navegación
        document.addEventListener('click', (e) => this.handleInput(e));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && this.esperandoTecla) {
                e.preventDefault();
                this.siguienteEscena();
            }
        });
    }

    mostrarModalNombre() {
        try {
            if (this.nameModal) {
                this.nameModal.style.display = 'flex';
                setTimeout(() => {
                    if (this.playerNameInput) {
                        this.playerNameInput.focus();
                        this.playerNameInput.placeholder = 'Adrián';
                    }
                }, 100);
            }
        } catch(error) {
            console.error('Error mostrando modal:', error);
        }
    }

    iniciar() {
        const nombre = this.playerNameInput.value.trim() || 'Adrián';
        this.nombreJugador = nombre;
        this.nameModal.style.display = 'none';
        this.mostrarEscena('intro');
    }

    handleInput(event) {
        // Evitar si está en modal o cliqueó en botón
        if (this.nameModal.style.display !== 'none') return;
        if (event.target.classList.contains('option-button')) return;
        if (event.target.type === 'text') return;

        if (this.esperandoTecla && !this.decisionTomada) {
            this.siguienteEscena();
        }
    }

    mostrarEscena(idEscena) {
        const escena = gameData.escenas[idEscena];
        if (!escena) {
            console.error('Escena no encontrada:', idEscena);
            return;
        }

        this.escenaActual = idEscena;
        this.decisionTomada = false;
        this.escenaNum = escena.id;
        
        // Actualizar contador
        this.sceneCounter.textContent = `Escena ${this.escenaNum}/${this.totalEscenas}`;
        this.progressBar.style.width = ((this.escenaNum / this.totalEscenas) * 100) + '%';

        // Mostrar diálogo (reemplazar nombre del jugador)
        let texto = escena.texto.replace(/Adrián/g, this.nombreJugador);
        this.dialogBox.innerHTML = '<p>' + texto.replace(/\n/g, '</p><p>') + '</p>';

        // Mostrar personajes
        this.mostrarPersonajes(escena);

        // Mostrar opciones o indicador
        if (escena.opciones && escena.opciones.length > 0) {
            this.mostrarOpciones(escena.opciones);
            this.indicator.style.display = 'none';
            this.esperandoTecla = false;
        } else {
            this.limpiarOpciones();
            if (!escena.esFinal) {
                this.indicator.style.display = 'block';
            } else {
                this.indicator.style.display = 'none';
            }
            this.esperandoTecla = !escena.esFinal;
        }

        // Scroll al diálogo
        this.dialogBox.scrollTop = 0;
    }

    mostrarPersonajes(escena) {
        this.imageDisplay.innerHTML = '';

        if (!escena.personajes || escena.personajes.length === 0) {
            // Sin personajes - solo mostrar fondo
            const div = document.createElement('div');
            div.className = 'scene-background';
            div.style.height = '250px';
            div.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)';
            div.style.display = 'flex';
            div.style.alignItems = 'center';
            div.style.justifyContent = 'center';
            div.style.color = '#666';
            div.style.fontSize = '24px';
            div.textContent = '▓▓▓';
            this.imageDisplay.appendChild(div);
            return;
        }

        // Cargar imágenes de personajes CON LAZY LOAD
        escena.personajes.forEach((char, idx) => {
            const personaje = gameData.personajes[char.nombre];
            if (personaje) {
                const personajeDiv = document.createElement('div');
                personajeDiv.className = 'character';
                personajeDiv.style.position = 'absolute';
                
                // Posición
                const posiciones = {
                    'izquierda': '5%',
                    'centro': '35%',
                    'derecha': '65%',
                    'arriba': '15%',
                    'abajo': '70%'
                };
                
                const left = posiciones[char.posicion] || '35%';
                personajeDiv.style.left = left;

                // Usar círculo de color directamente (no cargar imagen)
                const circle = document.createElement('div');
                circle.style.width = '100px';
                circle.style.height = '100px';
                circle.style.backgroundColor = personaje.color;
                circle.style.borderRadius = '50%';
                circle.style.border = '3px solid white';
                circle.style.display = 'flex';
                circle.style.alignItems = 'center';
                circle.style.justifyContent = 'center';
                circle.innerHTML = personaje.nombre.substring(0, 2).toUpperCase();
                circle.style.fontSize = '18px';
                circle.style.fontWeight = 'bold';
                circle.style.color = 'white';
                circle.style.boxShadow = `0 4px 15px rgba(${this.hexToRgb(personaje.color).join(',')}, 0.3)`;
                
                const label = document.createElement('div');
                label.style.marginTop = '8px';
                label.style.fontSize = '12px';
                label.style.color = personaje.color;
                label.style.fontWeight = 'bold';
                label.style.textAlign = 'center';
                label.textContent = personaje.nombre.split(' ')[0];
                
                personajeDiv.appendChild(circle);
                personajeDiv.appendChild(label);
                this.imageDisplay.appendChild(personajeDiv);
            }
        });
    }

    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ] : [0, 0, 0];
    }

    mostrarOpciones(opciones) {
        this.limpiarOpciones();

        opciones.forEach((opcion, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-button';
            btn.textContent = `${index + 1}. ${opcion.texto}`;
            btn.onclick = () => this.seleccionarOpcion(opcion);
            this.optionsContainer.appendChild(btn);
        });
    }

    seleccionarOpcion(opcion) {
        this.decisionTomada = true;
        this.limpiarOpciones();
        
        if (opcion.siguiente) {
            setTimeout(() => {
                this.mostrarEscena(opcion.siguiente);
            }, 300);
        }
    }

    limpiarOpciones() {
        this.optionsContainer.innerHTML = '';
    }

    siguienteEscena() {
        const escena = gameData.escenas[this.escenaActual];
        if (escena && escena.siguiente) {
            this.mostrarEscena(escena.siguiente);
        }
    }
}

// Iniciar juego (defer ya garantiza que el DOM está listo y data.js se cargó)
if (typeof gameData !== 'undefined') {
    window.juego = new JuegoWeb();
} else {
    console.error('gameData no está cargado. Verifica que data.js se cargue antes de game.js');
    // Fallback: esperar un momento
    setTimeout(() => {
        if (typeof gameData !== 'undefined') {
            window.juego = new JuegoWeb();
        }
    }, 1000);
}

