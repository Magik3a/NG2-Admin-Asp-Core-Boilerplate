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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var ngx_uploader_1 = require('ngx-uploader');
var theme_config_1 = require('./theme.config');
var theme_configProvider_1 = require('./theme.configProvider');
var components_1 = require('./components');
var baCardBlur_directive_1 = require('./components/baCard/baCardBlur.directive');
var directives_1 = require('./directives');
var pipes_1 = require('./pipes');
var services_1 = require('./services');
var validators_1 = require('./validators');
var NGA_COMPONENTS = [
    components_1.BaAmChart,
    components_1.BaBackTop,
    components_1.BaCard,
    components_1.BaChartistChart,
    components_1.BaCheckbox,
    components_1.BaContentTop,
    components_1.BaFullCalendar,
    components_1.BaMenuItem,
    components_1.BaMenu,
    components_1.BaMsgCenter,
    components_1.BaMultiCheckbox,
    components_1.BaPageTop,
    components_1.BaPictureUploader,
    components_1.BaSidebar
];
var NGA_DIRECTIVES = [
    directives_1.BaScrollPosition,
    directives_1.BaSlimScroll,
    directives_1.BaThemeRun,
    baCardBlur_directive_1.BaCardBlur
];
var NGA_PIPES = [
    pipes_1.BaAppPicturePipe,
    pipes_1.BaKameleonPicturePipe,
    pipes_1.BaProfilePicturePipe
];
var NGA_SERVICES = [
    services_1.BaImageLoaderService,
    services_1.BaThemePreloader,
    services_1.BaThemeSpinner,
    services_1.BaMenuService
];
var NGA_VALIDATORS = [
    validators_1.EmailValidator,
    validators_1.EqualPasswordsValidator
];
var NgaModule = (function () {
    function NgaModule() {
    }
    NgaModule.forRoot = function () {
        return {
            ngModule: NgaModule,
            providers: [
                theme_configProvider_1.BaThemeConfigProvider,
                theme_config_1.BaThemeConfig
            ].concat(NGA_VALIDATORS, NGA_SERVICES),
        };
    };
    NgaModule = __decorate([
        core_1.NgModule({
            declarations: NGA_PIPES.concat(NGA_DIRECTIVES, NGA_COMPONENTS),
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ngx_uploader_1.NgUploaderModule,
            ],
            exports: NGA_PIPES.concat(NGA_DIRECTIVES, NGA_COMPONENTS)
        }), 
        __metadata('design:paramtypes', [])
    ], NgaModule);
    return NgaModule;
}());
exports.NgaModule = NgaModule;
//# sourceMappingURL=nga.module.js.map