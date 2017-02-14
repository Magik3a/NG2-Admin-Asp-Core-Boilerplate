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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var hmr_1 = require('@angularclass/hmr');
/*
 * Platform and Environment providers/directives/pipes
 */
var environment_1 = require('./environment');
var app_routing_1 = require('./app.routing');
// App is our top level component
var app_component_1 = require('./app.component');
var app_service_1 = require('./app.service');
var global_state_1 = require('./global.state');
var nga_module_1 = require('./theme/nga.module');
var pages_module_1 = require('./pages/pages.module');
// Application wide providers
var APP_PROVIDERS = [
    app_service_1.AppState,
    global_state_1.GlobalState
];
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state)
            return;
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = hmr_1.createInputTransfer();
        // remove styles
        hmr_1.removeNgStyles();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.App],
            declarations: [
                app_component_1.App
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                nga_module_1.NgaModule.forRoot(),
                pages_module_1.PagesModule,
                app_routing_1.routing
            ],
            providers: [
                environment_1.ENV_PROVIDERS,
                APP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ApplicationRef, app_service_1.AppState])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map