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
var ngx_uploader_1 = require('ngx-uploader');
var BaPictureUploader = (function () {
    function BaPictureUploader(renderer) {
        this.renderer = renderer;
        this.defaultPicture = '';
        this.picture = '';
        this.uploaderOptions = { url: '' };
        this.canDelete = true;
        this.onUpload = new core_1.EventEmitter();
        this.onUploadCompleted = new core_1.EventEmitter();
    }
    BaPictureUploader.prototype.beforeUpload = function (uploadingFile) {
        var files = this._fileUpload.nativeElement.files;
        if (files.length) {
            var file = files[0];
            this._changePicture(file);
            if (!this._canUploadOnServer()) {
                uploadingFile.setAbort();
            }
            else {
                this.uploadInProgress = true;
            }
        }
    };
    BaPictureUploader.prototype.bringFileSelector = function () {
        this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
        return false;
    };
    BaPictureUploader.prototype.removePicture = function () {
        this.picture = '';
        return false;
    };
    BaPictureUploader.prototype._changePicture = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function (event) {
            _this.picture = event.target.result;
        }, false);
        reader.readAsDataURL(file);
    };
    BaPictureUploader.prototype._onUpload = function (data) {
        if (data['done'] || data['abort'] || data['error']) {
            this._onUploadCompleted(data);
        }
        else {
            this.onUpload.emit(data);
        }
    };
    BaPictureUploader.prototype._onUploadCompleted = function (data) {
        this.uploadInProgress = false;
        this.onUploadCompleted.emit(data);
    };
    BaPictureUploader.prototype._canUploadOnServer = function () {
        return !!this.uploaderOptions['url'];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BaPictureUploader.prototype, "defaultPicture", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BaPictureUploader.prototype, "picture", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', ngx_uploader_1.NgUploaderOptions)
    ], BaPictureUploader.prototype, "uploaderOptions", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], BaPictureUploader.prototype, "canDelete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BaPictureUploader.prototype, "onUpload", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BaPictureUploader.prototype, "onUploadCompleted", void 0);
    __decorate([
        core_1.ViewChild('fileUpload'), 
        __metadata('design:type', core_1.ElementRef)
    ], BaPictureUploader.prototype, "_fileUpload", void 0);
    BaPictureUploader = __decorate([
        core_1.Component({
            selector: 'ba-picture-uploader',
            styleUrls: ['./baPictureUploader.scss'],
            templateUrl: './baPictureUploader.html',
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], BaPictureUploader);
    return BaPictureUploader;
}());
exports.BaPictureUploader = BaPictureUploader;
//# sourceMappingURL=baPictureUploader.component.js.map