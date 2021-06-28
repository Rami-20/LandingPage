# Landing page project
## Requirements:
- Navigation is built dynamically as an unordered list.
- It should be clear which section is being viewed while scrolling through the page.
- When clicking an item from the navigation menu, the link should scroll to the appropriate section.
## Language  Used:
- HTML5
- CSS3
- JavaScript

# Used Methods :
>Document.querySelectorAll();

>Document.getElementById();

>forEach();

>Document.createDocumentFragment();

>Document.createElement();

>Document.createTextNode();

>appendChild();

>getAttribute();

>scrollIntoView({'behavior':'smooth'});

>getBoundingClientRect();

>classList.remove();

>classList.add();

# Steps :
## Build the navigation list dynamically :
- link the javascript file to the html file
- Selection of all the sections by document.querySelectorAll()
- build the navigation bar by getElementById()
- Create a Document Fragment to append created nav items to it by createDocumentFragment()
- Loop on the sections list created using forEach
- create list elements
- create hyper link 
- get the value of each section’s data-nav attribute
- use the text in data-nav to create the text inside each anchor by document.createTextNode()
- Append each text as a child to the hyper links created
- Append anchor element as a child to list items
- Append each nav item as a child to the previously created Document Fragment
- Use a click event listener on the nav menu links to scroll smooth to the section isntead of jumping to it
- after closing the loop append the filled Document Fragment as a child to the unordered list 

## Modify CSS :
- put a space between list items by add padding
- change the crusor type to pointer
- change the background of list item when hover on it
- chnage the text align from right to left
## It should be clear which section is being viewed while scrolling through the page :
- Add class 'active' to section when near top of viewport
- Use a scroll event listener window.addEventListener to detect the section inside the viewport (on screen) while scrolling.
- Loop on the sections list using forEach
- detect the section inside the viewport (on screen) while scrolling by getBoundingClientRect()
- add the  active class for the intersection section 
- remove the active class from each other sections




