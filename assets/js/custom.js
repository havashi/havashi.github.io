$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
$(function(){

	$('#slide-submenu').on('click',function() {
        $(this).closest('.list-group').fadeOut('slide',function(){
        	$('#menuIcon').toggleClass('fa-bars fa-times');

        });

      });

	$('.mini-submenu').on('click',function(){
        $(this).next('.list-group').toggle('slide');
        $('#menuIcon').toggleClass('fa-bars fa-times');
})
});
