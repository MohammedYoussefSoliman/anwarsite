const header = document.querySelector('header');
const home = document.querySelector('.home');

// navbar

const scrollHeader = () => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 100) {
        header.classList.add('scrolled');
        home.classList.add('open');
      } else {
        header.classList.remove('scrolled');
        home.classList.remove('open');
      }
}

window.onscroll = scrollHeader;

// smooth scrolling

$('#navbar a, .home a').on('click', function(event) {
if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
    {
        scrollTop: $(hash).offset().top - 100
    },
    800
    );
}
});

