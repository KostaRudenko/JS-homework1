let blocks = 3;

function funcSwitch(n) {
    for (let i = 1; i <= blocks; i++) {
        let str = 'switch(n) { case i: console.log(i, true); break; default: console.log(i, false); break;}';
        eval(str);
    }
    console.log('----')
}
console.time('time switch');
funcSwitch(1);
funcSwitch(2);
funcSwitch(3);
console.timeEnd('time switch');

function funcIf(n) {
    for (let i = 1; i <= blocks; i++) {
        let str = 'if (n === i) { console.log(i, true); } else { console.log(i, false);}';
        eval(str);
    }
    console.log('----')
}
console.time('time if');
funcIf(1);
funcIf(2);
funcIf(3);
console.timeEnd('time if');