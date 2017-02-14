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
var _ = require('lodash');
var theme_constants_1 = require('./theme.constants');
var BaThemeConfigProvider = (function () {
    function BaThemeConfigProvider() {
        this.basic = {
            default: '#ffffff',
            defaultText: '#ffffff',
            border: '#dddddd',
            borderDark: '#aaaaaa',
        };
        // main functional color scheme
        this.colorScheme = {
            primary: '#00abff',
            info: '#40daf1',
            success: '#8bd22f',
            warning: '#e7ba08',
            danger: '#f95372',
        };
        // dashboard colors for charts
        this.dashboardColors = {
            blueStone: '#40daf1',
            surfieGreen: '#00abff',
            silverTree: '#1b70ef',
            gossip: '#3c4eb9',
            white: '#ffffff',
        };
        this.conf = {
            theme: {
                name: 'ng2',
            },
            colors: {
                default: this.basic.default,
                defaultText: this.basic.defaultText,
                border: this.basic.border,
                borderDark: this.basic.borderDark,
                primary: this.colorScheme.primary,
                info: this.colorScheme.info,
                success: this.colorScheme.success,
                warning: this.colorScheme.warning,
                danger: this.colorScheme.danger,
                primaryLight: theme_constants_1.colorHelper.tint(this.colorScheme.primary, 30),
                infoLight: theme_constants_1.colorHelper.tint(this.colorScheme.info, 30),
                successLight: theme_constants_1.colorHelper.tint(this.colorScheme.success, 30),
                warningLight: theme_constants_1.colorHelper.tint(this.colorScheme.warning, 30),
                dangerLight: theme_constants_1.colorHelper.tint(this.colorScheme.danger, 30),
                primaryDark: theme_constants_1.colorHelper.shade(this.colorScheme.primary, 15),
                infoDark: theme_constants_1.colorHelper.shade(this.colorScheme.info, 15),
                successDark: theme_constants_1.colorHelper.shade(this.colorScheme.success, 15),
                warningDark: theme_constants_1.colorHelper.shade(this.colorScheme.warning, 15),
                dangerDark: theme_constants_1.colorHelper.shade(this.colorScheme.danger, 15),
                dashboard: {
                    blueStone: this.dashboardColors.blueStone,
                    surfieGreen: this.dashboardColors.surfieGreen,
                    silverTree: this.dashboardColors.silverTree,
                    gossip: this.dashboardColors.gossip,
                    white: this.dashboardColors.white,
                },
                custom: {
                    dashboardPieChart: theme_constants_1.colorHelper.hexToRgbA(this.basic.defaultText, 0.8),
                    dashboardLineChart: this.basic.defaultText,
                }
            }
        };
    }
    BaThemeConfigProvider.prototype.get = function () {
        return this.conf;
    };
    BaThemeConfigProvider.prototype.changeTheme = function (theme) {
        _.merge(this.get().theme, theme);
    };
    BaThemeConfigProvider.prototype.changeColors = function (colors) {
        _.merge(this.get().colors, colors);
    };
    BaThemeConfigProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BaThemeConfigProvider);
    return BaThemeConfigProvider;
}());
exports.BaThemeConfigProvider = BaThemeConfigProvider;
//# sourceMappingURL=theme.configProvider.js.map