'use strict';

const Realm = require('realm');


class RealmModel {

    constructor(dbPath = __dirname + '/../db/realm') {
        this.dbPath = dbPath;

        this.model();
        this.makeRealm(this.dbPath, this.schema);
    }

    makeRealm(dbPath, schema) {
        this.realm = new Realm({
            path   : dbPath,
            schema : [schema]
        });
    }

    create(input, save=false) {
        this.realm.write(() => {
            let datas = this.realm.create(this.schema.name, input, save);
        });
    }

    save(input) {
        this.create(input, true);
    }

    // 未完成
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
        if (pk != null) {
            let datas = this.filtered(`${this.schema.primaryKey} == '${pk}'`);
            if (datas.length > 0) {
                return datas[0];
            } else {
                return {};
            }
        } else {
            return this.realm.objects(this.schema.name);
        }
    }

    filtered(filterString) {
        return this.get().filtered(filterString);
    }
}

module.exports = RealmModel;
