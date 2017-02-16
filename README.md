# RealmModel
Simple realm wrapper.

[![Build Status](https://travis-ci.org/shuto-S/realm-model.svg?branch=master)](https://travis-ci.org/shuto-S/realm-model)
[![Code Climate](https://codeclimate.com/github/shuto-S/realm-model/badges/gpa.svg)](https://codeclimate.com/github/shuto-S/realm-model)
[![Dependency Status](https://gemnasium.com/badges/github.com/shuto-S/realm-model.svg)](https://gemnasium.com/github.com/shuto-S/realm-model)
[![npm](https://img.shields.io/npm/dt/realm-model.svg)](https://www.npmjs.com/package/realm-model)

## Install
```bash
npm install realm-model
```

## Usage
[sample here](./sample)

#### Example 
```js
'use strict';

const RealmModel = require('realm-model');

class UserModel extends RealmModel {
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
