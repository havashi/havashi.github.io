$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
$(function(){

	$('#slide-submenu').on('click',function() {
        $(this).closest('.list-group').fadeOut('slide',function(){

        });

      });

	$('#menuIcon').on('click',function(){
        $('#menuList').toggle('slide');
        $('#menuIcon').toggleClass('fa-bars fa-times');
})
});
