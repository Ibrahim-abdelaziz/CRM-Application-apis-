(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add-task/add-task.component */ "./src/app/components/add-task/add-task.component.ts");





var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'add-task', component: _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_4__["AddTaskComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tasks';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-task/add-task.component */ "./src/app/components/add-task/add-task.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _services_tasks_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/tasks.service */ "./src/app/services/tasks.service.ts");
/* harmony import */ var _services_APIService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/APIService */ "./src/app/services/APIService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_7__["AddTaskComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            ],
            providers: [_services_APIService__WEBPACK_IMPORTED_MODULE_10__["ApiService"], _services_tasks_service__WEBPACK_IMPORTED_MODULE_9__["TasksService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-task/add-task.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n    text-align: center;\r\n    color: #999;\r\n    margin-top: 10px;\r\n}\r\n\r\n.one{\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    width: 30%;\r\n}\r\n\r\ninput{\r\n    margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdGFzay9hZGQtdGFzay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXRhc2svYWRkLXRhc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ub25le1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/add-task/add-task.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Add New Customer</h2>\n\n<div class=\"one\">\n  <form [formGroup]='form' (submit)=\"SubmitPost(form)\">\n    <div class=\"form-group\">\n      <div *ngIf=\"form.errors\" class=\"alert alert.danger\">\n          Form is invalid\n      </div>\n      <input [(ngModel)]=\"clientModel.First_Name\" placeholder=\"Enter First_Name\" type=\"text\" class=\"form-control\" id=\"First_NameControl\" formControlName=\"First_NameControl\">            \n        <div *ngIf=\"form.controls.First_NameControl.touched && form.controls.First_NameControl.invalid\" class=\"alert alert-danger\">\n            <div *ngIf='form.controls.First_NameControl.errors.required'>\n              First_Name is Required\n            </div>\n        </div>\n      <input [(ngModel)]=\"clientModel.Last_Name\" placeholder=\"Enter Last_Name\" type=\"text\" class=\"form-control\" id=\"Last_NameControl\" formControlName=\"Last_NameControl\">            \n        <div *ngIf=\"form.controls.Last_NameControl.touched && form.controls.Last_NameControl.invalid\" class=\"alert alert-danger\">\n            <div *ngIf='form.controls.Last_NameControl.errors.required'>\n              Last_Name is Required\n            </div>\n        </div>\n        <input [(ngModel)]=\"clientModel.Phone\" placeholder=\"Enter phone\" type=\"text\" class=\"form-control\" id=\"phoneControl\" formControlName=\"phoneControl\">            \n        <div *ngIf=\"form.controls.phoneControl.touched && form.controls.phoneControl.invalid\" class=\"alert alert-danger\">\n            <div *ngIf='form.controls.phoneControl.errors.required'>\n              phone is Required\n            </div>\n        </div> \n        <input [(ngModel)]=\"clientModel.Company\" placeholder=\"Enter company\" type=\"text\" class=\"form-control\" id=\"companyControl\" formControlName=\"companyControl\">            \n        <div *ngIf=\"form.controls.companyControl.touched && form.controls.companyControl.invalid\" class=\"alert alert-danger\">\n            <div *ngIf='form.controls.companyControl.errors.required'>\n              company is Required\n            </div>\n        </div> \n        <input [(ngModel)]=\"clientModel.Email\" placeholder=\"Enter email\" type=\"email\" class=\"form-control\" id=\"emailControl\" formControlName=\"emailControl\">            \n        <div *ngIf=\"form.controls.emailControl.touched && form.controls.emailControl.invalid\" class=\"alert alert-danger\">\n          <div *ngIf='form.controls.emailControl.errors.required' pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\\\.[a-z]{2,4}$\">\n              Email is Required & Email must be a valid email address\n          </div>\n        </div> \n        <input [(ngModel)]=\"clientModel.Balance\" placeholder=\"Enter Balance\" type=\"text\" class=\"form-control\" id=\"BalanceControl\" formControlName=\"BalanceControl\">            \n        <div *ngIf=\"form.controls.BalanceControl.touched && form.controls.BalanceControl.invalid\" class=\"alert alert-danger\">\n            <div *ngIf='form.controls.BalanceControl.errors.required'>\n              Balance is Required\n            </div>\n        </div> \n        <input [(ngModel)]=\"clientModel.Authorization_Forms\" placeholder=\"Enter Authorization_Forms\" type=\"text\" class=\"form-control\" id=\"Authorization_FormsControl\" formControlName=\"Authorization_FormsControl\">            \n        <div *ngIf=\"form.controls.Authorization_FormsControl.touched && form.controls.Authorization_FormsControl.invalid\" class=\"alert alert-danger\">\n            <div *ngIf='form.controls.Authorization_FormsControl.errors.required'>\n              Authorization_Forms is Required\n            </div>\n        </div>\n        <input [(ngModel)]=\"clientModel.Reseller\" placeholder=\"Enter Reseller\" type=\"text\" class=\"form-control\" id=\"ResellerControl\" formControlName=\"ResellerControl\">            \n        <div *ngIf=\"form.controls.ResellerControl.touched && form.controls.ResellerControl.invalid\" class=\"alert alert-danger\">\n            <div *ngIf='form.controls.ResellerControl.errors.required'>\n              Reseller is Required\n            </div>\n        </div>\n        <input [(ngModel)]=\"clientModel.Client_may_have_Private\" placeholder=\"Enter Client_may_have_Private\" type=\"text\" class=\"form-control\" id=\"Client_may_have_PrivateControl\" formControlName=\"Client_may_have_PrivateControl\">            \n        <div *ngIf=\"form.controls.Client_may_have_PrivateControl.touched && form.controls.Client_may_have_PrivateControl.invalid\" class=\"alert alert-danger\">\n            <div *ngIf='form.controls.Client_may_have_PrivateControl.errors.required'>\n              Client_may_have_Private is Required\n            </div>\n        </div>             \n    </div>          \n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/add-task/add-task.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.ts ***!
  \***********************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tasks.service */ "./src/app/services/tasks.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");






var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(tasksSer, router) {
        this.tasksSer = tasksSer;
        this.router = router;
        this.clientModel = {
            First_Name: "",
            Last_Name: "",
            Phone: "",
            Company: "",
            Email: "",
            Balance: "",
            Authorization_Forms: "",
            Reseller: "",
            Client_may_have_Private: "",
        };
    }
    AddTaskComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'First_NameControl': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'Last_NameControl': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'phoneControl': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(12)]),
            'companyControl': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'emailControl': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            'BalanceControl': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'Authorization_FormsControl': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'ResellerControl': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'Client_may_have_PrivateControl': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    AddTaskComponent.prototype.checkFormsFields = function () {
        for (var inner in this.form.controls) {
            this.form.get(inner).markAsTouched();
        }
    };
    AddTaskComponent.prototype.SubmitPost = function (_a) {
        var _this = this;
        var valid = _a.valid, value = _a.value;
        this.checkFormsFields();
        debugger;
        if (valid) {
            this.tasksSer.createClients(this.clientModel).subscribe(function (result) {
                alert("post has been Created successfully ..!!!");
                console.log(result);
                _this.router.navigate(['/']);
            }, function (error) {
                alert("post is not Created ..!!!");
                console.log(error);
            }, function () {
                console.log('Done');
            });
        }
        ;
    };
    AddTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/components/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.css */ "./src/app/components/add-task/add-task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Start Header */\r\n.vl {\r\n    border-left: 3px solid gray;\r\n    \r\n  }\r\n.home{\r\n    background: #C7C1FD;\r\n}\r\n.home img{\r\n    border-radius: 50%;\r\n}\r\n.head .client{\r\n    background:#5D5899;\r\n    color: #FFF;\r\n    height: 60px;\r\n}\r\n.head .client_box img{\r\n    border-radius: 50%;\r\n    height: 40px;\r\n    /*margin-right: 10%*/\r\n}\r\n.head .client_box h4{\r\n    line-height: 1.5;\r\n    padding-top: 10px;\r\n}\r\n.head .cont_groub{\r\n    border-left: 3px solid #86059e;\r\n    padding: 0 10px\r\n}\r\nspan{\r\n    font-size: 11px;\r\n}\r\n.head .new_clinet{\r\n    background: #FF8800;\r\n    text-decoration:underline;\r\n    line-height:1;\r\n    height: 30px;\r\n\r\n}\r\n.a_clinets{\r\n    background-color: #C7C1FD;\r\n}\r\n.a_clinets a{\r\n    text-decoration:underline;\r\n}\r\n.head .new_clinet a{\r\n    color: rgb(45, 45, 131);\r\n    font-size: 11px;\r\n    font-weight: 800;\r\n    \r\n}\r\n.head .a_clinets{\r\n    background: #C7C1FD;\r\n    color: blue;\r\n    font-size: 14px;\r\n    font-weight: 1000;\r\n    height: 40px;\r\n}\r\n::-webkit-input-placeholder{\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    color: #000;\r\n    text-align:left;\r\n    \r\n}\r\n::-moz-placeholder{\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    color: #000;\r\n    text-align:left;\r\n    \r\n}\r\n::-ms-input-placeholder{\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    color: #000;\r\n    text-align:left;\r\n    \r\n}\r\n::placeholder{\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    color: #000;\r\n    text-align:left;\r\n    \r\n}\r\n.head .a_clinets a{\r\n    color: blue;\r\n    text-decoration: none\r\n}\r\n.head .a_clinets input[type=text]{\r\n    width: 60px;\r\n}\r\n.head .a_clinets input[type=number]{\r\n    border: px solid #C7C1FD;\r\n    border-radius: 10px ;\r\n    overflow: unset\r\n}\r\nsection{\r\n    width: 100%;\r\n    height:35px;\r\n    background-color:#f2f2f2;\r\n    float: left;\r\n}\r\nsection p{\r\n    font-size: 11px;\r\n    margin-top: 10px;\r\n    margin-left: 25px;\r\n    padding-top: 7px;\r\n    font-weight:700;\r\n\r\n}\r\nspan{\r\n    font-weight:900;\r\n\r\n}\r\n.n{\r\n    float: right;\r\n    position: relative;\r\n    bottom: 32px;\r\n    right:70px;\r\n}\r\ntable{\r\n    width: 100%;\r\n    \r\n}\r\nth{\r\n    color: blue;\r\n    text-align: center;\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n    font-size: 11px;\r\n    font-weight: 900;\r\n}\r\ntd{\r\n    font-size: 11px;\r\n    font-weight: 650; \r\n}\r\n.balance{\r\n    text-align:right;\r\n}\r\n.tab-content > .active{\r\n    display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUFDakI7SUFDSSwyQkFBMkI7O0VBRTdCO0FBRUY7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCO0FBQ0o7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFlBQVk7O0FBRWhCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTs7QUFFbkI7QUFOQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7O0FBRW5CO0FBTkE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxlQUFlOztBQUVuQjtBQU5BO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTs7QUFFbkI7QUFDQTtJQUNJLFdBQVc7SUFDWDtBQUNKO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEI7QUFDSjtBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTs7QUFFbkI7QUFFQTtJQUNJLGVBQWU7O0FBRW5CO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFFQTtJQUNJLFdBQVc7O0FBRWY7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3RhcnQgSGVhZGVyICovXHJcbi52bCB7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIGdyYXk7XHJcbiAgICBcclxuICB9XHJcblxyXG4uaG9tZXtcclxuICAgIGJhY2tncm91bmQ6ICNDN0MxRkQ7XHJcbn1cclxuXHJcbi5ob21lIGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uaGVhZCAuY2xpZW50e1xyXG4gICAgYmFja2dyb3VuZDojNUQ1ODk5O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuLmhlYWQgLmNsaWVudF9ib3ggaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLyptYXJnaW4tcmlnaHQ6IDEwJSovXHJcbn1cclxuXHJcbi5oZWFkIC5jbGllbnRfYm94IGg0e1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi5oZWFkIC5jb250X2dyb3Vie1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjODYwNTllO1xyXG4gICAgcGFkZGluZzogMCAxMHB4XHJcbn1cclxuc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuLmhlYWQgLm5ld19jbGluZXR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY4ODAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxuICAgIGxpbmUtaGVpZ2h0OjE7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcblxyXG59XHJcblxyXG4uYV9jbGluZXRze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M3QzFGRDtcclxufVxyXG5cclxuLmFfY2xpbmV0cyBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcclxufVxyXG5cclxuLmhlYWQgLm5ld19jbGluZXQgYXtcclxuICAgIGNvbG9yOiByZ2IoNDUsIDQ1LCAxMzEpO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIFxyXG59XHJcbi5oZWFkIC5hX2NsaW5ldHN7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQzdDMUZEO1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwMDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG46OnBsYWNlaG9sZGVye1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIFxyXG59XHJcbi5oZWFkIC5hX2NsaW5ldHMgYXtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn1cclxuLmhlYWQgLmFfY2xpbmV0cyBpbnB1dFt0eXBlPXRleHRde1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbn0gICBcclxuXHJcbi5oZWFkIC5hX2NsaW5ldHMgaW5wdXRbdHlwZT1udW1iZXJde1xyXG4gICAgYm9yZGVyOiBweCBzb2xpZCAjQzdDMUZEO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCA7XHJcbiAgICBvdmVyZmxvdzogdW5zZXRcclxufVxyXG5cclxuc2VjdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjI7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuc2VjdGlvbiBwe1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuXHJcbn1cclxuXHJcbnNwYW57XHJcbiAgICBmb250LXdlaWdodDo5MDA7XHJcblxyXG59XHJcblxyXG4ubntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMzJweDtcclxuICAgIHJpZ2h0OjcwcHg7XHJcbn1cclxuXHJcbnRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBcclxufVxyXG5cclxudGh7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG50ZHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2NTA7IFxyXG59XHJcbi5iYWxhbmNle1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG5cclxuLnRhYi1jb250ZW50ID4gLmFjdGl2ZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"row\">\n                <div class=\"board\">\n                    <div class=\"board-inner\">\n                        <ul class=\"nav nav-tabs col-md\" id=\"myTab\">\n                            <div class=\"liner\"></div>\n                            \n                            <li class=\"\">\n                                <a href=\"#profile\" data-toggle=\"tab\" title=\"profile\" aria-expanded=\"false\">\n                                    <span class=\"round-tabs two\">                                     \n                                        <img src=\"/assets/img/1.png\" alt=\"This Is Img\" width=\"50px\" height=\"40px\">\n                                        Client Manager                                        \n                                    </span>                                    \n                                </a>                                \n                            </li>\n    \n                            <div class=\"vl\"></div>\n\n                            <li class=\"active\">\n                                <a href=\"#video\" data-toggle=\"tab\" title=\"video\" aria-expanded=\"true\">\n                                    <span class=\"round-tabs three\">\n                                        <img src=\"/assets/img/5.png\" alt=\"This Is Img\" width=\"50px\" height=\"40px\">\n                                        Device Manager\n                                    </span>\n                                </a>\n                            </li>\n                            \n                            <div class=\"vl\"></div>\n\n                            <li class=\"\">\n                                <a href=\"#Event\" data-toggle=\"tab\" title=\"Event\" aria-expanded=\"false\">\n                                    <span class=\"round-tabs four\">\n                                        <img src=\"/assets/img/3.png\" alt=\"This Is Img\" width=\"50px\" height=\"40px\">\n                                        Order Manager\n                                    </span>\n                                </a>\n                            </li>\n\n                            <div class=\"vl\"></div>\n\n                            <li class=\"\">\n                                <a href=\"#Club\" data-toggle=\"tab\" title=\"Club\" aria-expanded=\"false\">\n                                    <span class=\"round-tabs four\">\n                                        <img src=\"/assets/img/6.png\" alt=\"This Is Img\" width=\"50px\" height=\"40px\">\n                                        Sales Manager\n                                    </span>\n                                </a>\n                            </li>\n                            \n                            <div class=\"vl\"></div>\n\n                            <li class=\"\">\n                                <a href=\"#messages\" data-toggle=\"tab\" title=\"messages\" aria-expanded=\"false\">\n                                    <span class=\"round-tabs five\">\n                                        <img src=\"/assets/img/8.png\" alt=\"This Is Img\" width=\"50px\" height=\"40px\">\n                                        Reports & Stats\n                                    </span>\n                                </a>\n                            </li>\n\n                            <div class=\"vl\"></div>\n\n                            <li class=\"\">\n                                <a href=\"#Setup\" data-toggle=\"tab\" title=\"Setup\" aria-expanded=\"false\">\n                                    <span class=\"round-tabs five\">\n                                        <img src=\"/assets/img/2.png\" alt=\"This Is Img\" width=\"50px\" height=\"40px\">\n                                        Setup & Admin\n                                    </span>\n                                </a>\n                            </li>\n    \n                        </ul>\n                    </div>  \n                    <div class=\"tab-content\">\n                        <div class=\"tab-pane fade\" id=\"profile\">  \n                            User Profile\n                        </div>\n                        <div class=\"tab-pane fade\" id=\"picture\">\n                            User Pictures\n    \n                        </div>\n                        <div class=\"tab-pane fade  active in\" id=\"video\">\n                          User Video  \n                        </div>\n                        <div class=\"tab-pane fade\" id=\"Event\">\n                            User Events\n                        </div>\n                        <div class=\"tab-pane fade\" id=\"Club\">\n                          User Club\n                        </div>\n                        <div class=\"tab-pane fade\" id=\"messages\">\n                            User Messages\n                        </div>\n                        <div class=\"tab-pane fade\" id=\"Setup\">\n                            User Messages\n                        </div>                                           \n                    </div>\n                </div>\n            </div>\n      </div>\n  </div>\n</div>\n<div class=\"a_clinets p-2\">\n    <div class=\"row\">\n        <div class=\"col-9\">\n            <span>You Are Here : </span>\n            <input type=\"text\" placeholder=\"welcome\"> <a href=\"\"> Client Manager</a>\n            <!--<i class=\"fa fa-arrow-circle-down\" aria-hidden=\"true\"></i>-->\n        </div><!-- ./col-4-->\n        <div class=\"col-3\">\n            <span>Search</span>\n            <input type=\"text\" placeholder=\"Client Manager\">\n            <span>Tag:</span>\n            <input type=\"text\">\n        </div><!-- ./col-4-->\n    </div><!-- ./row-->\n</div>\n\n<!--Start Header-->\n<header class=\"head\">\n  <div class=\"client py-2\">\n      <div class=\"\"><!--class=\"container\"-->\n          <div class=\"row\">\n              <div class=\"col-6\">\n                  <div class=\"client_box mr-auto\">\n                      <div class=\"client_box_title d-flex\">\n                          <img src=\"/assets/img/home.png\" alt=\"This Is Img\" width=\"50px\" height=\"40px\">\n                          <h4 class=\"ml-3\">Client Manager</h4>\n                      </div><!-- ./client_box_title-->\n                  </div><!-- ./client_box-->\n              </div><!-- ./col-6-->\n              <div class=\"ml-auto\" style=\"margin-left: 500px !important;\">\n                  <div class=\"cont\">\n                      <div class=\"cont_groub\">\n                          <div class=\"cont_box\">\n                              <i class=\"fa fa-arrow-circle-down\" aria-hidden=\"true\"></i>\n                              <span> 3844</span>\n                              <span> total </span>\n                          </div><!-- ./cont_box-->\n                          <div class=\"cont_box\">\n                              <i class=\"fa fa-arrow-circle-down\" aria-hidden=\"true\"></i>\n                              <span> 3844</span>\n                              <span> total</span>\n                          </div><!-- ./cont_box-->\n                      </div><!-- ./cont_groub-->\n                  </div><!-- ./cont-->\n              </div><!-- ./col-6-->\n          </div><!-- ./row-->\n      </div><!-- ./container-->\n  </div>\n  <!-- ./client-->\n  <div class=\"new_clinet p-2\">\n      <a routerLink=\"add-task\">Add a New Client</a>\n  </div>\n  <!-- ./new_clinet-->\n  <div class=\"a_clinets p-2\">\n      <div class=\"row\">\n          <div class=\"col-4\">\n              <a href=\"#\">Active Clients</a>\n          </div><!-- ./col-4-->\n          <div class=\"col-4\">\n              <span>Jump to client ID #</span>\n              <input type=\"text\">\n              <i class=\"fa fa-arrow-circle-down\" aria-hidden=\"true\"></i>\n          </div><!-- ./col-4-->\n          <div class=\"col-4\">\n              <span>View:</span>\n              <input type=\"number\" placeholder=\"  Active Clients\">\n              <span>Tag:</span>\n              <input type=\"text\">\n          </div><!-- ./col-4-->\n      </div><!-- ./row-->\n  </div>\n  <!-- ./a_clinets-->\n</header>\n<!--End Header-->\n\n<section>\n  <p>Clients <span> 1-100 </span> of 1000 Shown </p>\n  <span class=\"n\"> </span>\n</section>\n\n<table class=\"table table-bordered table-striped table-sm\">\n  <thead>\n    <tr>\n      <td scope=\"col\"></td>\n      <td scope=\"col\"></td>\n      <th scope=\"col\">ID</th>\n      <th scope=\"col\">Last_Name</th>\n      <th scope=\"col\">First_Name</th>\n      <th scope=\"col\">Company</th>\n      <th scope=\"col\">Phone</th>\n      <th scope=\"col\">Email</th>\n      <th scope=\"col\">Balance</th>\n      <th scope=\"col\">Authorization_Forms</th>\n      <th scope=\"col\">Reseller</th>\n      <th scope=\"col\">Client_may_have_Private</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor= \"let client of clientsList; index as i\">\n      <th scope=\"col\"></th>\n      <td><input type=\"checkbox\" class=\"form-check-input\"></td>\n      <th>{{client.id}}</th>\n      <td>{{client.Last_Name}}</td>\n      <td>{{client.First_Name}}</td>\n      <td>{{client.Company}}</td>\n      <td>{{client.Phone}}</td>\n      <td>{{client.Email}}</td>\n      <td class=\"balance\">{{client.Balance}}</td>\n      <td>{{client.Authorization_Forms}}</td>\n      <td>{{client.Reseller}}</td>\n      <td>{{client.Client_may_have_Private}}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tasks.service */ "./src/app/services/tasks.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(tasksSer, title, router) {
        this.tasksSer = tasksSer;
        this.title = title;
        this.router = router;
        /*clientModel:CRMClient = {
          First_Name:"",
          Last_name: "",
          Company: "",
          Phone:0,
          Email: "",
          Balance: 0,
          Authorization_Forms: "",
          Reseller: "",
          Client_may_have_Private:""
        }*/
        this.clientsList = [];
        this.response = {};
        //this.GetAllClients();    
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.GetAllClients();
    };
    HomeComponent.prototype.GetAllClients = function () {
        var _this = this;
        this.tasksSer.getClients().subscribe(function (result) {
            console.log(result);
            _this.response = result;
            _this.clientsList = _this.response.results;
        }, function (error) {
            console.log(error);
        }, function () {
            console.log('Done');
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"alert alert-danger\">This page is not found</p>"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(title) {
        this.title = title;
        this.title.setTitle("Oooops");
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/APIService.ts":
/*!****************************************!*\
  !*** ./src/app/services/APIService.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ApiService = /** @class */ (function () {
    function ApiService(http, location) {
        this.http = http;
        this.location = location;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.options = { headers: this.headers };
        this.serviceUrl = 'http://127.0.0.1:8000/Clients/';
        /* let currentUrl = location.path().toLowerCase();
        
        if(currentUrl == '' || currentUrl == undefined || currentUrl.indexOf('/arabic/') != -1){
            this.header.append('Accept-Language', 'ar');
        } else {
            this.header.append('Accept-Language', 'en');
        } */
    }
    ApiService.prototype.getAll = function () {
        return this.http.get(this.serviceUrl);
    };
    ApiService.prototype.getSingle = function (id) {
        return this.http.get(this.serviceUrl + id);
    };
    ApiService.prototype.add = function (itemToCreate) {
        var objectToSend = JSON.stringify(itemToCreate);
        return this.http.post(this.serviceUrl, objectToSend, this.options);
    };
    ApiService.prototype.update = function (itemToUpdate) {
        var objectToSend = JSON.stringify(itemToUpdate);
        return this.http.post(this.serviceUrl, objectToSend, this.options);
    };
    ApiService.prototype.delete = function (id) {
        return this.http.delete(this.serviceUrl + id, this.options);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/tasks.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/tasks.service.ts ***!
  \*******************************************/
/*! exports provided: TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _APIService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./APIService */ "./src/app/services/APIService.ts");





var TasksService = /** @class */ (function () {
    function TasksService(http, _SharedService) {
        this.http = http;
        this._SharedService = _SharedService;
    }
    TasksService.prototype.getClients = function () {
        return this._SharedService.getAll();
    };
    TasksService.prototype.createClients = function (clientModel) {
        return this._SharedService.add(clientModel);
    };
    TasksService.prototype.updateClients = function (clientModel) {
        return this._SharedService.update(clientModel);
    };
    TasksService.prototype.removeClients = function (id) {
        return this._SharedService.delete(id);
    };
    TasksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _APIService__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], TasksService);
    return TasksService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mostafa\Desktop\trends\Front-End\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map