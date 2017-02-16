'use strict';

const path = require('path');
const RealmModel = require('../index.js');
var assert = require('assert');


class UserModel extends RealmModel {
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


describe('RealmModel', function() {

    let dbPath = path.join(__dirname, './db/realm');
    let userModel = new UserModel(dbPath);

    before(function() {
    });

    after(function() {
        userModel.delete(userModel.get());
    });

    beforeEach(function() {
        userModel.create({id: 1, name: 'test_A'});
        userModel.create({id: 2, name: 'test_B'});
    });

    afterEach(function() {
        userModel.delete(userModel.get());
    });

    describe('write', function() {
        it('create method', function() {
            userModel.create({id: 999, name: 'create_test'});
            assert.ok(true);
        });

        it('save method', function() {
            userModel.save({id: 999, name: 'create_test'});
            assert.ok(true);
        });
    });

    describe('get', function() {
        var data = userModel.get();

        it('check length', function() {
            assert.equal(2, data.length);
        });

        it('check datas', function() {
            assert.equal(1, data[0].id);
            assert.equal('test_A', data[0].name);
            assert.equal(2, data[1].id);
            assert.equal('test_B', data[1].name);
        });

        it('by primary key', function() {
            var data = userModel.get(2);
            assert.equal(2, data.id);
            assert.equal('test_B', data.name);
        });

        it('by filtered', function() {
            var data = userModel.filtered("id == 1");
            assert.equal(1, data[0].id);
            assert.equal('test_A', data[0].name);
        });
    });

    describe('update', function() {
        let updateName = 'test_B_update';

        it('update method', function() {
            userModel.update({name: updateName}, "id == 2");
            var data = userModel.get(2);
            assert.equal(updateName, data.name);
        });

        it('save method', function() {
            userModel.save({id: 2, name: updateName});
            var data = userModel.get(2);
            assert.equal(updateName, data.name);
        });

        it('direct write', function() {
            var data = userModel.get(2);
            userModel.realm.write(() => {
                data.name = updateName;
            });
            assert.equal(updateName, data.name);
        });
    });

    describe('delete', function() {
        it('check length', function() {
            userModel.delete(userModel.get(2));
            var data = userModel.get();
            assert.equal(1, data.length);
        });

        it('not deleted object', function() {
            userModel.delete(userModel.get(2));
            var data = userModel.get(2);
            assert.equal(0, Object.keys(data).length);
        });
    });


});