import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, COMMON_DIRECTIVES, Validators} from 'angular2/common';

@Component({
    selector: 'order-form',
    directives: [COMMON_DIRECTIVES],
    //10/ 2. Important thing is that Angular allows send form which is not valid, so we need to check it manually.
    template: `
        <form [ngFormModel]="orderForm" (submit)="onFormSubmit()">
            <label>Name: <input type="text" [ngControl]="'name'" class="form-control" /></label>
            <label>Surname: <input type="text" [ngControl]="'surname'" class="form-control" /></label>
            <label>Address: <input type="text" [ngControl]="'address'" class="form-control" /></label>
            <label>E-mail: <input type="text" [ngControl]="'email'" class="form-control" /></label>
            <label>Product name: <input type="text" [ngControl]="'productName'" class="form-control" /></label>
            <label>Product count: <input type="number" [ngControl]="'productCount'" class="form-control" /></label>
            <input type="submit" value="Send order" class="btn btn-default" [disabled]="!orderForm.valid" />
        </form>`
})
export default class OrderForm {
    public orderForm: ControlGroup;

    //10/ 1. Validator is simple function taking control as argument and returning object.
    constructor(formBuilder: FormBuilder) {
        this.orderForm = formBuilder.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            address: ['', Validators.required],
            email: ['', Validators.required],
            productName: ['', Validators.required],
            productCount: ['', Validators.required]
        });
    }

    public onFormSubmit () {
        const order = this.orderForm.value;
        console.log(order);
    }
}
