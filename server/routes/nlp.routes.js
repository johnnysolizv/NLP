
const { classifier } = require('../controllers/nlp.controllers');

module.exports = app => {

    app.post('/api/nlp/classifier', classifier);

}