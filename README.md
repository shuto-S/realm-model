# realm-model

[![Code Climate](https://codeclimate.com/github/shuto-S/realm-model/badges/gpa.svg)](https://codeclimate.com/github/shuto-S/realm-model)
[![Dependency Status](https://gemnasium.com/badges/github.com/shuto-S/realm-model.svg)](https://gemnasium.com/github.com/shuto-S/realm-model)


## Install
```bash
npm install realm-model
```


## Usage
[sample here](./sample)

### RealmModel
Simple realm wrapper.

#### Example 
```js
'use strict';

const rm = require('realm-model');

class UserModel extends rm.RealmModel {
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

let userModel = new UserModel();
userModel.save({id: 1, name: 'test'});
let datas = userModel.get();
console.log(datas);
```

### RealmSerialiser
RealmModel wrapper.

#### Example
```js
'use strict';

const rm = require('realm-model');

class UserModel extends rm.RealmModel {
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

class UserSerialiser extends rm.RealmSerialiser {

    fields() {
        this.fields = ['name'];
    }
}

let userModel = new UserModel();
let userSerializer = new UserSerialiser(userModel, {id: 3, name: 'bbb'});
console.log(userSerializer.get());
console.log(userSerializer.data);
userSerializer.save();
console.log(userSerializer.get());
```
