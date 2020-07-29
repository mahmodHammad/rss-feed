Array.prototype.CustomeMap = function(func){
    const result = [];
    for (let i = 0; i < this.length; index++) {
        func(this[index], index, this);
    }
    return result
}


Array.prototype.CustomeFilter =  function (func) {
    let filtered = []; 
    for(let i = 0; i < this.length; i++) {
      if (func(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
  };


Array.prototype.CustomeReduce = function (arr, initialValue, reducer) {
    if(arr.length === 0) {
      return initialValue;
    } else {
      const [first, ...rest] = arr;
      const updatedAcc = reducer(initialValue, first);
      return myReduce(rest, updatedAcc, reducer);
    }
  }

 