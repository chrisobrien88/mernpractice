const mongoose = require ('mongoose');

const PlayerSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    roundsPlayed: [],
  },
); 

const RoundsSchema = new mongoose.Schema({
    
    id: {
        type: Number,
        required: false
    },
    score: {
        type: Number,
        required: false
    },
    date: {
        type: Date,
        required: false
    },
    slopeRating: {
        type: String,
        required: false
    },
    courseRating: {
        type: String,
        required: false
    },
    course: {type: String,
        required: false}
});

const Rounds = mongoose.model('Rounds', RoundsSchema);
const Player = mongoose.model('Player', PlayerSchema);

exports.Player = Player;
exports.Rounds = Rounds;