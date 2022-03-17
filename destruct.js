const multipleArgumentsFunc = (...arguments) => {
     arguments.forEach(element => {
          console.log(`${element} is ${typeof(element)}`);
     }) 
};

const unnamedParametersFunc = (objectOption) => {
    const  a = objectOption.a;
    const b = objectOption.b;
    const c = objectOption.c;
          for (let key in objectOption) {
            if(objectOption.hasOwnProperty(key)){
            console.log(`${objectOption[key]} is ${typeof(objectOption[key])}`)
          }
    }
}; 

const unnamedTwoParamsFunc = (argOne, argTwo, ...arguments) => {
   console.log(argOne,argTwo);
    multipleArgumentsFunc(...arguments);
};

const unnamedThreeParamsFunc = (values) => {
    const optionOne = values.optionOne;
    const optionTwo = values.optionTwo;
    const optionThree = values.optionThree;
    unnamedParametersFunc(values);
}

multipleArgumentsFunc('Boom', 2, [1,2,3]);
unnamedParametersFunc({a: 3, b:'Masha', c: true});
unnamedTwoParamsFunc('And', 'still', 'I', 'rise');
unnamedThreeParamsFunc(1, '100', false);
