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
var PieChartService = (function () {
    function PieChartService(_baConfig) {
        this._baConfig = _baConfig;
    }
    PieChartService.prototype.getData = function () {
        var pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
        return [
            {
                color: pieColor,
                description: 'New Visits',
                stats: '57,820',
                icon: 'person',
            }, {
                color: pieColor,
                description: 'Purchases',
                stats: '$ 89,745',
                icon: 'money',
            }, {
                color: pieColor,
                description: 'Active Users',
                stats: '178,391',
                icon: 'face',
            }, {
                color: pieColor,
                description: 'Returned',
                stats: '32,592',
                icon: 'refresh',
            }
        ];
    };
    PieChartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [theme_1.BaThemeConfigProvider])
    ], PieChartService);
    return PieChartService;
}());
exports.PieChartService = PieChartService;
//# sourceMappingURL=pieChart.service.js.map