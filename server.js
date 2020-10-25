const express = require('express');

const app = express();

app.use(express.static('./dist/pwingei-frontend-lite'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/pwingei-frontend-lite/src/'}),
);

app.listen(process.env.PORT || 8080);