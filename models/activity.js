const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    activity_name: { type: String, required: true },
    activity_time: { type: String, required: true },
    room: { type: String, required: true }, // เปลี่ยนจาก price เป็น duration
    participants: { type: String, required: true }, // เปลี่ยนจาก unit เป็น participants
},
    { timestamps: true, versionKey: false }
);

const Activity = mongoose.model('Activity', activitySchema); // เปลี่ยนจาก Product เป็น Activity

module.exports = Activity;
