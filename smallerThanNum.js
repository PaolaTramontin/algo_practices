var smallerNumbersThanCurrent = function(nums) {
    let final=[];
     for(let i=0;i<nums.length;i++){
         let count =0;
         let j=0;
         while(j<nums.length){
             if(nums[i]>nums[j]){
                 count++;
                 j++;
             }
             else{
                 j++;
             }
         }
         final.push(count);
     }
     return final;


};


console.log(smallerNumbersThanCurrent([8,1,2,2,3]))

// [8,1,2,2,3]             [8,1,2,2,3]

// if 8 is bigger than j+1 which is 1,2,2,3
//return 4. 

//then shift 8, so its 1,2,2,3      1,2,2,3 


// [8,1,2,2,3]       // [8,1,2,2,3] 
//4 3 1 1  0           // 4 0 1 1 3




// [8,1,2,2,3]      [8,1,2,2,3]
//return 4 and then remove 8.
