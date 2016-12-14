'use strict';

const RealmModel = new require('../lib/realm-model.js');


class QuestionModel extends RealmModel {

    model() {
        this.schema = {
            name: 'Users',
            primaryKey: 'uuid',
            properties: {
                uuid       : 'string',
                username   : 'string',
            }
        };
    }
}

module.exports = QuestionModel;
