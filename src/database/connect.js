const config = require("../../config.js");
const mongoose = require("mongoose")

module.exports = async (client) => {
    mongoose.connect(config.bot.mongourl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoIndex: false
    }).then(() => {
    console.log("(!) Mongoose successfully connected to Mongoose.");
    }).catch(a => console.log("(!) Mongoose Not Work."));
}