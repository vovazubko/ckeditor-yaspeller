Intro
=====

This plugin allows transparent spellchecking for [CKEditor](http://ckeditor.com/).
Typed text periodically checked via [Yandex Spellcheck API](http://api.yandex.ru/speller/doc/dg/concepts/api-overview.xml) with ajax requests.

Supported languages: Russian, English. Better support can be done via [hacked Google Toolbar API](http://weblogs.asp.net/pwelter34/archive/2005/07/19/google-toolbar-spell-check-api.aspx), but it's legacy status is unclear.

You can try this plugin @ [demo page](http://nodeca.github.com/ckeditor-yaspeller/).

Installation
============

Copy `yaspeller` folder contents to `ckeditor_path_at_your_server/plugins`.

Add *yaspeller* plugin & disable default *scayt* in CKEditor config (`config.js`):

    CKEDITOR.editorConfig = function( config )
    {
        config.extraPlugins = 'yaspeller';
        config.removePlugins = 'scayt';
        //config.toolbar.push(['SpellCheckerMode'])
        config.toolbar = [['Bold', 'SpellCheckerMode']]
    ...


Spellchecker can be controlled in the same way, as Scayt, with button `SpellCheckerMode` (see config above).

Errors highlight style is defined in `./yaspeller/css/yaspeller.css` file.

Contributors
============

- [Vitaliy Fedorets](https://github.com/ps-axjf) (ps.axjf@gmail.com)
- [Vitaly Puzrin](https://github.com/puzrin) (vitaly@rcdesign.ru)

License
=======

(The MIT License)

Copyright (c) 2011 Vitaly Puzrin <vitaly@rcdesign.ru>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
