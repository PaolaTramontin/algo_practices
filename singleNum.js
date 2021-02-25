var singleNumber = function(nums) {
    let object = {}
    
    for (let i=0; i<nums.length; i++){
        if(nums[i] in object){
            object[nums[i]] +=1
        } else {
            object[nums[i]] = 1
        }
    }

    for(key in object){
        // console.log(object[key])
        if(object[key]===1){
            console.log(key)
            // return object
        }

    }

};



singleNumber([2,2,1])