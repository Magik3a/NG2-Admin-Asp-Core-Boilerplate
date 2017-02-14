"use strict";
var router_1 = require('@angular/router');
var forms_component_1 = require('./forms.component');
var inputs_component_1 = require('./components/inputs/inputs.component');
var layouts_component_1 = require('./components/layouts/layouts.component');
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: forms_component_1.Forms,
        children: [
            { path: 'inputs', component: inputs_component_1.Inputs },
            { path: 'layouts', component: layouts_component_1.Layouts }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=forms.routing.js.map