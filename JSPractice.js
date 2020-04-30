function reverseArray(array) {
let array2 = [];

for (let i=array.length-1;i>=0;i--){
    array2.push(array[i]);
}

return array2;
}

function reverseArrayUsingUnshift(array) {
    let array2 = [];

    array.forEach(e=>array2.unshift(e));

    return array2;
}

function reverseArrayInPlace(array){

    for (let i=0,j=array.length-1;i<j;i++,j--){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;


}

function deepEqual(obj1,obj2){
    if (obj1 === obj2) {return true; }

   let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length)
        return false;//not the same nr of keys
    if (obj1Keys.join('') !== obj2Keys.join(''))
        return false;//different keys

    for (let i=0; i<obj1Keys.length; i++){
        if (typeof obj1Keys[i] == Object){
            if (!(typeof obj2Keys[i]==Object)) {
                return false; // one key is an object the other is not
            }else{
                if (deepEqual(obj1[obj1Keys[i]], obj2[obj2Keys[i]]) === false){
                    return false;
                }
            }
        }


    }

    return true;



}

console.log(reverseArray(["A", "B", "C"]));

console.log("UNSHIFT="+reverseArrayUsingUnshift(["A", "B", "C"]));

console.log("INPLACE="+reverseArrayInPlace(["A", "B", "C"]));


function arrayToList(arr) {
    let retVal = {
        rest : null

    };

    for (let i = 0; i < arr.length; i++) {

        if (retVal.rest === null) {
            retVal.value = arr[i];
            retVal.rest = {

                rest : null
            };
        } else {
            let counter = retVal;
            while (counter.rest !== null) {
                counter = counter.rest;
            }
            counter.value = arr[i];
            counter.rest = {

                rest : null
            };

        }

    }

    return retVal;

}

function listToArray(list) {

    let arr = [];

    while (list !== null) {
        if (list.value !== undefined)
            arr.push(list.value);
        list = list.rest;
    }

    return arr;

}


function prepend(element, list) {
    return {
        value : element,
        rest : list
    };

}


function nth(list, index) {
    return listToArray(list)[index];

}

function nthNextMethod(list, index) {
    while (list !== null) {
        if (list.value !== undefined) {

            if (index-- === 0) {
                return list.value;
            }
        }
        list = list.rest;

    }

}

function recursiveNth(list, index) {

    if (index === 0)
        return list.value;

    return recursiveNth(list.rest, --index);

}

console.log(recursiveNth(arrayToList([ 10, 20, 30 ]), 1));
console.log(nth(arrayToList([ 10, 20, 30 ]), 1));
console.log(nthNextMethod(arrayToList([ 10, 20, 30 ]), 1));