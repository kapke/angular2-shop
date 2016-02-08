import {App} from './App';

describe('App', function () {
    beforeEach(function () {
        this.app = new App();
    });

    it('should have title', function () {
        expect(this.app.title).toEqual(jasmine.any(String));
    });
});
