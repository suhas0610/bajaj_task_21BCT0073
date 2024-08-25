const express = require('express');
const app = express();
const json = require('json')
const path = require('path')

app.use(express.json());
app.use(express.static('public'));
app.use(express.static(path.join(process.cwd(), 'client/dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'client/dist', 'index.html'));
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        "operation_code": 1
    });
});

app.post('/bfhl', (req, res) => {
    var { data } = req.body;
    data = JSON.parse(data).data;
    // console.log({data});

    const userId = "suhas_06102003";
    const email = "munagala.suhas2021@vitstudent.ac.in";
    const rollNumber = "21BCT0073";
    
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
