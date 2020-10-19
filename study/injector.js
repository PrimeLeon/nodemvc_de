class Notebook {
    bookName;
    constructor(bookName) {
        this.bookName = bookName;
    }
    toString() {
        return `${this.bookName}`;
    }
}
class Pencil {
    pencilName;
    constructor(pencilName) {
        this.pencilName = pencilName;
    }
    toString() {
        return `${this.pencilName}`;
    }
}

class Student {
    studentName;
    constructor(studentName) {
        this.studentName = studentName;
    }
    write(notebook, pencil) {
        if (!notebook || !pencil) {
            throw new Error('Dependence not provided');
        }
        console.dir("writing");
        console.dir(notebook);
        console.dir(pencil);
        return `I have ${notebook.toString()} and ${pencil.toString()}`;
    }
}

const injector = {
    dependences: {},
    register: function (key, value) {
        this.dependences[key] = value;
    },
    resolve: function (dep, func, scope) {
        let paramsNames = this.getParamNames(func);
        let params = [];
        for (let i = 0; i < paramsNames.length; i++) {
            const element = paramsNames[i];
            let depen = this.dependencies[element] || deps[i]
            if (depen) {
                params.push(depen)
            } else {
                throw new Error('缺失的依赖：' + element)
            }
        }
    },
    getParamNames: function (func) { // 获取方法的参数名字
        let paramNames = func.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1]
        paramNames = paramNames.replace(/ /g, '')
        paramNames = paramNames.split(',')
        return paramNames // Array
      }
}

injector.register('notebook', new Notebook('C++'));

// TODO: 未完成依赖注入的实现,不明白原理
let pencil = new Pencil('Deli');
let student = new Student();
studentwrite = injector.resolve([, pencil], student.write, student);
console.dir(studentwrite);