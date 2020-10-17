const regex_isnumletterOnly = new RegExp('[^a-z0-9A-Z_]');
const regex_isnumOnly = new RegExp('[^0-9_]');
// TODO: 手机正则
const regex_isphone = new RegExp('^1[0-9]{10}$');
const regex_isemail = new RegExp('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$');

const numletterFilter = {
    regex_isnumletterOnly,
    isLegal(string) {
        let is = regex_isnumletterOnly.test(string);
        return is;
    },
    excu(string) {
        return string.replace(regex_isnumletterOnly, '');
    }
}

const numFilter = {
    regex_isnumOnly,
    isLegal(string) {
        let is = regex_isnumOnly.test(string);
        return is;
    },
    excu(string) {
        return string.replace(regex_isphone, '');
    }
}

const phoneFilter = {
    regex_isphone,
    isLegal(string) {
        let is = regex_isphone.test(string);
        return is;
    },
    excu(string) {
        return string.replace(regex_isphone, '');
    }
}

const emailFilter = {
    regex_isemail,
    isLegal(string) {
        let is = regex_isemail.test(string);
        return is;
    },
    excu(string) {
        return string.replace(regex_isemail, '');
    }
}

/**
 * 为什么多次regex返回结果不同 原因是在于(regex('/something/','g'))全局匹配
 * @result https://stackoverflow.com/questions/1520800/why-does-a-regexp-with-global-flag-give-wrong-results
 */
// const testfo = ()=>{
//     for (let i = 0; i < 100000; i++) {
//         let res = numletterFilter.isLegal("helloWord!!#@!()$");
//         console.log(res);
//     }
// }
// testfo();

module.exports = {
    numletterFilter,
    numFilter,
    phoneFilter,
    emailFilter
}