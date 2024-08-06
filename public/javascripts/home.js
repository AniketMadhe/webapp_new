var circle = document.querySelector(".circle");
var media = document.querySelector(".media");
var git = document.querySelector(".git");
var LinkedIn = document.querySelector(".LinkedIn");
var Instagram = document.querySelector(".Instagram");
const imgElement = document.getElementById('d1');
var main = document.querySelector(".main");
var cartImage = document.getElementById("cartImage");

main.addEventListener("mousemove", function(dets) {
    gsap.to(circle, {
        x: (dets.clientX),
        y: (dets.clientY),
        opacity: 100
    });
});

media.addEventListener("click", function() {
    window.location.href = 'https://github.com/AniketMadhe';
});
LinkedIn.addEventListener("click", function() {
    window.location.href = 'https://www.linkedin.com/in/aniket-madhe-1bb4a5281';
});
Instagram.addEventListener("click", function() {
    window.location.href = 'https://www.instagram.com/pubgboyaniket?igsh=Nmh4cXM1a3cyMm4y';
});

var toggle = true;
var toggle2 = true;
var toggle3 = true;
var toggle4 = true;
var clics = 0;
let bookName = "";
let authorName = "";
let bookName2 = "";
let authorName2 = "";
let bookName3 = "";
let authorName3 = "";
let bookName4 = "";
let authorName4 = "";



document.getElementById("shopC").addEventListener("click", function() {
    if (toggle) {
        clics += 1;
        shopC.src = "/images/pngTree2.png";
        bookName = "Advanced Java";
        authorName = "Openstax";
        document.getElementById("in1").value=bookName;
        document.getElementById("in2").value=authorName;
    } else {
        clics -= 1;
        shopC.src = "/images/—Pngtree—add shopping cart icon_4436011.png";
        bookName = "";
        authorName = "";
        document.getElementById("in1").value=bookName;
        document.getElementById("in2").value=authorName;
    }
    toggle = !toggle;
    console.log(clics);
    cartImageSwitch();
    
});

document.getElementById("shopC2").addEventListener("click", function() {
    if (toggle2) {
        clics += 1;
        shopC2.src = "/images/pngTree2.png";
        bookName2 = "Artificial Intelligence ";
        authorName2 = "Openstax";
        document.getElementById("in3").value=bookName2;
        document.getElementById("in4").value=authorName2;
    } else {
        clics -= 1;
        shopC2.src = "/images/—Pngtree—add shopping cart icon_4436011.png";
        bookName2 = "";
        authorName2 = "";
        document.getElementById("in3").value=bookName2;
        document.getElementById("in4").value=authorName2;
    }
    toggle2 = !toggle2;
    console.log(clics);
    cartImageSwitch();
});

document.getElementById("shopC3").addEventListener("click", function() {
    if (toggle3) {
        clics += 1;
        shopC3.src = "/images/pngTree2.png";
        bookName3 = "Blockchain Technology ";
        authorName3 = "Openstax";
        document.getElementById("in5").value=bookName3;
        document.getElementById("in6").value=authorName3;
    } else {
        clics -= 1;
        shopC3.src = "/images/—Pngtree—add shopping cart icon_4436011.png";
        bookName3 = "";
        authorName3 = "";
        document.getElementById("in5").value=bookName3;
        document.getElementById("in6").value=authorName3;
    }
    toggle3 = !toggle3;
    console.log(clics);
    cartImageSwitch();
});

document.getElementById("shopC4").addEventListener("click", function() {
    if (toggle4) {
        clics += 1;
        shopC4.src = "/images/pngTree2.png";
        bookName4 = "Cloud Computing ";
        authorName4 = "Openstax";
        document.getElementById("in7").value=bookName4;
        document.getElementById("in8").value=authorName4;
    } else {
        clics -= 1;
        shopC4.src = "/images/—Pngtree—add shopping cart icon_4436011.png";
        bookName4 = "";
        authorName4 = "";
        document.getElementById("in7").value=bookName4;
        document.getElementById("in8").value=authorName4;
    }
    toggle4 = !toggle4;
    console.log(clics);
    cartImageSwitch();
});

function cartImageSwitch() {
    switch (clics) {
        case 0:
            cartImage.src = "/images/addCart.png";
            break;
        case 1:
            cartImage.src = "/images/addCart+1.png";
            break;
        case 2:
            cartImage.src = "/images/addCart+2.png";
            break;
        case 3:
            cartImage.src = "/images/addCart+3.png";
            break;
        case 4:
            cartImage.src = "/images/addCart+4.png";
            break;
    }
}

function submitForm() {
    document.getElementById("myForm").submit();
}





 

