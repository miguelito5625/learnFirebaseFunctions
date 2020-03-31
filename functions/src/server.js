const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes/index');

app.use(cors({origin: true}))
    .use(express.urlencoded({extended: false}))
    .use(routes)
    .get('*', (req, res) => res.status(404)
                                            .json({success: false, data: "Endpoint not found"}));


module.exports = app;