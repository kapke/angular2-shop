import {Component, Pipe, PipeTransform} from '@angular/core';

//3/ 2. And mark it as a pipe
@Pipe({
    name: 'tomorrow'
})
//9/ 1. If we want to create own pipe, we need to create a class implementing PipeTransform interface
export class TomorrowPipe implements PipeTransform {
    transform(value: Date): Date {
        const output = new Date(value.toISOString());
        output.setDate(output.getDate() + 1);

        return output;
    }
}

@Component({
    selector: 'my-app',
    //2/ 3. And then we can use it under name we declared
    template: `
        <div>Tomorrow is {{ now | tomorrow | date:'fullDate' }}</div>
    `
})
export class AppComponent {
    public now = new Date();
}
