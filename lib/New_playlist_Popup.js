class NewPlaylist extends Popup{
    constructor (title){
        super(title);
    }
     build(){
        super.build();
        var promise = new Promise(function (resolve, reject) {    
            $.get( "view/new_playlist1.html", function(data) {
                resolve(data);
            })    
        }).then(function(data){
            var wrapper = $('<div>');
            wrapper.addClass('new_playlist1_wrapper');
            wrapper.html(data);
            wrapper.appendTo($('.content'));  
        }).then(function(){
            $('input[name=new_playlist_url]').on('input', function(e){
                if(/^https?:\/\/.*\.(?:png|jpg)/.test($('input[name=new_playlist_url]').val())){
                    if($('#preview img').length == 1){
                        $('#preview img').remove();
                    }
                    if ($('#error').length == 1){
                         $('#error').remove();
                    }
                    var img = $('<img>',{
                        id: img,                        
                        src: e.target.value
                    }).appendTo($('#preview'))
                    $('#preview_img span').addClass('undisplay');
                    $('#preview img').on('error', this.buildError);
                }  
            }.bind(this))            
            this.clearForm();
            $('.new_playlist1_wrapper form').submit(function(e){
                e.preventDefault();
                submitedData.name = $('input[name=new_playlist_name]').val();
                submitedData.image = $('input[name=new_playlist_url]').val();
                $('.new_playlist1_wrapper').remove();
                var sec_new_play_list = new Sec_NewPlaylist();
                sec_new_play_list.build();
            })
         }.bind(this))
     }
     
     clearForm(){
       $('#reset').click(function(){
           $("input[name=new_playlist_name]").val("");
           $("input[name=new_playlist_url]").val("");
           $('#preview span').removeClass('undisplay');
           if($('#preview img')){
               $('#preview img').remove();
           }
       })
     }
     
     buildError(){
         if ($('#error').length == 1){
             $('#error').remove();
         }
         var error = $('<span>',{
             id: "error",
             text: "please set a valid image URL"
         }).appendTo($('#preview'));
         $('#preview img').remove();
     }
     
}