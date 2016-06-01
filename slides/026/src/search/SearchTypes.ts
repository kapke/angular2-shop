interface SortingDescriptor {
    direction: number,
    property: string;
}

interface SortingOption {
    property: string;
    name: string;
}

export {SortingDescriptor, SortingOption};
