function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return namedFunction = () => {
        console.log('Returns a function')
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('Anonymous')
    }
}