window.onload = function() {
    document.addEventListener('click', documentActions);
    
    //Actions 
    function documentActions(e) {
        const targetElement = e.target;
        if (targetElement.classList.contains('search-form__icon')) {
            document.querySelector('.search-form').classList.toggle('_active');
        } else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
            document.querySelector('.search-form').classList.remove('_active')
        }
    }
}

//Transform into vanilla JS 
$(document).ready(function() {
    $('.icon-menu').click(function(event){
        $('.icon-menu, .menu__body').toggleClass('_active');
        $('body').toggleClass('lock')
    });
});


//Fixed header
$(document).ready(function() {
    const headerOffSet = $('.header').offset().top;
    
    $(window).scroll(function() {
        const scrolled = $(this).scrollTop();
        
        if (scrolled > headerOffSet) {
            $('.wrapper').addClass('wrapper-fixed')
            // $('.header__body').addClass('header__body-fixed')
        } else if ( scrolled <= headerOffSet) {
            $('.wrapper').removeClass('wrapper-fixed')
            // $('.header__body').removeClass('header__body-fixed')
        }
    })
}) 







