// const numsArr = (numbers) =>{
//     let sum = 0;

//     for(let i=0; i<numbers.length; i++){
//         sum += numbers[i]
//     }
//     console.log(sum)
// }


// numsArr([20,10,40,5])




const numsArr = (numbers) =>{
    numbers.sort(function(a,b){return b-a})
    console.log(numbers)
}


numsArr([20,10,40,5])