import {Component, Inject, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import { Observable} from "rxjs";

import {ProductRepositoryToken} from "../products";
import {ProductRepository} from "./ProductRepository";
import {Product} from "./Product";


@Component({
    selector: 's-single-product',
    template: `
        <s-product [product]="product$ | async"></s-product>
    `,
    styles: [`
        :host {
            display: flex;
        }
    `]
})
export class SingleProductComponent {
    private product$: Observable<Product>;

    constructor (
        private route: ActivatedRoute,
        @Inject(ProductRepositoryToken) private productRepository: ProductRepository
    ) {
        this.product$ = this.getProduct();
    }

    getProduct (): Observable<Product> {
        return this.route.params
            .map(params => params['id'].toString())
            .switchMap(id => this.productRepository.findProductById(id))
            .do(product => {
                console.log(product);
            });
    }
}