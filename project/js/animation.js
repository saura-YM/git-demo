function animation(obj, timer, callback) {
    clearInterval(obj.mm)
    obj.mm = setInterval(function () {
        // 步长=（目标值-现在的位置）/10
        let step = (timer - obj.offsetLeft) / 10;
        step = step < 0 ? Math.floor(step) : Math.ceil(step);
        if (obj.offsetLeft == timer) {
            clearInterval(obj.mm)
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
        // window.scroll(0, obj.pageYOffset + step);
    }, 10)
}