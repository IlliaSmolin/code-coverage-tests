module.exports.findClosestNumberInArray = function(arr, num) {
    if (!(arr instanceof Array) || !arr.length || !Number.isInteger(num)) {
        return {
            num: null,
            index: null
        }
    }
    var index;
    var newArr = [];
    for (var i = 0, l = arr.length; i < l; i++) {
        newArr.push(Math.abs(arr[i]-num));
        if (newArr[i] === 0) { //if a strict hit was found - immediate return
            num = arr[i];
            index = i;
            break;
        }
        if (newArr[i] > newArr[i-1]) { //if distance of the elements became bigger - return the closest hit
            num = arr[i-1];
            index = i-1;
            break;
        }
        if (i === l-1) { //if there're no close hits - return the last element
            i = arr[i] instanceof Array ? i - 1 : i; //probably a bad code, attempt to avoid nested arrays at the end of an input array
            index = i;
            num = arr[i];
            break; //added a break here since the iteration above can be changed
        }
    }
    return {
        num: num,
        index: index
    }
}