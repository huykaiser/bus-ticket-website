const express = require('express');
const fingerPrintRouter = express.Router();

fingerPrintRouter.get('/', function(req, res) {
    res.send(req.fingerprint);
});

module.exports = {
    fingerPrintRouter
};
