class Popup {
    constructor (title) {
	this.title = title;
    }
    build() {
        this.container = $('<div>');
        this.container.addClass('popup_container');
        this.content = $('<div>');
        this.content.addClass('content');
        var headline = $('<h2>');
        headline.text(this.title);
        headline.appendTo(this.content);
        this.content.appendTo(this.container);
        this.container.appendTo($('body'));
        this.close();
    }
    
    close(){
        var button = $('<button>');
        button.html('&#10006;').addClass('close_button').click(function(){
            $('.popup_container').remove();
        }).appendTo($('.popup_container'));
    }
}