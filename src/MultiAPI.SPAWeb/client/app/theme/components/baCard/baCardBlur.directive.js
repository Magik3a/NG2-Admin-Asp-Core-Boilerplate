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
var theme_1 = require('../../../theme');
var baCardBlurHelper_service_1 = require('./baCardBlurHelper.service');
var BaCardBlur = (function () {
    function BaCardBlur(_baConfig, _baCardBlurHelper, _el) {
        this._baConfig = _baConfig;
        this._baCardBlurHelper = _baCardBlurHelper;
        this._el = _el;
        this.isEnabled = false;
        if (this._isEnabled()) {
            this._baCardBlurHelper.init();
            this._getBodyImageSizesOnBgLoad();
            this._recalculateCardStylesOnBgLoad();
            this.isEnabled = true;
        }
    }
    BaCardBlur.prototype._onWindowResize = function () {
        if (this._isEnabled()) {
            this._bodyBgSize = this._baCardBlurHelper.getBodyBgImageSizes();
            this._recalculateCardStyle();
        }
    };
    BaCardBlur.prototype._getBodyImageSizesOnBgLoad = function () {
        var _this = this;
        this._baCardBlurHelper.bodyBgLoad().subscribe(function () {
            _this._bodyBgSize = _this._baCardBlurHelper.getBodyBgImageSizes();
        });
    };
    BaCardBlur.prototype._recalculateCardStylesOnBgLoad = function () {
        var _this = this;
        this._baCardBlurHelper.bodyBgLoad().subscribe(function (event) {
            setTimeout(_this._recalculateCardStyle.bind(_this));
        });
    };
    BaCardBlur.prototype._recalculateCardStyle = function () {
        if (!this._bodyBgSize) {
            return;
        }
        this._el.nativeElement.style.backgroundSize = Math.round(this._bodyBgSize.width) + 'px ' + Math.round(this._bodyBgSize.height) + 'px';
        this._el.nativeElement.style.backgroundPosition = Math.floor(this._bodyBgSize.positionX) + 'px ' + Math.floor(this._bodyBgSize.positionY) + 'px';
    };
    BaCardBlur.prototype._isEnabled = function () {
        return this._baConfig.get().theme.name == 'blur';
    };
    __decorate([
        core_1.HostBinding('class.card-blur'), 
        __metadata('design:type', Boolean)
    ], BaCardBlur.prototype, "isEnabled", void 0);
    __decorate([
        core_1.HostListener('window:resize'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], BaCardBlur.prototype, "_onWindowResize", null);
    BaCardBlur = __decorate([
        core_1.Directive({
            selector: '[baCardBlur]',
            providers: [baCardBlurHelper_service_1.BaCardBlurHelper]
        }), 
        __metadata('design:paramtypes', [theme_1.BaThemeConfigProvider, baCardBlurHelper_service_1.BaCardBlurHelper, core_1.ElementRef])
    ], BaCardBlur);
    return BaCardBlur;
}());
exports.BaCardBlur = BaCardBlur;
//# sourceMappingURL=baCardBlur.directive.js.map