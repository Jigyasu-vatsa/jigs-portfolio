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

document.getElementById("exprdmore6").addEventListener("click",myreadmorefunc6);

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





document.getElementById('suggestionForm').addEventListener('submit', function(event) {
    // 1. Prevent the default form submission (which causes the 404)
    event.preventDefault(); 

    const form = event.target;
    const messageArea = document.getElementById('formMessage');
    
    // 2. Create FormData object from the form
    const formData = new FormData(form);

    // 3. **IMPORTANT:** Since GitHub Pages has no backend, you must post to a service.
    //    For this example, we'll assume you are posting to Formspree again, 
    //    but using fetch() instead of the <form> tag's action.
    const endpointUrl = 'https://formspree.io/f/YOUR_UNIQUE_FORM_ID'; 

    fetch(endpointUrl, {
        method: 'POST',
        body: formData,
        // mode: 'no-cors' might be necessary for some services, but try without first
    })
    .then(response => {
        // Formspree generally returns a 200/204 success on successful POST, 
        // but often in 'no-cors' mode, it looks like a success even if it failed.
        // You must check the service's documentation for the exact success condition.
        
        // For a simple setup, assume if fetch doesn't throw an error, it succeeded.
        messageArea.innerHTML = '<span style="color: green; font-weight: bold;">✅ Suggestion Submitted Successfully! Thank you.</span>';
        form.reset(); // Clear the form fields
    })
    .catch(error => {
        // This catches network errors or service-side failures.
        console.error('Submission Error:', error);
        messageArea.innerHTML = '<span style="color: red; font-weight: bold;">❌ Submission Failed. Please try again later or email us directly.</span>';
    });
});

