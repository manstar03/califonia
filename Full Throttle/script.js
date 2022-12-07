
/* Open the sidenav */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Hero Slider

var options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
    }
};

var carousel = document.querySelector('[data-carousel]');
var slides = document.getElementsByClassName('carousel-cell');
var flkty = new Flickity(carousel, options);

flkty.on('scroll', function () {
    flkty.slides.forEach(function (slide, i) {
        var image = slides[i];
        var x = (slide.target + flkty.x) * -1/3;
        image.style.backgroundPosition = x + 'px';
    });
});



// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}





// Button Tag with click
console.log($(window));
$(window).scroll( function(){
    $('.fadein').each( function(i){
        var bottom_of_element = $(this).offset().top + ($(this).outerHeight()/2);
        // var bottom_of_element = $(this).offset().top + 200);
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1'},1500);
        }
    });
});


// button
//ripple btn
const rippleBtn = document.getElementById("ripple");
let ripples = document.createElement("span");
let cleartimeout;

//if want this effect when clicked then just add click insted of mouseover event
rippleBtn.addEventListener("mouseover", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    this.appendChild(ripples);

    cleartimeout = setTimeout(() => {
        ripples.remove();
    }, 1000);
});

rippleBtn.addEventListener("mouseout", function () {
    ripples.remove(cleartimeout);
});




