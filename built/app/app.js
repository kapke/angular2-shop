System.register(['angular2/bootstrap', 'angular2/common', 'angular2/http', 'angular2/router', './components/App/AppComponent', './product/product', "./exchange-rates/ExchangeService"], function(exports_1) {
    var bootstrap_1, common_1, http_1, router_1, AppComponent_1, product_1, ExchangeService_1;
    return {
        setters:[
            function (bootstrap_1_1) {
                bootstrap_1 = bootstrap_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (AppComponent_1_1) {
                AppComponent_1 = AppComponent_1_1;
            },
            function (product_1_1) {
                product_1 = product_1_1;
            },
            function (ExchangeService_1_1) {
                ExchangeService_1 = ExchangeService_1_1;
            }],
        execute: function() {
            bootstrap_1.bootstrap(AppComponent_1.default, [common_1.FORM_PROVIDERS, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, product_1.PRODUCT_PROVIDERS, ExchangeService_1.default]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQSxxQkFBUyxDQUFDLHNCQUFHLEVBQUUsQ0FBQyx1QkFBYyxFQUFFLHFCQUFjLEVBQUUseUJBQWdCLEVBQUUsMkJBQWlCLEVBQUUseUJBQWUsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9ib290c3RyYXAnO1xuaW1wb3J0IHtGT1JNX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAvQXBwQ29tcG9uZW50JztcbmltcG9ydCB7UFJPRFVDVF9QUk9WSURFUlN9IGZyb20gJy4vcHJvZHVjdC9wcm9kdWN0JztcbmltcG9ydCBFeGNoYW5nZVNlcnZpY2UgZnJvbSBcIi4vZXhjaGFuZ2UtcmF0ZXMvRXhjaGFuZ2VTZXJ2aWNlXCI7XG5cbmJvb3RzdHJhcChBcHAsIFtGT1JNX1BST1ZJREVSUywgSFRUUF9QUk9WSURFUlMsIFJPVVRFUl9QUk9WSURFUlMsIFBST0RVQ1RfUFJPVklERVJTLCBFeGNoYW5nZVNlcnZpY2VdKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
