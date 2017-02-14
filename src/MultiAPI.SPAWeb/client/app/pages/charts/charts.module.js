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
var charts_routing_1 = require('./charts.routing');
var charts_component_1 = require('./charts.component');
var chartistJs_component_1 = require('./components/chartistJs/chartistJs.component');
var chartistJs_service_1 = require('./components/chartistJs/chartistJs.service');
var ChartsModule = (function () {
    function ChartsModule() {
    }
    ChartsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                nga_module_1.NgaModule,
                charts_routing_1.routing
            ],
            declarations: [
                charts_component_1.Charts,
                chartistJs_component_1.ChartistJs
            ],
            providers: [
                chartistJs_service_1.ChartistJsService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ChartsModule);
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;
//# sourceMappingURL=charts.module.js.map