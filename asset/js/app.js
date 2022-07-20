var myBacktotop = document.getElementById("myBtn");

window.onscroll = function() {topFunction()};

function topFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        myBacktotop.style.display = "block";
    } else {
        myBacktotop.style.display = "none";
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function sub() {
    var validInput = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var input = document.getElementById('email').value;

    if(input.match(validInput)) {
        alert('You have Successfully Subscribe to our Newsletter, Stay Rocket...');
    }else {
        alert('Invalid Email Address, kindly enter a valid email address...')
    }
}