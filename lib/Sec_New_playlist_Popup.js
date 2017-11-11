class Sec_NewPlaylist extends Popup{
    build(){
        var promise = new Promise(function (resolve, reject) {    
            $.get( "view/new_playlist2.html", function(data) {
                resolve(data);
            })    
        }).then(function(data){ 
            var content = $('.content');
            content.css("height", "auto");
            var wrapper = $('<div>');
            wrapper.addClass('new_playlist2_wrapper');
            wrapper.html(data);
            wrapper.appendTo(content);  
        }).then(function(){   
            this.addSong();
            $('form').submit(function(e){
                e.preventDefault();
                $('.inputs_wrapper').each(function(i, val){
                    var new_name = $(val).find('input[name=name]').val();
                    var new_url = $(val).find('input[name=url]').val()
                    if(new_name !== "" && new_url !== ""){
                         submitedData.songs.push({
                               name: new_name,
                               url: new_url
                           })
                    }        
                });
                $.post( "api/playlist.php?type=playlist", submitedData, function( data ) {
                    if($('.player_container').length == 1){
                        $('.player_container').remove();
                    }
                    $('.popup_container').remove();
                    $('main').empty();
                    LoadMyPlayer();
                });
            })
        }.bind(this))
    };
    
    addSong(){
        $('#AddSong').click(this.buildInputs);
    }        
    
    buildInputs(){    
        if($('label').length < 24){
            var inputs_wrapper = $('<div>');
            inputs_wrapper.addClass('inputs_wrapper');
            var url_label = $('<label>');
            var url_span = $('<span>');
            url_span.text('Song URL ');
            url_span.appendTo(url_label);
            var url_input = $('<input type=text>');
            url_input.attr("name", "url").attr( "placeholder", "http://...mp3")
            .attr("pattern", "^https?:\/\/.*\.(?:mp3)$");
            url_input.appendTo(url_label);
            var name_label = $('<label>');
            var name_span = $('<span>');
            name_span.text(' Name ');
            name_span.appendTo(name_label);
            var name_input = $('<input type=text>');
            name_input.attr("name", "name");
            name_input.appendTo(name_label);
            url_label.appendTo($(inputs_wrapper));
            name_label.appendTo($(inputs_wrapper));
            inputs_wrapper.appendTo($('.label_wrapper'));
        }else{
            $('#AddSong span:last-child').text('12 songs max').css('color', 'tomato');
        }  
    }
    
}