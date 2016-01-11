import {Component, Inject} from 'angular2/core';
import {RouteParams} from "angular2/router";
import {COMMON_DIRECTIVES} from 'angular2/common';
import ProductComponent from "./ProductComponent";
import {ProductRepository} from "../repositories/ProductRepository";
import Product from "../entities/Product";

@Component({
    selector: 'single-product',
    directives: [ProductComponent],
    template: `
        <s-product *ngIf="product" [product]="product"></s-product>
    `
})
export default class RoutableProductComponent {
    public product: Product;

    constructor (routeParams: RouteParams, @Inject('ProductRepository') productRepository: ProductRepository) {
        productRepository
            .getBySlug(routeParams.get('slug'))
            .subscribe(product => this.product = product);
    }
}
