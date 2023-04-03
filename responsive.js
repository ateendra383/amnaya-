burger  =  document.querySelector('.burger')
navbar  =  document.querySelector('.burger')



burger.addEventLister('click',()=>{
    navbar.classList.toggle('v-class-resp');
    navlist.classList.toggle('h-class-resp');
})