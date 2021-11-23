
function receivesAFunction(multiply){
    return multiply();
}

function returnsANamedFunction(){
return function namedfunction(){};
}

function returnsAnAnonymousFunction(){
    return function(){};
}