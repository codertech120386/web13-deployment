const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://dhaval:dhaval_123@cluster0.mrryx.mongodb.net/web13-ejs"
  );
};
