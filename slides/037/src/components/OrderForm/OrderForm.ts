import {Component} from '@angular/core';
import {FormBuilder, ControlGroup, Control, COMMON_DIRECTIVES, Validators} from '@angular/common';

@Component({
    selector: 'order-form',
    directives: [COMMON_DIRECTIVES],
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

    constructor(formBuilder: FormBuilder) {
        this.orderForm = formBuilder.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            address: ['', Validators.required],
            email: ['', Validators.required],
            productName: ['', Validators.required],
            // Validators.compose is function which reduces other validators
            productCount: ['', Validators.compose([Validators.required, this.integer, this.notZero])]
        });
    }

    public onFormSubmit () {
        const order = this.orderForm.value;
        console.log(order);
    }

    //3/ First proof that own validators are simple
    private integer (control: Control) {
        return Number.isInteger(control.value)?null:{integer: true};
    }

    //3/ And second
    private notZero (control: Control) {
        return (control.value != 0)?null:{notZero: true};
    }
}
