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
    // Adds the utterances and intents for the NLP----------------------------------------------aut.directo
    nlp.addDocument("es", "sí sí sí sí sí", "aut.directo");
    nlp.addDocument("es", "Sí para que sería", "aut.directo");
    nlp.addDocument("es", "chi para que sería", "aut.directo");
    nlp.addDocument("es", "sí De parte de quién", "aut.directo");
    nlp.addDocument("es", "con el dígame que necesita", "aut.directo");
    nlp.addDocument("es", "con ella dígame que necesita", "aut.directo");
    nlp.addDocument("es", "ci de dónde llama", "aut.directo");
    nlp.addDocument("es", "sí que pasa", "aut.directo");
    nlp.addDocument("es", "si", "aut.directo");
    nlp.addDocument("es", "se", "aut.directo");
    nlp.addDocument("es", "él", "aut.directo");
    nlp.addDocument("es", "el", "aut.directo");
    nlp.addDocument("es", "Si diga", "aut.directo");
    nlp.addDocument("es", "Okay soy yo", "aut.directo");
    nlp.addDocument("es", "si claro dígame", "aut.directo");
    nlp.addDocument("es", "Sí dígame", "aut.directo");
    nlp.addDocument("es", "con el", "aut.directo");
    nlp.addDocument("es", "efectivamente", "aut.directo");
    nlp.addDocument("es", "en efecto", "aut.directo");
    nlp.addDocument("es", "Sí con ella", "aut.directo");
    nlp.addDocument("es", "si con quien tengo el placer", "aut.directo");
    nlp.addDocument("es", "Aló sí", "aut.directo");
    nlp.addDocument("es", "con ella misma", "aut.directo");
    nlp.addDocument("es", "la mismisima", "aut.directo");
    nlp.addDocument("es", "con ella", "aut.directo");
    nlp.addDocument("es", "correctisimo", "aut.directo");
    nlp.addDocument("es", "el mismisimo", "aut.directo");
    nlp.addDocument("es", "si positivo", "aut.directo");
    nlp.addDocument("es", "si el mismo", "aut.directo");
    nlp.addDocument("es", "correctísimo", "aut.directo");
    nlp.addDocument("es", "asi es", "aut.directo");
    nlp.addDocument("es", "si con quien", "aut.directo");
    nlp.addDocument("es", "sí le dije que sí", "aut.directo");
    nlp.addDocument("es", "positivo", "aut.directo");
    nlp.addDocument("es", "si para que", "aut.directo");
    nlp.addDocument("es", "si porque", "aut.directo");
    nlp.addDocument("es", "si soy ella", "aut.directo");
    nlp.addDocument("es", "si correcto", "aut.directo");
    nlp.addDocument("es", "hablá con él", "aut.directo");
    nlp.addDocument("es", "si pero que necesita", "aut.directo");
    nlp.addDocument("es", "si con él", "aut.directo");
    nlp.addDocument("es", "si para que es", "aut.directo");
    nlp.addDocument("es", "con el habla", "aut.directo");
    nlp.addDocument("es", "si perdón con quien hablo", "aut.directo");
    nlp.addDocument("es", "si dime que quieres", "aut.directo");
    nlp.addDocument("es", "si pero se puede identificar", "aut.directo");
    nlp.addDocument("es", "si quien lo llama", "aut.directo");
    nlp.addDocument("es", "afirmativo", "aut.directo");
    nlp.addDocument("es", "si afirmativo", "aut.directo");
    nlp.addDocument("es", "si de parte de quien", "aut.directo");
    nlp.addDocument("es", "habla con el", "aut.directo");
    nlp.addDocument("es", "si claro", "aut.directo");
    nlp.addDocument("es", "con el dime", "aut.directo");
    nlp.addDocument("es", "si que necesita de mi", "aut.directo");
    nlp.addDocument("es", "por supuesto", "aut.directo");
    nlp.addDocument("es", "si con quien tengo el gusto", "aut.directo");
    nlp.addDocument("es", "con él esta hablando", "aut.directo");
    nlp.addDocument("es", "si que necesita", "aut.directo");
    nlp.addDocument("es", "si para que estas llamando", "aut.directo");
    nlp.addDocument("es", "si que quiere", "aut.directo");
    nlp.addDocument("es", "si que desea", "aut.directo");
    nlp.addDocument("es", "si quien es usted", "aut.directo");

    // Adds the utterances and intents for the NLP----------------------------------------------aut.fallecio
    nlp.addDocument("es", "fallecido", "aut.fallecio");
    nlp.addDocument("es", "el fallecido señorita", "aut.fallecio"); 
    nlp.addDocument("es", "lo filetearon", "aut.fallecio"); 
    nlp.addDocument("es", "lo filietiaron", "aut.fallecio"); 
    nlp.addDocument("es", "se lo pitiaron", "aut.fallecio"); 
    nlp.addDocument("es", "el fallecio", "aut.fallecio"); 
    nlp.addDocument("es", "se murió", "aut.fallecio"); 
    nlp.addDocument("es", "paso a mejor vida", "aut.fallecio"); 
    nlp.addDocument("es", "se fue al cielo", "aut.fallecio"); 
    nlp.addDocument("es", "murió", "aut.fallecio"); 
    nlp.addDocument("es", "falleció", "aut.fallecio"); 
    nlp.addDocument("es", "el ya murió", "aut.fallecio"); 
    nlp.addDocument("es", "esa persona murió", "aut.fallecio");  
    nlp.addDocument("es", "ya está muerto", "aut.fallecio");  
    nlp.addDocument("es", "está muerto ya", "aut.fallecio");  
    nlp.addDocument("es", "está fallecido", "aut.fallecio");  
    nlp.addDocument("es", "se murió hace tiempo", "aut.fallecio");  
    nlp.addDocument("es", "ya murió", "aut.fallecio");  
    nlp.addDocument("es", "está muerto", "aut.fallecio");  
    nlp.addDocument("es", "está sepultado", "aut.fallecio");  
    nlp.addDocument("es", "está bajo tierra", "aut.fallecio");  
    nlp.addDocument("es", "ha dejado de existir", "aut.fallecio");  
    nlp.addDocument("es", "no sabe que murio", "aut.fallecio");  
    nlp.addDocument("es", "Murio", "aut.fallecio");  

    // Adds the utterances and intents for the NLP----------------------------------------------aut.volverALlamar
    nlp.addDocument("es", " que estoy trabajando", "aut.volverALlamar");  
    nlp.addDocument("es", "si no Pero puede dejar recado Si desea", "aut.volverALlamar");
    nlp.addDocument("es", "estoy de vacaciones", "aut.volverALlamar");
    nlp.addDocument("es", "estoy hospitalizada", "aut.volverALlamar");
    nlp.addDocument("es", "estoy hospitalizado", "aut.volverALlamar");
    nlp.addDocument("es", "estoy en el hospital", "aut.volverALlamar");
    nlp.addDocument("es", "hospitalizada", "aut.volverALlamar");
    nlp.addDocument("es", "hospitalizado", "aut.volverALlamar");
    nlp.addDocument("es", "estoy enferma", "aut.volverALlamar");
    nlp.addDocument("es", "estoy enfermo", "aut.volverALlamar");  
    nlp.addDocument("es", "en una reu", "aut.volverALlamar");
    nlp.addDocument("es", "estoy cagando", "aut.volverALlamar");
    nlp.addDocument("es", "estoy en el baño", "aut.volverALlamar");
    nlp.addDocument("es", "estoy ocupada", "aut.volverALlamar");
    nlp.addDocument("es", "en este momento estoy ocupado", "aut.volverALlamar");
    nlp.addDocument("es", "estoy ocupadísimo ahora", "aut.volverALlamar");
    nlp.addDocument("es", "no puedo hablar", "aut.volverALlamar");
    nlp.addDocument("es", "ahora no puedo hablar", "aut.volverALlamar");
    nlp.addDocument("es", "me encuentro ocupado", "aut.volverALlamar");  
    nlp.addDocument("es", "estoy ocupado", "aut.volverALlamar");
    nlp.addDocument("es", "en reunión", "aut.volverALlamar");
    nlp.addDocument("es", "el está bañándose", "aut.volverALlamar");
    nlp.addDocument("es", "estoy en reunión", "aut.volverALlamar");
    nlp.addDocument("es", "me puedes devolver la llamada más tarde", "aut.volverALlamar");
    nlp.addDocument("es", "si pero no puedo ahora", "aut.volverALlamar");
    nlp.addDocument("es", "estoy ocupada no puedo", "aut.volverALlamar");
    nlp.addDocument("es", "estoy ocupado Me puede devolver el llamado ", "aut.volverALlamar");
    nlp.addDocument("es", "me puedes devolver el llamado ", "aut.volverALlamar");  
    nlp.addDocument("es", "sabe que estoy ocupado llameme más tarde", "aut.volverALlamar");
    nlp.addDocument("es", "llame mas tarde", "aut.volverALlamar");
    nlp.addDocument("es", "llamelo mas tarde", "aut.volverALlamar");
    nlp.addDocument("es", "llamelo despues", "aut.volverALlamar");
    nlp.addDocument("es", "llamelo luego", "aut.volverALlamar");

    //Train also the NLG news.
    nlp.addAnswer("es", "aut.directo", "Paga la wea");
    nlp.addAnswer("es", "aut.fallecio", "ya balio brgha");
    nlp.addAnswer("es", "aut.volverALlamar", "te llamare hasta que atiendas");
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