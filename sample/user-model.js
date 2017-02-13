'use strict';

const rm = require('../index.js');


class UserModel extends rm.RealmModel {

    constructor(dbPath = null) {
        super(dbPath);

        this.realm.addListener('change', () => {
            console.log('update!');
        });
    }

    model() {
        this.schema = {
            name: 'User',
            primaryKey: 'id',
            properties: {
                id   : 'int',
                name : 'string',
            }
        };
    }
}

module.exports = UserModel;
