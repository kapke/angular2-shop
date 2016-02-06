System.register(["angular2/core", './entities/Product', './repositories/StaticJsonProductRepository', './repositories/InMemoryProductRepository', './components/ProductComponent', './components/ProductListComponent', './components/PromotedProductListComponent', './pipes/ProductFilterPipe', './pipes/ProductSortPipe', "./components/ProductListWithSearchingComponent", './components/RoutableProductComponent', "./directives/PromotedDirective"], function(exports_1) {
    var core_1, Product_1, StaticJsonProductRepository_1, InMemoryProductRepository_1, ProductComponent_1, ProductListComponent_1, PromotedProductListComponent_1, ProductFilterPipe_1, ProductSortPipe_1, ProductListWithSearchingComponent_1, RoutableProductComponent_1, PromotedDirective_1;
    var PRODUCT_PIPES, PRODUCT_DIRECTIVES, PRODUCT_PROVIDERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Product_1_1) {
                Product_1 = Product_1_1;
            },
            function (StaticJsonProductRepository_1_1) {
                StaticJsonProductRepository_1 = StaticJsonProductRepository_1_1;
            },
            function (InMemoryProductRepository_1_1) {
                InMemoryProductRepository_1 = InMemoryProductRepository_1_1;
            },
            function (ProductComponent_1_1) {
                ProductComponent_1 = ProductComponent_1_1;
            },
            function (ProductListComponent_1_1) {
                ProductListComponent_1 = ProductListComponent_1_1;
            },
            function (PromotedProductListComponent_1_1) {
                PromotedProductListComponent_1 = PromotedProductListComponent_1_1;
            },
            function (ProductFilterPipe_1_1) {
                ProductFilterPipe_1 = ProductFilterPipe_1_1;
            },
            function (ProductSortPipe_1_1) {
                ProductSortPipe_1 = ProductSortPipe_1_1;
            },
            function (ProductListWithSearchingComponent_1_1) {
                ProductListWithSearchingComponent_1 = ProductListWithSearchingComponent_1_1;
            },
            function (RoutableProductComponent_1_1) {
                RoutableProductComponent_1 = RoutableProductComponent_1_1;
            },
            function (PromotedDirective_1_1) {
                PromotedDirective_1 = PromotedDirective_1_1;
            }],
        execute: function() {
            PRODUCT_PIPES = [ProductFilterPipe_1.default, ProductSortPipe_1.default];
            PRODUCT_DIRECTIVES = [
                ProductComponent_1.default,
                ProductListComponent_1.default,
                PromotedProductListComponent_1.default,
                ProductListWithSearchingComponent_1.default,
                RoutableProductComponent_1.default,
                PromotedDirective_1.default
            ];
            PRODUCT_PROVIDERS = [
                core_1.provide("ProductRepository", { useClass: StaticJsonProductRepository_1.default }),
                StaticJsonProductRepository_1.default,
                InMemoryProductRepository_1.default
            ];
            exports_1("Product", Product_1.default);
            exports_1("StaticJsonProductRepository", StaticJsonProductRepository_1.default);
            exports_1("InMemoryProductRepository", InMemoryProductRepository_1.default);
            exports_1("ProductComponent", ProductComponent_1.default);
            exports_1("RoutableProductComponent", RoutableProductComponent_1.default);
            exports_1("ProductListComponent", ProductListComponent_1.default);
            exports_1("PromotedProductListComponent", PromotedProductListComponent_1.default);
            exports_1("ProductListWithSearchingComponent", ProductListWithSearchingComponent_1.default);
            exports_1("PromotedDirective", PromotedDirective_1.default);
            exports_1("ProductFilterPipe", ProductFilterPipe_1.default);
            exports_1("ProductSortPipe", ProductSortPipe_1.default);
            exports_1("PRODUCT_DIRECTIVES", PRODUCT_DIRECTIVES);
            exports_1("PRODUCT_PIPES", PRODUCT_PIPES);
            exports_1("PRODUCT_PROVIDERS", PRODUCT_PROVIDERS);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QvcHJvZHVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQWVNLGFBQWEsRUFDYixrQkFBa0IsRUFRbEIsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVGpCLGFBQWEsR0FBRyxDQUFDLDJCQUFpQixFQUFFLHlCQUFlLENBQUMsQ0FBQztZQUNyRCxrQkFBa0IsR0FBRztnQkFDdkIsMEJBQWdCO2dCQUNoQiw4QkFBb0I7Z0JBQ3BCLHNDQUE0QjtnQkFDNUIsMkNBQWlDO2dCQUNqQyxrQ0FBd0I7Z0JBQ3hCLDJCQUFpQjthQUNwQixDQUFDO1lBQ0ksaUJBQWlCLEdBQUc7Z0JBQ3RCLGNBQU8sQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLFFBQVEsRUFBRSxxQ0FBMkIsRUFBQyxDQUFDO2dCQUNyRSxxQ0FBMkI7Z0JBQzNCLG1DQUF5QjthQUM1QixDQUFDO1lBRU0sdUNBQU87WUFBcUIsK0VBQTJCO1lBQUUsMkVBQXlCO1lBQ2xGLHlEQUFnQjtZQUFFLHlFQUF3QjtZQUFFLGlFQUFvQjtZQUFFLGlGQUE0QjtZQUFFLDJGQUFpQztZQUNqSSwyREFBaUI7WUFDakIsMkRBQWlCO1lBQUUsdURBQWU7WUFDbEMsbURBQWtCO1lBQUUseUNBQWE7WUFBRSxpREFBaUIiLCJmaWxlIjoicHJvZHVjdC9wcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwcm92aWRlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL2VudGl0aWVzL1Byb2R1Y3QnO1xuaW1wb3J0IHtQcm9kdWN0UmVwb3NpdG9yeX0gZnJvbSAnLi9yZXBvc2l0b3JpZXMvUHJvZHVjdFJlcG9zaXRvcnknO1xuaW1wb3J0IFN0YXRpY0pzb25Qcm9kdWN0UmVwb3NpdG9yeSBmcm9tICcuL3JlcG9zaXRvcmllcy9TdGF0aWNKc29uUHJvZHVjdFJlcG9zaXRvcnknO1xuaW1wb3J0IEluTWVtb3J5UHJvZHVjdFJlcG9zaXRvcnkgZnJvbSAnLi9yZXBvc2l0b3JpZXMvSW5NZW1vcnlQcm9kdWN0UmVwb3NpdG9yeSc7XG5pbXBvcnQgUHJvZHVjdENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvUHJvZHVjdENvbXBvbmVudCc7XG5pbXBvcnQgUHJvZHVjdExpc3RDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0Q29tcG9uZW50JztcbmltcG9ydCBQcm9tb3RlZFByb2R1Y3RMaXN0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9Qcm9tb3RlZFByb2R1Y3RMaXN0Q29tcG9uZW50JztcbmltcG9ydCBQcm9kdWN0RmlsdGVyUGlwZSBmcm9tICcuL3BpcGVzL1Byb2R1Y3RGaWx0ZXJQaXBlJztcbmltcG9ydCBQcm9kdWN0U29ydFBpcGUgZnJvbSAnLi9waXBlcy9Qcm9kdWN0U29ydFBpcGUnO1xuaW1wb3J0IFByb2R1Y3RMaXN0V2l0aFNlYXJjaGluZ0NvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0V2l0aFNlYXJjaGluZ0NvbXBvbmVudFwiO1xuaW1wb3J0IFJvdXRhYmxlUHJvZHVjdENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvUm91dGFibGVQcm9kdWN0Q29tcG9uZW50JztcbmltcG9ydCBQcm9tb3RlZERpcmVjdGl2ZSBmcm9tIFwiLi9kaXJlY3RpdmVzL1Byb21vdGVkRGlyZWN0aXZlXCI7XG5cbmNvbnN0IFBST0RVQ1RfUElQRVMgPSBbUHJvZHVjdEZpbHRlclBpcGUsIFByb2R1Y3RTb3J0UGlwZV07XG5jb25zdCBQUk9EVUNUX0RJUkVDVElWRVMgPSBbXG4gICAgUHJvZHVjdENvbXBvbmVudCxcbiAgICBQcm9kdWN0TGlzdENvbXBvbmVudCxcbiAgICBQcm9tb3RlZFByb2R1Y3RMaXN0Q29tcG9uZW50LFxuICAgIFByb2R1Y3RMaXN0V2l0aFNlYXJjaGluZ0NvbXBvbmVudCxcbiAgICBSb3V0YWJsZVByb2R1Y3RDb21wb25lbnQsXG4gICAgUHJvbW90ZWREaXJlY3RpdmVcbl07XG5jb25zdCBQUk9EVUNUX1BST1ZJREVSUyA9IFtcbiAgICBwcm92aWRlKFwiUHJvZHVjdFJlcG9zaXRvcnlcIiwge3VzZUNsYXNzOiBTdGF0aWNKc29uUHJvZHVjdFJlcG9zaXRvcnl9KSxcbiAgICBTdGF0aWNKc29uUHJvZHVjdFJlcG9zaXRvcnksXG4gICAgSW5NZW1vcnlQcm9kdWN0UmVwb3NpdG9yeVxuXTtcblxuZXhwb3J0IHtQcm9kdWN0LCBQcm9kdWN0UmVwb3NpdG9yeSwgU3RhdGljSnNvblByb2R1Y3RSZXBvc2l0b3J5LCBJbk1lbW9yeVByb2R1Y3RSZXBvc2l0b3J5LFxuICAgICAgICBQcm9kdWN0Q29tcG9uZW50LCBSb3V0YWJsZVByb2R1Y3RDb21wb25lbnQsIFByb2R1Y3RMaXN0Q29tcG9uZW50LCBQcm9tb3RlZFByb2R1Y3RMaXN0Q29tcG9uZW50LCBQcm9kdWN0TGlzdFdpdGhTZWFyY2hpbmdDb21wb25lbnQsXG4gICAgICAgIFByb21vdGVkRGlyZWN0aXZlLFxuICAgICAgICBQcm9kdWN0RmlsdGVyUGlwZSwgUHJvZHVjdFNvcnRQaXBlLFxuICAgICAgICBQUk9EVUNUX0RJUkVDVElWRVMsIFBST0RVQ1RfUElQRVMsIFBST0RVQ1RfUFJPVklERVJTfTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
