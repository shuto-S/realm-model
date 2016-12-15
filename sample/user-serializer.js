'use strict';

// const RealmSerialiser = new require('../lib/realm-serializer.js');
const UserModel = new require('./user-model.js');


class UserSerialiser extends RealmSerialiser {

    constructor(data) {
        super(data);
        this.model = new UserModel();
        this.fields = ['name'];
    }
}

module.exports = UserSerialiser;
