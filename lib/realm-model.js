'use strict';

const Realm = require('realm');


class RealmModel {

    constructor(dbPath = null) {
        if (dbPath === null) {
            this.dbPath = Realm.defaultPath;
        } else {
            this.dbPath = dbPath;
        }

        this.model();
        this.makeRealm(this.dbPath, this.schema);
    }

    makeRealm(dbPath, schema) {
        this.realm = new Realm({
            path   : dbPath,
            schema : [schema]
        });
    }

    create(input, updateFlag=false) {
        this.realm.write(() => {
            let datas = this.realm.create(this.schema.name, input, updateFlag);
        });
    }

    save(input) {
        this.create(input, true);
    }

    update(input, filterString) {
        let datas = this.filtered(filterString);

        this.realm.write(() => {
            for (let key in datas) {
                let data = datas[key];
                for (let propertie in this.schema.properties) {
                    if (Object.keys(input).includes(propertie)) {
                        data[propertie] = input[propertie];
                    }
                }
            }
        });

        return datas;
    }

    delete(object) {
        this.realm.write(() => {
            this.realm.delete(object);
        });
    }

    get(pk = null) {
        if (pk === null) {
            return this.realm.objects(this.schema.name);
        } else {
            let datas = this.filtered(`${this.schema.primaryKey} == '${pk}'`);
            if (datas.length > 0) {
                return datas[0];
            } else {
                return {};
            }
        }
    }

    filtered(filterString) {
        return this.get().filtered(filterString);
    }
}

module.exports = RealmModel;
