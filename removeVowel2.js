var removeVowels = function(s) {
let splitArr = s.split("")
let noVowels = []


for(let i=0; i<splitArr.length; i++){
    if(splitArr[i] !== "a" && splitArr[i] != "e" && splitArr[i] != "i" && splitArr[i] != "o" && splitArr[i] != "u" ){
        noVowels.push(splitArr[i])
    }        
    } return noVowels.join("")
}



console.log(removeVowels("leetcodeisacommunityforcoders"))






var removeVowels = function(s) {
    let newArr =[]
 let emptyArr=[]
 for (let i=0; i<s.length; i++){
  newArr= s.split("")
  if(newArr[i] !=="a" && newArr[i] !=="e" && newArr[i] !=="i" && newArr[i] !=="o" && newArr[i] !=="u" ){
      emptyArr.push(newArr[i])
  }
 } 
 return emptyArr.join("") 
};