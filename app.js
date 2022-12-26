const StudentRoutes = require("./routes/studentRoutes")
const ClassRoutes = require("./routes/classRoutes")

const connectToMongo = require("./db")
const express = require('express')
var cors = require('cors')
const app = express()
const port = 9000

app.use(express.json())
app.use(cors())
app.listen(port, () => {
    console.log("app running at " + port);
})
app.get('/', (req, res) => {
    res.send('app running');
})
connectToMongo();
app.use('/', StudentRoutes)
app.use('/', ClassRoutes)