"use strict";
var router_1 = require('@angular/router');
var editors_component_1 = require('./editors.component');
var ckeditor_component_1 = require('./components/ckeditor/ckeditor.component');
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: editors_component_1.Editors,
        children: [
            { path: 'ckeditor', component: ckeditor_component_1.Ckeditor }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=editors.routing.js.map