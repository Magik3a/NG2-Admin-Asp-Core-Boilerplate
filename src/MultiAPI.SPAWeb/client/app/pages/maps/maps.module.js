"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var nga_module_1 = require('../../theme/nga.module');
var maps_routing_1 = require('./maps.routing');
var maps_component_1 = require('./maps.component');
var bubbleMaps_component_1 = require('./components/bubbleMaps/bubbleMaps.component');
var googleMaps_component_1 = require('./components/googleMaps/googleMaps.component');
var leafletMaps_component_1 = require('./components/leafletMaps/leafletMaps.component');
var lineMaps_component_1 = require('./components/lineMaps/lineMaps.component');
var bubbleMaps_service_1 = require('./components/bubbleMaps/bubbleMaps.service');
var lineMaps_service_1 = require('./components/lineMaps/lineMaps.service');
var MapsModule = (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                nga_module_1.NgaModule,
                maps_routing_1.routing
            ],
            declarations: [
                maps_component_1.Maps,
                bubbleMaps_component_1.BubbleMaps,
                googleMaps_component_1.GoogleMaps,
                leafletMaps_component_1.LeafletMaps,
                lineMaps_component_1.LineMaps
            ],
            providers: [
                bubbleMaps_service_1.BubbleMapsService,
                lineMaps_service_1.LineMapsService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MapsModule);
    return MapsModule;
}());
exports.MapsModule = MapsModule;
//# sourceMappingURL=maps.module.js.map