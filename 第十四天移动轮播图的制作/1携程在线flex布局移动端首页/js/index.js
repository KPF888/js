window.addEventListener('DOMContentLoaded', function () {
    //给局部导航栏每个图片地址
    var nav_imgs = this.document.querySelector('.local_nav').querySelectorAll('a');
    for (var i = 0; i < nav_imgs.length; i++) {
        nav_imgs[i].children[0].style.backgroundPosition = '0 ' + -32 * i + 'px';
    }

    //测导航栏图片给地址
    var subnav_icons = this.document.getElementsByClassName('subnav_icon');
    for (var i = 0; i < subnav_icons.length; i++) {
        subnav_icons[i].style.backgroundPosition = '0 ' + -28 * i + 'px';
    }
})