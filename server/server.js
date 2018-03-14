const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();

app.use('/:id', express.static('public'));

let getService = (route) => {
  return (req, res) => {
    axios.get(`http://127.0.0.1:${route}${req.originalUrl}`)
      .then(moduleRes => moduleRes.data)
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
        res.send();
      });
    }
}

app.use('/reviews', getService(3001));
app.use('/overview', getService(3002));
app.use('/nearby', getService(3003));
app.use('/q-and-a', getService(3004));
app.use('/recommendations', getService(3005));

app.listen(3000, () => {
  console.log('Proxy server running on port 3000');
});
