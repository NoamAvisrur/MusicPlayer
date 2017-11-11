class Playlist {
    
    buildSingerList(element){
        var id = element.data('id');
        var name = element.parent().data('name')
        var image = this.getPlaylistImage(element.parent());
        var songs = getByPromise("api/playlist.php?type=songs&id=" + id);
        var player = getByPromise("view/playlist_player.html");
        Promise.all([player, songs])
        .then(function (response){
            this.buildPlayer(response[0], response[1], id, image, name); 
            this.buildSongs(response[1], image);
        }.bind(this)).then(function(){
            $('.disc_play_button').click(this.togglePlayerMode.bind(this));
            $('audio').on('ended', this.playNextSong.bind(this));
        }.bind(this));   
    }
    
    buildPlayer(data, songs, id, image, name){
        $('#container').html(data);
        var firstSongUrl = songs.data.songs[0].url;
        $("audio").attr("src", firstSongUrl).trigger("play");
        $("audio")[0].onplay = function(){
           $('.playlist_disc').addClass('spin');
           $('.disc_play_button span').html('=').removeClass('addMargin');
        };
        $("audio")[0].onpause = function(){
           $('.playlist_disc').removeClass('spin');
           $('.disc_play_button span').html('&#9658;').addClass('addMargin');
        };
        $('.song_name_display span').text("1." + songs.data.songs[0].name);
        $('.playlist_delete_button').click(function(){
            var delete_playlist = new DeletePlaylist('Delete Playlist');
            delete_playlist.build(id);
        });      
        $('.playlist_edit_button').click(function(e){
            var edit_playlist = new Edit_playlist('Edit Playlist');
            edit_playlist.build(name, image, id);            
        })
        this.urlList = [];
        this.nameList = [];
        for (var i = 0; i < songs.data.songs.length; i++){
            this.urlList[i] = songs.data.songs[i].url;
            this.nameList[i] = songs.data.songs[i].name;
        }
    }
    
    buildSongs(data, image){
        $('main').empty();
        $('.playlist_disc').css('background-image', 'url(' + image + ')');
        $.each(data.data.songs, function(i, val){
            var playlist_container = $('<div>'); 
            playlist_container.addClass('playlist_container');
            var playlist = $('<div>');
            playlist.css('background-image', 'url(' + image + ')');
            playlist.addClass('playlist');
            playlist.attr( "data-name", data.data.songs[i].name);
            var playlistName = $('<h1>');  
            playlistName.text([i+1] + "."+ data.data.songs[i].name);
            playlistName.addClass('playlistName');        
            var playButton = $('<button>');
            playButton.addClass('play_button');
            playButton.attr( "data-url", data.data.songs[i].url);
            playButton.click(this.playSelectedSong);
            var playIcon = $('<span>');
            playIcon.html('&#9658;');
            playIcon.appendTo(playButton);
            playButton.appendTo(playlist);
            playlistName.appendTo(playlist);
            playlist.appendTo(playlist_container); 
            playlist_container.appendTo($('main'));
            $('.playlistName').circleType({radius: 200});        
        }.bind(this));
    }
    
    playSelectedSong(e){
        var url = e.currentTarget.dataset.url;
        $("Audio").attr("src", url).trigger("play");
        var selectedSongName = $(e.currentTarget).parent().find('h1').text();
        $('.song_name_display span').text(selectedSongName); 
    }
    
    togglePlayerMode(){
        var audio = $("audio");
        return audio[0].paused || audio[0].onended ? audio[0].play() : audio[0].pause();
    }   
    
    getPlaylistImage(playlist){
        var bg = (playlist).css('background-image');
        bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
        return bg;
    }
    
    playNextSong(e){
        var playedSongUrl = ($(e.target).prop('src'));
        var i = this.urlList.indexOf(playedSongUrl);
        if (this.nameList[i+1] !== undefined){
            $("audio").attr("src", this.urlList[i+1]).trigger("play");
            $('.song_name_display span').text(i+2 + "." + this.nameList[i+1]);
        }else{
            $("audio").attr("src", this.urlList[0]).trigger("play");
            $('.song_name_display span').text(1 + "." + this.nameList[0]);
        }
    }
}