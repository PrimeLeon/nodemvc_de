const illegalFilterHandler = {
    regex_numletters = new RegExp('[^a-z0-9A-Z_]', 'g'),
    IF(string) {
        // TODO: 正则消除非法输入 未完成
        let res = string.replace(this.regex_numletters, '');
        return res;
    },
    hasIStr(string) {
        // TODO: 检测是否有非法输入 未完成

    },
    /**
     * @brief 拦截get操作
     * @param {object} target 目标对象
     * @param {string} key 键
     */
    get(target, key) {
        return this.IF(target[key]);
    }
}
let uncheckString = "7v8$016q)*&@#!qjn^dda4;!@";
illegalFilterHandler.IF(uncheckString);

const privateHandler = {
    // TODO: 未完成
    get(target,key){
        if (key.startsWith('_')){
            throw new Error('Access denied');
        }
    }
};

module.exports = {
    illegalFilterHandler
}