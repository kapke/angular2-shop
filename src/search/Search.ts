import SortingPanel from './SortingPanel';
import Filter from './ProductFilter';

interface SortingDescriptor {
    direction: number,
    property: string;
}

interface SortingOption {
    property: string;
    name: string;
}

export {SortingPanel, Filter, SortingDescriptor, SortingOption};
