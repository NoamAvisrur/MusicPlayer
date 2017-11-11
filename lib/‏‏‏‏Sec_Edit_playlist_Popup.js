class Sec_Edit_Playlist extends Popup{
    build(id){
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
            return promise = new Promise(function (resolve, reject) {    
                return $.get("api/playlist.php?type=songs&id=" + id, function(data) {
                    return resolve(data);
                })
            })    
        }).then(function(data){           
              $.each(data.data.songs, function(i, val){
                  var urlInput = $('input[name=url]');
                  var nameInput = $('input[name=name]');
                  if(i >= 4){
                      Sec_NewPlaylist.prototype.buildInputs();
                      var urlInput = $('input[name=url]');
                      var nameInput = $('input[name=name]');
                      urlInput[i].value = val.url;
                      nameInput[i].value = val.name;
                  }else{  
                      urlInput[i].value = val.url;
                      nameInput[i].value = val.name;
                  }    
              })
        }).then(function(){
            $('.close_button').click(function(){
                if($('.player_container').length == 1){
                    $('.player_container').remove();
                }
                $('main').empty();
                LoadMyPlayer();  
            });
            this.addSong();
            $('form').submit(function(e){
                e.preventDefault();
                $('.inputs_wrapper').each(function(i, val){
                    var new_name = $(val).find('input[name=name]').val();
                    var new_url = $(val).find('input[name=url]').val()
                    if(new_name !== "" && new_url !== ""){
                        editedSongs.songs.push({
                            name: new_name,
                            url: new_url
                        })
                    }
                });
                $.post("api/playlist.php?type=songs&id=" + id, editedSongs, function(data){
                    if(data.success = true){
                        if($('.player_container').length == 1){
                            $('.player_container').remove();
                        }
                        $('.popup_container').remove();
                        $('main').empty();
                        LoadMyPlayer();
                    }    
                })
            })
        }.bind(this))
    };
}