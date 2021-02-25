var restoreString = function(s, indices) {
    let string = s.split('')
    let holder = []
    let times = s.length;
    let holderReverse = []


    for(let i=0; i<s.length; i++){
        for(let j=0; j<indices.length; j++){
            holder.reverse(push(string.shift()+indices.shift()))
        }
    } console.log(holder)
    // for(let p=0; p<holder.length; p++){
    //     holderReverse.push(holder[i].reverse())
    // }
};


restoreString("codeleet",[4,5,6,7,0,2,1,3] )