// 🟢 1. JSON 对象转换为 JSON 字符串
const user = {
    name: 'zhangsan',
    age: 18,
    city: 'beijing'
};

console.log(user, "js 对象"); 
// 输出：{name: 'zhangsan', age: 18, city: 'beijing'} "js 对象"

// JSON.stringify(): 将 JS 对象序列化为 JSON 字符串
const jsonStr = JSON.stringify(user);
console.log(jsonStr, "json 字符串"); 
// 输出：{"name":"zhangsan","age":18,"city":"beijing"} "json 字符串"
console.log(typeof jsonStr, "json字符串类型"); 
// 输出：string "json字符串类型"

// 🔵 2. JSON 字符串转换回 JS 对象
// JSON.parse(): 将 JSON 字符串反序列化为 JS 对象
const obj = JSON.parse(jsonStr);
console.log(obj, "转回对象"); 
// 输出：{name: 'zhangsan', age: 18, city: 'beijing'} "转回对象"
console.log(typeof obj, "转回对象类型"); 
// 输出：object "转回对象类型"

// 转回对象后依然可以访问属性
console.log(obj.name, "对象中的name"); 
console.log(obj.age, "对象中的age");

// 🟠 3. JSON 也可以表示数组
const arr = ["apple", "banana", "orange"];
const arrJson = JSON.stringify(arr);
console.log(arr, "js数组"); 
console.log(arrJson, "json数组"); 

const newArr = JSON.parse(arrJson);
console.log(newArr, "转回数组"); 
// 输出：(3) ['apple', 'banana', 'orange'] "转回数组"

// 🔴 4. JSON 严格格式演示 (键名必须用双引号)
const json = '{"title": "jsjsjsj", "price": 666, "order": "adad"}';
console.log(json, "json字符串");
console.log(typeof json, "json字符串类型"); 

const obj2 = JSON.parse(json);
console.log(obj2, "转回对象");