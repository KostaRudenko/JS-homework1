let blocks = 3;

let switchTime = (n) => {
    for (let i = 1; i <= blocks; i++) {
        switch (n) {
            case i:
                console.log(i, true);
                break;
            default:
                console.log(i, false);
                break;
        }
    }
    console.log('---');
};
console.time('time switch');
switchTime(1);
switchTime(2);
switchTime(3);
console.timeEnd('time switch');

let ifTime = (n) => {
    for (let i = 1; i <= blocks; i++) {
        if (n === i) {
            console.log(i, true);
        } else {
            console.log(i, false);
        }
    }
    console.log('---');
};
console.time('time if');
ifTime(1);
ifTime(2);
ifTime(3);
console.timeEnd('time if');