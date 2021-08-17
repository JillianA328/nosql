const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  newThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');


router.route("/").get(getAllThoughts);


router.route('/:userId').post(newThought);


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
