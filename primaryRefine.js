'use strct';

require([
      "esri/WebMap",
      "esri/views/MapView",
	"esri/widgets/BasemapToggle",
	"esri/widgets/LayerList",

    ], function (WebMap, MapView, BasemapToggle, LayerList) {

	var webmap = new WebMap({
		portalItem: {
			id: "f281bfe3267745d5863ee3b2adc368fe",
		}
	});

	var view = new MapView({
		container: "map",
		map: webmap

	});



	var layerList = new LayerList({
		view: view,
		container: laylist
	});

	// Adds widget below other elements in the top left corner of the view
	view.ui.add(layerList, {
		position: "top-left"
	});

	var basemapToggle = new BasemapToggle({
		view: view, // The view that provides access to the map's "streets" basemap
		nextBasemap: "hybrid", // Allows for toggling to the "hybrid" basemap
		//		container: laylist
	});
	//add the basemap toggle to the ui
	view.ui.add(basemapToggle, "top-left")

	//	var bgExpand = new Expand({
	//          view: view,
	//          content: laylist
	//        });
	//view.ui.add(bgExpand, "top-left");

	view.ui.remove("zoom");

	view.on("mouse-wheel", function (event) {
		event.stopPropagation();
	});

	view.on("drag", function (event) {
		event.stopPropagation();
	});

	view.scale = 4500;




});
