// ==========================================
// DATOS DEL JUEGO - DIÁLOGOS Y ESCENAS
// ==========================================

const gameData = {
    personajes: {
        'adrian': { color: '#00d4ff', initials: 'AD', nombre: 'Adrian' },
        'damian': { color: '#ff3333', initials: 'DM', nombre: 'Damian' },
        'emily': { color: '#ff9ff3', initials: 'EM', nombre: 'Emily' },
        'james': { color: '#54a0ff', initials: 'JM', nombre: 'James' },
        'jorge': { color: '#ff6b6b', initials: 'JR', nombre: 'Jorge' },
        'lucia': { color: '#ffa502', initials: 'LU', nombre: 'Lucia' },
        'catalina': { color: '#95e1d3', initials: 'CT', nombre: 'Catalina' },
        'profesora': { color: '#9d84b7', initials: 'PF', nombre: 'Profesora' },
        'rector': { color: '#826251', initials: 'RC', nombre: 'Rector' },
        'mama': { color: '#f8b500', initials: 'MA', nombre: 'Mamá' },
    },

    escenas: {
        'intro': {
            personaje: null,
            texto: 'NARRACIÓN:\n\nLa historia se centra en Adrián, un chico de 16 años, introvertido y observador, con un talento innato para el dibujo técnico. Debido al trabajo de su padre, es cambiado de colegio...',
            siguiente: 'casa',
            opciones: null
        },

        'casa': {
            personaje: 'adrian',
            posicion: 'derecha',
            texto: 'PADRE (Eduardo):\n"Hijo, sé que no estás del todo contento con esto del cambio de colegio, pero es por el trabajo. Solo enfócate en lo importante."\n\nADRIÁN:\n"Lo sé papá. Solo va a ser complicado adaptarme."\n\nCATALINA (entrando):\n"¡Ay, Adrián, no seas tan dramático! Yo estoy emocionada, ¡voy a conocer a un montón de gente genial!"',
            siguiente: 'camino',
            opciones: null
        },

        'camino': {
            personaje: null,
            texto: 'CATALINA (riendo en el camino):\n"¡Mira, el nuevo instituto parece enorme! Voy a hacer tantos amigos. ¿Tú qué piensas hacer?"\n\nADRIÁN:\n"Solo... sobrevivir al día."',
            siguiente: 'entrada_instituto',
            opciones: null
        },

        'entrada_instituto': {
            personaje: null,
            texto: 'En el instituto, Adrián y Catalina se separan en bifurcación de pasillos.\n\nADRIÁN:\n"Catalina, pórtate bien, ¿eh? No vayas a meterte en problemas."\n\nCATALINA:\n"¡Sí, sí, mamá! ¡Nos vemos después!"',
            siguiente: 'salon_presentacion',
            opciones: null
        },

        'salon_presentacion': {
            personaje: null,
            texto: 'TUTOR (con alegría):\n"Clase, les presento a Adrián, nuestro nuevo compañero. Es un estudiante excelente."\n\n[Los bullies susurran burlas. Damián observa a Adrián con una sonrisa maliciosa.]\n\nPROFESOR DE CIENCIAS:\n"¿Quién puede responder sobre la fotosíntesis?"',
            siguiente: 'clase_interrumpida',
            opciones: null
        },

        'clase_interrumpida': {
            personaje: null,
            texto: 'BULLY 1 (burlón):\n"¿Acaso el cerebrito no puede responder? ¡Vamos, genio!"\n\nPROFESOR DE CIENCIAS (molesto):\n"¡Bully 1! ¿Interrumpiendo otra vez?"\n\nADRIÁN (confiado):\n"No, profesor. Él estaba hablando solo."\n\nPROFESOR:\n"Siéntate y no vuelvas a hacerlo, será un llamado formal."',
            siguiente: 'comedor_tension',
            opciones: null
        },

        'comedor_tension': {
            personaje: 'adrian',
            posicion: 'derecha',
            texto: 'En el comedor, los bullies se acercan agresivamente.\n\nBULLY 1:\n"¿Por qué me ignoraste en clase? ¡Pensé que eras mudo!"\n\nBULLY 2 (golpeando la mesa):\n"¿Acaso crees que somos una broma?"\n\nADRIÁN:\n"¿Qué quieren? Solo trato de comer tranquilo."',
            siguiente: 'damian_interviene',
            opciones: null
        },

        'damian_interviene': {
            personaje: 'damian',
            posicion: 'izquierda',
            texto: 'DAMIÁN (calmado, deteniendo a Bully 1):\n"Ey, ¿quieres que los expulsen otra vez? Suéltalo ya."\n\n[Adrián sale corriendo del comedor.]\n\nBULLY 1 (gritando):\n"¡Más te vale haber corrido en la salida, oites nerd!"\n\n[Adrián encuentra a Catalina en el patio con nuevas amigas.]',
            siguiente: 'patio_catalina',
            opciones: null
        },

        'patio_catalina': {
            personaje: null,
            texto: 'CATALINA (feliz):\n"¡Adrián! ¿Cómo te fue? ¡Yo ya tengo un montón de amigas!"\n\nADRIÁN:\n"¿Por qué no viniste al comedor?"\n\nCATALINA (riendo, egoísta):\n"Me quedé conversando. Papá me dio permiso para ir a casa de mis amigas después. ¡No me esperes!"',
            siguiente: 'fin_clases_primera',
            opciones: null
        },

        'fin_clases_primera': {
            personaje: null,
            texto: 'ADRIÁN (pensando en voz alta):\n"Fue un día muy normal, lejos de lo que esperaba. Al menos no fue peor..."\n\n[Fuera del instituto, el grupo de bullies intercepta a Adrián en la calle.]\n\nBULLY 1:\n"¿No te tomaste en serio mi advertencia? ¡Te vamos a golpear!"',
            siguiente: 'damian_rescata',
            opciones: null
        },

        'damian_rescata': {
            personaje: 'damian',
            posicion: 'izquierda',
            texto: 'Justo antes que lo golpeen, DAMIÁN aparece y detiene al grupo.\n\nDAMIÁN (calmado, fingiendo amabilidad):\n"Soy Damián. Disculpa a mis amigos, perdieron el control. Solo hacía lo que debía. ¿Todo bien?"\n\n[Adrián se retira desconfiado sin decir más.]',
            siguiente: 'dia_2_casa',
            opciones: null
        },

        'dia_2_casa': {
            personaje: 'adrian',
            posicion: 'derecha',
            texto: 'ADRIÁN (en casa, pensativo):\n"Espero que hoy sea normal..."\n\n[En el camino al instituto, Catalina nota el moretón.]\n\nCATALINA (preocupada):\n"¿Qué te pasó en la cara? ¿Te caíste?"\n\nADRIÁN (nervioso):\n"No es nada importante. Solo un accidente."',
            siguiente: 'damian_amistoso',
            opciones: null
        },

        'damian_amistoso': {
            personaje: 'damian',
            posicion: 'izquierda',
            texto: 'En el instituto, Damián se acerca de forma amistosa.\n\nDAMIÁN (amigable):\n"Ey, Adrián, lamento lo de ayer. Fuiste valiente al no amedrentarte."\n\nADRIÁN (nervioso):\n"Solo espero que tus amigos no se dejen llevar otra vez."\n\nDAMIÁN (riendo, amenazante):\n"Espero que te acostumbres a cómo se hacen las cosas aquí. La próxima vez, no detendré a nadie."',
            siguiente: 'damian_pregunta_hermana',
            opciones: null
        },

        'damian_pregunta_hermana': {
            personaje: null,
            texto: 'DAMIÁN (calmado, pero impactante):\n"¿Tu hermana sabe de lo sucedido?"\n\nADRIÁN (preocupado):\n"¿Por qué lo dice?"',
            siguiente: 'primera_decision',
            opciones: null
        },

        'primera_decision': {
            personaje: null,
            texto: '[Adrián y Jorge se encuentran después de clases]\n\nJORGE (emocionado, jadeando):\n"¡Wow Adrián, eres increíble! ¡Tienes un físico impresionante!"\n\nADRIÁN (respirando con pesadez):\n"..."\n\nJORGE:\n"¿Por qué te dejas golpear si puedes defenderte?"\n\n¿Qué le dices a Jorge?',
            siguiente: null,
            opciones: [
                { id: 0, texto: 'No te entrometas en esto', siguiente: 'respuesta_jorge_0' },
                { id: 1, texto: 'Necesito tu ayuda', siguiente: 'respuesta_jorge_1' },
                { id: 2, texto: 'Por favor no te entrometas, te lastimarán', siguiente: 'respuesta_jorge_2' }
            ]
        },

        'respuesta_jorge_0': {
            personaje: null,
            texto: 'ADRIÁN (gritando enojado):\n"¡No te entrometas! Damián es mi problema, no tuyo. Si para que dejes de meterte debemos dejar de ser amigos, así sea."\n\n[Adrián se retira. Jorge se aleja herido.]',
            siguiente: 'pasan_semanas',
            opciones: null
        },

        'respuesta_jorge_1': {
            personaje: null,
            texto: 'ADRIÁN:\n"Necesito tu ayuda."\n\n[Jorge se emociona y ofrece apoyo extra.]',
            siguiente: 'pasan_semanas',
            opciones: null
        },

        'respuesta_jorge_2': {
            personaje: null,
            texto: 'ADRIÁN (con pesar):\n"Por favor, no te entrometas. Te van a lastimar. No quiero que te hagan daño."\n\n[Jorge insiste pero Adrián se aleja.]',
            siguiente: 'pasan_semanas',
            opciones: null
        },

        'pasan_semanas': {
            personaje: null,
            texto: '[Pasan dos semanas de acoso escolar.]\n\nDAMIÁN (burlón):\n"Mira nada más, pensé que te acobardarías y no saldrías de tu casa."\n\nADRIÁN (suspiro):\n"¿Qué quieren ahora?"',
            siguiente: 'final_bueno',
            opciones: null
        },

        'final_bueno': {
            personaje: null,
            texto: '⭐ FINAL BUENO - LA VICTORIA HEROICA\n\n[Adrián encuentra el valor y se enfrenta a Damián]\n\nADRIÁN:\n"Se acabó. No más miedo."\n\n[En una pelea épica, Adrián vence a los bullies. El rector interviene.]\n\nRECTOR:\n"Los expulso a todos. Adrián, eres valiente."\n\n[Catalina lo abraza. La vida de Adrián cambia. Se convierte en un héroe.]\n\n★ FIN - GANASTE ★',
            siguiente: null,
            opciones: null,
            tipo: 'final'
        },

        'final_neutro': {
            personaje: null,
            texto: '⚖️ FINAL NEUTRO - LA VICTORIA PÍRRICA\n\n[Adrián vence a los bullies pero se transforma en lo que odiaba]\n\nDAMIÁN (muriendo):\n"¿Ves? Ya eres como yo..."\n\n[Adrián se da cuenta de que su poder lo ha corrompido. Ahora él es el nuevo bully.]\n\nADRIÁN:\n"No... no quería esto..."\n\n[Fin ambiguo. Victoria sin honor.]\n\n⚖️ FIN - PERO A QUÉ PRECIO ⚖️',
            siguiente: null,
            opciones: null,
            tipo: 'final'
        },

        'final_malo': {
            personaje: null,
            texto: '💀 FINAL MALO - EL ABISMO\n\n[Adrián cruza la línea]\n\nADRIÁN (fuera de control):\n"¡MUERE!"\n\n[En un arrebato, Adrián va demasiado lejos. La policía llega.]\n\nPOLICÍA:\n"¡Baja las manos!"\n\n[Adrián es arrestado. La prisión se convierte en su nuevo hogar.]\n\nADRIÁN (en su celda):\n"¿En qué me he convertido...?"\n\n💀 FIN - EL PRECIO DE LA IRA 💀',
            siguiente: null,
            opciones: null,
            tipo: 'final'
        }
    }
};

// Exportar para usarlo en game.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gameData;
}
