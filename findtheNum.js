const findTheNum = (numbers, k) =>{
    let answer = ''
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]===k){
            answer = 'YES'
        }
    } if(answer ==='YES'){
        console.log('YES')
        return 'YES'
    } else{
        console.log('NO')
        return 'NO'
    }
}

findTheNum([1,2,3,4,5], 0)










function oddNumbers(start, limit) {
    let arr = []
    for(let i=start; i<=limit; i++){
        if([i]%2 !==0){
           arr.push(i)
        }
    } return arr
    }


console.log(oddNumbers(3,9))
