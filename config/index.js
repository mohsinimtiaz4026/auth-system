const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.izyc6wp.mongodb.net/auth-system?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log(`Database Connected`))
  .catch((err) => console.log(`Database Failed: ${err.message}`));

module.exports = mongoose;
