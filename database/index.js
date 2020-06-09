const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('/Users/elismac/Documents/GitHub/hrr45-mvp/world_sql_content_fb6da8486a28534b955449515bc04bfc.db');

const getGuns = (query, callback) => {
  db.all(`SELECT * FROM DestinyInventoryItemDefinition WHERE "json" LIKE '%"itemTypeDisplayName":"${query}"%';`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const getGunsWithRarity = (query, callback) => {
  db.all(`SELECT * FROM DestinyInventoryItemDefinition WHERE "json" LIKE '%"itemTypeAndTierDisplayName":"${query}"%';`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const getStats = (query, callback) => {
  db.all(`SELECT * FROM DestinyStatDefinition WHERE id = ${query}`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports.getGuns = getGuns;
module.exports.getGunsWithRarity = getGunsWithRarity;
module.exports.getStats = getStats;
