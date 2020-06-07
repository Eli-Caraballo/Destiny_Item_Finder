const express = require('express');
const db = require('../database/index.js');

const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/../public`));
app.use(express.json());

app.get('/getguns/:weaponType', (req, res) => {
  console.log(req.params);
  db.testGet(req.params.weaponType, (err, data) => {
    if (err) {
      console.log('Kill yourself', err);
      return res.status(400).end();
    } else {
      return res.status(200).send(data).end();
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening at port:${PORT}`);
});