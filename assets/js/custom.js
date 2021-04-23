const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
function makeid(length) {
    var result           = [];
    var characters       = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() *
 charactersLength)));
   }
   return result.join('');
}

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
