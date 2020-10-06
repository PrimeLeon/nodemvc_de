const Msg = require('../entity/Msg.js');

let t1 = {
    age: 18
};

// 使用透明包装器包装的t1对象
let t1proxy = new Proxy(t1, {});

t1proxy.name = "yunhan";
console.log(`proxy: ${t1proxy.name}`);
console.log(`target: ${t1.name}`);

let numbers = [1, 2, 3];
numbers = new Proxy(numbers, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return -1;
        }
    }
});

for (let prop in numbers) {
    console.log(`key: ${prop}`);
}
console.log(numbers[123]);

let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós'
};

dictionary = new Proxy(dictionary,{
    get(dict, phrase){
        if (phrase in dict){
            return dict[phrase];
        }else{
            return phrase;
        }
    }
})

// 不在翻译词典中
console.log(dictionary['hi']);
// 在翻译词典中
console.log(dictionary['Hello']);