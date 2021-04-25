const express = require('express');
const authRoute = require('./routers/auth');
const profileRoute = require('./routers/profile');
const imageRoute = require('./routers/image');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

dotenv.config();
//middlewares
app.use(cors());
app.use(express.json());

//connect to db
mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})


//route middlewares
app.use('/api/users', authRoute);
app.use('/api/users', profileRoute);
app.use('/api/users', imageRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running at ${PORT}`));