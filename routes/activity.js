const express = require('express');
const router = express.Router();
const authenticateToken = require("../middlewares/auth");

const { getActivities, getActivity, createActivity, updateActivity, deleteActivity } = require("../controller/activityController"); // เปลี่ยนจาก productController เป็น activityController

router.get("/activities", authenticateToken, getActivities); // เปลี่ยนจาก /products เป็น /activities
router.get("/activity/:id", authenticateToken, getActivity); // เปลี่ยนจาก /product/:id เป็น /activity/:id
router.post("/activity", authenticateToken, createActivity); // เปลี่ยนจาก /product เป็น /activity
router.put("/activity/:id", authenticateToken, updateActivity); // เปลี่ยนจาก /product/:id เป็น /activity/:id
router.delete("/activity/:id", authenticateToken, deleteActivity); // เปลี่ยนจาก /product/:id เป็น /activity/:id

module.exports = router;
