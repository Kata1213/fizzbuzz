function fizzBuzz(inputs) {
    // console.log("Debug Info");
    // return 'Hello World!';

    var array_number=[...Array(inputs).keys()];
    array_number.shift();
    var res =fizzzbuzzz(array_number);
    var resultt=res.join("");
    console.log(resultt);

};


function fizzzbuzzz(input) {
    var ress =input.filter(function (value) {
        return validateInput(value);
    }).map(function (value) {
        // console.log(simpleNumberFizzBuzz(value));
        return simpleNumberFizzBuzz(value);
    })

    return ress;
}

function validateInput(value) {
    return !isNaN(value);
}




function simpleNumberFizzBuzz(value) {
    var result=[];
    var flag=true;
    if(isFizz(value)){
        result+=isFizz(value);
        flag=false;
    }
    if(isBuzz(value)){
        result+=isBuzz(value);
        flag=false;
    }
    if(isWhizz(value)){
        result+=isWhizz(value);
        flag=false;
    }
    if(flag){
        result+=value;
    }
    // result+=isFizz(value);
    // result+=isBuzz(value);
    // result+=isWhizz(value);
    return result;
}

function isFizz(value) {
    return value % 3 ===0?"Fizz":null;
}

// console.log(isFizz(1)+ "test fizz");

function isBuzz(value) {
    return value % 5 ===0?"Buzz":null;
}

function isWhizz(value) {
    return value % 7 ===0?"Whizz":null;
}

module.exports =fizzBuzz;