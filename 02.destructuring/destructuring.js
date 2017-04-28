console.log("【变量的解构赋值】：\n");

console.log("\n数组的解构：\n");

{
    let [a, b, c] = [1, 2, 3];
    console.log(a);
}

{
    let [foo, [[bar], baz]] = [1, [[2], 3]];
    console.log(foo);
    console.log(bar);
    console.log(baz);
}

{
    let [ , , third] = ["foo", "bar", "baz"];
    console.log(third);
}

{
    let [x, , y] = [1, 2, 3];
    console.log(x);
    console.log(y);
}

{
    let [head, ...tail] = [1, 2, 3, 4];
    console.log(head);
    console.log(tail);
}

{
    let [q, w, ...e] = ['a'];
    console.log(q);
    console.log(w);
    console.log(e);
}


console.log("\n默认值：\n");

{
    let [foo = true] = [];
    console.log(foo);
}


console.log("\n对象：\n");

{
    let { foo, bar, baz } = { foo: "aaa", bar: "bbb" };
    console.log(foo);
    console.log(bar);
    console.log(baz);
}

{
    var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
    console.log(baz);
    // console.log(foo); error
}

console.log("\n字符串\n");

{
    const [a, b, c, d, e] = 'hello';
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
}

{
    let {length: len} = 'hello';
    console.log(len);
}


console.log("\n函数\n");

{
    function add([x, y]){
        return x + y;
    }

    console.log(add([1, 2]));
}

{
    [[1, 2], [3, 4]].map(([a, b]) => console.log(a + b));
}


console.log("\n用途\n");

// 交换变量的值
{
    let x = 1;
    let y = 2;

    [x, y] = [y, x];
}

// 从函数返回多个值

{
    function example() {
        return [1, 2, 3];
    }

    let [a, b, c] = example();
}

{
    function example() {
        return {
            foo: 1,
            bar: 2
        };
    }

    let { foo, bar } = example();
}

// 函数参数的定义

{
    function f([x, y, z]) { }
    f([1, 2, 3]);
}

{
    function f({x, y, z}) { }
    f({z: 3, y: 2, x: 1});
}

// 提取JSON数据

{
    let jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
    };

    let { id, status, data: number } = jsonData;

    console.log(id, status, number);
}

// 函数参数的默认值

{
    function f(url, { async = true, beforeSend = function () {}, cache = true, complete = function () {}, crossDomain = false, global = true }) {
        console.log(async);
    };

    f("xx", {async: false});
}


// 遍历Map结构


{
    var map = new Map();
    map.set('first', 'hello');
    map.set('second', 'world');

    for (let [key, value] of map) {
        console.log(key + " is " + value);
    }

    // 获取键名
    for (let [key] of map) {
        console.log(key);
    }

    // 获取键值
    for (let [,value] of map) {
        console.log(value);
    }
}


// 输入模块的指定方法

{
    // const { SourceMapConsumer, SourceNode } = require("source-map");
}
