"use strict";
var router_1 = require('@angular/router');
var pages_component_1 = require('./pages.component');
// noinspection TypeScriptValidateTypes
// export function loadChildren(path) { return System.import(path); };
exports.routes = [
    {
        path: 'login',
        loadChildren: 'app/pages/login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: 'app/pages/register/register.module#RegisterModule'
    },
    {
        path: 'pages',
        component: pages_component_1.Pages,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
            { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule' },
            { path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule' },
            { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule' },
            { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule' },
            { path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule' },
            { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' },
            { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule' }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=pages.routing.js.map