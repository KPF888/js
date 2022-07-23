function animate(obj, target, callback) {
    //如果一直点击按钮就会一直加速
    //解决方法是每次调用函数都先清除之前这个对象的定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        //步长必须写在定时器内部 因为每一步都要重新计算
        //需要进行一步向上取整  因为最后会出现步长等于0的情况
        //如果是倒退时 step为负数 此时应该向下取整
        var step = (target - obj.offsetLeft) / 10;
        step = step < 0 ? Math.floor(step) : Math.ceil(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);

            //结束后执行回调函数
            if (callback) {
                callback();
            }

            obj.timer = null;//加了这一句才算真正停下来
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}