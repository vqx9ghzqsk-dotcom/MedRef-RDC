'use strict';

/** Formes cliniques par fiche (slug de pathologie → { formes, urgences }). */
module.exports = {
  ...require('./infectiologie'),
  ...require('./medecine-interne'),
  ...require('./pediatrie'),
  ...require('./gyneco-obstetrique'),
  ...require('./chirurgie'),
  ...require('./neuropsychiatrie'),
};
