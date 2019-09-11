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
        properties : {
            "v_name > caption":null,
            "v_age > caption":null
        },

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
                .setHost(host,"xui_ui_block10")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("23.333333333333332em")
                .setHeight("9.166666666666666em")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setBorderType("groove")
            );
            
            host.xui_ui_block10.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label2")
                .setLeft("2.4166666666666665em")
                .setTop("2.3333333333333335em")
                .setWidth("5.75em")
                .setHeight("1.8333333333333333em")
                .setCaption("姓名")
                .setFontSize("18px")
            );
            
            host.xui_ui_block10.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label3")
                .setLeft("1.5em")
                .setTop("4.833333333333333em")
                .setWidth("6.25em")
                .setHeight("2.6666666666666665em")
                .setCaption("年龄")
                .setFontSize("18px")
            );
            
            host.xui_ui_block10.append(
                xui.create("xui.UI.Label")
                .setHost(host,"v_name")
                .setLeft("10.666666666666666em")
                .setTop("2.3333333333333335em")
                .setWidth("7.916666666666667em")
                .setHeight("1.8333333333333333em")
                .setCaption("")
                .setFontSize("18px")
            );
            
            host.xui_ui_block10.append(
                xui.create("xui.UI.Label")
                .setHost(host,"v_age")
                .setLeft("10.666666666666666em")
                .setTop("4.833333333333333em")
                .setWidth("7.083333333333333em")
                .setHeight("1.8333333333333333em")
                .setCaption("")
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