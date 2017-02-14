"use strict";
var router_1 = require('@angular/router');
var maps_component_1 = require('./maps.component');
var bubbleMaps_component_1 = require('./components/bubbleMaps/bubbleMaps.component');
var googleMaps_component_1 = require('./components/googleMaps/googleMaps.component');
var leafletMaps_component_1 = require('./components/leafletMaps/leafletMaps.component');
var lineMaps_component_1 = require('./components/lineMaps/lineMaps.component');
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: maps_component_1.Maps,
        children: [
            { path: 'bubblemaps', component: bubbleMaps_component_1.BubbleMaps },
            { path: 'googlemaps', component: googleMaps_component_1.GoogleMaps },
            { path: 'leafletmaps', component: leafletMaps_component_1.LeafletMaps },
            { path: 'linemaps', component: lineMaps_component_1.LineMaps }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=maps.routing.js.map