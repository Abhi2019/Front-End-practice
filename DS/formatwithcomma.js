function permute(num) {
    // var digits = String(num).split('');
    var result = [];
  
    function backtrack(index) {
      if (index === num.length) {
        result.push(num.slice());
      } else {
        for (var i = index; i < num.length; i++) {
          swap(index, i); // Choose
          backtrack(index + 1); // Explore
          swap(index, i); // Unchoose
        }
      }
    }
  
    function swap(i, j) {
      var temp = num[i];
      num[i] = num[j];
      num[j] = temp;
    }
  
    backtrack(0);
  
    return result;
  }
  
  // Example usage
  var number = [1,2,3];
  var permutations = permute(number);
  console.log(permutations);
  