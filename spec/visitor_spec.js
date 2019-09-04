var Visitor = require('../src/visitor');

describe('save', () => {
    var visitor;
    beforeEach(() => {
        visitor = new Visitor('Lee', 25, 25 - 05 - 2019, "13h30", 'quite', 'Stacy');
    });
    it('should save the visitors info to json', () => {
        expect(visitor.save()).toBe('data is saved');
    });
});

describe('load', () => {
    var visitor;
    beforeEach(() => {
        visitor = new Visitor('Lee', 25, 25 - 05 - 2019, "13h30", 'quite', 'Stacy');
    });
    it('should load the visitors info', () => {
        let data = JSON.stringify(visitor);
        expect(visitor.load()).toBe(data);
    });
});