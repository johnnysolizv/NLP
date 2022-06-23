const { containerBootstrap } = require("@nlpjs/core");
const { Nlp } = require("@nlpjs/nlp");
const { LangEs } = require("@nlpjs/lang-es");

var Singleton = (function () {
  var instance;

  async function createInstance() {
    console.log("-----------------------------------------------");
    const container = await containerBootstrap();
    container.use(Nlp);
    container.use(LangEs);
    const nlp = container.get("nlp");
    nlp.settings.autoSave = false;
    nlp.addLanguage("es");

    // Adds the utterances and intents for the NLP----------------------------------------------experiencia.devolucionDeContacto
    //Compromiso de devolicion de contacto por parte del ejecutivo (MEDIUM).
    nlp.addDocument("es", "a que hora le parece que lo llame", "experiencia.devolucionDeContacto");
    nlp.addDocument("es", "en cuanto lo tenga le respondo el correo", "experiencia.devolucionDeContacto");
    nlp.addDocument("es", "cuando tenga la información le envío el correo", "experiencia.devolucionDeContacto");
    nlp.addDocument("es", "a que hora lo puedo llamar", "experiencia.devolucionDeContacto");
    nlp.addDocument("es", "le devuelvo el llamado para poder", "experiencia.devolucionDeContacto");
    nlp.addDocument("es", "su número de teléfono es del que me está llamando", "experiencia.devolucionDeContacto");
    nlp.addDocument("es", "la puedo llamar al mismo número", "experiencia.devolucionDeContacto");
    nlp.addDocument("es", "le estaría haciendo llegar un correo", "experiencia.devolucionDeContacto");
    nlp.addDocument("es", "te estaría llamando", "experiencia.devolucionDeContacto");
    nlp.addDocument("es", "horario para que me llamen", "experiencia.devolucionDeContacto");

    // Adds the utterances and intents for the NLP----------------------------------------------experiencia.contactoErroneo
    //Contacto Eerroneo (Medium).
    nlp.addDocument("es", "no conozco a esa persona", "experiencia.contactoErroneo");
    nlp.addDocument("es", "no el número está equivocado", "experiencia.contactoErroneo");
    nlp.addDocument("es", "este número no es de esa persona", "experiencia.contactoErroneo");
    nlp.addDocument("es", "este es otro número", "experiencia.contactoErroneo");
    nlp.addDocument("es", "contacto equivocado", "experiencia.contactoErroneo");
    nlp.addDocument("es", "este no es el número de telefono", "experiencia.contactoErroneo");
    nlp.addDocument("es", "este numero no es de esa persona", "experiencia.contactoErroneo");

    // Adds the utterances and intents for the NLP----------------------------------------------experiencia.corteLlamada
    //Corte de llamada (Medium).
    nlp.addDocument("es", "me cortaron el llamado", "experiencia.corteLlamada");
    nlp.addDocument("es", "se cortó", "experiencia.corteLlamada");
    nlp.addDocument("es", "estaba hablando y se corto", "experiencia.corteLlamada");
    nlp.addDocument("es", "se corto la llamada", "experiencia.corteLlamada");
    nlp.addDocument("es", "se me corto la comunicacion", "experiencia.corteLlamada");
    nlp.addDocument("es", "estaba en línea y se cortó", "experiencia.corteLlamada");
    nlp.addDocument("es", "esperé en linea pero se le cortó", "experiencia.corteLlamada");
    nlp.addDocument("es", "se habia cortado el llamado", "experiencia.corteLlamada");
    nlp.addDocument("es", "se cortó el llamado", "experiencia.corteLlamada");
    nlp.addDocument("es", "no se le escuchaba nada y se cortó", "experiencia.corteLlamada");

    // Adds the utterances and intents for the NLP----------------------------------------------experiencia.escalarLlamada
    //Escalar llamda (Medium).
    nlp.addDocument("es", "comunique con un supervisor", "experiencia.escalarLlamada");
    nlp.addDocument("es", "comuníqueme a su supervisor", "experiencia.escalarLlamada");
    nlp.addDocument("es", "deseo hablar con tu jefe", "experiencia.escalarLlamada");
    nlp.addDocument("es", "deseo hablar con un administrador", "experiencia.escalarLlamada");
    nlp.addDocument("es", "me puede pasar a su supervisor", "experiencia.escalarLlamada");
    nlp.addDocument("es", "necesito a un supervisor", "experiencia.escalarLlamada");
    nlp.addDocument("es", "necesito hablar con el encargado", "experiencia.escalarLlamada");
    nlp.addDocument("es", "necesito hablar con el supervisor", "experiencia.escalarLlamada");
    nlp.addDocument("es", "necesito hablar con tu jefe", "experiencia.escalarLlamada");
    nlp.addDocument("es", "pásame a tu supervisor", "experiencia.escalarLlamada");
    nlp.addDocument("es", "páseme a su supervisor", "experiencia.escalarLlamada");
    nlp.addDocument("es", "quiero hablar con el encargado", "experiencia.escalarLlamada");
    nlp.addDocument("es", "quiero hablar con el supervisor", "experiencia.escalarLlamada");
    nlp.addDocument("es", "quiero hablar con tu jefe", "experiencia.escalarLlamada");
    nlp.addDocument("es", "quiero hablar con tu supervisor", "experiencia.escalarLlamada");
    nlp.addDocument("es", "quiero hablar con un supervisor", "experiencia.escalarLlamada");
    nlp.addDocument("es", "pásame a tu jefe", "experiencia.escalarLlamada");
    nlp.addDocument("es", "comunícame con tu jefe", "experiencia.escalarLlamada");
    nlp.addDocument("es", "comunícame con tu supervisor", "experiencia.escalarLlamada");
    nlp.addDocument("es", "requiero hablar con tu jefe", "experiencia.escalarLlamada");
    nlp.addDocument("es", "requiero hablar con tu supervisor", "experiencia.escalarLlamada");
    nlp.addDocument("es", "requiero hablar con un supervisor", "experiencia.escalarLlamada");
    nlp.addDocument("es", "necesito hablar con alguien mas", "experiencia.escalarLlamada");
    nlp.addDocument("es", "déjame hablar con tu supervisor", "experiencia.escalarLlamada");
    nlp.addDocument("es", "voy a hablar con tu jefe", "experiencia.escalarLlamada");
    nlp.addDocument("es", "pásame al encargado", "experiencia.escalarLlamada");
    nlp.addDocument("es", "voy a tener que hablar con un jefe", "experiencia.escalarLlamada");
    nlp.addDocument("es", "voy a tener que hablar con un encargado", "experiencia.escalarLlamada");
    nlp.addDocument("es", "dame con tu jefe", "experiencia.escalarLlamada");
    nlp.addDocument("es", "dame con tu supervisor", "experiencia.escalarLlamada");
    nlp.addDocument("es", "dame el nombre de tu jefe", "experiencia.escalarLlamada");
    nlp.addDocument("es", "necesito hablar con tu supervisor", "experiencia.escalarLlamada");
    nlp.addDocument("es", "hablar con algún jefe", "experiencia.escalarLlamada");
    nlp.addDocument("es", "hablar con algún superior", "experiencia.escalarLlamada");
    nlp.addDocument("es", "necesito hablar con otra persona", "experiencia.escalarLlamada");
    nlp.addDocument("es", "estoy llamando desde el extranjero", "experiencia.escalarLlamada");

    // Adds the utterances and intents for the NLP----------------------------------------------experiencia.incumplimientos
    // Incumplimientos (Med-High).
    nlp.addDocument("es", "no me han solucionado", "experiencia.incumplimientos");
    nlp.addDocument("es", "nadie me llamó", "experiencia.incumplimientos");
    nlp.addDocument("es", "nadie me mando un mail", "experiencia.incumplimientos");
    nlp.addDocument("es", "todavía no me hacen el cobro de la tarjeta", "experiencia.incumplimientos");
    nlp.addDocument("es", "deberían haberse contactado con usted", "experiencia.incumplimientos");
    nlp.addDocument("es", "me quedaron de llamar", "experiencia.incumplimientos");
    nlp.addDocument("es", "no me han dicho nada", "experiencia.incumplimientos");
    nlp.addDocument("es", "todavía no me llaman", "experiencia.incumplimientos");
    nlp.addDocument("es", "aun no me llaman", "experiencia.incumplimientos");
    nlp.addDocument("es", "todavía no llegan las cosas a mi casa", "experiencia.incumplimientos");
    nlp.addDocument("es", "nadie se ha contactado conmigo", "experiencia.incumplimientos");
    nlp.addDocument("es", "no me cumplen", "experiencia.incumplimientos");
    nlp.addDocument("es", "sigo esperando que me llamen", "experiencia.incumplimientos");
    nlp.addDocument("es", "quedaron de llamarme", "experiencia.incumplimientos");
    nlp.addDocument("es", "no ha pasado nada", "experiencia.incumplimientos");
    nlp.addDocument("es", "lo que pasa es que ustedes no cumplen", "experiencia.incumplimientos");
    nlp.addDocument("es", "todavía me tienen esperando", "experiencia.incumplimientos");
    nlp.addDocument("es", "espere que me llamaran", "experiencia.incumplimientos");
    nlp.addDocument("es", "quedaron de darme una respuesta", "experiencia.incumplimientos");
    nlp.addDocument("es", "quedaron de contactarme", "experiencia.incumplimientos");
    nlp.addDocument("es", "aun estoy esperando", "experiencia.incumplimientos");
    nlp.addDocument("es", "me quede esperando la llamada", "experiencia.incumplimientos");
    nlp.addDocument("es", "no me han contestado nada", "experiencia.incumplimientos");
    nlp.addDocument("es", "como no me han llamado", "experiencia.incumplimientos");
    nlp.addDocument("es", "le mande un correo y tampoco me responde", "experiencia.incumplimientos");
    nlp.addDocument("es", "aun no me llega nada", "experiencia.incumplimientos");
    nlp.addDocument("es", "todavía no he tenido respuesta", "experiencia.incumplimientos");
    nlp.addDocument("es", "quedaron de entregármela", "experiencia.incumplimientos");
    nlp.addDocument("es", "no me han respondido nada todavía", "experiencia.incumplimientos");
    nlp.addDocument("es", "todabia no tengo respuesta de", "experiencia.incumplimientos");
    nlp.addDocument("es", "se me indico que no hay ningun registro de", "experiencia.incumplimientos");
    nlp.addDocument("es", "no me responde nadie", "experiencia.incumplimientos");
    nlp.addDocument("es", "no he tenido respuesta", "experiencia.incumplimientos");
    nlp.addDocument("es", "no me han llamado del banco", "experiencia.incumplimientos");
    nlp.addDocument("es", "estoy esperando y no me han llamado", "experiencia.incumplimientos");
    nlp.addDocument("es", "dijeron que me llamarian y no pasa nada", "experiencia.incumplimientos");
    nlp.addDocument("es", "nadie me ha llamado", "experiencia.incumplimientos");
    nlp.addDocument("es", "nunca me contacto", "experiencia.incumplimientos");
    nlp.addDocument("es", "nunca me contactaron", "experiencia.incumplimientos");
    nlp.addDocument("es", "no me ha contactado nadie", "experiencia.incumplimientos");
    nlp.addDocument("es", "no me ha devuelto el llamado", "experiencia.incumplimientos");
    nlp.addDocument("es", "no me hizo la gestion", "experiencia.incumplimientos");
    nlp.addDocument("es", "el ejecutivo que me llamo no cumplio con lo que me ofrecio", "experiencia.incumplimientos");
    nlp.addDocument("es", "el ejecutivo no me ha llamado", "experiencia.incumplimientos");
    nlp.addDocument("es", "la ejecutiva no me ha llamado", "experiencia.incumplimientos");
    nlp.addDocument("es", "el lunes me iban a llamar", "experiencia.incumplimientos");
    nlp.addDocument("es", "el martes me iban a llamar", "experiencia.incumplimientos");
    nlp.addDocument("es", "el miercoles me iban a llamar", "experiencia.incumplimientos");
    nlp.addDocument("es", "el jueves me iban a llamar", "experiencia.incumplimientos");
    nlp.addDocument("es", "el viernes me iban a llamar", "experiencia.incumplimientos");
    nlp.addDocument("es", "el ejecutivo no me ha contactado", "experiencia.incumplimientos");
    nlp.addDocument("es", "la ejecutiva no me ha contactado", "experiencia.incumplimientos");
    nlp.addDocument("es", "no me volvieron a llamar", "experiencia.incumplimientos");
    nlp.addDocument("es", "un ejecutivo dijo que me llamaría", "experiencia.incumplimientos");
    nlp.addDocument("es", "me dijeron que hoy me devolverían el dinero", "experiencia.incumplimientos");
    nlp.addDocument("es", "el ejecutivo nunca me devolvió el llamado", "experiencia.incumplimientos");
    nlp.addDocument("es", "no hubo aviso ni llamados", "experiencia.incumplimientos");

    // Adds the utterances and intents for the NLP----------------------------------------------experiencia.llamadosReiterados
    // Llamados reiterados a cliente (Medium).

    nlp.addDocument("es", "me llaman todos los días", "experiencia.llamadosReiterados");
    nlp.addDocument("es", "me vuelven a llamar", "experiencia.llamadosReiterados");
    nlp.addDocument("es", "ya les dije cuando voy a pagar", "experiencia.llamadosReiterados");
    nlp.addDocument("es", "ya me llamaron", "experiencia.llamadosReiterados");
    nlp.addDocument("es", "me está llamando del banco", "experiencia.llamadosReiterados");
    nlp.addDocument("es", "que no vuelva a llamar", "experiencia.llamadosReiterados");
    nlp.addDocument("es", "todos los días me llaman", "experiencia.llamadosReiterados");
    nlp.addDocument("es", "me vuelven a llamar por lo mismo", "experiencia.llamadosReiterados");

    // Adds the utterances and intents for the NLP----------------------------------------------experiencia.insatisfaccion
    // insatisfaccion (Medium).
  
    nlp.addDocument("es", "sin mi autorización", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no es primera vez que pasa", "experiencia.insatisfaccion");
    nlp.addDocument("es", "hay varios reclamos míos", "experiencia.insatisfaccion");
    nlp.addDocument("es", "ya no se que hacer", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no puedo seguir esperando", "experiencia.insatisfaccion");
    nlp.addDocument("es", "es muy grave el asunto", "experiencia.insatisfaccion");
    nlp.addDocument("es", "desconfío de ustedes", "experiencia.insatisfaccion");
    nlp.addDocument("es", "esperan a última hora", "experiencia.insatisfaccion");
    nlp.addDocument("es", "es un tema muy urgente", "experiencia.insatisfaccion");
    nlp.addDocument("es", "ustedes son poco claros", "experiencia.insatisfaccion");
    nlp.addDocument("es", "me parece un abuso", "experiencia.insatisfaccion");
    nlp.addDocument("es", "me parece absurdo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "estoy super molesto", "experiencia.insatisfaccion");
    nlp.addDocument("es", "estoy cansado de lo mismo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "siempre pasa lo mismo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "estoy super complicado con la situación", "experiencia.insatisfaccion");
    nlp.addDocument("es", "me esta empezando a complicar mucho el tema", "experiencia.insatisfaccion");
    nlp.addDocument("es", "cuando lo van a resolver", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no puedo esperar mas", "experiencia.insatisfaccion");
    nlp.addDocument("es", "hasta cuando se repite esto", "experiencia.insatisfaccion");
    nlp.addDocument("es", "cuanto mas tengo que esperar", "experiencia.insatisfaccion");
    nlp.addDocument("es", "exijo una respuesta", "experiencia.insatisfaccion");
    nlp.addDocument("es", "mientras no me resuelvan el problema", "experiencia.insatisfaccion");
    nlp.addDocument("es", "las personas no saben bien como opera", "experiencia.insatisfaccion");
    nlp.addDocument("es", "uno queda un poco de manos atada", "experiencia.insatisfaccion");
    nlp.addDocument("es", "claramente no la hecho", "experiencia.insatisfaccion");
    nlp.addDocument("es", "nunca me han solucionado mi problema", "experiencia.insatisfaccion");
    nlp.addDocument("es", "se me ha hecho recurrente", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no me pudieron dar respuesta ni solución", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no puedo perder mas tiempo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "tu crees que tengo tiempo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "estoy llamando al ejecutivo y tampoco me contesta", "experiencia.insatisfaccion");
    nlp.addDocument("es", "me dieron otro teléfono y el otro teléfono no contesta nunca", "experiencia.insatisfaccion");
    nlp.addDocument("es", "nunca me contestan el teléfono", "experiencia.insatisfaccion");
    nlp.addDocument("es", "atienden pésimo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no puede ser que me entreguen esa respuesta", "experiencia.insatisfaccion");
    nlp.addDocument("es", "me molesta que", "experiencia.insatisfaccion");
    nlp.addDocument("es", "necesito una respuesta ahora", "experiencia.insatisfaccion");
    nlp.addDocument("es", "porque tengo que hacerlo yo debería hacerlo el banco", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no me puede decir que se va a demorar", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no quiero seguir hablando contigo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "como es posible que", "experiencia.insatisfaccion");
    nlp.addDocument("es", "en ningun momento me dijeron", "experiencia.insatisfaccion");
    nlp.addDocument("es", "a mi ustedes no me lo van a pagar", "experiencia.insatisfaccion");
    nlp.addDocument("es", "le voy a tener que contar todo a usted", "experiencia.insatisfaccion");
    nlp.addDocument("es", "siempre me pasa lo mismo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "de nuevo lo mismo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no me pudieron dar respuesta ni solucion", "experiencia.insatisfaccion");
    nlp.addDocument("es", "encuentro el colmo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "a mi no me dijeron", "experiencia.insatisfaccion");
    nlp.addDocument("es", "es desagradable que te llamen todo el día", "experiencia.insatisfaccion");
    nlp.addDocument("es", "me molesta tener que llamar por esto", "experiencia.insatisfaccion");
    nlp.addDocument("es", "es una pérdida de tiempo tener que estar llamando", "experiencia.insatisfaccion");
    nlp.addDocument("es", "siempre es lo mismo con ustedes", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no puede ser que pase lo mismo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no puede ser que no solucionen", "experiencia.insatisfaccion");
    nlp.addDocument("es", "ustedes como banco no se hacen cargo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "ustedes no se hacen cargo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "nadie lo resuelve en el banco", "experiencia.insatisfaccion");
    nlp.addDocument("es", "genera sensación de abandono", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no saben como se manejan las cosas", "experiencia.insatisfaccion");
    nlp.addDocument("es", "el banco no es eficiente", "experiencia.insatisfaccion");
    nlp.addDocument("es", "ustedes son poco eficientes", "experiencia.insatisfaccion");
    nlp.addDocument("es", "están amarrados con cosas que no dependen de ustedes", "experiencia.insatisfaccion");
    nlp.addDocument("es", "la molestia no es contigo es con el banco", "experiencia.insatisfaccion");
    nlp.addDocument("es", "tiene una mala atencion", "experiencia.insatisfaccion");
    nlp.addDocument("es", "quedo mal hecha la gestion", "experiencia.insatisfaccion");
    nlp.addDocument("es", "mala atencion de la sucursal", "experiencia.insatisfaccion");
    nlp.addDocument("es", "siempre tengo problema con ustedes", "experiencia.insatisfaccion");
    nlp.addDocument("es", "siempre tengo problemas con el banco", "experiencia.insatisfaccion");
    nlp.addDocument("es", "me molesta que me sigan llamando", "experiencia.insatisfaccion");
    nlp.addDocument("es", "y me siguen llamando", "experiencia.insatisfaccion");
    nlp.addDocument("es", "quiero que el banco se haga cargo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "quiero que el banco se haga responsable", "experiencia.insatisfaccion");
    nlp.addDocument("es", "sin mi consentimiento", "experiencia.insatisfaccion");
    nlp.addDocument("es", "cuando me llamaron me dieron otra informacion", "experiencia.insatisfaccion");
    nlp.addDocument("es", "cuando me llamaron no me dijeron eso", "experiencia.insatisfaccion");
    nlp.addDocument("es", "cuando llame me dieron otra informacion", "experiencia.insatisfaccion");
    nlp.addDocument("es", "cuando llame no me dijeron eso", "experiencia.insatisfaccion");
    nlp.addDocument("es", "el ejecutivo que me llamo no fue claro con la informacion", "experiencia.insatisfaccion");
    nlp.addDocument("es", "cuando me llamaron yo dije que no queria el producto", "experiencia.insatisfaccion");
    nlp.addDocument("es", "yo pedi que no me llamaran mas para ofrecerme campañas", "experiencia.insatisfaccion");
    nlp.addDocument("es", "cuando me llamaron me indicaron otra cosa", "experiencia.insatisfaccion");
    nlp.addDocument("es", "cuando me contactaron omitieron esa informacion", "experiencia.insatisfaccion");
    nlp.addDocument("es", "niun brillo el banco", "experiencia.insatisfaccion");
    nlp.addDocument("es", "me estan hostigando", "experiencia.insatisfaccion");
    nlp.addDocument("es", "me dejan hablando solo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "como es posible que me esten dando esta respuesta", "experiencia.insatisfaccion");
    nlp.addDocument("es", "como es posible que siempre pase lo mismo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "como es posible que no me atiendan", "experiencia.insatisfaccion");
    nlp.addDocument("es", "es inposible que espere tres semanas", "experiencia.insatisfaccion");
    nlp.addDocument("es", "me molesta la situacion", "experiencia.insatisfaccion");
    nlp.addDocument("es", "estoy molesta", "experiencia.insatisfaccion");
    nlp.addDocument("es", "esto me tiene muy molesta", "experiencia.insatisfaccion");
    nlp.addDocument("es", "me molestan todo el dia", "experiencia.insatisfaccion");
    nlp.addDocument("es", "mi total descontento", "experiencia.insatisfaccion");
    nlp.addDocument("es", "estoy descontento", "experiencia.insatisfaccion");
    nlp.addDocument("es", "esa no es una solucion para mi", "experiencia.insatisfaccion");
    nlp.addDocument("es", "el banco nunca me da solucion", "experiencia.insatisfaccion");
    nlp.addDocument("es", "como no van a poder solucionar nada", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no me saben dar respuesta", "experiencia.insatisfaccion");
    nlp.addDocument("es", "me parece una estupidez su respuesta", "experiencia.insatisfaccion");
    nlp.addDocument("es", "me parece el colmo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "me da rabia", "experiencia.insatisfaccion");
    nlp.addDocument("es", "para que vean las consecuencias de una mala gestión", "experiencia.insatisfaccion");
    nlp.addDocument("es", "es un chiste lo que me dice usted", "experiencia.insatisfaccion");
    nlp.addDocument("es", "la perdida de tiempo nadie me lo paga", "experiencia.insatisfaccion");
    nlp.addDocument("es", "llevo muchos días esperando que me contesten", "experiencia.insatisfaccion");
    nlp.addDocument("es", "llevo muchos días esperando que me respondan", "experiencia.insatisfaccion");
    nlp.addDocument("es", "la ejecutiva nunca la encuentro", "experiencia.insatisfaccion");
    nlp.addDocument("es", "al ejecutivo nunca lo encuentro", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no tengo paciencia para seguir esperando", "experiencia.insatisfaccion");
    nlp.addDocument("es", "me llaman a cada rato del banco", "experiencia.insatisfaccion");
    nlp.addDocument("es", "estoy pidiendo una solución", "experiencia.insatisfaccion");
    nlp.addDocument("es", "ustedes dan información diferente", "experiencia.insatisfaccion");
    nlp.addDocument("es", "que terrible que me tengan así", "experiencia.insatisfaccion");
    nlp.addDocument("es", "horrible el servicio", "experiencia.insatisfaccion");
    nlp.addDocument("es", "esto es agotador", "experiencia.insatisfaccion");
    nlp.addDocument("es", "yo no puedo esperar esos días", "experiencia.insatisfaccion");
    nlp.addDocument("es", "yo no estoy consultando eso", "experiencia.insatisfaccion");
    nlp.addDocument("es", "mi cuenta fue cerrada sin aviso", "experiencia.insatisfaccion");
    nlp.addDocument("es", "me cobran por algo inactivo", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no puedo estar regalando mi plata", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no quiero esperar tantos días", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no me lo dijeron el mismo día", "experiencia.insatisfaccion");
    nlp.addDocument("es", "quién me paga los malos ratos", "experiencia.insatisfaccion");
    nlp.addDocument("es", "se suponía que era gratis", "experiencia.insatisfaccion");
    nlp.addDocument("es", "si no funciona no debería cobrarme", "experiencia.insatisfaccion");
    nlp.addDocument("es", "no te escucho porque se corta", "experiencia.insatisfaccion");
  
    // Adds the utterances and intents for the NLP----------------------------------------------experiencia.noCliente
    // No Cliente (Med-High).
    nlp.addDocument("es", "no soy cliente del banco", "experiencia.noCliente");
    nlp.addDocument("es", "usted no es cliente de este banco", "experiencia.noCliente");
    nlp.addDocument("es", "usted no tiene ningun producto con el banco", "experiencia.noCliente");
    nlp.addDocument("es", "no podemos validarlo", "experiencia.noCliente");
    nlp.addDocument("es", "usted no figura como cliente", "experiencia.noCliente");
    nlp.addDocument("es", "no es cliente del banco", "experiencia.noCliente");
    nlp.addDocument("es", "no aparece como cliente del banco", "experiencia.noCliente");

    // Adds the utterances and intents for the NLP----------------------------------------------experiencia.reclamo
    // Reclamo (Medium).
    nlp.addDocument("es", "quiero realizar un reclamo", "experiencia.reclamo");
    nlp.addDocument("es", "tengo una queja", "experiencia.reclamo");
    nlp.addDocument("es", "voy a dejar una queja", "experiencia.reclamo");
    nlp.addDocument("es", "necesito hacer un reclamo", "experiencia.reclamo");
    nlp.addDocument("es", "necesito dejar un reclamo", "experiencia.reclamo");
    nlp.addDocument("es", "quiero dejar un reclamo", "experiencia.reclamo");
    nlp.addDocument("es", "reclamo de mala atencion", "experiencia.reclamo");
    nlp.addDocument("es", "quisiera hacer un reclamo", "experiencia.reclamo");
    nlp.addDocument("es", "reclamo por mala gestion", "experiencia.reclamo");
    nlp.addDocument("es", "quiero hacer un reclamo en contra", "experiencia.reclamo");
    nlp.addDocument("es", "quiero reclamar por la empresa de cobranza", "experiencia.reclamo");
    nlp.addDocument("es", "reclamo por hostigamiento", "experiencia.reclamo");
    nlp.addDocument("es", "tengo una queja con el banco", "experiencia.reclamo");
    nlp.addDocument("es", "tengo una queja que hacer", "experiencia.reclamo");
    nlp.addDocument("es", "si no me entregan una respuesta donde puedo ingresar el reclamo formal", "experiencia.reclamo");
    nlp.addDocument("es", "voy a seguir reclamando por el cobro", "experiencia.reclamo");

    // Adds the utterances and intents for the NLP----------------------------------------------experiencia.repeticionLlamada
    // Repeticion de llamada (Medium)
    nlp.addDocument("es", "he llamado mil veces", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "es tercera vez que llamo por lo mismo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé la semana pasada", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "ya he llamado por lo mismo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "he llamado muchas veces", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "es segunda vez que llamo por lo mismo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "el día de ayer llamé", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "el otro día hablé", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "es cuarta vez que llamo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "es quinta vez que llamo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "es segunda vez que hablo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "es segunda vez que llamo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "es tercera vez que llamo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "hablado anteriormente", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "hablé antes", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "hablé ayer", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "acabo de hablar con alguien", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "hablé con cinco personas", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "hablé el día de ayer", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "hablé hace un mes", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "hablé y me dijo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "hablé y me indicó", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "hace rato marque", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "he hablado con cinco personas", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "he llamado varias veces", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "la persona con la que hablé", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "la semana pasada hablé", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "la semana pasada llamé", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "la última vez que hablé", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "la última vez que llamé", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé antes", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé en la mañana", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé otra vez", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé y hablé con", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "me atendieron", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "el que me atendió antes", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "me atendió alguien", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "tengo que volver a hablar", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "ya había hablado anteriormente", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "ya había llamado", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "ya había llamado anteriormente", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "ya hablé antes", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "he llamado toda la semana", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "he llamado todo el mes", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "he llamado todos los días", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé por lo mismo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "ya llamé por lo mismo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "la otra vez llamé por lo mismo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "me iban a llamar", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "las veces que he llamado", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "he llamado antes", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé el lunes", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé el martes", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé el miércoles", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé el jueves", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé el viernes", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llama el sábado", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé el domingo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "ya había llamado por lo mismo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "vuelvo a comunicarme por lo mismo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé como cinco veces", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé como a las una", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé mas temprano", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé hace un rato", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "tuve que volver a llamar", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "hace días que pedí", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "la semana pasada contacte a un ejecutivo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "recién hable con un colega tuyo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "es como la cuarta persona que me atiende", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "vamos a empezar todo desde cero", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "recién llamé y me dijeron", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "es tercera vez que hago", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "ha pedido varias veces", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "recién había llamado", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "me dijeron que llamara a este numero", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "es tercera persona con la que me comunico", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llevo dos días tratando de hacerlo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "hablé con dos personas", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "hablé con tres personas", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "hablé con cuatro personas", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "es que había llamado antes", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "hace rato había llamado", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "había llamado recién", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "anoche hice una llamada", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé yo hace un", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé el otro día al ejecutivo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "este es mi tercer llamado", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "yo ayer ya llamé", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "ya llamé hace un rato", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé y me dijeron", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé al vox", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé anteriormente", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "ya llamé pero", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "como cuarta vez que tengo que llamar", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "la persona que me atendió anteriormente", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "la otra persona que me atendió", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "el caballero que me atendió", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "primero me atendió", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "me atedió una niña", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "el ejecutivo que me atendió", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "la niña que me atendió", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "ayer llamé", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "ayer más o menos a esta misma hora llamé", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "el señor que me atendió ayer", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "el señor que me atendió", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "yo llamé al banco para", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "le persona que me atendió ayer", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé como a las", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "anoche llamé", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "la ultima persona que me atendio", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé por telefono ayer", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "llamé por telefono antes", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "ayer llamé y me dijeron", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "hoy dia llamé y me dijeron", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "la persona que me atendio me dijo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "la persona que me atendio me explico", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "me atendio tu colega", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "hable con tu colega", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "un colega tuyo me dijo", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "la señorita que me atendio por telefono", "experiencia.repeticionLlamada");
    nlp.addDocument("es", "acabo de llamar hace un momento atras", "experiencia.repeticionLlamada");

    // Adds the utterances and intents for the NLP----------------------------------------------experiencia.satisfaccion
    // Satisfaccion (Medium)
    nlp.addDocument("es", "te agradezco mucho tu ayuda y tu rapidez", "experiencia.satisfaccion");
    nlp.addDocument("es", "ahora si que me quedo claro", "experiencia.satisfaccion");
    nlp.addDocument("es", "todo muy bien muchísimas gracias", "experiencia.satisfaccion");
    nlp.addDocument("es", "notificación de la buena atención que me dio", "experiencia.satisfaccion");
    nlp.addDocument("es", "muy buena su atencion", "experiencia.satisfaccion");
    nlp.addDocument("es", "te agradezco mucho", "experiencia.satisfaccion");
    nlp.addDocument("es", "feliz de que me hayas solucionado el problema", "experiencia.satisfaccion");
    nlp.addDocument("es", "a mi me gusta como atiende el vox", "experiencia.satisfaccion");
    nlp.addDocument("es", "a mi me gusta como me atienden", "experiencia.satisfaccion");
    nlp.addDocument("es", "cómo le mando una felicitación", "experiencia.satisfaccion");
    nlp.addDocument("es", "cómo le envio una felicitación", "experiencia.satisfaccion");
    nlp.addDocument("es", "como hago llegar una felicitación", "experiencia.satisfaccion");
    nlp.addDocument("es", "todo muy bien", "experiencia.satisfaccion");
    nlp.addDocument("es", "te agradezco muchas gracias", "experiencia.satisfaccion");
    nlp.addDocument("es", "agradezco tu disposición", "experiencia.satisfaccion");
    nlp.addDocument("es", "agradezco tu paciencia", "experiencia.satisfaccion");
    nlp.addDocument("es", "agradezco su ayuda", "experiencia.satisfaccion");
    nlp.addDocument("es", "muchas gracias por la ayuda", "experiencia.satisfaccion");
    nlp.addDocument("es", "muchas gracias por la información", "experiencia.satisfaccion");
    nlp.addDocument("es", "muchas gracias por su atención", "experiencia.satisfaccion");
    nlp.addDocument("es", "muy satisfecho con tu respuesta", "experiencia.satisfaccion");
    nlp.addDocument("es", "me atendió muy bien", "experiencia.satisfaccion");
    nlp.addDocument("es", "agradecido de su gentileza", "experiencia.satisfaccion");


    //Train also the NLG news.
    nlp.addAnswer("es", "experiencia.devolucionDeContacto", "Compromiso de devolucion de contacto por parte del ejecutivo");
    nlp.addAnswer("es", "experiencia.contactoErroneo", "Contacto erroneo");
    nlp.addAnswer("es", "experiencia.corteLlamada", "Corte de llamada");
    nlp.addAnswer("es", "experiencia.escalarLlamada", "Escalar llamada");
    nlp.addAnswer("es", "experiencia.incumplimientos", "Incumplimientos");
    nlp.addAnswer("es", "experiencia.llamadosReiterados", "Llamados reiterados a cliente");
    nlp.addAnswer("es", "experiencia.insatisfaccion", "Insatisfaccion");
    nlp.addAnswer("es", "experiencia.noCliente", "No cliente");
    nlp.addAnswer("es", "experiencia.reclamo", "Reclamo");
    nlp.addAnswer("es", "experiencia.repeticionLlamada", "Repeticion de llamada");
    nlp.addAnswer("es", "experiencia.satisfaccion", "Satisfaccion");
    


    await nlp.train();

    return nlp;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

//  function run() {

//      var instance1 = Singleton.getInstance();
//      var instance2 = Singleton.getInstance();

//      console.log("Same instance? " + (instance1 === instance2));
//  }

// function run (){
//      Singleton.getInstance().then((response) => {
//           response.process("es", "si con el").then(data=>{
//           console.log(data);
//           }
//           ).catch(err =>{})
//           });

// }
// run();

module.exports = Singleton;
