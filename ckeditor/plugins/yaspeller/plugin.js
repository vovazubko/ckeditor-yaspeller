CKEDITOR.plugins.add('yaspeller',
{
    init: function(editor)
    {
        var corrects = new Array()

        //alert(editor.ariaWidget)
        //var editor = CKEDITOR.ariaWidget
        //editor.on('keyup', function(evt){
        //    alert(evt.getKey())
        //} )
        if ( CKEDITOR.loadFullCore ) CKEDITOR.loadFullCore();
        for (var name in CKEDITOR.instances) {
            CKEDITOR.instances[name].on('key', function(evt){
                //alert(evt)
                if (evt.data.keyCode==32) {
                    console.log('CHecking')
                    tdata = CKEDITOR.instances[name].getData()

                    alert(tdata)
                    var xml = CKEDITOR.ajax.loadXml('http://speller.yandex.net/services/spellservice/checkText?text='+tdata, function(data){
                        console.log(data)
                    } )

                }

            })
            //alert(CKEDITOR.instances[name])
        }

        //alert(CKEDITOR.ALT)
        //alert(CKEDITOR.instances)

        //alert(editor.currentInstance)
    }
});
