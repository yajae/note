function max(numbers) {
    let val=0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]>val){val=numbers[i];};
    }
    return val;
}
function findPosition(numbers, target) {
    function istarget(number){
        return number==target;
    }
    return numbers.findIndex(istarget);
}

    console.log(max([1, 2, 4, 5])); // should print 5
    console.log(max([5, 2, 7, 1, 6])); // should print 7
    console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
    console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
    console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // shouldprint 2 (the first position)
    console.log(findPosition([5, 2, 7, 1, 6], 8)); 