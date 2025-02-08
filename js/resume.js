// Experience section KnowMore Script

document.getElementById("exprdmore").addEventListener("click",myreadmorefunc);

function myreadmorefunc()
{
    document.getElementById ("expreadmorecntnt").classList.toggle('showMe');
    
    document.getElementById("exprdmore").style.display="none";

}

// Experience section KnowMore Script

document.getElementById("exprdmore1").addEventListener("click",myreadmorefunc1);

function myreadmorefunc1()
{
    document.getElementById ("expreadmorecntnt1").classList.toggle('showMe');
    
    document.getElementById("exprdmore1").style.display="none";

}

// Experience section KnowMore Script

document.getElementById("exprdmore2").addEventListener("click",myreadmorefunc2);

function myreadmorefunc2()
{
    document.getElementById ("expreadmorecntnt2").classList.toggle('showMe');
    
    document.getElementById("exprdmore2").style.display="none";

}






// Floating cursor for move to top 


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
