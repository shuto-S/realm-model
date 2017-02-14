'use strict';

const RealmModel = require('../index.js');


class UserModel extends RealmModel {

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
                name : 'string'
            }
        };
    }
}

module.exports = UserModel;
