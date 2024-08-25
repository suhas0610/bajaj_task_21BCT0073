const express = require('express');
const app = express();
const json = require('json')

app.use(express.json());

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        "operation_code": 1
    });
});

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    // const jsonObj = JSON.parse(data);
    console.log({data});

    const userId = "john_doe_17091999";
    const email = "john@xyz.com";
    const rollNumber = "ABCD123";
    
    const numbers = data.filter(item => /^[0-9]+$/.test(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const lowercaseAlphabets = alphabets.filter(item => /^[a-z]$/.test(item));

    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

    res.status(200).json({
        "is_success": true,
        "user_id": userId,
        "email": email,
        "roll_number": rollNumber,
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lowercase_alphabet": highestLowercaseAlphabet
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
