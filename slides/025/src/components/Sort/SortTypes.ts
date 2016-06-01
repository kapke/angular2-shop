//4/ This is an interface for things we had previously in code
interface SortingDescriptor {
    direction: number,
    property: string;
}

//4/ And similar contract we create for another living
interface SortingOption {
    property: string;
    name: string;
}

export {SortingDescriptor, SortingOption};