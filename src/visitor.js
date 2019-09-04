let fs = require('fs');
let save_load_dir = "database";
global.count = 1;
module.exports = class Visitor {
    constructor(full_name, age, date_of_visit, time_of_visit, comments, name_of_person_who_assisted_the_visitor) {
        this.full_name = full_name;
        this.age = age;
        this.date_of_visit = date_of_visit;
        this.time_of_visit = time_of_visit;
        this.comments = comments;
        this.name_of_person_who_assisted_the_visitor = name_of_person_who_assisted_the_visitor;
        this.visitor_count = count;
    }
    save() {
        fs.writeFileSync('visitor_' + this.visitor_count + '.json ', JSON.stringify(this));
        return "data is saved";
    }
    load() {
        let data = JSON.stringify(this);
        fs.readFileSync('visitor_' + this.visitor_count + '.json ');
        return data;
    }
};