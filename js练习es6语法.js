class Human {
    constructor({ name, age }) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`My name is ${this.name}`);
    }
}
class Students extends Human {
    constructor(name, age, height, work, sex = 'nan') {
        super({ name, age });
        this.height = height;
        this.work = work;
    }
    greet1() {
        let w = this.work;
        if (w.startsWith('s')) {
            console.log(`${this.name} is a students`);
        } else {
            let error;
            error = 'error'.repeat(3);
            console.log(error);
        }
    }
}
let wangWu = new Students('wangwu', 15, 170, 'student');
let zhaoSi = new Students('zhaosi', 16, 175, 'docoter');
let Steven = new Students('steven', 17, 180, 'student');
let Rose = new Students('rose', 18, 185, 'teacher', 'nv');
let Jack = new Students('jack', 19, 190, 'police');

wangWu.greet();
Steven.greet1();

let sumheight = (...arr) => {
    let sum = 0;
    for (let val of arr) {
        sum += val;
    }
    return sum;
}
console.log(sumheight(wangWu.height, zhaoSi.height, Steven.height, Rose.height, Jack.height));

let Avgheigh = (...arr1) => {
    let sum = 0;
    arr1.forEach(val =>{
        sum+=val.height;
    })
    return sum / arr1.length;
}
console.log(Avgheigh(wangWu, zhaoSi, Steven, Rose, Jack));

function findd(...arr2) {
    let height;
    height = arr2.find(function (value) {
        return value.height < Avgheigh(wangWu.height, zhaoSi.height, Steven.height, Rose.height, Jack.height);
    })
    return height;
}

console.log(findd(wangWu, zhaoSi, Steven, Rose, Jack));

function findIndex1(...arr3) {
    num1 = arr3.findIndex(function (value) {
        return value.height < 180;
    })
    return num1;
}
console.log(findIndex1(wangWu, zhaoSi, Steven, Rose, Jack));

function includess(...arr4) {
    if (arr4.includes(17)) {
        console.log(`true`)
    } else {
        console.log(`false`)
    }
}
includess(wangWu.age, zhaoSi.age, Steven.age, Rose.age, Jack.age);

function promises(text) {
    let test = new Promise(function (resolve, reject) {
        setTimeout(() => { resolve(true) }, 3000);
    });

    return test;
}

promises(13).then(function (value) {
    if (value) {
        console.log('true1');
    } else {
        console.log('truefalse');
    }
}).catch(function (value) {
    console.log('false')
});
