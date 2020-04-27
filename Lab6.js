function max(a,b) {
    if (a>b){
            return a;
    }
    else{
        return b;
    }

}

function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

console.log("Expected output of max(20,10) is 20 and  " +
    myFunctionTest(20, max(10,20)));

function maxOfThree(a,b,c) {
    if (a>b){
        if (a>c){
            return a;
        }else {
            return c;
        }
    }
    else{
        if (b>c){
            return b;
        }else {
            return c;
        }

    }

}

console.log("Expected output of maxOfThree(20,10, 5) is 20 and  " +
    myFunctionTest(20, maxOfThree( 20, 10, 5) ));

function isVowel(c) {
    if (c==='a' || c==='e' || c==='i'||c==='o'||c==='u'){
        return true;
    }else {
        return false;
    }

}

console.log("Expected output of isVowel('a') is true and  " +
    myFunctionTest(true, isVowel('a') ));

function sum(array) {
    return array.reduce(function (prevValue, elem, i, array) {
                return prevValue + elem;
    }, 0)
}

let array = [5,4,3,2,1];
console.log("Expected output of sum() is 15 and  " +
    myFunctionTest(15, sum(array) ));


function multiply(array) {
    return array.reduce(function (prevValue, elem, i, array) {
        return prevValue * elem;
    }, 1)
}

console.log("Expected output of multiply is 120 and  " +
    myFunctionTest(120, multiply(array) ));

function reverse(array) {
    return array.reverse();
}

function findLongestWord(array) {
    let max=0;
    let longestWord = array[0];
    for (let i=0; i<array.length;i++){
        if (array[i].length>max){
            max=array[i].length;
            longestWord = array[i];
        }
    }
    return longestWord;
}

function filterLongWords(array, min) {
        return array.filter(function(elem, i, array){ return elem > min;});
}


const a = [1,3,5,3,3];
const b = a.map(function(elem, i, array) {
    return elem *10;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
    return elem === 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
    return prevValue * elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);

/*Comment assignment didn't take long , however i learn how to define function expressions and function declarations
, i encountered a problem with some */

