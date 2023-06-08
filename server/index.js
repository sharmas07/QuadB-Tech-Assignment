import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import cryptoDataRoute from './routes/cryptoDataRoute.js'

//Routes

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json())


//Routes

app.get('/', (req, res) => {
    res.send('hello from QuadB Tech entry point')
})

app.use('/cryptoData', cryptoDataRoute);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
app.listen(process.env.PORT || 5000, () => {
    console.log('server started...')
    connectDB();
})