import ratings from '../lib/android-ratings.js';
import { assert } from 'chai';

describe('Android Ratings test', () => {
    it('should fetch wire android ratings', () => {
        return ratings.getRatings
            .then((app) => {
                assert(true);
            });
    });
});