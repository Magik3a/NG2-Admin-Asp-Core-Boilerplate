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
var BaBackTop = (function () {
    function BaBackTop() {
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 1000;
    }
    BaBackTop.prototype.ngAfterViewInit = function () {
        this._onWindowScroll();
    };
    BaBackTop.prototype._onClick = function () {
        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    };
    BaBackTop.prototype._onWindowScroll = function () {
        var el = this._selector.nativeElement;
        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], BaBackTop.prototype, "position", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], BaBackTop.prototype, "showSpeed", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], BaBackTop.prototype, "moveSpeed", void 0);
    __decorate([
        core_1.ViewChild('baBackTop'), 
        __metadata('design:type', core_1.ElementRef)
    ], BaBackTop.prototype, "_selector", void 0);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Boolean)
    ], BaBackTop.prototype, "_onClick", null);
    __decorate([
        core_1.HostListener('window:scroll'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], BaBackTop.prototype, "_onWindowScroll", null);
    BaBackTop = __decorate([
        core_1.Component({
            selector: 'ba-back-top',
            styleUrls: ['./baBackTop.scss'],
            template: "\n    <i #baBackTop class=\"fa fa-angle-up back-top ba-back-top\" title=\"Back to Top\"></i>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], BaBackTop);
    return BaBackTop;
}());
exports.BaBackTop = BaBackTop;
//# sourceMappingURL=baBackTop.component.js.map