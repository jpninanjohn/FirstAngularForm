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
var user_1 = require('../models/user');
var UserProfileComponent = (function () {
    function UserProfileComponent() {
        this.userDeleted = new core_1.EventEmitter();
    }
    UserProfileComponent.prototype.deleteUser = function () {
        this.userDeleted.emit({ deletedUser: this.user });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], UserProfileComponent.prototype, "user", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UserProfileComponent.prototype, "userDeleted", void 0);
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            template: "\n          <div class=\"jumbotron\" *ngIf= \"user\">\n            <h2>{{user.name}} <small>({{user.username}})</small></h2>\n            <input type =\"text\" class=\"form-control\" [(ngModel)] = \"user.name\">\n            <button class=\"btn btn-danger float-right\" (click) = \"deleteUser()\"> Delete User </button>\n          </div>\n        ",
            styleUrls: ['./app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map