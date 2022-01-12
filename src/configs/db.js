const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://jaskaran:jaskaran@cluster0.kzv4y.mongodb.net/web13-ejs"
  );
};
