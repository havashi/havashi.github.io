const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
function readMore(string, maxWords) {
    var strippedString = $("<p>" + string + "</p>").text().trim();
    var array = strippedString.split(" ");
    var wordCount = array.length;
    var string = array.splice(0, maxWords).join(" ");

    if(wordCount > maxWords) {
        string += "...";
    }

        return string ;
}
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
$(document).ready(function(){
        $('.floatingButton').on('click',
            function(e){
                e.preventDefault();
                $(this).toggleClass('open');
                if($(this).children('.fas').hasClass('fa-bars'))
                {
                    $(this).children('.fas').removeClass('fa-bars');
                    $(this).children('.fas').addClass('fa-times');
                }
                else if ($(this).children('.fas').hasClass('fa-times'))
                {
                    $(this).children('.fas').removeClass('fa-times');
                    $(this).children('.fas').addClass('fa-bars');
                }
                $('.floatingMenu').stop().slideToggle();
            }
        );
        $(this).on('click', function(e) {
            var container = $(".floatingButton");

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && $('.floatingButtonWrap').has(e.target).length === 0)
            {
                if(container.hasClass('open'))
                {
                    container.removeClass('open');
                }
                if (container.children('.fa').hasClass('fa-close'))
                {
                    container.children('.fa').removeClass('fa-close');
                    container.children('.fa').addClass('fa-plus');
                }
                $('.floatingMenu').hide();
            }
        });
        $(document).find('.persianDate').each(function () {
          var postDate = new Date(parseInt($(this).attr('data-timestamp'))*1000);
          $(this).text(postDate.toLocaleDateString('fa-IR', { year: 'numeric', month: 'numeric', day: 'numeric' }));
        })

        $("input[type=file].custom-file-input").change(function (){
          console.log('dsd');
          var fileName = $(this).val().split('\\').pop();
          $(this).siblings('label').html(fileName);
        });
    });
