//TODO: Proxy实现不如直接使用函数封装简洁
const handler = require('./handler.js');

/**
 * @brief 使用Proxy过滤非法输入
 * @param {object} obj 需要包装的对象
 */
const illegalFilter = (obj) => {
    return new Proxy(obj, handler.illegalFilterHandler);
}