const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

//get all thoughts
router.route("/").get(getAllThought);

// /api/thought/<userId>
router.route('/:userId').post(createThought);


router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router
  .route('/:thoughtId/reactions')
  .post(addReaction);

router 
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);


module.exports = router;