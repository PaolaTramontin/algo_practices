// accounts takes 2 params, first is ith is costumer jth is the bank

var maximumWealth = function(accounts) {
    newArr=[]
    let turns = 0
    let answer = 0
    for (let i = 0; i<accounts.length; i++) {
        let newElement = accounts[i].reduce((a, b) => a + b)
        newArr.push(newElement)
    } 
    newArr.sort(function(a,b){return b-a})
    console.log(newArr[0])
    return newArr[0]
};

   



maximumWealth([[1,2,5],[3,2,1]])



//first find the numbers of elements in the array




    //find how long the small arr is
    //create a loop that runs the same about of times as small array length
    //create a var that will hold the sum value