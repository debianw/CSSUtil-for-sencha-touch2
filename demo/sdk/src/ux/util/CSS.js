/**
 * CSS utils
 */
Ext.define("Ext.ux.util.CSS", (function() {

    var doc     = window.document,
        head    = doc.getElementsByTagName("head")[0], 
        appcss;

    return {
        alternateClassName: 'CSS',

        singleton: true,

        path: 'resources/css',

        appCSSId: 'appCSS',

        /**
         *
         */
        constructor: function() {
            var arrpath = this.path.split('/');

            arrpath = Ext.Array.clean(arrpath);

            this.path = arrpath.join("/");

            // add an id to the current app
            appcss     = this.getAppStyleSheet();

            if(appcss) {
                appcss.id  = this.appCSSId;    
            }
        },

        /**
         *
         */
        getAppStyleSheet: function() {
            var ss;

            if(appcss) {
                return appcss;
            }

            ss = Ext.DomQuery.select("link[rel=stylesheet]")[0];
            
            return ss;
        },

        /**
         * Get stylesheet element
         */
        getStyleSheet: function(id) {
            var ss = Ext.DomQuery.select("link[id="+id+"]");

            return ss;
        },

        /**
         *
         */
        createStyleSheet: function() {

        },

        /**
         *
         */
        removeStyleSheet: function(id) {
            var ss = Ext.DomQuery.select("link[id="+id+"]");

            if(ss) {
                head.removeChild(ss);
            }
        },

        /**
         * clean stylesheets but not the default css app.
         */
        cleanStyleSheets: function() {
            var me     = this,
                styles = Ext.DomQuery.select("link[rel=stylesheet]");

            Ext.each(styles, function(style) {

                // remove others except the default one
                if(style.id !== me.appCSSId ) {
                    head.removeChild(style);
                }
                
            });
        },

        /**
         * @param {String} name The id name of the stylesheet
         */
        swapStyleSheet: function(name) {
            var ss  = doc.createElement("link"),
                url = this.path+'/'+name+".css";

            this.cleanStyleSheets();

            // creates the new stylesheet
            ss.setAttribute("rel", "stylesheet");
            ss.setAttribute("type", "text/css");
            ss.setAttribute("id", name);
            ss.setAttribute("href", url);

            doc.getElementsByTagName("head")[0].appendChild(ss);
        }

    };

}()));