var reverseVowels = function(s) {
    s= s.split("")
    let newArray = []
    for (let i=0; i<s.length; i++){
        if (s[i]==="a" || s[i]==="A" || s[i]==="e" || s[i]==="E" || s[i]==="i" || s[i]==="I" || s[i]=== "o"  || s[i]=== "O"|| s[i]==="u" || s[i]=== "U"){
            newArray.push([s[i],i]) //this array has all my vowels
        } 
    } 
    newArray.reverse()
    console.log("is this reversed?", newArray)
    console.log("thisis my string ?", s)
    for(let k=0; k<newArray.length; k++){
        //  console.log("this long thang", newArray[newArray.length-(k+1)][0])
        s.splice(newArray[k][1],1, newArray[newArray.length-(k+1)][0])
    }
    return s.join("")
};


console.log(reverseVowels("poopJuice"))   // eiuoo peipJuoco   euppi