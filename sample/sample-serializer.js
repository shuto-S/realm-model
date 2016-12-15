'use strict';

const UserModel = new require('./user-model.js');
const UserSerialiser = new require('./user-serializer.js');


var userModel = new UserModel(__dirname + '/../db/realm');

userModel.save({id: 1, name: 'aaa'});
userModel.save({id: 2, name: 'bbb'});
console.log(userModel.get());


let userSerializer = new UserSerialiser(userModel, {id: 3, name: 'bbb'});
console.log(userSerializer.data);
console.log(userSerializer.get());

userSerializer.save();
console.log(userSerializer.get());

let filtered = userSerializer.filtered("name == 'bbb'");
console.log(filtered);


userModel.delete(userModel.get());

process.exit();
