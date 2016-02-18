//4/ This is an interface for things we had previously in code
export interface SortingDescriptor {
    direction: number,
    property: string;
}

//4/ And similar contract we create for another living
export interface SortingOption {
    property: string;
    name: string;
}
