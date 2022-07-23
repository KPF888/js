window.addEventListener('DOMContentLoaded', function () {
    //鼠标经过预览图时黄色小图片跟随鼠标
    var preview_img = document.querySelector('.preview_img');
    var mask = this.document.querySelector('.mask');
    var big = this.document.querySelector('.big');
    var big_img = big.children[0];

    preview_img.addEventListener('mouseover', function () {
        // 显示小黄图 显示大图
        mask.style.display = 'block';
        big.style.display = 'block';
    })

    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })

    preview_img.addEventListener('mousemove', function (e) {

        //先得到鼠标到边框的距离
        var x = e.pageX - preview_img.offsetLeft;
        var y = e.pageY - preview_img.offsetTop;

        // 让小黄图的上和左分别等于x和y
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }

        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';

        //移动大图里的图片  大图移动的距离 = 小黄图移动的距离/小黄图移动的最大距离 * 大图的最大移动距离
        var bigMax = big_img.offsetWidth - big.offsetWidth;
        var bigMoveX = (maskX / maskMax) * bigMax;
        var bigMoveY = (maskY / maskMax) * bigMax;
        big_img.style.left = -bigMoveX + 'px';
        big_img.style.top = -bigMoveY + 'px';
    })
})
