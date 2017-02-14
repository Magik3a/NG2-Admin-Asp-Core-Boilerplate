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
var ng2_bootstrap_1 = require('ng2-bootstrap');
var Modals = (function () {
    function Modals() {
    }
    Modals.prototype.showChildModal = function () {
        this.childModal.show();
    };
    Modals.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    __decorate([
        core_1.ViewChild('childModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], Modals.prototype, "childModal", void 0);
    Modals = __decorate([
        core_1.Component({
            selector: 'modals',
            styleUrls: ['./modals.scss'],
            templateUrl: './modals.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Modals);
    return Modals;
}());
exports.Modals = Modals;
//# sourceMappingURL=modals.component.js.map