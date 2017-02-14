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
var ng2_tree_1 = require('ng2-tree');
var components_routing_1 = require('./components.routing');
var components_component_1 = require('./components.component');
var treeView_component_1 = require('./components/treeView/treeView.component');
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                nga_module_1.NgaModule,
                ng2_tree_1.TreeModule,
                components_routing_1.routing
            ],
            declarations: [
                components_component_1.Components,
                treeView_component_1.TreeView,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components.module.js.map