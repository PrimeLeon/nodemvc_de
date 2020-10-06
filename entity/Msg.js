class Msg {
    state;
    data;
    /**
     * @brief 请求信息类
     * @param {object} state 请求状态
     * @example {
        state: {
            errcode: '<entity>-<service><code>',
            errmsg: 'none'
        },
        data: {}
    };
     * @param {object} data 
     */
    constructor(state, data) {
        this.state = state;
        this.data = data;
    }
}

module.exports = Msg;