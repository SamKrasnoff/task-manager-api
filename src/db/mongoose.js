const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL.toString(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})  