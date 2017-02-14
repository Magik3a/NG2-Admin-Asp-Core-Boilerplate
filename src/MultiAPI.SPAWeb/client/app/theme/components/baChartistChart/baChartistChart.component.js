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
var Chartist = require('chartist');
require('style-loader!./baChartistChart.scss');
var BaChartistChart = (function () {
    function BaChartistChart() {
        this.onChartReady = new core_1.EventEmitter();
    }
    BaChartistChart.prototype.ngAfterViewInit = function () {
        this.chart = new Chartist[this.baChartistChartType](this._selector.nativeElement, this.baChartistChartData, this.baChartistChartOptions, this.baChartistChartResponsive);
        this.onChartReady.emit(this.chart);
    };
    BaChartistChart.prototype.ngOnChanges = function (changes) {
        if (this.chart) {
            this.chart.update(this.baChartistChartData, this.baChartistChartOptions);
        }
    };
    BaChartistChart.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.detach();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BaChartistChart.prototype, "baChartistChartType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BaChartistChart.prototype, "baChartistChartData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BaChartistChart.prototype, "baChartistChartOptions", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BaChartistChart.prototype, "baChartistChartResponsive", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BaChartistChart.prototype, "baChartistChartClass", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BaChartistChart.prototype, "onChartReady", void 0);
    __decorate([
        core_1.ViewChild('baChartistChart'), 
        __metadata('design:type', core_1.ElementRef)
    ], BaChartistChart.prototype, "_selector", void 0);
    BaChartistChart = __decorate([
        core_1.Component({
            selector: 'ba-chartist-chart',
            templateUrl: './baChartistChart.html',
            providers: [],
        }), 
        __metadata('design:paramtypes', [])
    ], BaChartistChart);
    return BaChartistChart;
}());
exports.BaChartistChart = BaChartistChart;
//# sourceMappingURL=baChartistChart.component.js.map