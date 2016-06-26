export enum SortingOrder {
    Neutral = 0,
    Ascending = 1,
    Descending = -1,
}

export class SortingDescriptor {
    constructor (private _property: string, private _order: SortingOrder=SortingOrder.Neutral) {
    }

    get property (): string {
        return this._property;
    }

    get order (): SortingOrder {
        return this._order;
    }

    update (property: string) {
        if (property != this._property) {
            return this.changeProperty(property);
        } else {
            return this.changeSortingOrder();
        }
    }

    changeProperty (property: string) {
        return new SortingDescriptor(property, SortingOrder.Ascending);
    }

    changeSortingOrder () {
        let newOrder = SortingOrder.Neutral;

        switch (this._order) {
            case SortingOrder.Neutral:
                newOrder = SortingOrder.Ascending;
                break;
            case SortingOrder.Ascending:
                newOrder = SortingOrder.Descending;
                break;
            case SortingOrder.Descending:
                newOrder = SortingOrder.Neutral;
                break;
        }

        return new SortingDescriptor(this._property, newOrder);
    }

    static empty = new SortingDescriptor('');
}