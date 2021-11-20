const ocrSpace = require('ocr-space-api-wrapper');
const {ocrKey} = require('../secrets')

async function parseReceipt(receiptPath)
{
    try {
        const response = await ocrSpace(receiptPath, {
            apiKey: ocrKey,
            scale: true,
            detectOrientation: true,
            isTable: true,
            OCREngine: 2,
            // For now please ignore these two parameters.
            // !!! DO NOT DELETE / CHANGE THEM !!!
            // language: 'eng',
            // filetype: ' PDF, GIF, PNG, JPG, TIF, BMP '
        });

        if(response.OCRExitCode	=== 1 || response.OCRExitCode === 2) {
            const parsedResults = response.ParsedResults;
            let dishes = {};

            if(parsedResults.length === 1)
            {
                // console.log(parsedResults[0].ParsedText);
                let parsedText = parsedResults[0].ParsedText.split('\n');
                for(let text of parsedText){
                    let row = text.split('\t');
                    
                    if(row[1] && row[1].includes('.')){
                        let dishName = row[0];
                        let price = row[1];
                        dishes[dishName] = price;
                    }
                }
                return dishes;
            }
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = parseReceipt;