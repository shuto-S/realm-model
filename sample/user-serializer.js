'use strict';

const rm = require('../index.js');


class UserSerialiser extends rm.RealmSerialiser {

    fields() {
        this.fields = ['name'];
    }
}

module.exports = UserSerialiser;
