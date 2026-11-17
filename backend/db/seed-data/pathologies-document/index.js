'use strict';

// Staged catalogue: keep out of the active seed until every document section is ready.
const cardiologie = require('./cardiologie');

module.exports = {
  fiches: [...cardiologie],
};
