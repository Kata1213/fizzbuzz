module.exports = function fizzBuzz(inputs) {
    // console.log("Debug Info");
    // return 'Hello World!';

    var array_number=[...Array(inputs).keys()];
    console.log( array_number.map(function (value) {
        return fizzzbuzzz(value);
    }))
};


function fizzzbuzzz(input) {
    return  input.filter(function (value) {
        return validateInput(value);
    }).map(function (value) {
        return simpleNumberFizzBuzz(value);
    })
}

function validateInput(value) {
    return !isNaN(value);
}




function simpleNumberFizzBuzz(value) {
    var result=[];
    result+=isFizz(value);
    result+=isBuzz(value);
    result+=isWhizz(value);
    return result;
}

function isFizz(value) {
    return value % 3 ===0?"Fizz":null;
}

function isBuzz(value) {
    return value % 5 ===0?"Buzz":null;
}

function isWhizz(value) {
    return value % 7 ===0?"Whizz":null;
}

