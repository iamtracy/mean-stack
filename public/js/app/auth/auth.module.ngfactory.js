/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as import0 from '@angular/core';
import * as import1 from './auth.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/forms';
import * as import4 from '@angular/router';
import * as import5 from './signup.compenent.ngfactory';
import * as import6 from './signin.component.ngfactory';
import * as import7 from './logout.compoenent.ngfactory';
import * as import8 from './signup.compenent';
import * as import9 from './signin.component';
import * as import10 from './logout.compoenent';
var AuthModuleInjector = (function (_super) {
    __extends(AuthModuleInjector, _super);
    function AuthModuleInjector(parent) {
        return _super.call(this, parent, [
            import5.SignupComponentNgFactory,
            import6.SigninComponentNgFactory,
            import7.LogoutComponentNgFactory
        ], []) || this;
    }
    Object.defineProperty(AuthModuleInjector.prototype, "_NgLocalization_5", {
        get: function () {
            if ((this.__NgLocalization_5 == null)) {
                (this.__NgLocalization_5 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID)));
            }
            return this.__NgLocalization_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthModuleInjector.prototype, "_FormBuilder_6", {
        get: function () {
            if ((this.__FormBuilder_6 == null)) {
                (this.__FormBuilder_6 = new import3.FormBuilder());
            }
            return this.__FormBuilder_6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthModuleInjector.prototype, "_\u0275i_7", {
        get: function () {
            if ((this.__ɵi_7 == null)) {
                (this.__ɵi_7 = new import3.ɵi());
            }
            return this.__ɵi_7;
        },
        enumerable: true,
        configurable: true
    });
    AuthModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ɵba_1 = new import3.ɵba();
        this._ReactiveFormsModule_2 = new import3.ReactiveFormsModule();
        this._RouterModule_3 = new import4.RouterModule(this.parent.get(import4.ɵa, null), this.parent.get(import4.Router, null));
        this._AuthModule_4 = new import1.AuthModule();
        this._ROUTES_8 = [[
                {
                    path: '',
                    redirectTo: 'signup',
                    pathMatch: 'full'
                },
                {
                    path: 'signup',
                    component: import8.SignupComponent
                },
                {
                    path: 'signin',
                    component: import9.SigninComponent
                },
                {
                    path: 'logout',
                    component: import10.LogoutComponent
                }
            ]
        ];
        return this._AuthModule_4;
    };
    AuthModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ɵba)) {
            return this._ɵba_1;
        }
        if ((token === import3.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_2;
        }
        if ((token === import4.RouterModule)) {
            return this._RouterModule_3;
        }
        if ((token === import1.AuthModule)) {
            return this._AuthModule_4;
        }
        if ((token === import2.NgLocalization)) {
            return this._NgLocalization_5;
        }
        if ((token === import3.FormBuilder)) {
            return this._FormBuilder_6;
        }
        if ((token === import3.ɵi)) {
            return this._ɵi_7;
        }
        if ((token === import4.ROUTES)) {
            return this._ROUTES_8;
        }
        return notFoundResult;
    };
    AuthModuleInjector.prototype.destroyInternal = function () {
    };
    return AuthModuleInjector;
}(import0.ɵNgModuleInjector));
export var AuthModuleNgFactory = new import0.NgModuleFactory(AuthModuleInjector, import1.AuthModule);
