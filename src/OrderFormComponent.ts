import {Component} from '@angular/core';

@Component({
	selector: 's-order-form',
	template: `
		<form #form="ngForm" (ngSubmit)="sendForm(form.value)">
			<label>Name: <input type="text" name="name" ngModel required /></label>
			<label>Surname: <input type="text" name="surname" ngModel required /></label>
			<label>E-mail: <input type="text" name="eMail" ngModel required /></label>
			<fieldset ngModelGroup="address">
				<header>Address</header>
				<label>Street: <input type="text" name="street" ngModel required /></label>
				<label>ZIP/Postal code: <input type="text" name="postalCode" ngModel required /></label>
				<label>City: <input type="text" name="city" ngModel required /></label>
			</fieldset>
			<label>Product name: <input type="text" name="product" ngModel required /></label>
			<label>Count: <input type="text" name="count" ngModel required /></label>
			<button type="submit" [disabled]="!form.valid">Submit</button>
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
	sendForm (value: any) {
		console.log(value);
	}
}