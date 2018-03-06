const express = require('express');
const app = express();

app.use('/:id', express.static('public'));

app.listen(3000, () => {
  console.log('Proxy server running on port 3000');
});