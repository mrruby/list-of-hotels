import {sortByRate} from './index.js';
import mockedData from '../test/mock/data.json';

describe('helpers', () => {
  it('sorts hotels by rate', async () => {
    const firstThreeRealSortedHotels = [
      mockedData.hotels[0],
      mockedData.hotels[8],
      mockedData.hotels[7],
    ];
    const sortedHotels = sortByRate(mockedData.hotels);
    firstThreeRealSortedHotels.map((result, index) => {
      expect(sortedHotels[index]).toBe(result);
    });
  });
});
