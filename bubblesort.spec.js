describe('Bubble Sort', function () {
    var testArr = [4, 3, 7, 2, 1];

    it('handles an empty array', function () {
        expect(sortingAlgorithm.bubbleSort([])).toEqual([]);
    });

    it('sorts an array in ascending order', function () {
        expect(sortingAlgorithm.bubbleSort(testArr)).toEqual([1, 2, 3, 4, 7]);
        expect(sortingAlgorithm.bubbleSort([10, 66,2,1,29,])).toEqual([1, 2, 10, 29, 66]);
    });

    it('sorts an array in ascending order', function () {
        expect(sortingAlgorithm.bubbleSort([1, 2, 4, 5, 7])).toEqual([1, 2, 4, 5, 7]);
    });

    it('works with array of 1 element', function () {
        expect(sortingAlgorithm.bubbleSort([1])).toEqual([1]);
    });

});

//keep track of comparisons and swaps for each bubble sort
describe('swap function', function () {

    beforeEach(function () {
        spyOn(sortingAlgorithm, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
    });

    it('swaps the correct amount of times', function () {
        sortingAlgorithm.bubbleSort([3,2,1]);
        expect(sortingAlgorithm.swap.calls.count()).toEqual(3);
    });

});