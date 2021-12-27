const express    =     require('express');
const cors       =     require('cors');
const mongoose   =     require('mongoose');
const session    =     require('express-session');
const routesUrls =     require('./routes/userRoute');
// const parseReceipt = require('./ocr');
const {dbKey}    =     require('../secrets');
const PORT       =     process.env.PORT || 8000

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb', extended: true}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

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

app.use('/app', routesUrls)
app.listen(PORT, () => {
    console.log(`Backend is connected now: ${new Date()}`);
    mongoose.connect(dbKey, () => console.log (`Database is connected now: ${new Date()}`));
});