class Errmsg{
    errcode;
    errmsg;
    constructor(obj){
        this.errcode = obj.errcode ?? -1;
        this.errmsg = obj.errmsg ?? 'none';
    }
}

module.exports = {
    Errmsg
}

let emsg = new Errmsg();