/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//Selection of all the sections
let allsections = document.querySelectorAll('section');
// build the navigation bar
let navList = document.getElementById('navbar__list');
//Create a Document Fragment to append created nav items to it 
let docFrag = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//Loop on the sections list created using forEach
allsections.forEach(section =>
{
    // create  list elements
    let myList = document.createElement('li');
    // create hyper link 
    let myLink = document.createElement('a');
    //get the value of each section’s data-nav attribute
    let secIndex = section.getAttribute('data-nav');
    //use the text in data-nav to create the text inside each anchor
    let nodeTxt = document.createTextNode(secIndex);
    //Append each text as a child to the hyper links created
    myLink.appendChild(nodeTxt);
    //Append anchor <a> element as a child to list items
    myList.appendChild(myLink);
    //Append each nav item as a child to the previously created Document Fragment
    docFrag.appendChild(myList);
    //Use a click event listener on the nav menu links to scroll smooth to the section isntead of jumping to it
    myLink.addEventListener('click',function()
    {section.scrollIntoView({behavior:'smooth'});
    });



});
//after closing the loop append the filled Document Fragment to the unordered list
navList.appendChild(docFrag);



// Add class 'active' to section when near top of viewport
//Use a scroll event listener window.addEventListener to detect the section inside the viewport (on screen) while scrolling. 

window.addEventListener("scroll", function()
{
    //Loop on the sections list using forEach
    allsections.forEach(function(active)
    {
        //detect the section inside the viewport (on screen) while scrolling. 

        if (active.getBoundingClientRect().top>= 0 && active.getBoundingClientRect().top <= window.innerHeight)
        {
            //add the  active class for the intersection section 
            active.classList.add("your-active-class");
            
        }
        else
        {
            //remove the active class from each other sections
            active.classList.remove("your-active-class");
            
        }
    }
    );
});



