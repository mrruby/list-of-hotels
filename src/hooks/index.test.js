import {renderHook} from '@testing-library/react-hooks';
import {useHotelsApi} from './index.js';
import mockedData from '../test/mock/data.json';

describe('the useInput hook', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockedData),
      }),
    );
  });
  afterEach(() => {
    global.fetch.mockClear();
  });
  afterAll(() => {
    global.fetch.mockRestore();
  });

  it('should make the api call to fetch and return loading state', async () => {
    const setData = jest.fn();
    const {result, waitForNextUpdate} = renderHook(() => useHotelsApi(setData));
    expect(result.current).toEqual([true, []]);
    await waitForNextUpdate();
    expect(result.current).toEqual([false, mockedData.hotels]);
  });
  it('should make the api call to fetch and set hotels data', async () => {
    const setData = jest.fn();
    const {waitForNextUpdate} = renderHook(() => useHotelsApi(setData));
    await waitForNextUpdate();
    expect(setData).toHaveBeenCalledWith(mockedData.hotels);
  });
});
