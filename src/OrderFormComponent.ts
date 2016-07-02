import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";

@Component({
	selector: 's-order-form',
	directives: [REACTIVE_FORM_DIRECTIVES],
	template: `
		<form [formGroup]="formModel" (ngSubmit)="sendForm()">
			<label>Name: <input type="text" formControlName="name" /></label>
			<label>Surname: <input type="text" formControlName="surname" /></label>
			<label>E-mail: <input type="text" formControlName="eMail" /></label>
			<fieldset formGroupName="address">
				<header>Address</header>
				<label>Street: <input type="text" formControlName="street" /></label>
				<label>ZIP/Postal code: <input type="text" formControlName="postalCode" /></label>
				<label>City: <input type="text" formControlName="city" /></label>
			</fieldset>
			<label>Product name: <input type="text" formControlName="product" /></label>
			<label>Count: <input type="number" formControlName="count" min="1" /></label>
			<button type="submit" [disabled]="!formModel.valid">Submit</button>
		</form>
	`,
	styles: [`
		label {
			display: flex;
			width: 30em;
			justify-content: space-between;
			flex-direction: row;
			margin: 0.5em 0.25em;
		}
		fieldset {
			margin: 0;
			padding: 0;
			border: none;
		}
		input {
			width: 20em;
		}
	`]
})
export class OrderFormComponent {
	public formModel: FormGroup;

	constructor (formBuilder: FormBuilder) {
		this.formModel = formBuilder.group({
			name: ['', Validators.required],
			surname: ['', Validators.required],
			eMail: ['', Validators.required],
			address: formBuilder.group({
				street: ['', Validators.required],
				postalCode: ['', Validators.required],
				city: ['', Validators.required]
			}),
			product: ['', Validators.required],
			count: [1, Validators.compose([Validators.required, this.checkProductCount])]
		});
	}

	sendForm () {
		console.log(this.formModel.value);
	}

	checkProductCount (formControl: FormControl):{} {
		const value = formControl.value;

		if (Number.isInteger(value) && value > 0) {
			return null;
		} else {
			return {productCount: true};
		}
	}
}