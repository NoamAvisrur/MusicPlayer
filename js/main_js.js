LoadMyPlayer();

function LoadMyPlayer(){  
    getPlaylists = getByPromise("api/playlist.php?type=playlist")
    .then(function(data){
        buildPlaylists(data);
    }).then(function(data){
        $('.delete_button').click(function(e){
            var delete_playlist = new DeletePlaylist('Delete Playlist');
            var id = e.target.dataset.id;
            delete_playlist.build(id);
        });
        $('.edit_button').click(function(e){
            var edit_playlist = new Edit_playlist('Edit Playlist');
            var name = $(e.currentTarget).parent().parent().data('name');
            var bg = $(e.currentTarget).parent().parent().css('backgroundImage');
            var image = bg.replace('url(','').replace(')','').replace(/\"/gi, "");
            var id = $(e.currentTarget).data('id');
            edit_playlist.build(name, image, id);
        })
        $('input[type=search]').keyup(function(e){
            var filter = $(e.target).val().toUpperCase();
            var allTitles = $('.playlist');
            for (var i = 0; i < allTitles.length; i++) {
                if (allTitles[i].dataset.name.toUpperCase().indexOf(filter) > -1) {  
                    $(allTitles[i]).parent().css("display", "flex");
                }else{
                    $(allTitles[i]).parent().css("display", "none");
                }
            }
        })
    });
}

$('#new_playlist_button').click(function(){
    var new_play_list = new NewPlaylist('Add New Playlist');
    new_play_list.build();
});

function buildPlaylists(data){
    $.each(data.data, function(i, val){
        var playlist_container = $('<div>'); 
        playlist_container.addClass('playlist_container');
        var playlist = $('<div>');
        playlist.css('background-image', 'url(' + data.data[i].image + ')');
        playlist.addClass('playlist');
        playlist.attr( "data-name", data.data[i].name);
        var playlistName = $('<h1>');
        playlistName.text(data.data[i].name);
        playlistName.addClass('playlistName');
        var buttonsDiv = $('<div>');
        buttonsDiv.addClass('buttons_div');
        var deleteButton = $('<button>');
        deleteButton.addClass('delete_button');
        deleteButton.html('&#10006;');        
        deleteButton.appendTo(buttonsDiv);
        deleteButton.attr( "data-id", data.data[i].id);
        var editButton = $('<button>');
        editButton.addClass('edit_button');
        editButton.html('&#x270e;');
        editButton.attr( "data-id", data.data[i].id);
        editButton.appendTo(buttonsDiv);
        buttonsDiv.appendTo(playlist);
        var playButton = $('<button>');
        playButton.addClass('play_button');
        playButton.attr( "data-id", data.data[i].id);
        playButton.click(buildPlaylist);
        var playIcon = $('<span>');
        playIcon.html('&#9658;');
        playIcon.appendTo(playButton);
        playlistName.appendTo(playlist);
        playButton.appendTo(playlist);
        playlist.appendTo(playlist_container); 
        playlist_container.appendTo($('main'));
        $('.playlistName').circleType({radius: 200});
    });
}

function getByPromise(url) {
	var promise = new Promise(function (resolve, reject) {
		$.get(url, function(data) {
			resolve(data);
		});
	});
	return promise;
}

function buildPlaylist(e){
    var newPlaylist = new Playlist();
    newPlaylist.buildSingerList($(e.currentTarget));
    window.history.pushState($(e.currentTarget).data('id'), '','/MusicPlayer/'+$(e.currentTarget).data('id'));
}

window.onpopstate = function(e){
    if(e.state){
        $.each($('.playlist'), function(i, val){
            if($(val).find('.play_button').data('id') == e.state){
                var element = ($(val).find('.play_button'));
                console.log(element);
                var newPlaylist = new Playlist();
                newPlaylist.buildSingerList(element);
            }
        });
    }else{
        $('.player_container').remove();
        $('main').empty();
        LoadMyPlayer();
    }
}   







