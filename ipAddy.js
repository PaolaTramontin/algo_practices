var defangIPaddr = function(address) {
let split = address.split('')
let array = []
answer = ''

    for(let i=0; i<split.length; i++){
        if(split[i]==='.'){
            array.push('[.]')
        }else{
            array.push(split[i])
        }
    };
    answer = array.join('')
    console.log(answer)
    return answer
}





defangIPaddr("255.100.50.0")