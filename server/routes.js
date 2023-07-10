// create routes for the crud operations

// import express
const express = require("express");

// import the controller
const reminderController = require("../controllers/reminderController");

// create the router
const router = express.Router();

// create the routes
router.get("/", reminderController.getReminders);
router.post("/", reminderController.createReminder);
router.get("/:id", reminderController.getReminder);
router.patch("/:id", reminderController.updateReminder);
router.delete("/:id", reminderController.deleteReminder);
