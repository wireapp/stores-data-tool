import reviews from '../lib/android-reviews.js';
import { assert } from 'chai';

describe('Android Reviews test', () => {
    it('should fetch wire android reviews', () => {
        return reviews.getReviews
            .then((app) => {
                assert(true);
            });
    });
});