//作业1
let homework1 = () => {
    let arr = [-4, -1, 0, 3, 10],
        arr2 = [];
    for (let i = 0; i <= 4; i++) {
        arr2[i] = arr[i] * arr[i];
    }
    for (var j = 0; j < arr2.length - 1; j++) {
        for (var i = 0; i < arr2.length - 1 - j; i++) {
            if (arr2[i] > arr2[i + 1]) {
                var temp = arr2[i];
                arr2[i] = arr2[i + 1];
                arr2[i + 1] = temp;
            }
        }
    }
    console.log(arr2)
}
homework1()
//作业2
class Father {
    constructor(name) {
        this.name = name;
        this.age = '42';
        this.height = '180';
    }
    getAge() {
        return this.age;
    }
    getHeight() {
        return this.height;
    }
}
class Son extends Father {
    constructor(name) {
        super(name);
        this.height = '182'
        this.age = '18';
    }
}
var father = new Father('李华')
console.log(father.name);
console.log(father.getAge());
console.log(father.getHeight());
var son = new Son('李明')
console.log(son.name);
console.log(son.getAge());
console.log(son.getHeight());
//作业3
//3.1
const set = new Set([2, 3, 7, 5, 2, 6, 9, 7, 0])
let max = set[0]
for (let item of set.keys()) {
    max = max > item ? max : item;
}
let judge = () => {
    var promise = new Promise(function (resolve, reject) {
        if (set.has(max)) {
            resolve('9已被成功删除');
        } else {
            reject('删除数据时出现错误')
        }
    });
    return promise;
}
judge().then(
    (message) => {
        console.log(message);
    },
    (message) => {
        console.log(message);
    }
)
//3.2
const map = new Map();
let sum = 0;
map.set('菜菜', 18).set('小困', 19).set('奎奎', 22).set('葵葵', 3);
for (let item of map.values()) {
    sum = sum + item
}
const promise = new Promise((resolve, reject) => {
    resolve(sum);
})
promise.then((message) => {
    console.log(message);
})
//作业4

let myPow = (x, n) => { let sum =1;
    for(let i = 1;i<=Math.abs(n);i++){
if(n>0)
       sum = sum*x;
if(n<0){
let m=1/x;
      sum = sum*m}
    }
    return sum;
};
let result1 = myPow(2, 10)
console.log(result1)
console.log(myPow(2, -2))