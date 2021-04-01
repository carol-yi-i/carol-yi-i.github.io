/* 导航点击 */
$(document).ready(function() { // ready 事件
    $("li>a").each(function(index) { //便利对象
        $(this).click(function() { //点击触发事件
            $("li>a").removeClass("other_color"); //删除当前元素的样式
            $("li>a").eq(index).addClass("other_color"); //添加当前元素的样式
        });
    });
});
/* 导航栏标题跟随 */
var $lias = $('li a'), // 导航
    $sections = $('.content'), // 模块
    $window = $(window),
    liLength = $lias.length - 1;

$window.on('scroll', function() {
    var scrollTop = $window.scrollTop(),
        len = liLength;

    for (; len > -1; len--) {
        var that = $sections.eq(len);
        if (scrollTop >= that.offset().top) {
            $lias.removeClass('other_color').eq(len).addClass('other_color');
            break;
        }
    }
});
/* 隐藏显示 */
$(document).ready(function() {
    $("#qq").hover(function() {
            $("#qq_qr").fadeToggle(300);
        }),
        $("#weixin").hover(function() {
            $("#weixin_qr").fadeToggle(300);
        });

});
/* 抖动 */

/* 轮播 */
var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 700,
    allowTouchMove: false,
    lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 3,
    },
    centeredSlides: true,
    spaceBetween: 50,
    slidesOffsetBefore: 40,
    loop: true,
    slidesPerView: 'auto',
    on: {
        slideChangeTransitionEnd: function() {
            this.slides.transition(this.params.autoplay.delay + this.params.speed).transform('translate3d(-60px, 0, 0)');
        },
        slideChangeTransitionStart: function() {
            this.slides.transition(this.params.speed).transform('translate3d(0, 0, 0)');
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<div class="' + className + '"><span></span><i></i></div>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
window.onresize = function() {
    swiper.update();
}