var shuffle = function(nums, n) {
    let middle = nums.length/2 //returns 7 aka #4
    console.log(middle)
    let length = nums.length //14
    console.log(length)
    let secondHalf = []
    let firstHalf = []
    let finalArr = []
    let rounds = 0

    console.log(nums.slice(middle,14))  //

    secondHalf.push(nums.slice(middle,length))  //
    console.log(secondHalf)
    firstHalf.push(nums.slice(0,middle))
console.log(firstHalf)


    while (rounds <nums.length) {
        for(let i =0; i<firstHalf.length; i++){
            //  console.log(firstHalf[i])
            finalArr.push(firstHalf[i].shift())
            rounds = rounds +1 
            for (let j=0; j<secondHalf.length; j++){
                finalArr.push(secondHalf[i].shift())
                // console.log(finalArr)
                rounds = rounds +1 
            }
        }
    } console.log(finalArr)
    return finalArr
}



shuffle([7,5,9,7,5,8,10,4,3,3,2,5,9,10])

//array length of 14
