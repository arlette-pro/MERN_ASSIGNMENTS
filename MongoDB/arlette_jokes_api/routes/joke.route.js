const UserController = require('../controllers/joke.controller');
 
module.exports = app => {
    app.post('/api/jokes', UserController.createJoke);
    app.get('/api/jokes', UserController.findAllJokes);
    app.get('/api/jokes/:id', UserController.findOneJoke);
    app.patch('/api/jokes/:id', UserController.updateExistingJoke);
    app.delete('/api/jokes/:id', UserController.deleteAnExistingJoke);
}
