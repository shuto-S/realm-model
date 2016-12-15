'use strict';


class RealmSerialiser {

    constructor(model, data) {
        this.model = model;
        this.data = data;

        this.fields();
    }

    json(data) {
        return JSON.stringify(data);
    }

    get(pk = null) {
        let data = this.model.get(pk);
        return this.json(data);
    }

    filtered(filterString) {
        let data = this.model.filtered(filterString);
        return this.json(data);
    }

    save() {
        this.model.save(this.data);
    }
}

module.exports = RealmSerialiser;
