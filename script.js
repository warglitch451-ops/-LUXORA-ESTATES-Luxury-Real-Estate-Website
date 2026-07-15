// ===============================
// LUXORA ESTATES SCRIPT.JS
// ===============================


// MOBILE NAVBAR

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if(menuToggle){

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuToggle.classList.toggle("open");

    });

}





// CLOSE MOBILE MENU AFTER CLICK


document.querySelectorAll(".nav-links a").forEach(link => {


    link.addEventListener("click", () => {


        if(navLinks){

            navLinks.classList.remove("active");

        }


    });


});








// NAVBAR SCROLL EFFECT


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {


    if(navbar){


        if(window.scrollY > 80){

            navbar.classList.add("scrolled");

        }

        else{

            navbar.classList.remove("scrolled");

        }


    }


});








// SCROLL REVEAL ANIMATION


const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},{

    threshold:0.15

});



revealElements.forEach(element=>{


    revealObserver.observe(element);


});








// IMAGE LOAD ANIMATION


const images = document.querySelectorAll("img");


images.forEach(image=>{


    image.addEventListener("load",()=>{


        image.classList.add("loaded");


    });


});








// PROPERTY CARD HOVER EFFECT


const propertyCards = document.querySelectorAll(".property-card");


propertyCards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{


        card.classList.add("hover");


    });



    card.addEventListener("mouseleave",()=>{


        card.classList.remove("hover");


    });



});








// CONTACT FORM MESSAGE


const forms = document.querySelectorAll("form");


forms.forEach(form=>{


    form.addEventListener("submit",(e)=>{


        e.preventDefault();



        alert("Thank you for contacting Luxora Estates. Our team will contact you soon.");



        form.reset();



    });


});








// CURRENT YEAR FOOTER


const year = document.querySelector(".copyright");


if(year){


    year.innerHTML = 
    `© ${new Date().getFullYear()} Luxora Estates. All Rights Reserved.`;


}








// BACK TO TOP BUTTON


const backTop = document.createElement("button");


backTop.innerHTML = "↑";


backTop.className = "back-top";



document.body.appendChild(backTop);





window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        backTop.classList.add("show");


    }


    else{


        backTop.classList.remove("show");


    }


});





backTop.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});








// SMOOTH PAGE LINKS


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


    anchor.addEventListener("click",(e)=>{


        const target = document.querySelector(anchor.getAttribute("href"));



        if(target){


            e.preventDefault();



            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});








// PROPERTY IMAGE PREVIEW


const galleryImages = document.querySelectorAll(".gallery-item img");


galleryImages.forEach(img=>{


    img.addEventListener("click",()=>{


        img.classList.toggle("zoom");


    });


});
