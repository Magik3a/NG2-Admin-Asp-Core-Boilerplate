"use strict";
/*
 * Angular bootstraping
 */
var platform_browser_1 = require('@angular/platform-browser');
var environment_1 = require('./app/environment');
/*
 * App Module
 * our top level module that holds all of our components
 */
var app_module_ngfactory_1 = require('../compiled/client/app/app.module.ngfactory');
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return platform_browser_1.platformBrowser()
        .bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory)
        .then(environment_1.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
function bootstrapDomReady() {
    document.addEventListener('DOMContentLoaded', main);
}
exports.bootstrapDomReady = bootstrapDomReady;
bootstrapDomReady();
//# sourceMappingURL=main.browser.aot.js.map