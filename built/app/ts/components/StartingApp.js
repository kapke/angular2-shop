System.register(['angular2/angular2'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1;
    var StartingApp;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            StartingApp = (function () {
                function StartingApp() {
                    this.hello = 'Hello, World!';
                }
                StartingApp = __decorate([
                    angular2_1.Component({
                        selector: 'starting-app'
                    }),
                    angular2_1.View({
                        templateUrl: 'src/template/starting-app.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], StartingApp);
                return StartingApp;
            })();
            exports_1("default", StartingApp);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90cy9jb21wb25lbnRzL1N0YXJ0aW5nQXBwLnRzIl0sIm5hbWVzIjpbIlN0YXJ0aW5nQXBwIiwiU3RhcnRpbmdBcHAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQUFBQTtvQkFPV0MsVUFBS0EsR0FBVUEsZUFBZUEsQ0FBQ0E7Z0JBQzFDQSxDQUFDQTtnQkFSREQ7b0JBQUNBLG9CQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsY0FBY0E7cUJBQzNCQSxDQUFDQTtvQkFDREEsZUFBSUEsQ0FBQ0E7d0JBQ0ZBLFdBQVdBLEVBQUVBLGdDQUFnQ0E7cUJBQ2hEQSxDQUFDQTs7Z0NBR0RBO2dCQUFEQSxrQkFBQ0E7WUFBREEsQ0FSQSxBQVFDQSxJQUFBO1lBUkQsaUNBUUMsQ0FBQSIsImZpbGUiOiJhcHAvdHMvY29tcG9uZW50cy9TdGFydGluZ0FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3fSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc3RhcnRpbmctYXBwJ1xufSlcbkBWaWV3KHtcbiAgICB0ZW1wbGF0ZVVybDogJ3NyYy90ZW1wbGF0ZS9zdGFydGluZy1hcHAuaHRtbCdcbn0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydGluZ0FwcCB7XG4gICAgcHVibGljIGhlbGxvOnN0cmluZyA9ICdIZWxsbywgV29ybGQhJztcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
