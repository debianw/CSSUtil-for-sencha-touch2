Ext.define("app.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [
                    {
                        docked: 'top',
                        xtype: 'toolbar',
                        title: 'Change Theme'
                    },

                    {
                        xtype: 'button',
                        text: 'Apple',
                        action: 'apple-theme'
                    },

                    {
                        xtype: 'button',
                        text: 'Android',
                        action: 'android-theme'
                    },

                    {
                        xtype: 'button',
                        text: 'Blackbery',
                        action: 'bb-theme'
                    }
                ],

                html: [
                    "This shows how you can change themes on the fly"
                ].join("")
            },
            {
                title: 'List example',
                iconCls: 'info',
                layout: {
                    type: 'fit'
                },
                items: [
                    {
                        docked: 'top',
                        xtype: 'toolbar',
                        title: 'List Example'
                    },
                    {
                        xtype: 'list',
                        //fullscreen: true,
                        itemTpl: '{title}',
                        data: [
                            { title: 'Item 1' },
                            { title: 'Item 2' },
                            { title: 'Item 3' },
                            { title: 'Item 4' },
                            { title: 'Item 5' },
                            { title: 'Item 6' },
                            { title: 'Item 7' },
                            { title: 'Item 8' },
                            { title: 'Item 9' },
                            { title: 'Item 10' },
                            { title: 'Item 11' },
                            { title: 'Item 12' }
                        ]
                    }
                ]
            }
        ]
    }
});
