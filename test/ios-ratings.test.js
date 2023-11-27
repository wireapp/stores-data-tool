import ratings from '../lib/ios-ratings.js';
import { assert } from 'chai';

describe('iOS Ratings test', () => {
    it('should fetch wire ios ratings', () => {
        return ratings.getRatings
            .then((app) => {
                assert(true);
            });
    });
});