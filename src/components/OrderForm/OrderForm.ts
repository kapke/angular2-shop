import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, COMMON_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'order-form',
    directives: [COMMON_DIRECTIVES],
    template: `
        <form [ngFormModel]="orderForm" (submit)="onFormSubmit()">
            <label>Name: <input type="text" [ngControl]="'name'" class="form-control" /></label>
            <label>Surname: <input type="text" [ngControl]="'surname'" class="form-control" /></label>
            <label>Address: <input type="text" [ngControl]="'address'" class="form-control" /></label>
            <label>Product name: <input type="text" [ngControl]="'productName'" class="form-control" /></label>
            <label>Product count: <input type="number" [ngControl]="'productCount'" class="form-control" /></label>
            <input type="submit" value="Send order" class="btn btn-default" />
        </form>`
})
export default class OrderForm {
    public orderForm: ControlGroup;

    private controls;

    constructor(formBuilder: FormBuilder) {
        this.controls = {
            name: formBuilder.control(''),
            surname: formBuilder.control(''),
            address: formBuilder.control(''),
            productName: formBuilder.control(''),
            productCount: formBuilder.control('')
        };
        this.orderForm = formBuilder.group(this.controls);
    }

    public onFormSubmit () {
        const order = this.collectOrder();
        console.log(order);
    }

    private collectOrder () {
        return {
            name: this.controls.name.value,
            surname: this.controls.surname.value,
            address: this.controls.address.value,
            productName: this.controls.productName.value,
            productCount: this.controls.productCount.value
        }
    }
}
