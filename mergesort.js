function split(wholeArray) {
    var firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length / 2));
    var seconHalf = wholeArray.slice(Math.floor(wholeArray.length / 2));
    return [firstHalf, seconHalf];
}

function merge(arr1, arr2) {
    var finalArr = [];
    var j = 0;
    var i = 0;
    while (i < arr2.length) {
        if (arr1[j] < arr2[i]) {
            finalArr.push(arr1[j]);
            j++;
        } else {
            finalArr.push(arr2[i]);
            i++;
        }
    }
    while (j < arr1.length) {
        finalArr.push(arr1[j]);
        j++;
    }
    console.log(finalArr);
    return finalArr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    } else {
        var result = split(arr);
        return merge(mergeSort(result[0]), mergeSort(result[1]))
    }

}