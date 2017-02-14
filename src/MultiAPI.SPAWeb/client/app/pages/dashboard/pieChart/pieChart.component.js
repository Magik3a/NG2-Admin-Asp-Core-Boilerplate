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
var pieChart_service_1 = require('./pieChart.service');
require('easy-pie-chart/dist/jquery.easypiechart.js');
require('style-loader!./pieChart.scss');
var PieChart = (function () {
    function PieChart(_pieChartService) {
        this._pieChartService = _pieChartService;
        this._init = false;
        this.charts = this._pieChartService.getData();
    }
    PieChart.prototype.ngAfterViewInit = function () {
        if (!this._init) {
            this._loadPieCharts();
            this._updatePieCharts();
            this._init = true;
        }
    };
    PieChart.prototype._loadPieCharts = function () {
        jQuery('.chart').each(function () {
            var chart = jQuery(this);
            chart.easyPieChart({
                easing: 'easeOutBounce',
                onStep: function (from, to, percent) {
                    jQuery(this.el).find('.percent').text(Math.round(percent));
                },
                barColor: jQuery(this).attr('data-rel'),
                trackColor: 'rgba(0,0,0,0)',
                size: 84,
                scaleLength: 0,
                animation: 2000,
                lineWidth: 9,
                lineCap: 'round',
            });
        });
    };
    PieChart.prototype._updatePieCharts = function () {
        var getRandomArbitrary = function (min, max) { return Math.random() * (max - min) + min; };
        jQuery('.pie-charts .chart').each(function (index, chart) {
            jQuery(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
        });
    };
    PieChart = __decorate([
        core_1.Component({
            selector: 'pie-chart',
            templateUrl: './pieChart.html'
        }), 
        __metadata('design:paramtypes', [pieChart_service_1.PieChartService])
    ], PieChart);
    return PieChart;
}());
exports.PieChart = PieChart;
//# sourceMappingURL=pieChart.component.js.map