"use strict";
var router_1 = require('@angular/router');
var components_component_1 = require('./components.component');
var treeView_component_1 = require('./components/treeView/treeView.component');
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: components_component_1.Components,
        children: [
            { path: 'treeview', component: treeView_component_1.TreeView }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=components.routing.js.map