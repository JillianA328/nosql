const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');


router.route("/").get(getAllThought);


router.route('/:userId').post(createThought);


router
  .route('/:id')
  .put(updateThought)
  .get(getThoughtById)
  .delete(removeThought);

  router
  .route('/:thoughtId.reactions')
  .post(addReaction);

  router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(removeReactions);


module.exports = router;
