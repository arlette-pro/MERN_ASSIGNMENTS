const Joke = require('../models/joke.model');
 
module.exports.findAllJokes = (request, response) => {
    Joke.find()
    .then(joke => response.json(joke))
    .catch(err => response.json(err))
}
 
module.exports.findOneJoke = (request, response) => {
    Joke.findOne({ _id: request.params.id })
    .then(joke => response.json(joke))
    .catch(err => response.json(err))
}
 
module.exports.createJoke = (request, response) => {
    Joke.create(request.body)
    .then(joke => response.json(joke))
    .catch(err => response.json(err))
}
 
module.exports.updateExistingJoke = (request, response) => {
    Joke.findOneAndUpdate(
        { _id: request.params.id },
        request.body,
        { new: true, runValidators: true }
        .then(joke => response.json(joke))
        .catch(err => response.json(err))
    )
}
 
module.exports.deleteAnExistingJoke = (request, response) => {
    Joke.deleteOne({ _id: request.params.id })
    .then(joke => response.json(joke))
    .catch(err => response.json(err))
}