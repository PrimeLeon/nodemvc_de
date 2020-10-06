const regex_numletterOnly = new RegExp('[^a-z0-9A-Z_]');

const numletterFilter = {
    regex_numletterOnly,
    isLegal(string) {
        let is = regex_numletterOnly.test(string);
        return is;
    },
    excu(string) {
        return string.replace(regex_numletterOnly, '');
    }
}

/**
 * 为什么多次regex返回结果不同 原因是在于(regex('/something/','g'))全局匹配
 * @result https://stackoverflow.com/questions/1520800/why-does-a-regexp-with-global-flag-give-wrong-results
 */
const testfo = ()=>{
    for (let i = 0; i < 100000; i++) {
        let res = numletterFilter.isLegal("helloWord!!#@!()$");
        console.log(res);
    }
}
testfo();

module.exports = {
    numletterFilter
}