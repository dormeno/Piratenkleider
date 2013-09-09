/*
 * Image Upload for Widget
 */

jQuery(document).ready(function($){
 

    var custom_uploader;

    $('.upload_image_button').click(function(e) {
        e.preventDefault();
        var button = $(this);
        var id = button.attr('id').replace('_button', '');
        var idimgid = button.attr('id').replace('url_button', 'id'); 
        var idtitle = button.attr('id').replace('image_url_button', 'title');
	
        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader) {
            custom_uploader.open();
            return;
        }
 
        //Extend the wp.media object
        custom_uploader = wp.media.frames.file_frame = wp.media({
            title: 'Choose Image',
            button: { text:'Choose Image' },
            library: { type: 'image' }, 
            multiple: false
        });
 
        //When a file is selected, grab the URL and set it as the text field's value
        custom_uploader.on('select', function() {
            var attachment = custom_uploader.state().get('selection').first().toJSON();            
            $('#'+id).val(attachment.url);   
            $('#'+idimgid).val(attachment.id);   
            var pretitle = $('#'+idtitle).val();
            if (!pretitle)
                $('#'+idtitle).val(attachment.title);
           
        });
 
        //Open the uploader dialog
        custom_uploader.open();
 
    });
 
 
});

