'use strict';

const UserModel = new require('./user-model.js');


var userModel = new UserModel(__dirname + '/../db/realm');

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
