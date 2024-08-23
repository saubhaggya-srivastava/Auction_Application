const mongoose = require("mongoose");

/**
 * @description: Connect to the database by providing the connection string.
 * @param {String} uri | MongoDB URI
 * @default: mongodb://localhost:27017/auctionDB
 *
 * @returns {undefined}
 */
const connectDb = (url = process.env.MONGODB_CONNECTION_STRING) => { // Use online connection string
    try {
      const con = mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      if (con) console.log("MongoDB connected...")
    } catch (e) {
      console.log(`Error: ${e}`);
    }
};

module.exports = connectDb;
