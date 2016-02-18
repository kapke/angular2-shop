System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var SortingButtonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            SortingButtonComponent = (function () {
                function SortingButtonComponent() {
                    this.sortingChange = new core_1.EventEmitter();
                }
                SortingButtonComponent.prototype.onClick = function () {
                    this.sortingChange.emit(null);
                };
                SortingButtonComponent = __decorate([
                    core_1.Component({
                        selector: 'sorting-button',
                        inputs: ['descriptor', 'property'],
                        outputs: ['sortingChange'],
                        directives: [common_1.COMMON_DIRECTIVES],
                        template: "\n        <button class=\"btn btn-default\"\n                [ngClass]=\"{\n                    active: descriptor.property == property && descriptor.direction != 0,\n                    ascending: descriptor.direction > 0,\n                    descending: descriptor.direction < 0}\"\n                (click)=\"onClick()\">\n            <ng-content></ng-content>\n        </button>\n    ",
                        styles: [
                            "\n        .active.ascending::before {\n            content: '^ ';\n        }\n        .active.descending::before {\n            content: 'v ';\n        }\n        "
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SortingButtonComponent);
                return SortingButtonComponent;
            })();
            exports_1("default", SortingButtonComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZWFyY2gvU29ydGluZ0J1dHRvbkNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJTb3J0aW5nQnV0dG9uQ29tcG9uZW50IiwiU29ydGluZ0J1dHRvbkNvbXBvbmVudC5jb25zdHJ1Y3RvciIsIlNvcnRpbmdCdXR0b25Db21wb25lbnQub25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBQUFBO29CQTZCV0Msa0JBQWFBLEdBQUdBLElBQUlBLG1CQUFZQSxFQUFFQSxDQUFDQTtnQkFLOUNBLENBQUNBO2dCQUhHRCx3Q0FBT0EsR0FBUEE7b0JBQ0lFLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNsQ0EsQ0FBQ0E7Z0JBakNMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxnQkFBZ0JBO3dCQUMxQkEsTUFBTUEsRUFBRUEsQ0FBQ0EsWUFBWUEsRUFBRUEsVUFBVUEsQ0FBQ0E7d0JBQ2xDQSxPQUFPQSxFQUFFQSxDQUFDQSxlQUFlQSxDQUFDQTt3QkFDMUJBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7d0JBQy9CQSxRQUFRQSxFQUFFQSxzWUFTVEE7d0JBQ0RBLE1BQU1BLEVBQUVBOzRCQUNKQSxxS0FPQ0E7eUJBQ0pBO3FCQUNKQSxDQUFDQTs7MkNBU0RBO2dCQUFEQSw2QkFBQ0E7WUFBREEsQ0FsQ0EsQUFrQ0NBLElBQUE7WUFsQ0QsNENBa0NDLENBQUEiLCJmaWxlIjoiYXBwL3NlYXJjaC9Tb3J0aW5nQnV0dG9uQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NPTU1PTl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtTb3J0aW5nRGVzY3JpcHRvcn0gZnJvbSBcIi4vc2VhcmNoXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc29ydGluZy1idXR0b24nLFxuICAgIGlucHV0czogWydkZXNjcmlwdG9yJywgJ3Byb3BlcnR5J10sXG4gICAgb3V0cHV0czogWydzb3J0aW5nQ2hhbmdlJ10sXG4gICAgZGlyZWN0aXZlczogW0NPTU1PTl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogZGVzY3JpcHRvci5wcm9wZXJ0eSA9PSBwcm9wZXJ0eSAmJiBkZXNjcmlwdG9yLmRpcmVjdGlvbiAhPSAwLFxuICAgICAgICAgICAgICAgICAgICBhc2NlbmRpbmc6IGRlc2NyaXB0b3IuZGlyZWN0aW9uID4gMCxcbiAgICAgICAgICAgICAgICAgICAgZGVzY2VuZGluZzogZGVzY3JpcHRvci5kaXJlY3Rpb24gPCAwfVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soKVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICBgLFxuICAgIHN0eWxlczogW1xuICAgICAgICBgXG4gICAgICAgIC5hY3RpdmUuYXNjZW5kaW5nOjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJ14gJztcbiAgICAgICAgfVxuICAgICAgICAuYWN0aXZlLmRlc2NlbmRpbmc6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAndiAnO1xuICAgICAgICB9XG4gICAgICAgIGBcbiAgICBdXG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ydGluZ0J1dHRvbkNvbXBvbmVudCB7XG4gICAgcHVibGljIHByb3BlcnR5OiBzdHJpbmc7XG4gICAgcHVibGljIGRlc2NyaXB0b3I6IFNvcnRpbmdEZXNjcmlwdG9yO1xuICAgIHB1YmxpYyBzb3J0aW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgb25DbGljayAoKSB7XG4gICAgICAgIHRoaXMuc29ydGluZ0NoYW5nZS5lbWl0KG51bGwpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
