Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'MyApp',
    autoCreateViewport: true,

    launch: function() {
        Ext.Msg.alert('Lauched!','Our first app.');
    }
});