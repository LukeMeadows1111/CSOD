const nav = document.querySelector('nav');
const navlist = document.querySelectorAll('.navlist a');
const reviewTickets = document.querySelector('.cards-outer')
const buttons = document.querySelectorAll('.arrow')


function handleScroll(e){
    e.preventDefault()
    window.scrollTo(0, (document.getElementById(e.target.dataset.link).offsetTop) - window.innerHeight * 0.18)
}

navlist.forEach(nav => nav.addEventListener('click', handleScroll));

function scrollReviews(e){
   if (e.target.dataset.scroll === 'forward'){

       reviewTickets.scrollLeft += 200;
   } else {
    reviewTickets.scrollLeft -= 200;
   }
    
}

buttons.forEach(button => button.addEventListener('mousedown', scrollReviews))
