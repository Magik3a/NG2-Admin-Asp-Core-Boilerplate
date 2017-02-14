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
require('style-loader!./baMenuItem.scss');
var BaMenuItem = (function () {
    function BaMenuItem() {
        this.child = false;
        this.itemHover = new core_1.EventEmitter();
        this.toggleSubMenu = new core_1.EventEmitter();
    }
    BaMenuItem.prototype.onHoverItem = function ($event) {
        this.itemHover.emit($event);
    };
    BaMenuItem.prototype.onToggleSubMenu = function ($event, item) {
        $event.item = item;
        this.toggleSubMenu.emit($event);
        return false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BaMenuItem.prototype, "menuItem", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], BaMenuItem.prototype, "child", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BaMenuItem.prototype, "itemHover", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BaMenuItem.prototype, "toggleSubMenu", void 0);
    BaMenuItem = __decorate([
        core_1.Component({
            selector: 'ba-menu-item',
            templateUrl: './baMenuItem.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BaMenuItem);
    return BaMenuItem;
}());
exports.BaMenuItem = BaMenuItem;
//# sourceMappingURL=baMenuItem.component.js.map