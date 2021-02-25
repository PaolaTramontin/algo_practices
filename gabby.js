const solution = (a) =>{
    let lowest = a.sort(function(a,b){return a-b})
    let low = lowest[0]
    let answer = ""
    // console.log(lowest)


    let highest =  a.sort(function(a,b){return b-a})
    let high = highest[0]
    // console.log(high)
    let array = []
   

    for(let i=low; i<=high; i++){
       array.push(i)
    }
   for( let j = 0; j<a.length; j++){
       for (let k=0; k<array.length; k++ ){
           if(array[k] !== a[j]){
               answer = [k]
           }
       }
   } console.log (answer)


}

solution([1,3,6,4,1,2])