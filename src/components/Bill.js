import React, {useState} from 'react';
import axios from 'axios';

const Bill = () => {
    const [receiptBase64, setReceiptBase64] = useState();

    function handleReceipt(e) {
        const files = e.target.files;
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = e => setReceiptBase64(e.target.result);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        if(receiptBase64) {
            const url = 'http://127.0.0.1:8000/billImage';
            const formData = { file: receiptBase64 };

            try {
                console.log(receiptBase64)
                const response = await axios.post(url, formData);
                console.log('The upload was successful');
            } catch (error) {
                
            }
        }
    }

    return (
            <div>
                <form onSubmit={e => handleSubmit(e)}>
                    <input type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={e => handleReceipt(e)}
                        required />
                    <button type='submit'>Upload</button>
                </form>    
                         
                {receiptBase64 && <img src={receiptBase64} height='200' alt='Receipt'/>}
            </div>
    )
}

export default Bill; 