'use strict';

const QuestionModel = new require('./question-model.js');


var questionModel = new QuestionModel();

questionModel.save({uuid: '1', username: 'aaa'});
questionModel.save({uuid: '2', username: 'bbb'});

let data = questionModel.get();
console.log(data);

let data1 = questionModel.filtered("uuid == '1'");
console.log(data1);

let data2 = questionModel.get(2);
console.log(data2);

questionModel.realm.write(() => {
    data2.username = 'ccc';
});

console.log(data);

questionModel.delete(questionModel.get());

process.exit();
