const express = require('express');
const path = require('path');
const { sequelize } = require('./models/index');
const { rootRouter } = require('./routers/index');
const Fingerprint = require('express-fingerprint');

const app = express();

// cai dat fingerprint
app.use(Fingerprint());

// cai ung dung su dung kieu json
app.use(express.json());

// cai static file
const publicPathDirectory = path.join(__dirname, './public');

app.use("/public", express.static(publicPathDirectory));

// dung router
app.use('/api/v1', rootRouter);

// listen connection
app.listen(3000, async () => {
    console.log('listening on http://localhost:3000');

    try {
        await sequelize.authenticate();
        console.log('Successfully connected');
    } catch (error) {
        console.error('Unsuccessfully connected: ', error);
    }
});



