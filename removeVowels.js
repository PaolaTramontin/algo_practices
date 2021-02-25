



//remove vowels from an array (got this one heheh)


//WET CODE 
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
}  
console.log(removeVowels("poopiepants"))






//  DRY CODE 
var removeVowels = function(s) {
    s =s.split("")
    let emptyArr=[]
    for (let i=0; i<s.length; i++){
     if(s[i] !=="a" && s[i] !=="e" && s[i] !=="i" && s[i] !=="o" && s[i] !=="u" ){
         emptyArr.push(s[i])
     }
    } 
    return emptyArr.join("") 
}  

// console.log(removeVowels("leetcodeisacommunityforcoders"))


