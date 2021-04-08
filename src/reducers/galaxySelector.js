import {createSelector} from 'reselect';
import {getAllLocations} from './locationSelectors';

export const myNewSelector = createSelector(
    [getAllLocations],
    (locations) => {
        return 'foo';
    }
);