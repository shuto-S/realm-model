'use strict';

const path = require('path');


module.exports = {
    RealmModel      : new require(path.join(__dirname, '/lib/realm-model.js')),
    RealmSerialiser : new require(path.join(__dirname, '/lib/realm-serializer.js'))
}
