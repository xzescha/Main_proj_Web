menu_btn.addEventListener("click", function() {
    main_nav.classList.toggle("menu_is-open");
    hamburger.classList.toggle("hamburger-open");
    crest.classList.toggle("hamburger-open");
    crest.classList.toggle("hamburger-close");
  })
for_planj.addEventListener("click", function(){
  menu_a.classList.remove("menu_a_vis_twice");
  menu_a.classList.add("menu_a_vis");
})
for_planj_2.addEventListener("click", function(){
  menu_a_2.classList.remove("menu_a_vis_twice");
  menu_a_2.classList.add("menu_a_vis");
})
for_planj_3.addEventListener("click", function(){
  menu_a_3.classList.remove("menu_a_vis_twice");
  menu_a_3.classList.add("menu_a_vis");
})
for_planj_4.addEventListener("click", function(){
  menu_a_4.classList.remove("menu_a_vis_twice");
  menu_a_4.classList.add("menu_a_vis");
})
for_planj_5.addEventListener("click", function(){
  menu_a_5.classList.remove("menu_a_vis_twice");
  menu_a_5.classList.add("menu_a_vis");
})
for_planj_6.addEventListener("click", function(){
  menu_a_6.classList.remove("menu_a_vis_twice");
  menu_a_6.classList.add("menu_a_vis");
})
menu_a.addEventListener("click", function(){
  menu_a.classList.add("menu_a_vis_twice");
})
menu_a_2.addEventListener("click", function(){
  menu_a_2.classList.add("menu_a_vis_twice");
})
menu_a_3.addEventListener("click", function(){
  menu_a_3.classList.add("menu_a_vis_twice");
})
menu_a_4.addEventListener("click", function(){
  menu_a_4.classList.add("menu_a_vis_twice");
})
menu_a_5.addEventListener("click", function(){
  menu_a_5.classList.add("menu_a_vis_twice");
})
menu_a_6.addEventListener("click", function(){
  menu_a_6.classList.add("menu_a_vis_twice");
})

const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 20;

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
    
    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;
      
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});
