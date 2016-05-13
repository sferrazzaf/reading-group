// Put some code here that does something interesting.

$(document).ready(function() {

    //store bottom right coordinates
    bottom = 0;
    right = 0;

    //store click position
    clickposX = 0;
    clickposY = 0;

    //create reference to item being dragged on
    var draggeditem = null;

    //get csrftoken
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            console.log('document.cookie = ' + document.cookie);
            var cookies = document.cookie.split(';');
            console.log('cookies = ' + cookies);
            console.log(cookies.length);
            for (var i = 0; i < cookies.length; i++) {
                console.log(i);
                var cookie = jQuery.trim(cookies[i]);
                console.log(cookie);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    var csrftoken = getCookie('csrftoken');

    console.log(csrftoken);

    function csrfSafeMethod(method) {
        //these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFTOKEN", csrftoken);
            }
        }
    });

    $(document).mousemove(move);

    function move(e){
        if(draggeditem != null){
            draggeditem.css("width", ((e.pageX + (right - clickposX))));
            draggeditem.css("height", ((e.pageY + (bottom - clickposY))));
        };
    };

    $(".square").mousedown(function(f){
        clickposX = f.pageX;
        clickposY = f.pageY;
        draggeditem = $(this);
        var offset = $(this).offset();
        right = parseInt(offset.left) + parseInt(draggeditem.css("width"));
        bottom = parseInt(offset.top) + parseInt(draggeditem.css("height"));
        draggeditem_y = offset.top;
    });

    $(document).mouseup(function(){
        draggeditem = null;
    });

    var responses = 0;
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var headers = {};

    $(".square").mouseover(function() {
        $.ajax("http://127.0.0.1:8000/update", {
            method: 'POST',
            data: 'String as fuck',
        })
        .done(function(responseData) {
            console.log(responseData)
            randomColor = Math.floor(Math.random()*16777215).toString(16);
            responses += 1
            $(".square").html(('there have been ' + responses + ' responses!'))
            $(".square").css("background-color", randomColor)
        })
    })

});
