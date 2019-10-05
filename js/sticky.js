window.addEventListener('load', windowYuklendi);


function windowYuklendi() {

    window.addEventListener('scroll', function (melumat) {
        var navTop = document.querySelector('nav.top-bar');

        if (window.scrollY >= 110) {
            navTop.classList.add('fixed');
        }
        else{
            navTop.classList.remove('fixed');
        }
        
        if(window.screen.height/2 < window.scrollY) {
            navTop.classList.remove('fixed');
            this.console.log(window.screen.height/2 < window.scrollY);
        }
    });




}






// $(document).ready(function(){

// $(document).scroll(function(){
//  if(window.scrolled>=159){
//     $("#fixed").addClass( 'fixed');
//  }
// });
// });

