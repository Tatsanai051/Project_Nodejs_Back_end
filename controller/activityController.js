const Activity = require('../models/activity'); // Updated from product to activity
const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Get all activities
exports.getActivities = async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities); // Updated response to activities
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific activity by ID
exports.getActivity = async (req, res) => {
    try {
        const { id } = req.params;
        const activity = await Activity.findById(id);
        if (!activity) return res.status(404).json({ message: 'Activity not found' });
        res.json(activity);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new activity
exports.createActivity = async (req, res) => {
    const { activity_name, activity_time, room, participants } = req.body; // Updated fields
    const activity = new Activity({ activity_name, activity_time, room, participants }); // Updated model
    try {
        const newActivity = await activity.save();
        res.status(201).json(newActivity);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update an activity by ID
exports.updateActivity = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedActivity = await Activity.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedActivity) return res.status(404).json({ message: 'Activity not found' });
        res.status(200).json(updatedActivity);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an activity by ID
exports.deleteActivity = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedActivity = await Activity.findByIdAndDelete(id);
        if (!deletedActivity) return res.status(404).json({ message: 'Activity not found' });
        res.status(200).json({ message: 'Activity deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
