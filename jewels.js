var numJewelsInStones = function(jewels, stones) {
    let count = 0

    for(let i=0; i<stones.length; i++){
        for(let j=0; j<jewels.length; j++){
                if(stones[i] ==jewels[j]){
                    count =count +1
                } else{
                    console.log("no")
                }
        }

    } console.log(count)
    return count
    
};




numJewelsInStones("aA","aAAbbbb")