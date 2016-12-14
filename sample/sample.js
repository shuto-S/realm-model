'use strict';

const UsersModel = new require('./users-model.js');


var usersModel = new UsersModel();

usersModel.save({id: 1, name: 'aaa'});
usersModel.save({id: 2, name: 'bbb'});

let data = usersModel.get();
console.log(data);

let data1 = usersModel.filtered("id == 1");
console.log(data1);

let data2 = usersModel.get(2);
console.log(data2);

usersModel.realm.write(() => {
    data2.name = 'ccc';
});
console.log(data);

usersModel.update({name: 'ddd'}, "id == 2");
console.log(data);

usersModel.realm.removeAllListeners();
usersModel.delete(usersModel.get());

process.exit();
