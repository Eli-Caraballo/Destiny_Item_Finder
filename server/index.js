const express = require('express');
const db = require('../database/index.js');

const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/../public`));
app.use(express.json());

app.get('/getguns/:weaponType', (req, res) => {
  db.getGuns(req.params.weaponType, (err, data) => {
    if (err) {
      return res.status(400).end();
    }
    const result = [];
    data.forEach((item) => {
      result.push(JSON.parse(item.json));
    });
    return res.status(200).send(result).end();
  });
});

app.get('/getgunswithrarity/:weaponRarityAndType', (req, res) => {
  db.getGunsWithRarity(req.params.weaponRarityAndType, (err, data) => {
    if (err) {
      return res.status(400).end();
    }
    const result = [];
    data.forEach((item) => {
      result.push(JSON.parse(item.json));
    });
    return res.status(200).send(result).end();
  });
});

app.get('/getstats/:weaponStat', (req, res) => {
  db.getStats(req.params.weaponStat, (err, data) => {
    if (err) {
      return res.status(400).end();
    }
    const result = [];
    data.forEach((item) => {
      result.push(JSON.parse(item.json));
    });
    return res.status(200).send(result).end();
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at port:${PORT}`);
});
