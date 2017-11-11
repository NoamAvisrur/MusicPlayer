class DeletePlaylist extends Popup{
    constructor (title){
        super(title);
    }
     build(id){
        super.build();
        var promise = new Promise(function (resolve, reject) {    
            $.get( "view/delete_playlist.html", function(data) {
                resolve(data);
            })    
        }).then(function(data){
            var wrapper = $('<div>');
            wrapper.addClass('delete_playlist_wrapper');
            wrapper.html(data);
            wrapper.appendTo($('.content'));  
        }).then(function(){
            $('#undelete').click(function(){
                $('.popup_container').remove();   
            })
            $('form').submit(function(e){
                e.preventDefault();
                if($('.player_container').length == 1){
                    $('.player_container').remove();
                }
                $.ajax({
                    url: "api/playlist.php?type=playlist&id=" + id,
                    type: 'DELETE',
                    success: function(result) {
                        $('.popup_container').remove();
                        $('main').empty();
                        LoadMyPlayer();
                    } 
                });                
            })
        })
    }
}