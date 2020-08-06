function check(array) {
    var reversed = array.slice().sort((a, b) => b - a),
        count = 0,
        i = array.length,
        p;
  
    while (i--) {
        if (array[i] === reversed[i]) continue;
        p = array.indexOf(reversed[i]);
        [array[i], array[p]] = [array[p], array[i]];
        count++;
    }
    console.log(...array);
    return count;
  }
  
  console.log(check([1, 2, 3, 4, 5, 6])); // 3
  console.log(check([6, 5, 4, 3, 2, 1])); // 0
  console.log(check([1, 2, 3, 4])); // 2
  console.log(check([1, 3, 2, 5, 4, 6])); // 3