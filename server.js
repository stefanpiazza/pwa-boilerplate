const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(express.static(path.resolve(__dirname, 'app')));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'app', 'index.html'));
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, function() {
    console.log(`
-------------------------------------
    Local: http://localhost:${PORT}
-------------------------------------`
    )

});
