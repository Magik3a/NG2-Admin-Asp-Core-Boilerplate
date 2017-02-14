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
var nga_module_1 = require('../../theme/nga.module');
var ng2_smart_table_1 = require('ng2-smart-table');
var tables_routing_1 = require('./tables.routing');
var tables_component_1 = require('./tables.component');
var basicTables_component_1 = require('./components/basicTables/basicTables.component');
var basicTables_service_1 = require('./components/basicTables/basicTables.service');
var responsiveTable_1 = require('./components/basicTables/components/responsiveTable');
var stripedTable_1 = require('./components/basicTables/components/stripedTable');
var borderedTable_1 = require('./components/basicTables/components/borderedTable');
var hoverTable_1 = require('./components/basicTables/components/hoverTable');
var condensedTable_1 = require('./components/basicTables/components/condensedTable');
var contextualTable_1 = require('./components/basicTables/components/contextualTable');
var smartTables_component_1 = require('./components/smartTables/smartTables.component');
var smartTables_service_1 = require('./components/smartTables/smartTables.service');
var TablesModule = (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                nga_module_1.NgaModule,
                tables_routing_1.routing,
                ng2_smart_table_1.Ng2SmartTableModule,
            ],
            declarations: [
                tables_component_1.Tables,
                basicTables_component_1.BasicTables,
                hoverTable_1.HoverTable,
                borderedTable_1.BorderedTable,
                condensedTable_1.CondensedTable,
                stripedTable_1.StripedTable,
                contextualTable_1.ContextualTable,
                responsiveTable_1.ResponsiveTable,
                smartTables_component_1.SmartTables,
            ],
            providers: [
                basicTables_service_1.BasicTablesService,
                smartTables_service_1.SmartTablesService,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TablesModule);
    return TablesModule;
}());
exports.TablesModule = TablesModule;
//# sourceMappingURL=tables.module.js.map