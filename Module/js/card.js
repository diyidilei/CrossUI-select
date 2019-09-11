// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support async functions
xui.Class('Module.card', 'xui.Module',{
    Instance:{
        // Dependencies css
        Dependencies: [],
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
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block6")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("22.5em")
                .setHeight("9.166666666666666em")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setBorderType("none")
            );
            
            host.xui_ui_block6.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1")
                .setLeft("5em")
                .setTop("1.6666666666666667em")
                .setWidth("3.9166666666666665em")
                .setHeight("2em")
                .setCaption("姓名")
                .setFontSize("18px")
            );
            
            host.xui_ui_block6.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label2")
                .setLeft("3.3333333333333335em")
                .setTop("5em")
                .setWidth("5.583333333333333em")
                .setHeight("2em")
                .setCaption("年龄")
                .setFontSize("18px")
            );
            
            host.xui_ui_block6.append(
                xui.create("xui.UI.Label")
                .setHost(host,"name")
                .setLeft("12.5em")
                .setTop("1.6666666666666667em")
                .setWidth("5.583333333333333em")
                .setHeight("2em")
                .setCaption("")
                .setHAlign("left")
                .setFontSize("18px")
            );
            
            host.xui_ui_block6.append(
                xui.create("xui.UI.Label")
                .setHost(host,"age")
                .setLeft("12.5em")
                .setTop("5em")
                .setWidth("5.916666666666667em")
                .setCaption("")
                .setHAlign("left")
                .setFontSize("18px")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        // To determine how properties affects this module
        propSetAction : function(prop){
        }
    },
    // export
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        },
        $Functions:{
        }
    }
});