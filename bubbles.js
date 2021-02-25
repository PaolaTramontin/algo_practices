const setOrder = (nums) =>{
    let order = nums.sort(function(a,b){return a-b})
    console.log(order)
}


setOrder([10, 24, -10, 2, -1])