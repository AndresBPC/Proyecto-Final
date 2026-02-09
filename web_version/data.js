// ==========================================
// DATOS DEL JUEGO v0.4.5 - DIÁLOGOS Y ESCENAS
// ==========================================

const gameData = {
    version: "0.4.5",
    titulo: "Between Shadows & Decissions",
    subtitulo: "Novela Interactiva Web",
    
    personajes: {
        'adrian': { color: '#00d4ff', nombre: 'Adrián Brighton', carpeta: 'Adrián Brighton' },
        'damian': { color: '#ff3333', nombre: 'Damián Thorne', carpeta: 'Damián Thorne' },
        'emily': { color: '#ff9ff3', nombre: 'Emily Bell', carpeta: 'Emily Bell' },
        'james': { color: '#54a0ff', nombre: 'James Riddle', carpeta: 'James Riddle' },
        'jorge': { color: '#ff6b6b', nombre: 'Jorge Bennett', carpeta: 'Jorge Bennett' },
        'lucy': { color: '#ffa502', nombre: 'Lucy Appleton', carpeta: 'Lucy Appleton' },
        'catalina': { color: '#95e1d3', nombre: 'Catalina Brighton', carpeta: 'Catalina Brighton' },
        'lenguaje': { color: '#9d84b7', nombre: 'Margaret Fairchild', carpeta: 'Margaret Fairchild' },
        'fisica': { color: '#826251', nombre: 'Edward Sterling', carpeta: 'MAESTRO EDWARD' },
        'ciencias': { color: '#a29bfe', nombre: 'Elliot Radcliffe', carpeta: 'Elliot Radcliffe  (ciencias)' },
        'isabella': { color: '#fdcb6e', nombre: 'Isabella Brighton', carpeta: 'Isabella Brighton' },
        'policia': { color: '#636e72', nombre: 'Oficial de Policía', carpeta: 'Policía' },
        'tutor': { color: '#74b9ff', nombre: 'Tutor', carpeta: 'Tutor' },
        'eduardo': { color: '#55efc4', nombre: 'Eduardo Brighton', carpeta: 'Eduardo Brighton' },
        'bully1': { color: '#d63031', nombre: 'Iván Holloway', carpeta: 'Ivan Holloway (bully 1)' },
    },

    escenas: {
        'intro': {
            id: 0,
            nombre: 'Introducción',
            texto: 'La historia se centra en Adrián, un chico de 16 años, introvertido y observador, con un talento innato para el dibujo técnico.\n\nDebido al trabajo de su padre, es cambiado de colegio y debe adaptarse a un nuevo ambiente en un instituto cercano.\n\nLo que comienza como un simple cambio de rutina se convierte en una lucha contra el acoso y la manipulación, donde Adrián deberá navegar entre el silencio protector y la confrontación, siempre priorizando la seguridad de su familia.',
            personajes: [],
            siguiente: 'casa',
            opciones: null
        },

        'casa': {
            id: 1,
            nombre: 'En casa',
            texto: '[Transición a escena: En casa – Sala de estar, mañana soleada. Adrián esperando a su padre.]\n\nPADRE (Eduardo):\n"Hijo, sé que no estás del todo contento con esto del cambio de colegio, pero es por el trabajo. Solo enfócate en lo importante, sé un buen estudiante desde el primer día."\n\nADRIÁN (cara de resignación):\n"Lo sé, papá. Solo… va a ser complicado adaptarme tan de repente. Todo es nuevo, la gente, el ambiente…"\n\nCATALINA (entrando juguetona):\n"¡Ay, Adrián, no seas tan dramático! Yo estoy emocionada, ¡voy a conocer a un montón de gente genial!"',
            personajes: [
                { nombre: 'adrian', posicion: 'derecha', expresion: 'resignacion' },
                { nombre: 'eduardo', posicion: 'izquierda', expresion: 'serio' },
                { nombre: 'catalina', posicion: 'centro', expresion: 'emocionada' }
            ],
            siguiente: 'camino',
            opciones: null
        },

        'camino': {
            id: 2,
            nombre: 'Camino al colegio',
            texto: '[Camino al colegio]\n\nCATALINA (riendo):\n"¡Mira, el nuevo instituto parece enorme! Voy a hacer tantos amigos, ya verás. ¿Tú qué piensas hacer, Adrián? ¿Dibujar en una esquina todo el día?"\n\nADRIÁN (incómodo):\n"Solo… sobrevivir al día, supongo."',
            personajes: [
                { nombre: 'adrian', posicion: 'derecha', expresion: 'desconcertado' },
                { nombre: 'catalina', posicion: 'izquierda', expresion: 'feliz' }
            ],
            siguiente: 'entrada_instituto',
            opciones: null
        },

        'entrada_instituto': {
            id: 3,
            nombre: 'Entrada al instituto',
            texto: '[Escena: Entrada al instituto – Pasillo principal. Adrián y Catalina se separan en la bifurcación de pasillos.]\n\nADRIÁN (apenado):\n"Catalina, pórtate bien, ¿eh? No vayas a meterte en problemas."\n\nCATALINA (riendo):\n"¡Sí, sí, mamá! ¡Nos vemos después!"\n\n[Acción: Catalina sale de escena. Adrián entra a su salón de clases.]',
            personajes: [
                { nombre: 'adrian', posicion: 'derecha', expresion: 'apenado' },
                { nombre: 'catalina', posicion: 'izquierda', expresion: 'malicioso' }
            ],
            siguiente: 'salon_presentacion',
            opciones: null
        },

        'salon_presentacion': {
            id: 4,
            nombre: 'Presentación en clase',
            texto: 'TUTOR:\n"Clase, les presento a Adrián, nuestro nuevo compañero. Es un estudiante excelente con muy buenas calificaciones. Espero que todos aprendan de él y lo hagan sentir bienvenido."\n\n[Adrián siente las miradas de todos. Algunos compañeros sonríen, otros sencillamente lo ignoran. Damián Thorne, el líder del grupo de bullies, lo mira con una sonrisa burlona.]',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'nervioso' }
            ],
            siguiente: 'clase_interrumpida',
            opciones: null
        },

        'clase_interrumpida': {
            id: 5,
            nombre: 'Clase interrumpida',
            texto: '[Minutos después, durante la clase]\n\nDAMIÁN (susurrando a sus compañeros):\n"¿Ven al nuevo? Se ve como alguien que nunca ha tocado un balón en su vida."\n\nIVÁN (burlón):\n"Jajaja, sí. Apuesto a que es un nerd dibujando en las esquinas."\n\nLUCY:\n"¿Por qué se ven tan seguros? Apenas lo conocen."\n\n[El profesor no se da cuenta. Adrián intenta concentrarse pero siente las miradas.]',
            personajes: [
                { nombre: 'adrian', posicion: 'derecha', expresion: 'asustada' },
                { nombre: 'damian', posicion: 'izquierda', expresion: 'arrogante' }
            ],
            siguiente: 'comedor_tension',
            opciones: null
        },

        'comedor_tension': {
            id: 6,
            nombre: 'En el comedor',
            texto: '[En el comedor, recreo.]\n\nADRIÁN busca un lugar para sentarse. Damián y su grupo se le acercan.\n\nDAMIÁN (sonriendo de forma amenazante):\n"Hola nuevo. ¿De dónde eres? Aquí hay reglas, ¿entiendes? Y los nuevos deben… ganarse su lugar."\n\nADRIÁN (nervioso):\n"Yo solo quería comer tranquilo..."\n\nIVÁN:\n"Tranquilo, ¿eh? Aquí no hay tranquilidad para los nerd como tú."',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'asustada' },
                { nombre: 'damian', posicion: 'izquierda', expresion: 'malicioso' },
                { nombre: 'bully1', posicion: 'derecha', expresion: 'arrogante' }
            ],
            siguiente: 'fin_primer_dia',
            opciones: null
        },

        'fin_primer_dia': {
            id: 7,
            nombre: 'Fin del primer día',
            texto: '[Al salir del colegio, Adrián espera a Catalina. Su hermana sale radiante.]\n\nCATALINA:\n"¡Adrián! ¿Qué tal te fue? A mí me fue genial, ¡hice como 5 amigas nuevas!"\n\nADRIÁN (notando su falta de interés en su bienestar):\n"Catalina, vamos a casa. Estoy cansado."\n\nCATALINA (riendo):\n"Los nuevos problemas de alguien más..."\n\n[Pero en la mente de Adrián, las palabras de Damián resuenan: "Los nuevos deben ganarse su lugar."]',
            personajes: [
                { nombre: 'adrian', posicion: 'derecha', expresion: 'preocupado' },
                { nombre: 'catalina', posicion: 'izquierda', expresion: 'emocionada' }
            ],
            siguiente: 'confrontacion',
            opciones: null
        },

        'confrontacion': {
            id: 8,
            nombre: 'Escalada de tensión',
            texto: '[Una semana después. El acoso se ha intensificado.]\n\nDAMIÁN (en el patio, acorralando a Adrián):\n"¿Por qué nunca participas en las actividades del colegio? ¿Tienes miedo?"\n\nADRIÁN (tratando de mantener la calma):\n"Solo prefiero mantenerme al margen."\n\nIVÁN:\n"Eso quiere decir que eres un cobarde."\n\nADRIÁN debe decidir cómo responder...',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'serio' },
                { nombre: 'damian', posicion: 'izquierda', expresion: 'amenazante' },
                { nombre: 'bully1', posicion: 'derecha', expresion: 'desafiante' }
            ],
            siguiente: null,
            opciones: [
                {
                    texto: 'Responder con confianza: "No soy un cobarde, solo respeto a los demás."',
                    siguiente: 'respuesta_valiente'
                },
                {
                    texto: 'Ignorarlos y alejarse calmadamente.',
                    siguiente: 'respuesta_neutral'
                },
                {
                    texto: 'Confrontarlos: "¿Qué querías? ¿Provocarme?"',
                    siguiente: 'respuesta_agresiva'
                }
            ]
        },

        'respuesta_valiente': {
            id: 9,
            nombre: 'Respuesta valiente',
            texto: 'ADRIÁN:\n"No soy un cobarde, solo respeto a los demás."\n\n[Damián parpadea, sorprendido por la respuesta directa y serena.]\n\nDAMIÁN:\n"Respeto, ¿eh? Aquí el respeto se gana, nuevo."\n\n[Pero algo cambió. La seguridad en Adrián intimidó a Damián más que cualquier confrontación física. Lucy lo notó y algo en su expresión sugiere que no es tan bully como aparenta.]',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'determinado' },
                { nombre: 'damian', posicion: 'izquierda', expresion: 'pensativo' }
            ],
            siguiente: 'nueva_amistad',
            opciones: null
        },

        'respuesta_neutral': {
            id: 10,
            nombre: 'Respuesta neutral',
            texto: '[Adrián se da la vuelta sin decir nada y se aleja calmadamente.]\n\nDAMIÁN (gritando):\n"¡Cobarde! ¡Corre, corre!"\n\n[Adrián logra escapar, pero el miedo se instala en él. Comienza a evitar ciertos pasillos. Catalina comienza a notar su comportamiento extraño.]\n\nCATALINA (preocupada):\n"¿Adrián, por qué siempre estás tan asustado? ¿Qué está pasando realmente en ese colegio?"',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'asustada' },
                { nombre: 'catalina', posicion: 'izquierda', expresion: 'preocupada' }
            ],
            siguiente: 'james_rescata',
            opciones: null
        },

        'respuesta_agresiva': {
            id: 11,
            nombre: 'Respuesta agresiva',
            texto: '[Adrián se planta firme, desafiante.]\n\nADRIÁN (levantándose):\n"¿Qué querías? ¿Provocarme? Porque si es eso, espera otro momento."\n\n[La tensión escala peligrosamente.]\n\nDAMIÁN (acercándose):\n"¿Vas a luchar solo contra nosotros cuatro?"\n\n[De repente, MARGARET FAIRCHILD, la profesora de Lenguaje, aparece.]\n\nMARGARET:\n"¿Chicos, hay algún problema aquí?"\n\nDAMIÁN (sonriendo):\n"No, solo una conversación amistosa, profesora."\n\n[Pero sus ojos prometen represalias.]',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'enojado' },
                { nombre: 'damian', posicion: 'izquierda', expresion: 'malicioso' },
                { nombre: 'lenguaje', posicion: 'derecha', expresion: 'serio' }
            ],
            siguiente: 'represalias',
            opciones: null
        },

        'nueva_amistad': {
            id: 12,
            nombre: 'Nueva amistad',
            texto: '[Con el tiempo, Adrián conoce a JONATHAN JAMES RIDDLE, alguien que también ha sufrido acoso.]\n\nJAMES:\n"¿James? Conozco bien ese mundo del cual Damián es parte. Mi padre quería que pegase más, que fuese lo que llaman 'un macho', pero descubrí que eso no era para mí."\n\nADRIÁN:\n"Entonces, ¿entiendes cómo me siento?"\n\nJAMES:\n"Completamente. Pero no estás solo. Podemos enfrentar esto juntos."\n\n[Una amistad genuina nace, basada en entendimiento mutuo.]',
            personajes: [
                { nombre: 'adrian', posicion: 'derecha', expresion: 'emocionada' },
                { nombre: 'james', posicion: 'izquierda', expresion: 'amable' }
            ],
            siguiente: 'final_primera_parte',
            opciones: null
        },

        'james_rescata': {
            id: 13,
            nombre: 'James aparece',
            texto: '[Al día siguiente, cuando Damián intenta acorralar a Adrián nuevamente...]\n\nJAMES (llegando a tiempo):\n"¡Ey! ¿Qué están haciendo aquí?"\n\nDAMIÁN (retrocede):\n"Nada James, solo... jugando."\n\nJAMES:\n"Claro. Adrián, ven conmigo. No debería estar solo."\n\n[James lo salva. Comienza una amistad que podría cambiar todo para Adrián.]',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'asustada' },
                { nombre: 'james', posicion: 'derecha', expresion: 'protector' }
            ],
            siguiente: 'final_primera_parte',
            opciones: null
        },

        'represalias': {
            id: 14,
            nombre: 'Represalias',
            texto: '[Después de la confrontación con la profesora, las cosas empeoran.]\n\n[Un día, cuando Adrián sale del colegio, es rodeado por los bullies]\n\nDAMIÁN:\n"¡Así que te crees valiente con la profesora presente, eh? Pues vamos a enseñarte una lección de verdad."\n\n[La situación se vuelve peligrosa. Adrián tiene que responder rápidamente.]',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'asustada' },
                { nombre: 'damian', posicion: 'izquierda', expresion: 'malicioso' }
            ],
            siguiente: null,
            opciones: [
                {
                    texto: 'Gritar pidiendo ayuda.',
                    siguiente: 'ayuda_obtenida'
                },
                {
                    texto: 'Intentar escapar corriendo.',
                    siguiente: 'escape_exitoso'
                },
                {
                    texto: 'Enfrentar a Damián.',
                    siguiente: 'confrontacion_final'
                }
            ]
        },

        'ayuda_obtenida': {
            id: 15,
            nombre: 'Pedir ayuda',
            texto: '[Adrián grita pidiendo ayuda.]\n\nJAMES (apareciendo):\n"¡Ey! ¿Qué está pasando aquí?"\n\n[James aparece con otros estudiantes. Damián y su grupo se retiran rápidamente.]\n\nJAMES:\n"¿Estás bien? Veo que Damián te estaba buscando problemas. Él hace esto con muchos."\n\nADRIÁN:\n"Gracias... no sé qué hubiera pasado."\n\nJAMES:\n"No deberías estar solo. Ven conmigo."',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'asustada' },
                { nombre: 'james', posicion: 'derecha', expresion: 'protector' }
            ],
            siguiente: 'final_primera_parte',
            opciones: null
        },

        'escape_exitoso': {
            id: 16,
            nombre: 'Escape',
            texto: '[Adrián corre lo más rápido que puede.]\n\nDAMIÁN (gritando):\n"¡Cobarde! ¡Corre, corre!"\n\n[Logra escapar, pero el miedo se instala profundamente. Está cambiando, volviéndose más retraído.]\n\nCATALINA (preocupada):\n"Adrián, ¿qué está pasando? Te ves cada día peor. ¿Van a lastimarte?"\n\nADRIÁN:\n"No puedo hablar de esto, Catalina. Es complicado."',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'asustada' },
                { nombre: 'catalina', posicion: 'izquierda', expresion: 'preocupada' }
            ],
            siguiente: 'final_primera_parte',
            opciones: null
        },

        'confrontacion_final': {
            id: 17,
            nombre: 'Confrontación final',
            texto: '[Adrián se planta firme. No está entrenado, pero hay un fuego en sus ojos.]\n\nDAMIÁN:\n"¿Vas a luchar solo contra nosotros cuatro?"\n\n[El primero en atacar es Iván. Adrián lo esquiva defensivamente.]\n\n[POLICÍA pasa justo en ese momento.]\n\nPOLICÍA:\n"¡Ey! ¿Qué está pasando aquí?"\n\n[Los atacantes huyen. Adrián respira pesadamente, con pequeñas heridas pero con algo diferente en su mirada: determinación.]\n\nOFICIAL:\n"Chico, necesitamos que reportes esto formalmente. Esto es un asalto."',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'determinado' },
                { nombre: 'damian', posicion: 'izquierda', expresion: 'malicioso' }
            ],
            siguiente: 'final_primera_parte',
            opciones: null
        },

        'final_primera_parte': {
            id: 18,
            nombre: '✅ FIN PARTE I',
            texto: '════════════════════════════════════════\n\n✅ HAS LLEGADO AL FIN DE LA\n    PRIMERA PARTE\n\nBetween Shadows & Decissions\nVersión 0.4.5 - Web Edition\n\n════════════════════════════════════════\n\nTus decisiones han moldeado el camino de Adrián.\n\nHas experimentado:\n• El acoso escolar y sus consecuencias\n• La importancia de la amistad\n• El poder de enfrentar tus miedos\n• Lo difícil que es estar solo\n\n════════════════════════════════════════\n\nPróximamente:\n▸ ACTO II: Consecuencias\n▸ ACTO III: Resolución\n▸ Desenlaces variados\n▸ Tres finales diferentes\n\n✨ FINAL BUENO\n⚖️ FINAL NEUTRO\n💀 FINAL MALO\n\n════════════════════════════════════════\n\n¡Gracias por jugar!\n\n© 2026 Between Shadows & Decissions',
            personajes: [],
            siguiente: null,
            opciones: null,
            esFinal: true
        },

        'dia_2_en_casa': {
            id: 19,
            nombre: 'Día 2 - En casa',
            texto: '[Escena: En casa – Sala. Adrián observa el moretón en el espejo.]\n\nADRIÁN (pensativo):\n"Espero que hoy sea normal… pero algo me dice que no será así."',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'preocupado' }
            ],
            siguiente: 'dia_2_camino',
            opciones: null
        },

        'dia_2_camino': {
            id: 20,
            nombre: 'Camino al instituto Día 2',
            texto: '[En el camino al colegio. Catalina nota el moretón considerable.]\n\nCATALINA (preocupada):\n"¿Qué te pasó en la cara? Tienes un moretón gigante. ¿Te caíste o...qué?"\n\nADRIÁN (nervioso):\n"No es nada importante. Solo un accidente cometido."',
            personajes: [
                { nombre: 'adrian', posicion: 'derecha', expresion: 'asustada' },
                { nombre: 'catalina', posicion: 'izquierda', expresion: 'preocupada' }
            ],
            siguiente: 'instituto_dia_2',
            opciones: null
        },

        'instituto_dia_2': {
            id: 21,
            nombre: 'Instituto Día 2',
            texto: '[En el instituto. Damián lo intercepta en el pasillo, solo.]\n\nDAMIÁN (sonriendo, amenazante):\n"Vaya, esos moretones te ven bien. Quizás deberías acostumbrarte a tenerlos. Después de todo, los nuevos deben aprender a obedecer aquí."\n\nADRIÁN (en silencio, mirando el piso)',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'asustada' },
                { nombre: 'damian', posicion: 'izquierda', expresion: 'malicioso' }
            ],
            siguiente: 'decision_punto_1',
            opciones: null
        },

        'decision_punto_1': {
            id: 22,
            nombre: 'Decisión crítica 1',
            texto: '[Damián está bloqueando tu paso. Otros estudiantes avanzan alrededor de ustedes, no queriendo involucrarse.]\n\n¿Qué haces?',
            personajes: [
                { nombre: 'damian', posicion: 'izquierda', expresion: 'arrogante' }
            ],
            siguiente: null,
            opciones: [
                {
                    texto: 'Confrontarlo direktamente',
                    siguiente: 'confr_damian'
                },
                {
                    texto: 'Buscar ayuda de un profesor',
                    siguiente: 'buscar_profesor'
                },
                {
                    texto: 'Alejarte del problema',
                    siguiente: 'alejarse'
                }
            ]
        },

        'confr_damian': {
            id: 23,
            nombre: 'Confrontar a Damián',
            texto: '[Adrián se yergue, mirando a Damián directamente.]\n\nADRIÁN (con voz firme):\n"Tengo tanta derecho a estar aquí como tú. No voy a vivir con miedo."\n\nDAMIÁN (sorprendido, luego riendo):\n"Valiente el cobarde. Veremos cuánto dura eso."\n\n[Se aleja. La semana se vuelve más intensa.]',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'determinado' },
                { nombre: 'damian', posicion: 'izquierda', expresion: 'pensativo' }
            ],
            siguiente: 'transicion_semana_1',
            opciones: null
        },

        'buscar_profesor': {
            id: 24,
            nombre: 'Buscar ayuda',
            texto: '[Adrián ve a la Profesora Margaret Fairchild en el pasillo.]\n\nADRIÁN:\n"¡Profesora!"\n\n[Damián desaparece rápidamente.]\n\nMARGARET (acercándose, preocupada):\n"Adrián, ¿qué pasa? Te ves asustado."',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'aliviado' },
                { nombre: 'lenguaje', posicion: 'derecha', expresion: 'comprensiva' }
            ],
            siguiente: 'transicion_semana_1',
            opciones: null
        },

        'alejarse': {
            id: 25,
            nombre: 'Alejarse',
            texto: '[Adrián se da vuelta y camina rápidamente en otra dirección, evitando el contacto ocular.]\n\nDAMIÁN (riendo):\n"¡Así! Como debe ser. Los nuevos deben saber su lugar."\n\n[El miedo se apodera de Adrián. Cada día es más difícil.]\n\nADRIÁN (en su mente):\n"¿Cuánto tiempo puedo aguantar esto?"',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'asustada' },
                { nombre: 'damian', posicion: 'izquierda', expresion: 'malicioso' }
            ],
            siguiente: 'transicion_semana_1',
            opciones: null
        },

        'transicion_semana_1': {
            id: 26,
            nombre: 'Pasan los días',
            texto: '[Los días pasan con una rutina de acoso sutil pero constante. Empujones en los pasillos, comentarios sarcásticos en clase, aislamiento en el comedor.]\n\nADRIÁN (reflexionando):\n"He pasado una semana. Puedo pasar otra. Tengo que ser fuerte por Catalina, por mi familia."\n\n[Pero algo está cambiando en él. Las ganas de vivir empiezan a desvanecerse.]',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'triste' }
            ],
            siguiente: 'encuentro_james',
            opciones: null
        },

        'encuentro_james': {
            id: 27,
            nombre: 'Encuentro con James',
            texto: '[En el recreo, un chico desconocido se acerca fuera del instituto.]\n\nJAMES:\n"Oye, sé lo que está pasando. Damián le hace esto a muchos. Yo también fui víctima hace dos años."\n\nADRIÁN (levantando la vista):\n"¿De verdad?"\n\nJAMES:\n"Sí. Pero hay una forma de detenerlo. No es fácil, pero es posible. ¿Quieres escuchar?"',
            personajes: [
                { nombre: 'adrian', posicion: 'derecha', expresion: 'esperanzado' },
                { nombre: 'james', posicion: 'izquierda', expresion: 'amable' }
            ],
            siguiente: 'decision_punto_2',
            opciones: null
        },

        'decision_punto_2': {
            id: 28,
            nombre: 'Decisión crítica 2',
            texto: '[James está pidiéndote que escuches. Pero también significa meterte en algo más profundo.]\n\n¿Qué decides?',
            personajes: [
                { nombre: 'james', posicion: 'izquierda', expresion: 'serio' }
            ],
            siguiente: null,
            opciones: [
                {
                    texto: 'Aceptar la ayuda de James',
                    siguiente: 'aceptar_james'
                },
                {
                    texto: 'Rechazar y resolver solo',
                    siguiente: 'rechazo_james'
                },
                {
                    texto: 'Decirle a tu familia',
                    siguiente: 'contar_familia'
                }
            ]
        },

        'aceptar_james': {
            id: 29,
            nombre: 'Aceptar la ayuda',
            texto: '[Adrián asiente.]\n\nJAMES:\n"Bien. Lo primero es que dejes de tener miedo. Damián es solo un matón, pero sin miedo pierde todo su poder."\n\nADRIÁN:\n"¿Cómo hago eso?"\n\nJAMES:\n"Primero, vamos a hablar con el profesor de Ciencias. Él ya sospecha algo."',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'determinado' },
                { nombre: 'james', posicion: 'izquierda', expresion: 'protector' }
            ],
            siguiente: 'final_primera_parte',
            opciones: null
        },

        'rechazo_james': {
            id: 30,
            nombre: 'Resolver solo',
            texto: '[Adrián rechaza con la cabeza.]\n\nADRIÁN:\n"Gracias, pero no. No quiero arrastrarte a esto. Es mi problema."\n\nJAMES (triste):\n"Está bien. Pero recuerda: no estás solo, aunque lo sientas así."\n\n[James se va. Adrián queda solo con sus pensamientos y su miedo.]',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'triste' },
                { nombre: 'james', posicion: 'izquierda', expresion: 'comprensiva' }
            ],
            siguiente: 'final_primera_parte',
            opciones: null
        },

        'contar_familia': {
            id: 31,
            nombre: 'Contar a la familia',
            texto: '[Esa noche, Adrián reúne valor y le cuenta a sus padres todo lo que ha pasado.]\n\nPADRE:\n"¿Por qué no nos dijiste antes? Esto es inaceptable."\n\nMADRE:\n"Vamos a hablar con el colegio. No permitiremos que siga pasando esto."\n\n[Por primera vez en días, Adrián siente que no está solo.]',
            personajes: [
                { nombre: 'adrian', posicion: 'centro', expresion: 'aliviado' },
                { nombre: 'eduardo', posicion: 'izquierda', expresion: 'serio' }
            ],
            siguiente: 'final_primera_parte',
            opciones: null
        }
    }
};
