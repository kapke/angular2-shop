import {Component, Inject} from '@angular/core';
import {RouteParams} from "@angular/router-deprecated";
import {COMMON_DIRECTIVES} from '@angular/common';
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
//9/ This component is simple wrapper for ProductComponent which knows how to get product using data from router
export default class RoutableProductComponent {
    public product: Product;

    constructor (routeParams: RouteParams, @Inject('ProductRepository') productRepository: ProductRepository) {
        productRepository
            .getBySlug(routeParams.get('slug'))
            .subscribe(product => this.product = product);
    }
}
