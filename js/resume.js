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

// Experience section KnowMore Script

document.getElementById("exprdmore3").addEventListener("click",myreadmorefunc3);

function myreadmorefunc3()
{
    document.getElementById ("expreadmorecntnt3").classList.toggle('showMe');
    
    document.getElementById("exprdmore3").style.display="none";

}

// Experience section KnowMore Script

document.getElementById("exprdmore4").addEventListener("click",myreadmorefunc4);

function myreadmorefunc4()
{
    document.getElementById ("expreadmorecntnt4").classList.toggle('showMe');
    
    document.getElementById("exprdmore4").style.display="none";

}





// Experience section KnowMore Script

document.getElementById("exprdmore5").addEventListener("click",myreadmorefunc5);

function myreadmorefunc5()
{
    document.getElementById ("expreadmorecntnt5").classList.toggle('showMe');
    
    document.getElementById("exprdmore5").style.display="none";

}

// Experience section KnowMore Script

document.getElementById("exprdmore6").addEventListener("click",myreadmorefunc4);

function myreadmorefunc6()
{
    document.getElementById ("expreadmorecntnt6").classList.toggle('showMe');
    
    document.getElementById("exprdmore6").style.display="none";

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


