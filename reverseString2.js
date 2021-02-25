var reverseStr = function(s, k) {
    let arr = []
    let newArray = []
    let finalArr = []
    let realFinal =[]
    let num1 = 0
    let num2 = 0
    let cleanArr = []
    let count = 0
    
    for (let i=0; i<s.length; i++){
        arr.push(s[i])
        //  console.log(arr)
     }
      num1 = arr.length
       //console.log(num1)

     for(let j=0; j<num1; j++){
        newArray.push(arr.slice(0,k+1))

    }

    for(let r=0; r<newArray.length; r++){
        if(newArray[r] != 0){
            cleanArr.push(newArray[r])
        }
    }
    console.log(cleanArr.length)
    // console.log(newArray[0].reverse())
    for (let p=0; p<cleanArr.length; p+=k){
        cleanArr[p].reverse()
       //   console.log("this clean reverse", cleanArr)
    }
    

    for (let v=0; v<cleanArr.length; v++){
        count = cleanArr[v].length
        count = count + count
    }
    console.log("countszz", count)

    for(let l=0; l<cleanArr.length; l++){
       finalArr.push((cleanArr[l].join('')))
         // console.log(finalArr)
    } 
    //   num2 = (finalArr.join('').length)
    num2=count
      console.log(num2)
        let difference = num1-num2
        //  console.log(difference)
        //100-

    if(difference >0){
        let rere= (arr.slice(78,101))
        rere.reverse()
        finalArr.push(rere)
         console.log(finalArr)
        //    console.log(finalArr.join(''))
        //   return finalArr.join('')
    }
    else{
        console.log(finalArr.join(''))
        return finalArr.join('')
        
    } 
    // for(let k=0; k<finalArr.length; k++){
    //          realFinal.push((finalArr[k].join('')))
    //           console.log(realFinal)
    // }           
    // console.log(realFinal.join(''))
    // return realFinal.join('')
        
    

// }
}

reverseStr("hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl"
, 39)









// let arr = []
// let newArray = []
// let finalArr = []
// let num1 = 0
// let num2 = 0

// for (let i=0; i<s.length; i++){
//     arr.push(s[i])
//  }
//   num1 = arr.length

//  for(let j=0; j<arr.length; j++){
//   newArray.push(arr.splice(0,k))
// }
// // console.log(newArray[0].reverse())
// for (let p=0; p<newArray.length; p+=k){
//     newArray[p].reverse()
//     // console.log(newArray)
// }

// for(let l=0; l<newArray.length; l++){
//    finalArr.push((newArray[l].join('')))
// //    console.log(finalArr)
// } 
//   num2 = (finalArr.join('').length)
//    let difference = num1-num2

// if(difference >0){
//     arr.slice(num1,num2+1)
//     finalArr.push(arr)
//     console.log(finalArr.join(''))
//     return finalArr.join('')
// } else{
//     return finalArr.join('')

// }