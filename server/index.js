import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use(cors())

app.use('/products', postRoutes)
//connect server to db
// mongoDB cluster name: ClusterOne

const CONNECTION_URL = 'mongodb+srv://csengebalogh:csengebalogh@clusterone.pok0e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5001   

mongoose.connect(CONNECTION_URL)
    .then(() => {app.listen(PORT, () => console.log(`Server running on port ${PORT}`))})
    .catch((error) => console.log(error.message))
