var typed = new Typed('#element', {
    strings: ['Web Designer and...', 'Web Developer.'],
    typeSpeed: 70,
});
function visitPage(){
    window.open("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "_blank");
}
function togglePopup() { 
    const overlay = document.getElementById('popupOverlay'); 
    overlay.classList.toggle('show'); 
}
const headerEl = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if(window.scrollY > 200){
        headerEl.classList.add('nav-scrolled');
    }else if(window.scrollY <200)
        headerEl.classList.remove('nav-scrolled');

});
function checkthis(){
    window.open("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "_blank");
    }