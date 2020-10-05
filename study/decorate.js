function slow(num) {
    console.log(`Called with ${num}`);
    return num;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function (num) {
        if (cache.has(num)) {
            console.log(`${num} : 缓存中取数据!`);
            return cache.get(num);
        }
        let result = func(num);
        cache.set(num, result);
        return result;
    }
}


let arr = [1,2,3,4,5,6,7,7,8,8,9,4,3,2,1,0];

slow = cachingDecorator(slow);

arr.forEach(element => {
    slow(element);
});
