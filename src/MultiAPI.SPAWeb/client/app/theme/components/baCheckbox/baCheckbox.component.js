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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var BaCheckbox = (function () {
    function BaCheckbox(state) {
        this.model = state;
        state.valueAccessor = this;
    }
    BaCheckbox.prototype.onChange = function (value) { };
    BaCheckbox.prototype.onTouch = function (value) { };
    BaCheckbox.prototype.writeValue = function (state) {
        this.state = state;
    };
    BaCheckbox.prototype.registerOnChange = function (fn) {
        this.onChange = function (state) {
            this.writeValue(state);
            this.model.viewToModelUpdate(state);
        };
    };
    BaCheckbox.prototype.registerOnTouched = function (fn) { this.onTouch = fn; };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], BaCheckbox.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BaCheckbox.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BaCheckbox.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BaCheckbox.prototype, "baCheckboxClass", void 0);
    BaCheckbox = __decorate([
        core_1.Component({
            selector: 'ba-checkbox[ngModel]',
            styleUrls: ['./baCheckbox.scss'],
            templateUrl: './baCheckbox.html',
            providers: [forms_1.NgModel]
        }),
        __param(0, core_1.Self()), 
        __metadata('design:paramtypes', [forms_1.NgModel])
    ], BaCheckbox);
    return BaCheckbox;
}());
exports.BaCheckbox = BaCheckbox;
//# sourceMappingURL=baCheckbox.component.js.map