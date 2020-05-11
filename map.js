//	ESRI SCRIPT

'use strict';


//webscene
require([
			"esri/WebScene",
			"esri/views/SceneView",
			"esri/widgets/Legend",
	"esri/widgets/BasemapToggle",
	"esri/Map",
	"esri/views/ui/DefaultUI",
	"esri/widgets/Home"

], function (WebScene, SceneView, Legend, BasemapToggle, Compass, DefaultUI, Home) {

	var webscene = new WebScene({
		portalItem: {
			id: "1ba2c2fd90ff4029a3338357e5f0c8b4",
			basemap: "dark-gray"
		}
	});

	var view = new SceneView({
		container: "viewDiv",
		map: webscene,

	});

	//	basemaptoggle
	var basemapToggle = new BasemapToggle({
		view: view, // The view that provides access to the map's "streets" basemap
		nextBasemap: "hybrid" // Allows for toggling to the "hybrid" basemap
	});
	//add the basemap toggle to the ui
	view.ui.add(basemapToggle, "top-left")

	view.ui.remove("zoom");
	
	var homeWidget = new Home({
  view: view
});

// adds the home widget to the top left corner of the MapView
view.ui.add(homeWidget, "top-left");

});
