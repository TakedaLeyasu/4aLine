jQuery(document).ready(function($) {

});
(function($) {
    $('#input').on('input', function() {
        //function raumnummer(valNum) {



        $('#test').html('klicke auf Play um zu beginnen');

        $('#button').on('click', function() {
            var valNum = document.getElementById("input").value;

            $('#index').css('display', 'none');
            $('#game').show();
            $('#test2').html("Your Room: " + valNum);
        });
        //}
    });
})(jQuery);