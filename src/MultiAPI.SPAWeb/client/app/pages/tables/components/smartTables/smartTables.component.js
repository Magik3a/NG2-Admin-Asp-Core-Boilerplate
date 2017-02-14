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
var smartTables_service_1 = require('./smartTables.service');
var ng2_smart_table_1 = require('ng2-smart-table');
require('style-loader!./smartTables.scss');
var SmartTables = (function () {
    function SmartTables(service) {
        var _this = this;
        this.service = service;
        this.query = '';
        this.settings = {
            add: {
                addButtonContent: '<i class="ion-ios-plus-outline"></i>',
                createButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="ion-edit"></i>',
                saveButtonContent: '<i class="ion-checkmark"></i>',
                cancelButtonContent: '<i class="ion-close"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="ion-trash-a"></i>',
                confirmDelete: true
            },
            columns: {
                id: {
                    title: 'ID',
                    type: 'number'
                },
                firstName: {
                    title: 'First Name',
                    type: 'string'
                },
                lastName: {
                    title: 'Last Name',
                    type: 'string'
                },
                username: {
                    title: 'Username',
                    type: 'string'
                },
                email: {
                    title: 'E-mail',
                    type: 'string'
                },
                age: {
                    title: 'Age',
                    type: 'number'
                }
            }
        };
        this.source = new ng2_smart_table_1.LocalDataSource();
        this.service.getData().then(function (data) {
            _this.source.load(data);
        });
    }
    SmartTables.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    SmartTables = __decorate([
        core_1.Component({
            selector: 'smart-tables',
            templateUrl: './smartTables.html',
        }), 
        __metadata('design:paramtypes', [smartTables_service_1.SmartTablesService])
    ], SmartTables);
    return SmartTables;
}());
exports.SmartTables = SmartTables;
//# sourceMappingURL=smartTables.component.js.map