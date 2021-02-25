

var canFormArray = function(arr, pieces) {
     //whole array
    for (let i=0; i<pieces.length; i++){
       if(arr.push(pieces[i])){
           return true
       } else {
           return false
        } 
}
}

console.log(canFormArray())