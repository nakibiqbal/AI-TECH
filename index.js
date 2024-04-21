// navbar start

var iconNav = document.querySelector('.iconNav');
var iconNavCross = document.querySelector('.iconNavCross');

var innerNav = document.querySelector('.innerNav');

iconNav.addEventListener('click', () => {
    innerNav.classList.remove('innerNav');
    innerNav.classList.add('activeNav')
})
iconNavCross.addEventListener('click', () => {
    innerNav.classList.remove('activeNav');
    innerNav.classList.add('innerNav');
})


// navbar end



gsap.from(
    '.stagger' , {
        x: -200,
        opacity: 0,
        stagger : 0.5,
        duration: 2
    }
)

gsap.from(
    '.scale' , {
        opacity: 0,
        transform: 'scale(0)',
        duration: 2
    }
)


gsap.from(
    '.links' , {
        duration: 2,
        opacity: 0,
        stagger: 0.6
    }
)