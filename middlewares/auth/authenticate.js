const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header("token");

    try {
        const decode = jwt.verify(token, "huykaiser97");

        console.log('decode: ', decode);

        if (decode) {
            req.user = decode;
            return next();
        }else{
            res.status(401).send("You must be logged in first");
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    authenticate
};

