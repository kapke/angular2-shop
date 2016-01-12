import AppComponent from "../../../app/components/App/AppComponent";

describe('AppComponent', function () {
    beforeEach(function () {
        this.app = new AppComponent();
    });

    it('should have title', function () {
        expect(this.app.title).toEqual(jasmine.any(String));
    });
});
