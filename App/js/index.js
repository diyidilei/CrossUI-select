// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel5")
                .setDock("none")
                .setLeft("6.666666666666667em")
                .setTop("5em")
                .setWidth("53.333333333333336em")
                .setHeight("28.333333333333332em")
                .setCaption("用户列表")
            );
            
            host.xui_ui_panel5.append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_ui_list3")
                .setDirtyMark(false)
                .setItems([
                    {
                        "id":"a",
                        "caption":"a",
                        "renderer":"Module.card",
                        "tagVar":{
                            "name > caption":"张三",
                            "age > caption":18
                        }
                    },
                    {
                        "id":"b",
                        "caption":"b",
                        "renderer":"Module.card",
                        "tagVar":{
                            "name > caption":"李四\n",
                            "age > caption":19
                        }
                    },
                    {
                        "id":"c",
                        "caption":"c",
                        "renderer":"Module.card",
                        "tagVar":{
                            "name > caption":"王五",
                            "age > caption":22
                        }
                    },
                    {
                        "id":"d",
                        "caption":"d",
                        "renderer":"Module.card",
                        "tagVar":{
                            "name > caption":"王志",
                            "age > caption":20
                        }
                    }
                ])
                .setDock("fill")
                .setLeft("7em")
                .setTop("2.1666666666666665em")
                .setBorderType("none")
                .setItemRow("cell")
                .setValue("a")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});