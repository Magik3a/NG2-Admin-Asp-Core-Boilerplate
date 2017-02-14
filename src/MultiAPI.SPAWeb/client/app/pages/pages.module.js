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
var pages_routing_1 = require('./pages.routing');
var nga_module_1 = require('../theme/nga.module');
var pages_component_1 = require('./pages.component');
var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, nga_module_1.NgaModule, pages_routing_1.routing],
            declarations: [pages_component_1.Pages]
        }), 
        __metadata('design:paramtypes', [])
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
//# sourceMappingURL=pages.module.js.map