require('./using-reduce')

let myArray = [1, 2, 3]

// myArray.forEach((item) => {
//   item + 1;
// })

function customForEach<T>(arr: T[], callback: (v: T, i: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i)
  }
  // arr.reduce((acc, curr, i) => {
  //   callback(curr, i)
  //   return undefined;
  // }, undefined)
}

describe('Using reduce', () => {
  describe('For Each', () => {
    it('[1, 2, 3] should return [2, 3, 4]', () => {
      customForEach(myArray, (item: number, i: number) => {
        item += 1;
        myArray[i] = item
      })
      console.log('myArray', myArray)
      expect(myArray).toEqual([2, 3, 4]);
    });
  }) 
});
