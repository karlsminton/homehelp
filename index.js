const express = require('express');
const port = 9999;
const app = express();

app.get('/', (request, response) => {
    response.send('Hi');
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
