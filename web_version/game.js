// ==========================================
// BETWEEN SHADOWS & DECISSIONS - MOTOR DE JUEGO WEB
// ==========================================

class JuegoWeb {
    constructor() {
        this.escenaActual = 'intro';
        this.nombreJugador = 'Adrián';
        this.canvas = document.getElementById('characterCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.dialogBox = document.getElementById('dialogBox');
        this.optionsContainer = document.getElementById('optionsContainer');
        this.indicator = document.getElementById('indicator');
        this.esperandoTecla = false;
        this.decisiones = {};

        this.setupCanvas();
        this.setupEventListeners();
        this.iniciar();
    }

    setupCanvas() {
        // Ajustar tamaño del canvas
        const container = document.querySelector('.canvas-container');
        this.canvas.width = container.clientWidth;
        this.canvas.height = container.clientHeight;
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        const container = document.querySelector('.canvas-container');
        this.canvas.width = container.clientWidth;
        this.canvas.height = container.clientHeight;
        if (this.escenaActual) {
            const escena = gameData.escenas[this.escenaActual];
            if (escena && escena.personaje) {
                this.dibujarPersonaje(escena.personaje, escena.posicion || 'derecha');
            } else {
                this.limpiarCanvas();
            }
        }
    }

    setupEventListeners() {
        // Click/Tap para continuar
        document.addEventListener('click', (e) => this.handleInput(e));
        document.addEventListener('touchend', (e) => this.handleInput(e));
        document.addEventListener('keydown', (e) => this.handleInput(e));
    }

    handleInput(event) {
        // Evitar registrar clics en botones de opciones
        if (event.target.classList.contains('option-button')) {
            return;
        }
        if (this.esperandoTecla) {
            this.siguienteEscena();
        }
    }

    iniciar() {
        this.mostrarEscena('intro');
    }

    mostrarEscena(idEscena) {
        const escena = gameData.escenas[idEscena];
        if (!escena) {
            console.error('Escena no encontrada:', idEscena);
            return;
        }

        this.escenaActual = idEscena;

        // Mostrar diálogo
        this.dialogBox.textContent = escena.texto;

        // Mostrar personaje
        if (escena.personaje) {
            this.dibujarPersonaje(escena.personaje, escena.posicion || 'derecha');
        } else {
            this.limpiarCanvas();
        }

        // Mostrar opciones o indicador de continuar
        if (escena.opciones) {
            this.mostrarOpciones(escena.opciones);
            this.indicator.classList.add('hidden');
            this.esperandoTecla = false;
        } else {
            this.limpiarOpciones();
            this.mostrarIndicador();
            this.siguienteEscena = () => {
                if (escena.siguiente) {
                    this.mostrarEscena(escena.siguiente);
                }
            };
            this.esperandoTecla = true;
        }

        // Auto-scroll al diálogo
        this.dialogBox.scrollTop = 0;
    }

    dibujarPersonaje(nombre, posicion = 'derecha') {
        const personaje = gameData.personajes[nombre.toLowerCase()];
        if (!personaje) {
            console.error('Personaje no encontrado:', nombre);
            this.limpiarCanvas();
            return;
        }

        const w = this.canvas.width;
        const h = this.canvas.height;

        // Limpiar canvas
        this.ctx.fillStyle = '#0a0a0a';
        this.ctx.fillRect(0, 0, w, h);
        this.ctx.strokeStyle = '#333333';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(0, 0, w, h);

        // Calcular posición
        let x, y;
        switch (posicion) {
            case 'izquierda':
                x = w * 0.15;
                break;
            case 'centro':
                x = w * 0.5;
                break;
            case 'derecha':
            default:
                x = w * 0.85;
                break;
            case 'arriba':
                y = h * 0.15;
                break;
            case 'abajo':
                y = h * 0.85;
                break;
        }

        if (!y) y = h * 0.5;

        // Dibujar círculo del personaje
        const radio = Math.min(w, h) * 0.15;
        
        // Sombra
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        this.ctx.beginPath();
        this.ctx.arc(x + 2, y + 2, radio, 0, Math.PI * 2);
        this.ctx.fill();

        // Círculo principal
        this.ctx.fillStyle = personaje.color;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radio, 0, Math.PI * 2);
        this.ctx.fill();

        // Borde
        this.ctx.strokeStyle = '#ffffff';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        // Iniciales
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = `bold ${radio * 0.8}px Arial`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(personaje.initials, x, y);

        // Nombre
        this.ctx.fillStyle = personaje.color;
        this.ctx.font = `bold ${radio * 0.4}px Arial`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(personaje.nombre, x, y + radio + 15);
    }

    limpiarCanvas() {
        const w = this.canvas.width;
        const h = this.canvas.height;
        this.ctx.fillStyle = '#0a0a0a';
        this.ctx.fillRect(0, 0, w, h);
        this.ctx.strokeStyle = '#333333';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(0, 0, w, h);
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
        this.limpiarOpciones();
        this.indicador.classList.add('hidden');
        
        if (opcion.siguiente) {
            setTimeout(() => {
                this.mostrarEscena(opcion.siguiente);
            }, 300);
        }
    }

    limpiarOpciones() {
        this.optionsContainer.innerHTML = '';
    }

    mostrarIndicador() {
        this.indicator.classList.remove('hidden');
    }

    siguienteEscena() {
        // Será sobrescrito cuando sea necesario
    }
}

// Iniciar juego cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.juego = new JuegoWeb();
});
