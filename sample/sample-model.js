'use strict';

const path = require('path');
const UserModel = require('./user-model.js');

let dbPath = path.join(__dirname, './db/realm');
var userModel = new UserModel(dbPath);

userModel.save({id: 1, name: 'aaa'});
userModel.save({id: 2, name: 'bbb'});

let data = userModel.get();
console.log(data);

let data1 = userModel.filtered("id == 1");
console.log(data1);

let data2 = userModel.get(2);
console.log(data2);

userModel.realm.write(() => {
    data2.name = 'ccc';
});
console.log(data);

userModel.update({name: 'ddd'}, "id == 2");
console.log(data);

userModel.realm.removeAllListeners();
userModel.delete(userModel.get());

process.exit();
