const sortingAlgorithm = {};

sortingAlgorithm.bubbleSort = function (arr) {
    //loop through arr and 
    //compare current element with next element
    //swap if left is greater, else continue

    for (var i = 0; i < arr.length; i++) {
        //number of passes
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                this.swap(arr, j, j + 1)
            }

        }
        console.log(arr);
    }
    return arr;
}

sortingAlgorithm.swap = function (arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


sortingAlgorithm.bubbleSort([4, 3, 7, 2, 1]);