const header = document.querySelector('header')
// navbar

const scrollHeader = () => {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
}

window.onscroll = scrollHeader;

// smooth scrolling

$('#navbar a, .btn').on('click', function(event) {
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

