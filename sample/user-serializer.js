'use strict';

const RealmSerialiser = new require('../lib/realm-serializer.js');


class UserSerialiser extends RealmSerialiser {

    fields() {
        this.fields = ['name'];
    }
}

module.exports = UserSerialiser;
