const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('/Users/elismac/Documents/GitHub/hrr45-mvp/world_sql_content_fb6da8486a28534b955449515bc04bfc.db');

const testGet = (data, callback) => {
  db.all(`SELECT * FROM DestinyInventoryItemDefinition WHERE "json" LIKE '%"itemTypeDisplayName":"${data}"%';`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports.testGet = testGet;
