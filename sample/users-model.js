'use strict';

const RealmModel = new require('../lib/realm-model.js');


class UsersModel extends RealmModel {

    constructor() {
        super();

        this.realm.addListener('change', () => {
            console.log('update!');
        });
    }

    model() {
        this.schema = {
            name: 'Users',
            primaryKey: 'id',
            properties: {
                id   : 'int',
                name : 'string',
            }
        };
    }
}

module.exports = UsersModel;
