// bom.js
// 1. 什么是bom：bom是浏览器对象模型，js可以通过bom操作浏览器窗口
if (typeof window !== "undefined") {
    console.log("当前环境是浏览器");

    // 2. window 对象：浏览器中的全局顶级对象
    console.log(window, "window对象");

    // 3. alert 弹窗（示例代码，取消注释可运行）
    // alert("这是个提示框");

    // 4. location 对象：获取/操作浏览器地址信息
    console.log(location, "location对象");
    console.log(location.href, "当前页面的地址");

    // 5. navigator 对象：获取浏览器/设备信息
    console.log(navigator, "navigator对象");
    console.log(navigator.userAgent, "浏览器信息");

    // 6. setTimeout：延迟执行（10000毫秒 = 10秒）
    setTimeout(() => {
        console.log("111111秒后执行"); // 截图中写的111111秒，实际是10秒，按截图还原
    }, 10000);

    // 7. setInterval：循环执行 + clearInterval：清除循环
    let count = 0;
    const timer = setInterval(() => {
        count++;
        console.log("每1秒执行一次");

        // 执行3次后停止循环
        if (count === 3) {
            clearInterval(timer);
        }
    }, 1000);

} else {
    // 非浏览器环境提示
    console.log("bom.js代码需要在浏览器环境中执行");
}