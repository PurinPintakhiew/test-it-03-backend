const express = require("express");
const Item = require("../models/Item");

const router = express.Router();

// All
router.get("/", async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Update
router.put("/update-many", async (req, res) => {
    const { ids, reason, status } = req.body;

    try {
        const result = await Item.updateMany(
            { _id: { $in: ids } },
            {
                $set: {
                    reason: reason,
                    status: status,
                },
            }
        );

        if (result.modifiedCount > 0) {
            res.status(200).json({ message: "อัพเดตสำเร็จ" });
        } else {
            res.status(400).json({ message: "ไม่พบข้อมูลที่อัพเดต" });
        }
    } catch (error) {
        res.status(500).json({ message: "เกิดข้อผิดพลาดในการอัพเดต" });
    }
});


module.exports = router;
