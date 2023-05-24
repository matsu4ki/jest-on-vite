import { sub } from '../src/sub';

describe('引き算', () => {
  test('adds 10 - 5 to equal 5', () => {
    expect(sub(10, 5)).toBe(5);
  });
});
