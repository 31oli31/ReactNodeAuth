var randtoken = require('rand-token');

const validCredantials = [
    { username: "oliver", password: "oliver" },
    { username: "carina", password: "smarthome" }
];

const validateLogin = (credentails) => {
    const validLogin = validCredantials.some(element => {
        if (element.username === credentails.username && element.password === credentails.password) {
            return true;
        }
    });
    if (validLogin) {
        const token = randtoken.generate(16);
        console.log("valid login", token);
        return token;
    }
    console.log("invalid login", credentails)
    return null;

}
module.exports = validateLogin;
