'use strict';

const RealmModel = new require('../lib/realm-model.js');


class UserModel extends RealmModel {

    constructor() {
        super();

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
