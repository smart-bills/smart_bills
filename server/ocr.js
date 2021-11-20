const ocrSpace  = require('ocr-space-api-wrapper');
const {ocrKey} = require('../secrets')

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
            // const parsedResults = response.ParsedResults;
            // let dishes = {};
            
            // if(parsedResults.length === 1)
            // {
            //     console.log(parsedResults[0].ParsedText);
            //     let parsedText = parsedResults[0].ParsedText.split('\n');
            //     for(let text of parsedText){
            //         let row = text.split('\t');
                    
            //         if(row[1] && row[1].includes('.')){
            //             let dishName = row[0];
            //             let price = row[1];
            //             dishes[dishName] = price;
            //         }
            //     }
            //     return dishes;
            // }
            const afterSplit = response.ParsedResults[0].ParsedText.split('\r\n');
            afterSplit.forEach(stuff => {
                const dish = stuff.split('\t');
                console.log(`The dish name is ${dish[0]} --------  The price is ${dish[1]}`);
            });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = parseReceipt;