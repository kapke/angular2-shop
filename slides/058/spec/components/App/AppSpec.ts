import AppComponent from "../../../app/components/App/AppComponent";

describe('AppComponent', function () {
    beforeEach(function () {
        //As we can just instantiate a component, is it hard to check if it behaves correctly?
        this.app = new AppComponent();
    });

    it('should have title', function () {
        expect(this.app.title).toEqual(jasmine.any(String));
    });
});
