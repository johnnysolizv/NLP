const { containerBootstrap } = require('@nlpjs/core');
const { Nlp } = require('@nlpjs/nlp');
const { LangEs } = require('@nlpjs/lang-es');


async function nlpInit() {

    console.log("-----------------------------------------------");
    const container = await containerBootstrap();
    container.use(Nlp);
    container.use(LangEs);
    const nlp = container.get('nlp');
    nlp.settings.autoSave = false;
    nlp.addLanguage('es');
    // Adds the utterances and intents for the NLP
    nlp.addDocument('es', 'adios por ahora', 'greetings.bye');
    nlp.addDocument('es', 'adios y ten cuidado', 'greetings.bye');
    nlp.addDocument('es', 'muy bien nos vemos luego', 'greetings.bye');
    nlp.addDocument('es', 'debo irme', 'greetings.bye');
    nlp.addDocument('es', 'hola', 'greetings.hello');
  
    //Adds the utterances and intents for the NLP in spanish news.
    nlp.addDocument('es', 'si con el', 'aut.directo');
    
    // Train also the NLG
    nlp.addAnswer('es', 'greetings.bye', 'hasta la proxima');
    nlp.addAnswer('es', 'greetings.bye', '¡te veo pronto!');
    nlp.addAnswer('es', 'greetings.hello', '¡hola que tal!');
    nlp.addAnswer('es', 'greetings.hello', '¡salludos!');
    
    //Train also the NLG news.
    nlp.addAnswer('es', 'aut.directo', 'hola johnny');
    await nlp.train();
    return nlp;
  
 
}

// async function exec  (){
//   const response = await nlpInit();
//   const data = await response.process('es', 'si con el');
//   console.log(data);
//  }
// exec();

module.exports = nlpInit;

//exec();
