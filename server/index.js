const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const authRouter = require('./router/auth')


app.use(express.json())

app.use('/api', authRouter)




app.listen(PORT, () => console.log(`App is listening on ${PORT}. Lets get Buuuuuilding!!`))