"use strict";
var router_1 = require('@angular/router');
var charts_component_1 = require('./charts.component');
var chartistJs_component_1 = require('./components/chartistJs/chartistJs.component');
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: charts_component_1.Charts,
        children: [
            { path: 'chartist-js', component: chartistJs_component_1.ChartistJs }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=charts.routing.js.map