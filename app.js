const sumContiguousArray = function(ary){ 
    //get the last item
    const lastItem = ary[ary.length - 1]
    //Gauss's trick
    return lastItem * (lastItem + 1) / 2
  }
  const nums = [1,2,3,4,5]
  const sumOfArray = sumContiguousArray(nums)