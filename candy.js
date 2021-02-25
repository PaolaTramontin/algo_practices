// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.
// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.



//                      thought process:
//this is the array once all the kids get the extra candies [5,6,8,4,6]
// sort the input from high to low and get the highest number. the input is [2,3,5,1,3]   ... highest number is 5.
//compare the first number in the extra candies array to the highest number in the input, if it doesnt beat the highest number in the array, the the answer is false. else its true,


var distributeCandies = function(kidsCandies, extra) {
  let withExtra = []
  let copyArray = []
  let answer = []

  for(let i=0; i<kidsCandies.length; i++){
    copyArray.push(kidsCandies[i])
    withExtra.push(kidsCandies[i] + extra)
  }

  let newOrder = copyArray.sort(function(a,b){return b-a})
  let highestNum = newOrder[0]  

  for(let i=0; i<withExtra.length; i++){
    if(withExtra[i] >= highestNum){
      answer.push(true)
  } else{
    answer.push(false)
  }
}
 console.log(answer)
}
  

console.log(distributeCandies([2,3,5,1,3], 3))