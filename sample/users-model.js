'use strict';

const RealmModel = new require('../lib/realm-model.js');


class UsersModel extends RealmModel {

    model() {
        this.schema = {
            name: 'Users',
            primaryKey: 'id',
            properties: {
                id       : 'int',
                username : 'string',
            }
        };
    }
}

module.exports = UsersModel;
