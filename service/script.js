let forms = document.querySelector('.forms');
let animationTriggered = false;

window.addEventListener('scroll', function() {
    var scrollHeight = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollHeight >= 500 && !animationTriggered) {
        console.log('Scroll height is 500px or more');
        forms.style.animation = 'goUp 1s normal';
        animationTriggered = true;
    } else if (scrollHeight < 500 && animationTriggered) {
        forms.style.animation = 'none';
        animationTriggered = false;
    }
});