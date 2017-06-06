
$(function() {
	pageScroll();
	showMobileMenu();
	sendContact();
});
    
var showMobileMenu = function (){

	  var state = false;
         
         $('.js-menu-btn').click(function(e){
             e.preventDefault();
             if(!state){
                 $('.js-nav').addClass('nav-active');
             } 
             else {
                 $('.js-nav').removeClass('nav-active');
             }
            
         	state = !state;
         }); 
} 
         

var pageScroll = function(){

  $('#project').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('html,body').animate({
           scrollTop: target.offset().top
         }, 1000);
         return false;
       }
    }
  });
}

var sendContact = function (){

var $contactForm = $('.js-contact');
    // VALIDATE FORM
  $contactForm.validate({
    rules: {
      email: {
        required: true,
        email:true
      },
      name: {
        required: true,
        minlength:2
      },
      message: {
        required: true,
        minlength: 20
      }
    },
    messages:{
      email:{
        required: "Please enter your email address",
        email: "Please enter a valid email address"
      },
      name:{
        required: "Please enter your name",
        minlength: "Your name is a bit short is it?"
      },
      message:{
        required: "Please enter a message",
        minlength: "Your message is a bit short is it?"
      }
    }
  });

  $contactForm.on('submit', function(e) {
        e.preventDefault();

        //get the name field value
        var name = $('#name').val();
        //get the name field value
        var email = $('#email').val();
        //get the comments
        var comments = $('#message').val();

        if ($(this).valid()) {
          $.ajax({
              url:'https://formspree.io/mail@deniselashlley.io',
              method:'POST',
              data:{
                  name:name,
                  _replyto:email,
                   email:email,
                  comments:comments,
                  _subject:'My portfolio website',
              },
              dataType:"json",
              success:function() {
                  console.log('success'); 
                  $('.js-contact').hide();
                  $('.js-thankyou-message').show();
              }   

          });
        }
 
       return false;
  });
                    
}