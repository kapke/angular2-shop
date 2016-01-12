import App from "../../../app/components/App/App";

describe('AppComponent', function () {
    beforeEach(function () {
        this.app = new App();
    });

    it('should have title', function () {
        expect(this.app.hello).toEqual(jasmine.any(String));
    });
});
