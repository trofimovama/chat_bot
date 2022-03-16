const multipleArgumentsFunc = (...arguments) => {
    arguments.forEach(element => {
        console.log(`${element} is ${typeof(element)}`);
    })
};

const namedParametersFunc = (a, b, c) => {
    const result = [a, b, c];
    result.forEach(elem => {
        console.log(`${elem} is ${typeof(elem)}`)
    })
};

const unnamedTwoParamsFunc = (argOne, argTwo, ...arguments) => {
   console.log(argOne,argTwo);
    multipleArgumentsFunc(...arguments);
};

const unnamedThreeParamsFunc = (argOne, argTwo, argThree) => {
    namedParametersFunc(argOne, argTwo, argThree);
}

multipleArgumentsFunc('Boom', 2, [1,2,3]);
namedParametersFunc(3, 'Masha', true);
unnamedTwoParamsFunc('And', 'still', 'I', 'rise');
unnamedThreeParamsFunc(1, '100', false);
