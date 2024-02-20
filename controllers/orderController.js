// controllers/orderController.js
const db = require("../config/db");

exports.getAllOrders = (req, res) => {
  db.query("SELECT * FROM count_order_tbl", (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
    res.json(rows);
  });
};
