const ocrSpace  = require('ocr-space-api-wrapper');
const {ocrKey} = require('../secrets');
const Bill = require('./models/bill');

async function parseReceipt(receiptString)
{
    try {
        const response = await ocrSpace(receiptString, {
            apiKey: ocrKey,
            scale: true,
            detectOrientation: true,
            isTable: true,
            OCREngine: 2,
            language: 'eng',
            filetype: ' PDF, GIF, PNG, JPG, TIF, BMP '
        });

        if(response.OCRExitCode	=== 1) {
            const receiptRows = response.ParsedResults[0].ParsedText.split('\r\n');
            // console.log(response.ParsedResults[0].ParsedText);
            const bill = new Bill();

            receiptRows.forEach(row => {
                const dishInfo = row.split('\t');
                if(Number(dishInfo[1])) {
            
                    const DISH = {
                        dishName: dishInfo[0],
                        price: dishInfo[1]
                    }

                    bill.dishes.push(DISH);
                    console.log(`${dishInfo[0]} ------ ${dishInfo[1]}`);
                }
            });
            bill.save().then(() => console.log('ok'));
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = parseReceipt;