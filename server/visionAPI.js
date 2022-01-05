const vision = require('@google-cloud/vision');

async function parseImage(imageInBase64) {
    const clientOptions = {apiEndpoint: 'eu-vision.googleapis.com'};
    const client = new vision.ImageAnnotatorClient(clientOptions);

    const request = {
        image: {content: imageInBase64},
        features: [{type: 'TEXT_DETECTION'}]
        // features: [{type: 'DOCUMENT_TEXT_DETECTION'}, {type: 'TEXT_DETECTION'}]
    };

    try {
        const result = await client.annotateImage(request);   
        const {textAnnotations, fullTextAnnotation} = result[0];

        console.log(result);
        console.log(textAnnotations[0]);
        console.log(fullTextAnnotation);

    } catch (error) {
        console.error(error);
    }
}

module.exports = parseImage;