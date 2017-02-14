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
var forms_routing_1 = require('./forms.routing');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var forms_component_1 = require('./forms.component');
var inputs_1 = require('./components/inputs');
var layouts_1 = require('./components/layouts');
var standardInputs_1 = require('./components/inputs/components/standardInputs');
var validationInputs_1 = require('./components/inputs/components/validationInputs');
var groupInputs_1 = require('./components/inputs/components/groupInputs');
var checkboxInputs_1 = require('./components/inputs/components/checkboxInputs');
var ratinginputs_1 = require('./components/inputs/components/ratinginputs');
var selectInputs_1 = require('./components/inputs/components/selectInputs');
var inlineForm_1 = require('./components/layouts/components/inlineForm');
var blockForm_1 = require('./components/layouts/components/blockForm');
var horizontalForm_1 = require('./components/layouts/components/horizontalForm');
var basicForm_1 = require('./components/layouts/components/basicForm');
var withoutLabelsForm_1 = require('./components/layouts/components/withoutLabelsForm');
var FormsModule = (function () {
    function FormsModule() {
    }
    FormsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                nga_module_1.NgaModule,
                ng2_bootstrap_1.RatingModule.forRoot(),
                forms_routing_1.routing
            ],
            declarations: [
                layouts_1.Layouts,
                inputs_1.Inputs,
                forms_component_1.Forms,
                standardInputs_1.StandardInputs,
                validationInputs_1.ValidationInputs,
                groupInputs_1.GroupInputs,
                checkboxInputs_1.CheckboxInputs,
                ratinginputs_1.Rating,
                selectInputs_1.SelectInputs,
                inlineForm_1.InlineForm,
                blockForm_1.BlockForm,
                horizontalForm_1.HorizontalForm,
                basicForm_1.BasicForm,
                withoutLabelsForm_1.WithoutLabelsForm
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], FormsModule);
    return FormsModule;
}());
exports.FormsModule = FormsModule;
//# sourceMappingURL=forms.module.js.map