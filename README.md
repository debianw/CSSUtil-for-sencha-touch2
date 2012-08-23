CSSUtil-for-sencha-touch2
=========================

CSS Util for Sencha Touch 2.

Installing:
===========
- Make sure you have all custom themes you want to use inside the folder resources/css.

- Set default resources css path (default is 'resources/css')

<!-- language: lang-js -->

        CSS.path = 'resources/css';

- Change theme

<!-- language: lang-js -->
        
        CSS.swapStyleSheet('apple');
        CSS.swapStyleSheet('android');
        CSS.swapStyleSheet('bb6');
        
- Clean custom styles and restore the default stylesheet for the current app.

<!-- language: lang-js -->

        CSS.cleanStyleSheets();
