import SortingPanel from './SortingPanel';
import ProductFilter from './ProductFilter';
import ProductSort from './ProductSort';

interface SortingDescriptor {
    direction: number,
    property: string;
}

interface SortingOption {
    property: string;
    name: string;
}

export {SortingPanel, ProductFilter, SortingDescriptor, SortingOption, ProductSort};
