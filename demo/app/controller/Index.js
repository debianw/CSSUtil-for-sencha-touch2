Ext.define('app.controller.Index', {
    
    extend: 'Ext.app.Controller',

    config: {

        refs: {
            btnApple: 'button[action=apple-theme]',
            btnAndroid: 'button[action=android-theme]',
            btnBB: 'button[action=bb-theme]'
        },

        control: {
            btnApple: {
                tap: 'onAppleTap'
            },

            btnAndroid: {
                tap: 'onAndroid'
            },

            btnBB: {
                tap: 'onBB'
            }
        }

    },

    /**
     *
     */
    onAppleTap: function() {
        CSS.swapStyleSheet('apple');
    },

    /**
     *
     */
    onAndroid: function() {
        CSS.swapStyleSheet('android');
    },

    /**
     *
     */
    onBB: function() {
        CSS.swapStyleSheet('bb6');
    }

});