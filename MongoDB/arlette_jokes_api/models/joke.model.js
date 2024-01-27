const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema(
    {
    setup: {
        type: String,
        required: [true, "setup is required"],
        minlenght:[10, "setup should be at least 10 characters long"]

    },
    punchline: {
        type: String,
        minlenght:[5, "punchline must be at most 5 characters"]

    }
},
{timestamps: true}
);
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
