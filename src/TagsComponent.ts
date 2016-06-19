import {Component, Input} from '@angular/core';


@Component({
    selector: 's-tags',
    template: `
        <div>
            <span *ngFor="let tag of tags" class="tag">{{ tag }}</span>
        </div>
    `,
    styles: [`
        .tag {
            display: inline-block;
            padding: 0.25rem 0.5rem;
            border-radius: 0.5rem;
            color: white;
            background-color: tomato;
            font-size: smaller;
            margin: 0.25rem;
        }
    `]
})
export class TagsComponent {
    @Input() public tags: string[] = [];
}