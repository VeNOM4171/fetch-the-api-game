const jwt = require('jsonwebtoken');

module.exports = function auth(req, res, next) {
    const token = req.header('authToken');
    if (!token ) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.JWT_TOKEN);
        req.user = verified;
    }catch(error){
        res.status(400).send('Invalid Token');
    }
}