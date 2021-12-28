const express       =     require('express');
const cors          =     require('cors');
const mongoose      =     require('mongoose');
const session       =     require('express-session');
const MongoStore    =     require('connect-mongo');
const userRoute     =     require('./routes/userRoute');
const {dbKey, sessionSecret}       =     require('../secrets');
const PORT          =     process.env.PORT || 8000

const app = express();
// Set up all the middlewares.
app.use(cors());
app.use(express.json({limit: '50mb', extended: true}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24},
    store: MongoStore.create({mongoUrl: dbKey})}));

app.get('/', (req, res, next) => {
    res.send('Hi');
});

// app.post('/billImage', async (req, res, next) => {
//     console.log('Received a receipt.')
//     const receiptString = req.body.file;
//     await parseReceipt(receiptString);
//     // const dishes = await parseReceipt(receiptString);
//     // console.log(dishes);
// });

app.use('/app', userRoute)
app.listen(PORT, () => console.log(`Backend is connected now: ${new Date()}`));