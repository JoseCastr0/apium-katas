require("./using-reduce");

let myArray = [1, 2, 3];
let mySecondArray = [1, 2, 3];
let myThirdArray = [1, 2, 3];

function customForEach<T>(arr: T[], callback: (v: T, i: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

function customReduceForEach<T>(arr: T[], callback: (v: T, i: number) => void) {
  arr.reduce((acc, curr, i) => {
    callback(arr[i], i);
    return undefined;
  }, undefined);
}

function customMapReduce<T, K>(arr: T[], callback: (v: T, i: number) => K) {
  return arr.reduce<K[]>((acc, curr, i) => {
    return [...acc, callback(curr, i)];
  }, []);
}

describe("Using reduce", () => {
  describe("For Each", () => {
    it("[1, 2, 3] should return [2, 3, 4]", () => {
      customForEach(myArray, (item: number, i: number) => {
        item += 1;
        myArray[i] = item;
      });
      expect(myArray).toEqual([2, 3, 4]);
    });

    it("[1, 2, 3] should return [2, 3, 4]", () => {
      customReduceForEach(mySecondArray, (item: number, i: number) => {
        item += 1;
        mySecondArray[i] = item;
      });
      expect(mySecondArray).toEqual([2, 3, 4]);
    });

    it("[1, 2, 3] should return [2, 3, 4]", () => {
      const x = customMapReduce(myThirdArray, (item: number, i: number) => {
        const y = item + "";
        return y;
      });
      expect(x).toEqual(["1", "2", "3"]);
    });
  });
});