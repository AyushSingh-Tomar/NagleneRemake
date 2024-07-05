
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
      
       nav.classList.toggle('show-menu')
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')


const dropdownItems = document.querySelectorAll('.dropdown__item')


dropdownItems.forEach((item) =>{
    const dropdownButton = item.querySelector('.dropdown__button') 

    
    dropdownButton.addEventListener('click', () =>{
   
        const showDropdown = document.querySelector('.show-dropdown')
        
        
        toggleItem(item)

      
        if(showDropdown && showDropdown!== item){
            toggleItem(showDropdown)
        }
    })
})


const toggleItem = (item) =>{
  
    const dropdownContainer = item.querySelector('.dropdown__container')

   
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    } else{
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}


const mediaQuery = matchMedia('(min-width: 1118px)'),
      dropdownContainer = document.querySelectorAll('.dropdown__container')


const removeStyle = () =>{
   
    if(mediaQuery.matches){
       
        dropdownContainer.forEach((e) =>{
            e.removeAttribute('style')
        })

        
        dropdownItems.forEach((e) =>{
            e.classList.remove('show-dropdown')
        })
    }
}

addEventListener('resize', removeStyle)
// Hiding navbar from here
{
    const nav=document.querySelector(".header");
    nav.classList.add("nav--hidden");
    let lastScrollY=window.scrollY;
    window.addEventListener("scroll",()=>{
         if(lastScrollY<window.scrollY && window.scrollY){
          nav.classList.add("nav--hidden");
         }
         else{
            nav.classList.remove("nav--hidden");
         }
 lastScrollY=window.scrollY;
    });
   let scrollTimeout;

window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
        setTimeout(doSomething, 3000);
        
        console.log('User stopped scrolling');
    }, 200);
});
}

function doSomething() {
   nav.classList.add("nav--hidden");
}
