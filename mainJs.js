let switchTime = (n) => {
    for (let i = 1; i <= n; i++) {
        switch (n) {
            case n:
                console.log(i);
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

//-----------------------

let ifTime = (n) => {
    for (let i = 1; i <= n; i++) {
        if (n === n) {
            console.log(i);
        }
    }
    console.log('---');
};
console.time('time if');
ifTime(1);
ifTime(2);
ifTime(3);
console.timeEnd('time if');