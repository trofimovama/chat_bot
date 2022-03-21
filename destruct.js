const multipleArgumentsFunc = (...arguments) => {
     arguments.forEach(element => {
          console.log(`${element} is ${typeof(element)}`);
     }) 
};

const namedParametersFunc = ({a, b, c}) => {
    console.log(`${a} is ${typeof(a)}`);
    console.log(`${b} is ${typeof(b)}`);
    console.log(`${c} is ${typeof(c)}`);
}; 

const unnamedTwoParamsFunc = (argOne, argTwo, ...arguments) => {
   console.log(argOne,argTwo);
    multipleArgumentsFunc(...arguments);
};

const unnamedThreeParamsFunc = (a,b,c) => {
    namedParametersFunc({a, b, c});
}

multipleArgumentsFunc('Boom', 2, [1,2,3]);
namedParametersFunc({a: 3, b:'Masha', c: true});
unnamedTwoParamsFunc('And', 'still', 'I', 'rise');
unnamedThreeParamsFunc(1, '100', false);
