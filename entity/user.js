class User {
    #id;
    #username;
    #password;
    #email;
    #is_vip;
    #is_activate;
    #coin;
    #exp;

    /**
     * @obj {jsonstr} 使用一个json字符串对user进行初始化
     */
    constructor() {

    }
    get getId() {
        return this.id;
    }
    get getUsername() {
        return this.username;
    }
    get gePassword() {
        return this.password;
    }
    get getPhone() {
        return this.phone;
    }
    get getEmail() {
        return this.email;
    }
    get getIs_vip() {
        return this.email;
    }
    get getIs_activate() {
        return this.is_activate;
    }
    get getCoin() {
        return this.coin;
    }
    get getExp() {
        return this.exp;
    }
    set setUsername(name){
        this.name = name;
    }
    toString(){}
}