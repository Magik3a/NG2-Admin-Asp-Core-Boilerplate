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
var register_component_1 = require('./register.component');
var register_routing_1 = require('./register.routing');
var RegisterModule = (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                nga_module_1.NgaModule,
                register_routing_1.routing
            ],
            declarations: [
                register_component_1.Register
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RegisterModule);
    return RegisterModule;
}());
exports.RegisterModule = RegisterModule;
//# sourceMappingURL=register.module.js.map