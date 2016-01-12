import SortingPanelComponent from './SortingPanelComponent';

interface SortingDescriptor {
    direction: number,
    property: string;
}

interface SortingOption {
    property: string;
    name: string;
}

export {SortingPanelComponent, SortingDescriptor, SortingOption};
