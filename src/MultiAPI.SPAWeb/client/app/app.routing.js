"use strict";
var router_1 = require('@angular/router');
exports.routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages/dashboard' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map