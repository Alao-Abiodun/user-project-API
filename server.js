const express = require('express');
const morgan = require('morgan');

const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json())
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1', routes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))