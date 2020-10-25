const express = require('express');
const path = require('path');
const ngApp = express();
ngApp.use(express.static('./dist/pwingei-frontend-lite'));

app.get('*', function (req, res) {
    const index = path.join(__dirname, 'src', 'index.html');
    res.sendFile(index);
  });

ngApp.listen(process.env.PORT || 8080);