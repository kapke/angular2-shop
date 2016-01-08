import SortingPanel from './SortingPanel';

export interface SortingDescriptor {
    direction: number,
    property: string;
}

export interface SortingOption {
    property: string;
    name: string;
}

export {SortingPanel};
