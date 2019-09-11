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
                .setHost(host,"xui_ui_panel4")
                .setDock("none")
                .setLeft("5em")
                .setTop("5.833333333333333em")
                .setWidth("52.5em")
                .setHeight("30.833333333333332em")
                .setCaption("数据列表")
            );
            
            host.xui_ui_panel4.append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_ui_list2")
                .setDirtyMark(false)
                .setItems([
                    {
                        "id":"d",
                        "caption":"rendered as a Module",
                        "renderer":"Module.card",
                        "tagVar":{
                            "v_avatar > src":"{/}img/f1.png",
                            "v_name > caption":"Angelica Geary",
                            "v_title > caption":"Sales Representative"
                        }
                    },
                    {
                        "id":"e",
                        "caption":"rendered as a Module",
                        "renderer":"Module.card",
                        "tagVar":{
                            "v_avatar > src":"{/}img/f2.png",
                            "v_name > caption":"Arlene Sharman",
                            "v_title > caption":"Sales Representative"
                        }
                    },
                    {
                        "id":"f",
                        "caption":"rendered as a Module",
                        "renderer":"Module.card",
                        "tagVar":{
                            "v_avatar > src":"{/}img/f3.png",
                            "v_name > caption":"Hortense Tinker",
                            "v_title > caption":"Sales Representative"
                        }
                    },
                    {
                        "id":"g",
                        "caption":"rendered as a Module",
                        "renderer":"Module.card",
                        "tagVar":{
                            "v_avatar > src":"{/}img/f4.png",
                            "v_name > caption":"Leilah Gregory",
                            "v_title > caption":"Sales Assistant"
                        }
                    }
                ])
                .setDock("fill")
                .setLeft("13.333333333333334em")
                .setTop("2.5em")
                .setWidth("58.333333333333336em")
                .setHeight("14.166666666666666em")
                .setRenderer("")
                .setBorderType("none")
                .setItemRow("cell")
                .setLabelPos("none")
                .setLabelGap("4.166666666666667em")
                .setLabelHAlign("")
                .setValue("")
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