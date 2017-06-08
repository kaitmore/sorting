describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
     expect(split([1,2,3,5])).toEqual([[1,2],[3,5]]);
  });
    it('works if the array is an odd length', function() {
     expect(split([1,2,3,5,4])).toEqual([[1,2],[3,5,4]]);
  });
});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
            expect(merge([9],[4])).toEqual([4,9]); 
              expect(merge([1,5],[3,6])).toEqual([1,3,5,6]); 
               expect(merge([1,3],[2,7,9])).toEqual([1,2,3,7,9]); 
  });
});

describe('Merge Sort', function(){
  it('returns a sorted array', function(){
        expect(mergeSort([9,4,6,1,  5,2,3,7])).toEqual([1,2,3,4,5,6,7,9]); 
  });
    it('returns a sorted array', function(){
        expect(mergeSort([10,9,4,6,1,33,890,5,5,2,3,1233,7])).toEqual([1,2,3,4,5,5,6,7,9,10,33,890,1233]); 
  });
});