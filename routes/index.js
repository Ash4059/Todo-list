const express = require('express');
const router = express.Router();

// Home controller
const homeController = require('../controller/home_controller');

// Get method for home page
router.get('/',homeController.homeGet);

// Post method to add to do list
router.post('/Add-todo-list', homeController.homePost);

// Delete task from to do list
router.post('/delete-task', homeController.homeDelete);

module.exports = router;