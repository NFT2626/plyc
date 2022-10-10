/* Token charts scripts with apache echarts */
/* First chart */
let chartDom = document.getElementById('chart1');
let myChart = echarts.init(chartDom);

/* First chart option object */
let option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}',
        backgroundColor: 'rgba(33,33,33,1)',
        borderRadius: 0,
        padding: 10,
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: "'Poppins', sans-serif",
            fontSize: 12,
        },
    },
    calculable: true,
    itemStyle: {
        normal: {
            shadowBlur: 5,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
    },
    series: [
        {
            name: 'Primary allocation',
            type: 'pie',
            radius: ['10%', '80%'],
            center: ['50%', '50%'],
            roseType: 'area',
            color: ['#FF0000', '#FF7800', '#FFEC00', '#00ABFF', '#00FF8D', '#0900FF', '#9E00FF', '#FF00BF', '#073F00'],
            label: {
                normal: {
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: 12,
                    color: '#fff',
                },
            },
            /* Dataset for chart */
            data: [
                { value: 90, name: 'Burn(97.5%)' },
                { value: 50, name: 'Presale(0.75%)' },
                { value: 25, name: 'Marketing(0.25%)' },
                { value: 70, name: 'Liquidity(0.50%)' },
                { value: 25, name: 'Airdrop(0.25%)' },
                { value: 25, name: 'Team(0.25%)' },
            ],
        },
    ],
};

option && myChart.setOption(option);

window.addEventListener('resize', () => {
    myChart.resize();
});

// HEADER SCROLL


// BURGER
$(".header__burger").click(function () {
    $("body").toggleClass("hidden");
    $(this).toggleClass("active");
});

// WINDOW SCROLL
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 150, 'linear');
    $(".header__burger").removeClass("active");
    $("body").removeClass("hidden");
});

// SHOW ANIMATION
AOS.init({ once: 'true' });


// SLIDER
let swiperOpts = {
    slidesPerView: 1,
    spaceBetween: 0,
    initialSlide: 0,
    autoHeight: true,
    navigation: {
        nextEl: '.roadmap__slider__next',
        prevEl: '.roadmap__slider__prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        998: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
},
    swiper = new Swiper(".roadmap__swiper", swiperOpts);

let destroy_slider = false;

$(document).ready(function () {
    if ($(window).width() <= 768 && !destroy_slider) {
        swiper.destroy();
        destroy_slider = true;
    } else {
        if (destroy_slider) {
            swiper = new Swiper(".roadmap__swiper", swiperOpts);
            destroy_slider = false;
        }
    }
});

$(window).resize(function () {
    if ($(window).width() <= 768 && !destroy_slider) {
        swiper.destroy();
        destroy_slider = true;
    } else {
        if (destroy_slider) {
            swiper = new Swiper(".roadmap__swiper", swiperOpts);
            destroy_slider = false;
        }
    }
});





// PARALLAX
const banner_parallax = document.querySelectorAll('.banner__parallax');

let y = 0, x = 0, endX = 0, endY = 0

onmousemove = (e) => {
    endX = innerWidth / 2 - e.x
    endY = innerHeight / 2 - e.y
}

function parallax() {
    x += (endX - x) / 20
    y += (endY - y) / 20
    banner_parallax.forEach(item => {
        item.style.transform = `translate(${-x / 30}px, ${-y / 30}px)`
    })
    requestAnimationFrame(parallax)
}

requestAnimationFrame(parallax)


function countdown() {
var countDownDate = new Date("December 31, 2021 19:00 UTC").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "LAUNCHED";
  }
}, 1000);
}

countdown();

/* Copy to clipboard on click */
const copyadr = (text) => navigator.clipboard.writeText(text);

const copyButton = document.querySelector('.app__address-copy');
const address = document.querySelector('.app__address-text');

copyButton.addEventListener('click', () => {
    const valueToCopy = address.textContent;
    copyadr(valueToCopy);
    alert('Address Copied');
});

