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
var ng2_ckeditor_1 = require('ng2-ckeditor');
var nga_module_1 = require('../../theme/nga.module');
var editors_routing_1 = require('./editors.routing');
var editors_component_1 = require('./editors.component');
var ckeditor_component_1 = require('./components/ckeditor/ckeditor.component');
var EditorsModule = (function () {
    function EditorsModule() {
    }
    EditorsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                nga_module_1.NgaModule,
                ng2_ckeditor_1.CKEditorModule,
                editors_routing_1.routing
            ],
            declarations: [
                editors_component_1.Editors,
                ckeditor_component_1.Ckeditor
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EditorsModule);
    return EditorsModule;
}());
exports.EditorsModule = EditorsModule;
//# sourceMappingURL=editors.module.js.map