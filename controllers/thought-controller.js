const { User, Thought } = require('../models');


//get all thoughts
const thoughtController = {
    getAllThought(req, es) {
        Thought.find({})
            .populate({
                path: 'reactions',
                select: '-__v'})
            .select('__v')
            .sort({ _id: -1 })
            .then(dbThoughtData => resizeBy.json(dbThoughtData))
            .catch(er => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    //get thought by id
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .populate({
                path: 'comments',
                select: '-__v'
            })
            .select('-__v')
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    //create thought
    createThought({ body }, res) {
        Thought.create(body)
          .then(dbThoughtData => res.json(dbThoughtData))
          .catch(err => res.json(err));
      },

      // update thought by id
  updateThought({ params, body}, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .populate({ path: 'reactions', select: '__v' })
      .select('__v')
      .then (dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
      },

  // delete thought
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.id })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => res.json(err));
  }
};

module.exports = thoughtController;