var kidsWithCandies = function(candies, extraCandies) {
    let candiesWithExtra = []
    let biggestNum = []
    let newOrder =[]
    let answers = []

    for (let i=0; i<candies.length; i++){
        candiesWithExtra.push(candies[i]+extraCandies)
        newOrder.push(candies[i])
    }     biggestNum = (newOrder.sort(function(a,b) {return b-a}))
       for (let j=0; j<candiesWithExtra.length; j++){
            if(candiesWithExtra[j] >= biggestNum[0]){
                        answers.push(true)
                  } else {
                    answers.push(false)
                  }
              } console.log(answers)
              return answers
 } 





kidsWithCandies([4,2,1,1,2], 1)


//create a new array
//sort new array
// push new arr [0] to another arr

//need to iterate thru the candies array
//and then add 3