const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    reason: { type: String, required: true },
    status: { type: String, default: "รออนุมัติ" },
});

module.exports = mongoose.model("Item", itemSchema);
