(function(){var a=Flavors.Global.namespace("Flavors.Layout.Basic.Highlighter"),b=Flavors.Logger.getLogger(a.__name__);Flavors.Layout=a;a.preInit=function(){b("preInit")};a.init=function(){b("init");Flavors.Layout.Shared.init();a.initNavigation();a.aboutChangePosition();a.narrowScreen();$(window).resize(function(){a.aboutChangePosition();a.narrowScreen()});b("Initialized")};a.aboutChangePosition=function(){b("aboutChangePosition");Flavors.Layout.Shared.aboutChangePosition()};a.narrowScreen=function(){b("narrowScreen");
Flavors.Layout.Shared.narrowScreen(minWidth=970)};a.initNavigation=function(){b("initNavigation");Flavors.Layout.Shared.initNavigation()};a.addService=function(c){b("addService");Flavors.Layout.Shared.addService(c)};a.removeService=function(c){b("removeService");Flavors.Layout.Shared.removeService(c)};a.replaceService=function(c){b("replaceService");Flavors.Layout.Shared.replaceService(c)};a.reorderServices=function(c){b("reorderServices");Flavors.Layout.Shared.reorderServices(c)};a.addLink=function(c){b("addLink");
Flavors.Layout.Shared.addLink(c)};a.reorderLinks=function(c,d){b("reorderLinks");Flavors.Layout.Shared.reorderLinks(c,d)}})();Flavors.Layout.preInit();