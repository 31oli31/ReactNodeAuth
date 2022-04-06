const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const validateLogin = require('./service/loginValidation');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/login', (req, res) => {
    const credentails = req.body;
    const token = validateLogin(credentails);
    res.send({
        token: token
    });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));