$(function () {
    //1.初始化轮播图设置自动轮播
    // 获得slider插件对象
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval: 2000//自动轮播周期，0则不自动播放，默认为0
    });
    // 初始化swiper的轮播图
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }
    });
});