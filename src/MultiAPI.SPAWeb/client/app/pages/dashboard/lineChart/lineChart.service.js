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
var LineChartService = (function () {
    function LineChartService(_baConfig) {
        this._baConfig = _baConfig;
    }
    LineChartService.prototype.getData = function () {
        var layoutColors = this._baConfig.get().colors;
        var graphColor = this._baConfig.get().colors.custom.dashboardLineChart;
        return {
            type: 'serial',
            theme: 'blur',
            marginTop: 15,
            marginRight: 15,
            responsive: {
                'enabled': true
            },
            dataProvider: [
                { date: new Date(2012, 11), value: 0, value0: 0 },
                { date: new Date(2013, 0), value: 15000, value0: 19000 },
                { date: new Date(2013, 1), value: 30000, value0: 20000 },
                { date: new Date(2013, 2), value: 25000, value0: 22000 },
                { date: new Date(2013, 3), value: 21000, value0: 25000 },
                { date: new Date(2013, 4), value: 24000, value0: 29000 },
                { date: new Date(2013, 5), value: 31000, value0: 26000 },
                { date: new Date(2013, 6), value: 40000, value0: 25000 },
                { date: new Date(2013, 7), value: 37000, value0: 20000 },
                { date: new Date(2013, 8), value: 18000, value0: 22000 },
                { date: new Date(2013, 9), value: 5000, value0: 26000 },
                { date: new Date(2013, 10), value: 40000, value0: 30000 },
                { date: new Date(2013, 11), value: 20000, value0: 25000 },
                { date: new Date(2014, 0), value: 5000, value0: 13000 },
                { date: new Date(2014, 1), value: 3000, value0: 13000 },
                { date: new Date(2014, 2), value: 1800, value0: 13000 },
                { date: new Date(2014, 3), value: 10400, value0: 13000 },
                { date: new Date(2014, 4), value: 25500, value0: 13000 },
                { date: new Date(2014, 5), value: 2100, value0: 13000 },
                { date: new Date(2014, 6), value: 6500, value0: 13000 },
                { date: new Date(2014, 7), value: 1100, value0: 13000 },
                { date: new Date(2014, 8), value: 17200, value0: 13000 },
                { date: new Date(2014, 9), value: 26900, value0: 13000 },
                { date: new Date(2014, 10), value: 14100, value0: 13000 },
                { date: new Date(2014, 11), value: 35300, value0: 13000 },
                { date: new Date(2015, 0), value: 54800, value0: 13000 },
                { date: new Date(2015, 1), value: 49800, value0: 13000 }
            ],
            categoryField: 'date',
            categoryAxis: {
                parseDates: true,
                gridAlpha: 0,
                color: layoutColors.defaultText,
                axisColor: layoutColors.defaultText
            },
            valueAxes: [
                {
                    minVerticalGap: 50,
                    gridAlpha: 0,
                    color: layoutColors.defaultText,
                    axisColor: layoutColors.defaultText
                }
            ],
            graphs: [
                {
                    id: 'g0',
                    bullet: 'none',
                    useLineColorForBulletBorder: true,
                    lineColor: theme_1.colorHelper.hexToRgbA(graphColor, 0.3),
                    lineThickness: 1,
                    negativeLineColor: layoutColors.danger,
                    type: 'smoothedLine',
                    valueField: 'value0',
                    fillAlphas: 1,
                    fillColorsField: 'lineColor'
                },
                {
                    id: 'g1',
                    bullet: 'none',
                    useLineColorForBulletBorder: true,
                    lineColor: theme_1.colorHelper.hexToRgbA(graphColor, 0.15),
                    lineThickness: 1,
                    negativeLineColor: layoutColors.danger,
                    type: 'smoothedLine',
                    valueField: 'value',
                    fillAlphas: 1,
                    fillColorsField: 'lineColor'
                }
            ],
            chartCursor: {
                categoryBalloonDateFormat: 'MM YYYY',
                categoryBalloonColor: '#4285F4',
                categoryBalloonAlpha: 0.7,
                cursorAlpha: 0,
                valueLineEnabled: true,
                valueLineBalloonEnabled: true,
                valueLineAlpha: 0.5
            },
            dataDateFormat: 'MM YYYY',
            export: {
                enabled: true
            },
            creditsPosition: 'bottom-right',
            zoomOutButton: {
                backgroundColor: '#fff',
                backgroundAlpha: 0
            },
            zoomOutText: '',
            pathToImages: theme_1.layoutPaths.images.amChart
        };
    };
    LineChartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [theme_1.BaThemeConfigProvider])
    ], LineChartService);
    return LineChartService;
}());
exports.LineChartService = LineChartService;
//# sourceMappingURL=lineChart.service.js.map