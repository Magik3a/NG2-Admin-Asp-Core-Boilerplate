"use strict";
var router_1 = require('@angular/router');
var ui_component_1 = require('./ui.component');
var buttons_component_1 = require('./components/buttons/buttons.component');
var grid_component_1 = require('./components/grid/grid.component');
var icons_component_1 = require('./components/icons/icons.component');
var modals_component_1 = require('./components/modals/modals.component');
var typography_component_1 = require('./components/typography/typography.component');
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: ui_component_1.Ui,
        children: [
            { path: 'buttons', component: buttons_component_1.Buttons },
            { path: 'grid', component: grid_component_1.Grid },
            { path: 'icons', component: icons_component_1.Icons },
            { path: 'typography', component: typography_component_1.Typography },
            { path: 'modals', component: modals_component_1.Modals }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=ui.routing.js.map