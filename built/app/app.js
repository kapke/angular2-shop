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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBLHFCQUFTLENBQUMsc0JBQUcsRUFBRSxDQUFDLHVCQUFjLEVBQUUscUJBQWMsRUFBRSx5QkFBZ0IsRUFBRSwyQkFBaUIsRUFBRSx5QkFBZSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvYm9vdHN0cmFwJztcbmltcG9ydCB7Rk9STV9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwL0FwcENvbXBvbmVudCc7XG5pbXBvcnQge1BST0RVQ1RfUFJPVklERVJTfSBmcm9tICcuL3Byb2R1Y3QvcHJvZHVjdCc7XG5pbXBvcnQgRXhjaGFuZ2VTZXJ2aWNlIGZyb20gXCIuL2V4Y2hhbmdlLXJhdGVzL0V4Y2hhbmdlU2VydmljZVwiO1xuXG5ib290c3RyYXAoQXBwLCBbRk9STV9QUk9WSURFUlMsIEhUVFBfUFJPVklERVJTLCBST1VURVJfUFJPVklERVJTLCBQUk9EVUNUX1BST1ZJREVSUywgRXhjaGFuZ2VTZXJ2aWNlXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
