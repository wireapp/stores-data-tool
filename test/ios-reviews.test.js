import reviews from '../lib/ios-reviews.js';
import { assert } from 'chai';

describe('iOS Reviews test', () => {
    it('should fetch wire ios reviews', () => {
        return reviews.getReviews
            .then((app) => {
                assert(true);
            });
    });
});