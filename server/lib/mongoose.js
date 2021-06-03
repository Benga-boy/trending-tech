const mongoose = require('mongoose')
const db = 'mongodb+srv://bengaboy:Gbenga90@trending-tech.md7za.mongodb.net/trending-tech?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true
    })
  } catch (err) {
    console.log(err.message)


    // Exit the process with failure
    process.exit(1)
  }
}

module.exports = connectDB