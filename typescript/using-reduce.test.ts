

describe('Using reduce', () => {
  it('should sum all numbers in an array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    expect(sum).toBe(15);
  });
});
