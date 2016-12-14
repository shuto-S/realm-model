'use strict';

const BaseModel = new require('./base-model.js');


class QuestionModel extends BaseModel {

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
