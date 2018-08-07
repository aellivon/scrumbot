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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-view name=\"content\"></ui-view>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var ngx_mydatepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mydatepicker */ "./node_modules/ngx-mydatepicker/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/index.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/timepicker/index.js");
/* harmony import */ var _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ncstate/sat-popover */ "./node_modules/@ncstate/sat-popover/fesm5/ncstate-sat-popover.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var app_app_states__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/app.states */ "./src/app/app.states.ts");
/* harmony import */ var app_app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var app_components_forms_create_team_create_team_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/components/forms/create-team/create-team.component */ "./src/app/components/forms/create-team/create-team.component.ts");
/* harmony import */ var app_components_prompts_join_team_join_team_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/components/prompts/join-team/join-team.component */ "./src/app/components/prompts/join-team/join-team.component.ts");
/* harmony import */ var app_components_prompts_slack_login_slack_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/components/prompts/slack-login/slack-login.component */ "./src/app/components/prompts/slack-login/slack-login.component.ts");
/* harmony import */ var app_components_containers_scrumboard_scrumboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/components/containers/scrumboard/scrumboard.component */ "./src/app/components/containers/scrumboard/scrumboard.component.ts");
/* harmony import */ var app_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/components/avatar/avatar.component */ "./src/app/components/avatar/avatar.component.ts");
/* harmony import */ var app_components_containers_issueboard_issueboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/components/containers/issueboard/issueboard.component */ "./src/app/components/containers/issueboard/issueboard.component.ts");
/* harmony import */ var app_components_header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var app_components_marker_marker_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/components/marker/marker.component */ "./src/app/components/marker/marker.component.ts");
/* harmony import */ var _pipes_groupby_date_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/groupby-date.pipe */ "./src/app/pipes/groupby-date.pipe.ts");
/* harmony import */ var _components_forms_login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/forms/login/login.component */ "./src/app/components/forms/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ANGULAR MODULES




// INSTALLED MODULES









// IMPORTED FROM PROJECT












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                app_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                app_components_prompts_join_team_join_team_component__WEBPACK_IMPORTED_MODULE_16__["JoinTeamComponent"],
                app_components_forms_create_team_create_team_component__WEBPACK_IMPORTED_MODULE_15__["CreateTeamComponent"],
                app_components_prompts_slack_login_slack_login_component__WEBPACK_IMPORTED_MODULE_17__["SlackLoginComponent"],
                app_components_containers_scrumboard_scrumboard_component__WEBPACK_IMPORTED_MODULE_18__["ScrumboardComponent"],
                app_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_19__["AvatarComponent"],
                app_components_containers_issueboard_issueboard_component__WEBPACK_IMPORTED_MODULE_20__["IssueboardComponent"],
                app_components_header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
                app_components_marker_marker_component__WEBPACK_IMPORTED_MODULE_22__["MarkerComponent"],
                _pipes_groupby_date_pipe__WEBPACK_IMPORTED_MODULE_23__["GroupbyDatePipe"],
                _components_forms_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _ncstate_sat_popover__WEBPACK_IMPORTED_MODULE_11__["SatPopoverModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__["TimepickerModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientXsrfModule"].withOptions({
                    cookieName: 'csrftoken',
                    headerName: 'X-CSRFToken',
                }),
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_5__["UIRouterModule"].forRoot(app_app_states__WEBPACK_IMPORTED_MODULE_13__["APP_STATES"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"],
                ngx_mydatepicker__WEBPACK_IMPORTED_MODULE_6__["NgxMyDatePickerModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [app_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.states.ts":
/*!*******************************!*\
  !*** ./src/app/app.states.ts ***!
  \*******************************/
/*! exports provided: APP_STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_STATES", function() { return APP_STATES; });
/* harmony import */ var app_utils_layouts_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/utils/layouts.utils */ "./src/app/utils/layouts.utils.ts");
/* harmony import */ var app_components_containers_scrumboard_scrumboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/components/containers/scrumboard/scrumboard.component */ "./src/app/components/containers/scrumboard/scrumboard.component.ts");
/* harmony import */ var app_components_containers_issueboard_issueboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/containers/issueboard/issueboard.component */ "./src/app/components/containers/issueboard/issueboard.component.ts");
/* harmony import */ var app_components_forms_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/components/forms/login/login.component */ "./src/app/components/forms/login/login.component.ts");




// let CREATE_TEAM_STATE: Object[] = [
//     {
//         name: 'create-team',
//         url: '/create',
//         views: ContentOnly(CreateTeamComponent),
//     }
// ]
// let JOIN_TEAM_STATE: Object[] = [
//     {
//         name: 'join-team',
//         url: '/join',
//         views: ContentOnly(JoinTeamComponent),
//     }
// ]
var HOME_STATE = [
    {
        name: 'scrumboard',
        url: '/',
        views: Object(app_utils_layouts_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(app_components_containers_scrumboard_scrumboard_component__WEBPACK_IMPORTED_MODULE_1__["ScrumboardComponent"]),
    }
];
var ISSUES_STATE = [
    {
        name: 'issuesboard',
        url: '/issues',
        views: Object(app_utils_layouts_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(app_components_containers_issueboard_issueboard_component__WEBPACK_IMPORTED_MODULE_2__["IssueboardComponent"]),
    }
];
var LOGIN_STATE = [
    {
        name: 'login',
        url: '/login',
        views: Object(app_utils_layouts_utils__WEBPACK_IMPORTED_MODULE_0__["ContentOnly"])(app_components_forms_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]),
    }
];
var APP_STATES = {
    otherwise: '/',
    states: [].concat(
    // CREATE_TEAM_STATE,
    //       JOIN_TEAM_STATE,
    HOME_STATE, ISSUES_STATE, LOGIN_STATE)
};


/***/ }),

/***/ "./src/app/components/avatar/avatar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/avatar/avatar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar{\n    color: white\n}\n.dot {\n        height: 42px;\n        width: 42px;\n        background-color: blue;\n    }"

/***/ }),

/***/ "./src/app/components/avatar/avatar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/avatar/avatar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dot d-flex justify-content-center align-items-center rounded-circle pt-1\" [style.background-color]= \"getColor(id)\">\n    <b class=\"avatar\">{{getUsername(username)}}</b>\n</div>"

/***/ }),

/***/ "./src/app/components/avatar/avatar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/avatar/avatar.component.ts ***!
  \*******************************************************/
/*! exports provided: AvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function() { return AvatarComponent; });
/* harmony import */ var string_to_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-to-color */ "./node_modules/string-to-color/index.js");
/* harmony import */ var string_to_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(string_to_color__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_scrum_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/scrum-data.service */ "./src/app/services/scrum-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AvatarComponent = /** @class */ (function () {
    function AvatarComponent(scrumDataService) {
        this.scrumDataService = scrumDataService;
    }
    AvatarComponent.prototype.ngOnInit = function () {
    };
    AvatarComponent.prototype.getColor = function (id) {
        if (!id) {
            id = 'blue';
        }
        return string_to_color__WEBPACK_IMPORTED_MODULE_0__(id);
    };
    AvatarComponent.prototype.getUsername = function (username) {
        if (!username) {
            return 'CS';
        }
        // try{
        if (username.indexOf('.') == -1) {
            return username.charAt(0).toUpperCase() +
                username.charAt(1).toUpperCase();
        }
        var avatar_name = username.split('.');
        return avatar_name[0].charAt(0).toUpperCase() +
            avatar_name[1].charAt(0).toUpperCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], AvatarComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], AvatarComponent.prototype, "username", void 0);
    AvatarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-avatar',
            template: __webpack_require__(/*! ./avatar.component.html */ "./src/app/components/avatar/avatar.component.html"),
            styles: [__webpack_require__(/*! ./avatar.component.css */ "./src/app/components/avatar/avatar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_scrum_data_service__WEBPACK_IMPORTED_MODULE_2__["ScrumDataService"]])
    ], AvatarComponent);
    return AvatarComponent;
}());



/***/ }),

/***/ "./src/app/components/containers/issueboard/issueboard.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/containers/issueboard/issueboard.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row border-bottom d-flex justify-content-between\">\n        <div class=\"m-3 ml-5 pl-5 d-flex align-items-center w-50\">\n            <div class=\"tabs clickable\">\n                <span class=\"less-emphasis\" (click)=\"goToDashboard()\"><b>Dashboard</b></span>\n            </div>\n            <div class=\"tabs clickable\">\n                <span class=\"less-emphasis\"><b>All Issues</b></span>\n            </div>\n            <i class=\"less-emphasis fas fa-search border-0 m-1 mr-3 ml-5 pl-5\"></i>\n            <input type=\"text\" placeholder=\"Search\" class=\"border-0 less-emphasis searchbar\" (input)=\"getScrum(search.value)\" #search>\n        </div>\n        <div class=\"m-3 mr-5\">\n            <app-avatar></app-avatar>\n        </div>\n    </div>\n    <div class=\"row issues_container\">\n        <div class=\"col p-5 mt-2 ml-5\">\n            <div class=\"row\">\n                <div class=\"d-flex align-items-center summary_box flex-fill\">\n                    <div class=\"marker_static\">\n                    </div>\n                    <div>\n                        <p class=\"less-emphasis mb-0 ml-2 title\">You have 13 unresolve issues</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row pt-4 pb-4 justify-content-between\">\n                <div class=\"col d-flex flex-column\">\n                    <div class=\"d-flex flex-row align-items-center\">\n                        <span class=\"w-25 less-emphasis\">Select Project</span>\n                        <div class=\"input-group w-50\">\n                          <select class=\"custom-select less-emphasis\" (change)=\"filter_project=select_project.value\" #select_project>\n                            <option selected value=\"\">All Projects</option>\n                            <option *ngFor=\"let project of projects\">{{ project.name }}</option>\n                          </select>\n                        </div>\n                    </div>\n                    <br>\n                    <div class=\"d-flex flex-row align-items-center\">\n                        <span class=\"w-25 less-emphasis\">Members</span>\n                        <div class=\"input-group w-50\">\n                          <select class=\"custom-select less-emphasis\" (change)=\"filter_user=select_user.value\" #select_user>\n                            <option selected value=\"\">All Members</option>\n                            <option *ngFor=\"let user of users\">{{ user.username }}</option>\n                          </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col d-flex flex-column\">\n                    <div class=\"d-flex flex-row-reverse align-items-center\">\n                            <div class=\"w-25 input-group date_filters\">\n                                <input class=\"form-control datepicker less-emphasis\" ngx-mydatepicker name=\"to\" [(ngModel)]=\"to_model\" [options]=\"toOptions\" #to_dp=\"ngx-mydatepicker\" (dateChanged)=\"setDateToFilter($event)\"/>\n                                <span class=\"input-group-append\">\n                                    <button type=\"button\" class=\"btn btn-light less-emphasis grey-border\" (click)=\"to_dp.toggleCalendar()\">\n                                        <i class=\"far fa-calendar\"></i>\n                                    </button>\n                                </span>\n                            </div>\n                            <h3 class=\"m-0 mr-2 ml-2\">-</h3>\n                            <div class=\"w-25 input-group date_filters\">\n                                <input class=\"form-control datepicker less-emphasis\" ngx-mydatepicker name=\"from\" [(ngModel)]=\"from_model\" [options]=\"fromOptions\" #from_dp=\"ngx-mydatepicker\" (dateChanged)=\"setDateFromFilter($event)\"/>\n                                <span class=\"input-group-append\">\n                                    <button type=\"button\" class=\"btn btn-light  less-emphasis grey-border\" (click)=\"from_dp.toggleCalendar()\">\n                                        <i class=\"far fa-calendar\"></i>\n                                    </button>\n                                </span>\n                            </div>\n                        <span class=\"less-emphasis mr-4\">Date</span>\n                            <!-- <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"p-2 d-flex align-items-center border rounded-left\">\n                                        <i class=\"far fa-calendar\"></i>\n                                    </div>\n                                </div>\n                                <input type=\"text\" ngbDatepicker class=\"border border-left-0 form-control\" #d=\"ngbDatepicker\"/>\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-light border border-left-0\" (click)=\"d.toggle()\"><i class=\"fas fa-chevron-down\"></i></button>\n                                </div>\n                            </div> -->\n                    </div>\n                    <br>\n                    <div class=\"d-flex flex-row-reverse align-items-center\">\n                        <div class=\"input-group w-50\">\n                          <select class=\"custom-select less-emphasis\" (change)=\"filter_status=select_status.value\" #select_status>\n                            <option selected value=\"\">All</option>\n                            <option value=\"P\">Pending</option>\n                            <option value=\"R\">Resolved</option>\n                            <option value=\"C\">Closed</option>\n                          </select>\n                        </div>\n                        <span class=\"mr-5 less-emphasis\">Status</span>\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"row\" *ngIf=\"filter_user && filter_hours\">\n                <div>\n                    <h2 class=\"p-3 m-0\">{{ filter_user }} has logged a total of {{ getTotalHours(filter_user, filter_project, filter_from, filter_to) }} hours <span *ngIf=\"filter_project\">in project {{ filter_project }}</span> from {{ filter_from | date:'longDate' }} to {{ filter_to | date:'longDate' }}</h2>\n                </div>\n            </div> -->\n            <div class=\"row pt-4\">\n                <div class=\"col-sm-3\">\n                    <h4><b>Issues list</b></h4>\n                </div>\n            </div>\n            <div class=\"row mt-3 \">\n                <div class=\"col-4 d-flex justify-content-end pr-5\">\n                    <span class=\"category_label\"><b>Project Channel</b></span>\n                </div>\n                <div class=\"col-2\"></div>\n                <div class=\"col\">\n                    <span class=\"category_label\"><b>Issues</b></span>\n                </div>\n                <div class=\"col d-flex justify-content-end mr-5\">\n                    <span class=\"category_label pr-5\"><b>Due Date</b></span>\n                </div>\n            </div>\n            <div class=\"row mb-3\">\n                <div class=\"col-sm-2 d-flex\">\n                    <span class=\"align-self-center grey-border less-emphasis\">Today - {{ today | date:'longDate'}}</span>\n                </div>\n                <div class=\"col-sm-10\">\n                    <hr>\n                </div>\n            </div>\n            <div class=\"d-flex flex-column m-1 scrumlist\">\n                <div class=\"mt-1 mb-1 scrumitem\" *ngFor=\"let issue of issues\">\n                    <div *ngIf=\"(filter_user=='' || issue.scrum_data.user_username==filter_user) && (filter_project=='' || issue.scrum_data.project_name==filter_project) && (filter_status=='' || issue.status==filter_status) && isWithinDate(issue.scrum_data.date_created, filter_from, filter_to)\" class=\"d-flex align-items-center\">\n                        <app-marker [project]=\"issue.scrum_data.project_name\"></app-marker>\n                        <div class=\"d-flex flex-fill\" >\n                            <div class=\"col-2 d-flex mr-4\">\n                                <div>\n                                    <app-avatar [username]=\"issue.scrum_data.user_username\" [id]=\"issue.scrum_data.user_username\"></app-avatar>\n                                </div>\n                                <div class=\"ml-3\">\n                                    <span><b>{{ issue.scrum_data.user_username }}</b></span>\n                                    <br>\n                                    <span class=\"less-emphasis category_label\">{{ issue.scrum_data.date_created | date:'shortTime'}} <span *ngIf=\"issue.scrum_data.is_edited\">(edited)</span></span>\n                                </div>\n                            </div>\n                            <div class=\"col-2 d-flex align-items-center mr-5\">\n                                <span class=\"project_label\">#{{ issue.scrum_data.project_name }}</span>\n                            </div>\n                            <div class=\"col d-flex p-0 align-items-center\">\n                                <div class=\"d-inline-block text-truncate issue_box\">\n                                    <span class=\"less-emphasis\">{{ issue.issue }}</span>\n                                </div>\n                            </div>\n                            <div class=\"col d-flex pr-4 align-items-center justify-content-end\">\n                                <span class=\"deadline_label\">{{ issue.deadline | date:'mediumDate'}} - {{ issue.deadline | date:'shortTime'}}</span>\n                            </div>\n                            <sat-popover #issueDetail verticalAlign=\"below\" horizontalAlign=\"end\" forceAlignment>\n                                <div class=\"issue_details\">\n                                    <div class=\"d-flex justify-content-between\">\n                                        <div class=\"d-flex\">\n                                            <app-avatar [username]=\"issue.scrum_data.user_username\" [id]=\"issue.scrum_data.user_username\"></app-avatar>\n                                            <div class=\"ml-3\">\n                                                <span><b>{{ issue.scrum_data.user_username }}</b></span>\n                                                <br>\n                                                <span class=\"less-emphasis category_label\">{{ issue.scrum_data.date_created | date:'shortTime'}} <span *ngIf=\"issue.scrum_data.is_edited\">(edited)</span></span>\n                                            </div>\n                                        </div>\n                                        <p *ngIf=\"issue.is_urgent\" class=\"urgent p-1 pl-2 pr-2 rounded-left rounded-right\">Urgent</p>\n                                    </div>\n                                    <div class=\"pt-4 pb-4\">\n                                        <p>{{issue.issue}}</p>\n                                    </div>\n                                    <div class=\"d-flex\">\n                                        <div class=\"d-flex flex-column mr-3\">\n                                            <span class=\"label less-emphasis pb-2\">Date</span>\n                                            <div class=\"input-group\">\n                                            <input type=\"text\" bsDatepicker class=\"form-control border deadline_picker\" #deadline_date=\"bsDatepicker\" [bsConfig]=\"{ dateInputFormat: 'MMMM D, YYYY' }\" [(ngModel)]=\"issue.deadline\" (bsValueChange)=\"updateDeadline(issue.id, issue.deadline)\" [minDate]=\"today\"/>\n                                            <div class=\"input-group-append\">\n                                                <button class=\"btn btn-light border border-left-0\" (click)=\"deadline_date.toggle()\">\n                                                    <i class=\"fas fa-angle-down less-emphasis\"></i>\n                                                </button>\n                                            </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"d-flex flex-column\">\n                                            <span class=\"label less-emphasis pb-2\">Time</span>\n                                            <timepicker [(ngModel)]=\"issue.deadline\" [showSpinners]=\"false\" minuteStep='1' (isValid)=\"updateDeadline(issue.id, issue.deadline)\"></timepicker>\n                                        </div>\n                                    </div>\n                                    <div>\n                                        <button #rButton type=\"button\" class=\"statusbtn btn btn-outline-success m-3 ml-4\" (click)=\"updateStatus(issue.id, rButton.value)\" *ngIf=\"issue.status == 'P'\" value=\"R\">Mark as Solved</button>\n                                        <button #cButton type=\"button\" class=\"statusbtn btn btn-outline-warning m-3\" (click)=\"updateStatus(issue.id, cButton.value)\" *ngIf=\"issue.status == 'P'\" value=\"C\">Close</button>\n                                    </div>\n                                </div>\n                            </sat-popover>\n                            <button type=\"button\" class=\"btn btn-light\" [satPopoverAnchorFor]=\"issueDetail\" (click)=\"issueDetail.toggle()\"><i class=\"fas fa-ellipsis-v less-emphasis\"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/containers/issueboard/issueboard.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/containers/issueboard/issueboard.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".issues_container {\n  margin: 0 120 0 120; }\n\n.issue_box {\n  max-width: 400px; }\n\n.issue_details {\n  background-color: white;\n  padding: 30px 40px;\n  box-shadow: 0 3px 8px 0 rgba(111, 126, 147, 0.16); }\n\n.marker_static {\n  width: 5px;\n  height: 61px;\n  margin-right: 30;\n  background-color: #2be5ac; }\n\n.summary_box {\n  background-color: #effffa; }\n\n.title {\n  font-size: 18px;\n  color: #2be5ac; }\n\n.deadline_label {\n  color: #dd2556; }\n"

/***/ }),

/***/ "./src/app/components/containers/issueboard/issueboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/containers/issueboard/issueboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: IssueboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueboardComponent", function() { return IssueboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var app_services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var app_constants_endpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/constants/endpoints */ "./src/app/constants/endpoints.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IssueboardComponent = /** @class */ (function () {
    function IssueboardComponent(http, searchService, dataService, stateService, authService) {
        this.http = http;
        this.searchService = searchService;
        this.dataService = dataService;
        this.stateService = stateService;
        this.authService = authService;
        this.today = new Date();
        this.filter_to = new Date();
        this.filter_from = new Date(this.filter_to.getFullYear(), this.filter_to.getMonth(), this.filter_to.getDate() - 6);
        this.from_model = {
            date: {
                year: this.filter_from.getFullYear(),
                month: this.filter_from.getMonth() + 1,
                day: this.filter_from.getDate()
            }
        };
        this.to_model = {
            date: {
                year: this.filter_to.getFullYear(),
                month: this.filter_to.getMonth() + 1,
                day: this.filter_to.getDate()
            }
        };
        this.filter_user = '';
        this.filter_project = '';
        this.filter_status = '';
        this.from_yesterday = new Date(this.filter_from.getFullYear(), this.filter_from.getMonth(), this.filter_from.getDate() - 1);
        this.to_tomorrow = new Date(this.filter_to.getFullYear(), this.filter_to.getMonth(), this.filter_to.getDate() + 1);
        this.disabled_from = {
            year: this.from_yesterday.getFullYear(),
            month: this.from_yesterday.getMonth() + 1,
            day: this.from_yesterday.getDate()
        };
        this.disabled_to = {
            year: this.to_tomorrow.getFullYear(),
            month: this.to_tomorrow.getMonth() + 1,
            day: this.to_tomorrow.getDate()
        };
        this.fromOptions = {
            dateFormat: 'mmm dd yyyy',
            disableSince: this.disabled_to
        };
        this.toOptions = {
            dateFormat: 'mmm dd yyyy',
            disableUntil: this.disabled_from
        };
    }
    IssueboardComponent.prototype.ngOnInit = function () {
        this.authService.authenticate();
        this.fetchIssues();
        this.fetchProjects();
        this.fetchUsers();
    };
    IssueboardComponent.prototype.fetchIssues = function () {
        var _this = this;
        this.dataService.fetchIssues()
            .subscribe(function (data) {
            _this.issues = data;
        });
    };
    IssueboardComponent.prototype.fetchUsers = function () {
        var _this = this;
        this.dataService.fetchUsers()
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    IssueboardComponent.prototype.fetchProjects = function () {
        var _this = this;
        this.dataService.fetchProjects()
            .subscribe(function (data) {
            _this.projects = data;
        });
    };
    IssueboardComponent.prototype.setDateFromFilter = function (from) {
        this.filter_from = new Date(from.date.year, from.date.month - 1, from.date.day);
        var yesterday = new Date(this.filter_from.getFullYear(), this.filter_from.getMonth(), this.filter_from.getDate() - 1);
        this.disabled_from.year = yesterday.getFullYear();
        this.disabled_from.month = yesterday.getMonth() + 1;
        this.disabled_from.day = yesterday.getDate();
    };
    IssueboardComponent.prototype.setDateToFilter = function (to) {
        this.filter_to = new Date(to.date.year, to.date.month - 1, to.date.day);
        var tomorrow = new Date(this.filter_to.getFullYear(), this.filter_to.getMonth(), this.filter_to.getDate() + 1);
        this.disabled_to.year = tomorrow.getFullYear();
        this.disabled_to.month = tomorrow.getMonth() + 1;
        this.disabled_to.day = tomorrow.getDate();
    };
    IssueboardComponent.prototype.updateStatus = function (id, status) {
        this.http.post(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_5__["UPDATE_ISSUE_STATUS"])(id), { "status": status })
            .subscribe();
        var index = this.issues.findIndex(function (issue) {
            return issue.id == id;
        });
        this.issues[index].status = status;
    };
    IssueboardComponent.prototype.updateDeadline = function (id, deadline) {
        if (deadline) {
            this.http.post(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_5__["UPDATE_ISSUE_DEADLINE"])(id), { "deadline": deadline })
                .subscribe();
        }
    };
    IssueboardComponent.prototype.isWithinDate = function (scrum_date, filter_from, filter_to) {
        return (new Date(scrum_date).setHours(0, 0, 0, 0) >= filter_from.setHours(0, 0, 0, 0) &&
            new Date(scrum_date).setHours(0, 0, 0, 0) <= filter_to.setHours(0, 0, 0, 0));
    };
    IssueboardComponent.prototype.goToDashboard = function () {
        this.stateService.go('scrumboard');
    };
    IssueboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-issueboard',
            template: __webpack_require__(/*! ./issueboard.component.html */ "./src/app/components/containers/issueboard/issueboard.component.html"),
            styles: [__webpack_require__(/*! ./issueboard.component.scss */ "./src/app/components/containers/issueboard/issueboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            app_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"],
            app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_6__["StateService"],
            app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], IssueboardComponent);
    return IssueboardComponent;
}());



/***/ }),

/***/ "./src/app/components/containers/scrumboard/scrumboard.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/containers/scrumboard/scrumboard.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hoverable:hover{\n    background-color: gainsboro;\n}\n\n\n.check{\n    color: #2be5ac;\n}\n\n\n.wip{\n    color: #ffc455;\n}\n\n\n.issueitem{\n    box-shadow: 0 3px 8px 0 rgba(111, 126, 147, 0.16);\n}\n\n\n.label{\n    font-size: 14px;\n}\n\n\n.date_filters{\n    width: 170px;\n}\n\n\n.redmarker{\n  width: 2px;\n  height: 37px;\n  background-color: #dd2556;\n}\n\n\n.scrumlist{\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n\n.issuelist{\n    overflow-y: auto;\n    overflow-x: hidden;\n    height: 1350px;\n}\n\n\n.datepicker{\n    width: 130px;\n}\n\n\n.wraplongtext{\n    word-wrap: break-word;\n}"

/***/ }),

/***/ "./src/app/components/containers/scrumboard/scrumboard.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/containers/scrumboard/scrumboard.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row border-bottom d-flex justify-content-between\">\n        <div class=\"m-3 ml-5 pl-5 d-flex align-items-center w-50\">\n            <div class=\"tabs clickable\">\n                <span class=\"less-emphasis\"><b>Dashboard</b></span>\n            </div>\n            <div class=\"tabs clickable\" (click)=\"goToIssues()\">\n                <span class=\"less-emphasis\"><b>All Issues</b></span>\n            </div>\n            <i class=\"less-emphasis fas fa-search border-0 m-1 mr-3 ml-5 pl-5\"></i>\n            <input type=\"text\" placeholder=\"Search\" class=\"border-0 less-emphasis searchbar\" (input)=\"getScrum(search.value)\" #search>\n        </div>\n        <div class=\"m-3 mr-5\">\n            <app-avatar></app-avatar>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col p-5 mt-2 ml-5\">\n            <div class=\"row mt-3\">\n                <h1>Welcome back, {{logged_user}}!</h1>\n            </div>\n            <div class=\"row\">\n                <p class=\"less-emphasis\">There are {{ issues?.length }} issues and {{ scrums_bydate?.length }} urgent tickets</p>\n            </div>\n                <hr>\n            <div class=\"row pt-4 pb-4\">\n                <div class=\"col d-flex flex-column\">\n                    <div class=\"d-flex flex-row align-items-center\">\n                        <span class=\"w-25 less-emphasis\">Select Project</span>\n                        <div class=\"input-group\">\n                          <select class=\"custom-select less-emphasis\" (change)=\"filter_project=select_project.value; filtered_scrum=scrums_bydate\" #select_project>\n                            <option selected value=\"\">All Projects</option>\n                            <option *ngFor=\"let project of projects\">{{ project.name }}</option>\n                          </select>\n                        </div>\n                    </div>\n                    <br>\n                    <div class=\"d-flex flex-row align-items-center\">\n                        <span class=\"w-25 less-emphasis\">Members</span>\n                        <div class=\"input-group\">\n                          <select class=\"custom-select less-emphasis\" (change)=\"filter_user=select_user.value; filtered_scrum=scrums_bydate\" #select_user>\n                            <option selected value=\"\">All Members</option>\n                            <option *ngFor=\"let user of users\">{{ user.username }}</option>\n                          </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col d-flex flex-column\">\n                    <div class=\"d-flex flex-row-reverse align-items-center\">\n                            <div class=\"input-group date_filters\">\n                                <input class=\"form-control datepicker less-emphasis\" ngx-mydatepicker name=\"to\" [(ngModel)]=\"to_model\" [options]=\"toOptions\" #to_dp=\"ngx-mydatepicker\" (dateChanged)=\"setDateToFilter($event); filtered_scrum=scrums_bydate\"/>\n                                <span class=\"input-group-append\">\n                                    <button type=\"button\" class=\"btn btn-light less-emphasis grey-border\" (click)=\"to_dp.toggleCalendar()\">\n                                        <i class=\"far fa-calendar\"></i>\n                                    </button>\n                                </span>\n                            </div>\n                            <h3 class=\"m-0 mr-2 ml-2\">-</h3>\n                            <div class=\"input-group date_filters\">\n                                <input class=\"form-control datepicker less-emphasis\" ngx-mydatepicker name=\"from\" [(ngModel)]=\"from_model\" [options]=\"fromOptions\" #from_dp=\"ngx-mydatepicker\" (dateChanged)=\"setDateFromFilter($event); filtered_scrum=scrums_bydate\"/>\n                                <span class=\"input-group-append\">\n                                    <button type=\"button\" class=\"btn btn-light  less-emphasis grey-border\" (click)=\"from_dp.toggleCalendar()\">\n                                        <i class=\"far fa-calendar\"></i>\n                                    </button>\n                                </span>\n                            </div>\n                        <span class=\"less-emphasis mr-4\">Date</span>\n                            <!-- <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"p-2 d-flex align-items-center border rounded-left\">\n                                        <i class=\"far fa-calendar\"></i>\n                                    </div>\n                                </div>\n                                <input type=\"text\" ngbDatepicker class=\"border border-left-0 form-control\" #d=\"ngbDatepicker\"/>\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-light border border-left-0\" (click)=\"d.toggle()\"><i class=\"fas fa-chevron-down\"></i></button>\n                                </div>\n                            </div> -->\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"row\" *ngIf=\"filter_user && filter_hours\">\n                <div>\n                    <h2 class=\"p-3 m-0\">{{ filter_user }} has logged a total of {{ getTotalHours(filter_user, filter_project, filter_from, filter_to) }} hours <span *ngIf=\"filter_project\">in project {{ filter_project }}</span> from {{ filter_from | date:'longDate' }} to {{ filter_to | date:'longDate' }}</h2>\n                </div>\n            </div> -->\n            <div class=\"row pt-4\">\n                <div class=\"col-sm-3\">\n                    <h4><b>Stand up updates</b></h4>\n                </div>\n            </div>\n            <div class=\"row mt-3 \">\n                <div class=\"col-4 d-flex justify-content-end pr-5\">\n                    <span class=\"category_label\"><b>Project Channel</b></span>\n                </div>\n                <div class=\"col-2\"></div>\n                <div class=\"col\">\n                    <span class=\"category_label\"><b>Issues</b></span>\n                </div>\n                <div class=\"col d-flex justify-content-end mr-4\">\n                    <span class=\"category_label\"><b>Total Hours</b></span>\n                </div>\n            </div>\n            <div class=\"mb-4\" *ngFor=\"let date_group of filtered_scrum\">\n                <div *ngIf=\"isWithinDate(date_group.date_created, filter_from, filter_to)\">\n                    <div class=\"row mb-3\">\n                        <div class=\"col-sm-2 d-flex\">\n                            <span class=\"align-self-center grey-border less-emphasis\">{{ date_group.date_created | date:'longDate'}}</span>\n                        </div>\n                        <div class=\"col-sm-10\">\n                            <hr>\n                        </div>\n                    </div>\n                    <div class=\"d-flex flex-column m-1 scrumlist\">\n                        <div class=\"mt-1 mb-1 scrumitem\" *ngFor=\"let scrum of date_group.scrums\">\n                            <div *ngIf=\"((filter_user=='' || scrum.user==filter_user) && (filter_project=='' || scrum.project==filter_project))\">\n                                <div class=\"d-flex pt-4 pb-4 clickable\" (click)=\"scrum.open = !scrum.open\">\n                                    <div class=\"col-2 d-flex\">\n                                        <div>\n                                            <app-avatar [username]=\"scrum.user\" [id]=\"scrum.user\"></app-avatar>\n                                        </div>\n                                        <div class=\"ml-3\">\n                                            <span><b>{{ scrum.user }}</b></span>\n                                            <br>\n                                            <span class=\"less-emphasis category_label\">{{ scrum.date_created | date:'shortTime'}} <span *ngIf=\"scrum.is_edited\">(edited)</span></span>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-4 d-flex ml-3 align-items-center\">\n                                        <span class=\"project_label\" *ngIf=\"!scrum.open\">#{{ scrum.project }}</span>\n                                    </div>\n                                    <div class=\"col d-flex p-0 align-items-center\">\n                                        <div *ngIf=\"!scrum.open\">\n                                            <span class=\"less-emphasis\" *ngIf=\"!hasPending(scrum)\">No issues <img class=\"ml-3\" src=\"https://png.icons8.com/color/30/000000/confetti.png\"></span>\n                                            <span class=\"less-emphasis\" *ngIf=\"hasPending(scrum)\">{{ scrum.issue_logs[0].issue }}</span>\n                                        </div>\n                                    </div>\n                                    <div class=\"col d-flex pr-4 align-items-center justify-content-end\">\n                                        <span><b>{{ scrum.hours }}</b></span>\n                                    </div>\n                                </div>\n                                <div [collapse]=\"!scrum.open\">\n                                    <div class=\"d-flex flex-column p-5\">\n                                        <div>\n                                            <span class=\"project_label\">#{{ scrum.project }}</span>\n                                        </div>\n                                        <br>\n                                        <div class=\"d-flex\">\n                                            <div class=\"col pr-4\">\n                                                <div class=\"row flex-column mb-5\">\n                                                    <p class=\"category_label\"><b>Done</b></p>\n                                                    <div class=\"d-flex\" *ngFor=\"let log of scrum.done_logs\">\n                                                        <i class=\"fas fa-check fa-xs check pr-3 pt-1\"></i> \n                                                        <p class=\"less-emphasis mb-2\">{{ log.message }}</p>\n                                                    </div>\n                                                </div>\n                                                <div class=\"row flex-column\">\n                                                    <p class=\"category_label\"><b>In progress</b></p>\n                                                    <div class=\"d-flex\" *ngFor=\"let log of scrum.wip_logs\">\n                                                        <i class=\"fas fa-circle-notch fa-xs pr-3 pt-1 wip\"></i>\n                                                        <p class=\"less-emphasis mb-2\" > {{ log.message }}</p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col\">\n                                                <div class=\"row flex-column mb-5\">\n                                                    <p class=\"category_label\"><b>Pending</b></p>\n                                                    <span class=\"less-emphasis\" *ngIf=\"!hasPending(scrum)\">No issues <img class=\"ml-3\" src=\"https://png.icons8.com/color/30/000000/confetti.png\"></span>\n                                                    <div *ngFor=\"let issue of scrum.issue_logs\" class=\"issueitem mb-3 d-flex\" >\n                                                        <div class=\"redmarker align-self-center\"></div>\n                                                        <div class=\"d-flex flex-column flex-fill\">\n                                                            <div class=\"row d-flex flex-column pt-3 pl-4 pr-3 pb-0 ml-2 mr-2 mb-2\" (click)=\"issue.open = !issue.open\">\n                                                                <div class=\"d-flex justify-content-between\">\n                                                                    <p class=\"mb-1 ml-2\">{{ issue.issue }}</p>\n                                                                    <div class=\"d-flex align-items-center\">\n                                                                        <p *ngIf=\"issue.is_urgent\" class=\"urgent p-1 pl-2 pr-2 rounded-left rounded-right mb-1 mr-2\">Urgent</p>\n                                                                        <i class=\"fas fa-angle-down less-emphasis ml-4\" *ngIf=\"!issue.open\"></i>\n                                                                        <i class=\"fas fa-angle-up less-emphasis ml-4\" *ngIf=\"issue.open\"></i>\n                                                                    </div>\n                                                                </div>\n                                                                <div *ngIf=\"!issue.open\">\n                                                                    <div class=\"d-flex\" *ngIf=\"issue.deadline\">\n                                                                    <div class=\"mr-2\">\n                                                                        <img src=\"https://png.icons8.com/metro/15/dd2556/leave.png\" class=\"ml-2\">\n                                                                    </div>\n                                                                    <p class=\"less-emphasis category_labelel\">{{ issue.deadline | date:'longDate'}} - {{ issue.deadline | date:'shortTime'}}</p>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"ml-3 mr-2\" [collapse]=\"!issue.open\">\n                                                                <div class=\"d-flex ml-4\">\n                                                                    <div class=\"d-flex flex-column mr-3\">\n                                                                        <span class=\"label less-emphasis pb-2\">Date</span>\n                                                                        <div class=\"input-group\">\n                                                                        <input type=\"text\" bsDatepicker class=\"form-control border deadline_picker\" #deadline_date=\"bsDatepicker\" [bsConfig]=\"{ dateInputFormat: 'MMMM D, YYYY' }\" [(ngModel)]=\"issue.deadline\" (bsValueChange)=\"updateDeadline(issue.id, issue.deadline)\" [minDate]=\"today\"/>\n                                                                        <div class=\"input-group-append\">\n                                                                            <button class=\"btn btn-light border border-left-0\" (click)=\"deadline_date.toggle()\">\n                                                                                <i class=\"fas fa-angle-down less-emphasis\"></i>\n                                                                            </button>\n                                                                        </div>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"d-flex flex-column\">\n                                                                        <span class=\"label less-emphasis pb-2\">Time</span>\n                                                                        <timepicker [(ngModel)]=\"issue.deadline\" [showSpinners]=\"false\" minuteStep='1' (isValid)=\"updateDeadline(issue.id, issue.deadline)\"></timepicker>\n                                                                    </div>\n                                                                </div>\n                                                                <div>\n                                                                    <button #rButton type=\"button\" class=\"statusbtn btn btn-outline-success m-3 ml-4\" (click)=\"updateStatus(issue.id, rButton.value)\" *ngIf=\"issue.status == 'P'\" value=\"R\">Mark as Solved</button>\n                                                                    <button #cButton type=\"button\" class=\"statusbtn btn btn-outline-warning m-3\" (click)=\"updateStatus(issue.id, cButton.value)\" *ngIf=\"issue.status == 'P'\" value=\"C\">Close</button>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-3 border-left issuelist p-0\">\n            <div class=\"row m-4\">\n                <b class=\"category_label\">Issues stream</b>\n            </div>\n            <div class=\"d-flex flex-column\">\n                <div *ngFor=\"let issue of issues\">\n                    <div class=\"d-flex pl-4 pt-3 pb-3 hoverable clickable\" (click)=\"getIssue(issue.id)\" *ngIf=\"issue.status=='P'\">\n                        <div class=\"d-flex\">\n                            <app-avatar [username]=\"issue.scrum_data.user_username\" [id]=\"issue.scrum_data.user_username\"></app-avatar>\n                        </div>\n                        <div class=\"d-flex flex-fill flex-column ml-3 mr-5\">\n                            <div class=\"d-flex justify-content-between mb-1\">\n                                    <p class=\"m-0\"><b>{{ issue.scrum_data.user_username }}</b></p>\n                                    <p class=\"m-0 project_label label\">#{{ issue.scrum_data.project_name }}</p>\n                                    <p class=\"m-0 less-emphasis\">{{ issue.scrum_data.date_created | date:'shortTime'}}</p>\n                            </div>\n                            <div class=\"d-flex flex-fill justify-content-between mb-1 less-emphasis\">\n                                <span>{{ issue.issue }}</span>\n                                <p *ngIf=\"issue.is_urgent\" class=\"urgent p-1 pl-2 pr-2 rounded-left rounded-right\">Urgent</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/containers/scrumboard/scrumboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/containers/scrumboard/scrumboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: ScrumboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumboardComponent", function() { return ScrumboardComponent; });
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var app_services_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/filter.service */ "./src/app/services/filter.service.ts");
/* harmony import */ var app_services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var app_constants_endpoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/constants/endpoints */ "./src/app/constants/endpoints.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ScrumboardComponent = /** @class */ (function () {
    function ScrumboardComponent(http, filterService, searchService, dataService, stateService, authService) {
        this.http = http;
        this.filterService = filterService;
        this.searchService = searchService;
        this.dataService = dataService;
        this.stateService = stateService;
        this.authService = authService;
        this.today = new Date();
        this.filter_to = new Date();
        this.filter_from = new Date(this.filter_to.getFullYear(), this.filter_to.getMonth(), this.filter_to.getDate() - 6);
        this.from_model = {
            date: {
                year: this.filter_from.getFullYear(),
                month: this.filter_from.getMonth() + 1,
                day: this.filter_from.getDate()
            }
        };
        this.to_model = {
            date: {
                year: this.filter_to.getFullYear(),
                month: this.filter_to.getMonth() + 1,
                day: this.filter_to.getDate()
            }
        };
        this.filter_user = '';
        this.filter_project = '';
        this.from_yesterday = new Date(this.filter_from.getFullYear(), this.filter_from.getMonth(), this.filter_from.getDate() - 1);
        this.to_tomorrow = new Date(this.filter_to.getFullYear(), this.filter_to.getMonth(), this.filter_to.getDate() + 1);
        this.disabled_from = {
            year: this.from_yesterday.getFullYear(),
            month: this.from_yesterday.getMonth() + 1,
            day: this.from_yesterday.getDate()
        };
        this.disabled_to = {
            year: this.to_tomorrow.getFullYear(),
            month: this.to_tomorrow.getMonth() + 1,
            day: this.to_tomorrow.getDate()
        };
        this.fromOptions = {
            dateFormat: 'mmm dd yyyy',
            disableSince: this.disabled_to
        };
        this.toOptions = {
            dateFormat: 'mmm dd yyyy',
            disableUntil: this.disabled_from
        };
        this.model = { beginDate: this.from_model.date,
            endDate: this.to_model.date };
        this.show_object = {
            id: '',
            show: true,
        };
    }
    ScrumboardComponent.prototype.ngOnInit = function () {
        this.authService.authenticate();
        this.logged_user = localStorage.getItem('user');
        this.fetchIssues();
        this.fetchScrums();
        this.fetchUsers();
        this.fetchProjects();
    };
    ScrumboardComponent.prototype.fetchScrums = function () {
        var _this = this;
        this.dataService.fetchScrums()
            .subscribe(function (data) {
            _this.scrums_bydate = data;
            var scrums = underscore__WEBPACK_IMPORTED_MODULE_0__["map"](_this.scrums_bydate, function (scrum) { return scrum.scrums; });
            console.log(underscore__WEBPACK_IMPORTED_MODULE_0__["uniq"](scrums, true, 'date_created'));
            // this.scrums.map(date_group => {
            //   date_group.scrums.map(scrum => {
            //     scrum.issue_logs.map(issue => {
            //                     issue.open = false
            //                 })
            //     return scrum
            //   })
            // })
            _this.filtered_scrum = data;
        });
    };
    ScrumboardComponent.prototype.fetchIssues = function () {
        var _this = this;
        this.dataService.fetchIssues()
            .subscribe(function (data) {
            _this.issues = data;
        });
    };
    ScrumboardComponent.prototype.fetchUsers = function () {
        var _this = this;
        this.dataService.fetchUsers()
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    ScrumboardComponent.prototype.fetchProjects = function () {
        var _this = this;
        this.dataService.fetchProjects()
            .subscribe(function (data) {
            _this.projects = data;
        });
    };
    ScrumboardComponent.prototype.setDateFromFilter = function (from) {
        this.filter_from = new Date(from.date.year, from.date.month - 1, from.date.day);
        var yesterday = new Date(this.filter_from.getFullYear(), this.filter_from.getMonth(), this.filter_from.getDate() - 1);
        this.disabled_from.year = yesterday.getFullYear();
        this.disabled_from.month = yesterday.getMonth() + 1;
        this.disabled_from.day = yesterday.getDate();
    };
    ScrumboardComponent.prototype.setDateToFilter = function (to) {
        this.filter_to = new Date(to.date.year, to.date.month - 1, to.date.day);
        var tomorrow = new Date(this.filter_to.getFullYear(), this.filter_to.getMonth(), this.filter_to.getDate() + 1);
        this.disabled_to.year = tomorrow.getFullYear();
        this.disabled_to.month = tomorrow.getMonth() + 1;
        this.disabled_to.day = tomorrow.getDate();
    };
    ScrumboardComponent.prototype.getIssue = function (id) {
        this.filtered_scrum = [this.scrums_bydate.find(function (scrum) {
                return scrum.issue_logs.find(function (issue) {
                    return issue.id == id;
                });
            })];
    };
    ScrumboardComponent.prototype.updateStatus = function (id, status) {
        this.http.post(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_8__["UPDATE_ISSUE_STATUS"])(id), { "status": status })
            .subscribe();
        var index = this.issues.findIndex(function (issue) {
            return issue.id == id;
        });
        this.issues[index].status = status;
        var group_index = this.scrums_bydate.findIndex(function (scrum) {
            return scrum.scrums.find(function (scrum) {
                return scrum.issue_logs.find(function (issue) {
                    return issue.id == id;
                });
            });
        });
        var scrum_index = this.scrums_bydate[group_index].scrums.findIndex(function (scrum) {
            return scrum.issue_logs.find(function (issue) {
                return issue.id == id;
            });
        });
        var issue_index = this.scrums_bydate[group_index].scrums[scrum_index].issue_logs.findIndex(function (issue) {
            return issue.id == id;
        });
        this.scrums_bydate[group_index].scrums[scrum_index].issue_logs.splice(issue_index, 1);
    };
    ScrumboardComponent.prototype.updateDeadline = function (id, deadline) {
        if (deadline) {
            this.http.post(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_8__["UPDATE_ISSUE_DEADLINE"])(id), { "deadline": deadline })
                .subscribe();
        }
    };
    ScrumboardComponent.prototype.isWithinDate = function (scrum_date, filter_from, filter_to) {
        return (new Date(scrum_date).setHours(0, 0, 0, 0) >= filter_from.setHours(0, 0, 0, 0) &&
            new Date(scrum_date).setHours(0, 0, 0, 0) <= filter_to.setHours(0, 0, 0, 0));
    };
    ScrumboardComponent.prototype.getTotalHours = function (user, project, from, to) {
        var filtered_data = this.filterService.filterScrum(user, project, from, to, this.scrums_bydate);
        return filtered_data.map(function (scrum) { return scrum.hours; }).reduce(function (x, y) { return (+x) + (+y); }, 0);
    };
    ScrumboardComponent.prototype.getScrum = function (keyword) {
        this.filtered_scrum = this.searchService.searchScrums(keyword, this.scrums_bydate);
    };
    // hasIssues(scrum){
    //   var pending = scrum.issue_logs.filter(issue =>{
    //                      return issue.status == 'Pending'
    //                 })
    //   var resolved = scrum.issue_logs.filter(issue =>{
    //                      return issue.status == 'Resolved'
    //                 })
    //   var closed = scrum.issue_logs.filter(issue =>{
    //                      return issue.status == 'Closed'
    //                 })
    //   return (this.filter_pending && pending.length!=0) ||
    //           (this.filter_resolved && resolved.length!=0) ||
    //           (this.filter_closed && closed.length!=0)
    // }
    ScrumboardComponent.prototype.hasPending = function (scrum) {
        var pending = scrum.issue_logs.filter(function (issue) {
            return issue.status == 'P';
        });
        return (pending.length != 0);
    };
    ScrumboardComponent.prototype.goToIssues = function () {
        this.stateService.go('issuesboard');
    };
    ScrumboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scrumboard',
            template: __webpack_require__(/*! ./scrumboard.component.html */ "./src/app/components/containers/scrumboard/scrumboard.component.html"),
            styles: [__webpack_require__(/*! ./scrumboard.component.css */ "./src/app/components/containers/scrumboard/scrumboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            app_services_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"],
            app_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"],
            app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_7__["StateService"],
            app_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], ScrumboardComponent);
    return ScrumboardComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/create-team/create-team.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/forms/create-team/create-team.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/forms/create-team/create-team.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/forms/create-team/create-team.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"createTeam(createTeamForm)\" #createTeamForm=\"ngForm\">\n    <input type=\"text\" name=\"name\" ngModel>\n    <button type=\"submit\">create</button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/forms/create-team/create-team.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/forms/create-team/create-team.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTeamComponent", function() { return CreateTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateTeamComponent = /** @class */ (function () {
    function CreateTeamComponent(apiService) {
        this.apiService = apiService;
    }
    CreateTeamComponent.prototype.ngOnInit = function () {
    };
    CreateTeamComponent.prototype.createTeam = function (createTeamForm) {
        this.apiService.create('accounts', createTeamForm.value);
    };
    CreateTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-team',
            template: __webpack_require__(/*! ./create-team.component.html */ "./src/app/components/forms/create-team/create-team.component.html"),
            styles: [__webpack_require__(/*! ./create-team.component.css */ "./src/app/components/forms/create-team/create-team.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], CreateTeamComponent);
    return CreateTeamComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/forms/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center align-items-center login_container flex-column\">\n    <h1 class=\"pb-4\">LOGIN TO SCRUMBOARD</h1>\n    <p *ngIf=\"invalid_message\">{{invalid_message}}</p>\n    <form class=\"d-flex flex-column justify-content-center\">\n        <div class=\"form-group login_form\">\n            <label>Username</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Username\" #username>\n        </div>\n        <div class=\"form-group login_form\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" #password>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary mt-4\" (click)=\"login(username,password)\">Login</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/forms/login/login.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/forms/login/login.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login_container {\n  height: 500px; }\n\n.login_form {\n  width: 400px; }\n"

/***/ }),

/***/ "./src/app/components/forms/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/forms/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(stateService, authService) {
        this.stateService = stateService;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('user')) {
            this.stateService.go('scrumboard');
        }
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.authService.loginUser({ "username": username.value, "password": password.value })
            .subscribe(function () {
            localStorage.setItem('user', username.value);
            _this.stateService.go('scrumboard');
        }, function () {
            _this.invalid_message = "INVALID USERNAME OR PASSWORD";
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/forms/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/forms/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom d-flex justify-content-between\">\n    <div class=\"m-3 ml-5 d-flex align-items-center w-50\">\n        <i class=\"less-emphasis fas fa-search border-0 m-1 mr-3\"></i>\n        <input type=\"text\" placeholder=\"Search\" class=\"border-0 less-emphasis searchbar\" (input)=\"getScrum(search.value)\" #search>\n    </div>\n    <div class=\"m-3 mr-5\">\n        <app-avatar></app-avatar>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/marker/marker.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/marker/marker.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"marker\" [style.background-color]= \"getColor(project)\">\n</div>"

/***/ }),

/***/ "./src/app/components/marker/marker.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/marker/marker.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".marker {\n  width: 7px;\n  height: 86px;\n  margin-right: 20; }\n"

/***/ }),

/***/ "./src/app/components/marker/marker.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/marker/marker.component.ts ***!
  \*******************************************************/
/*! exports provided: MarkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerComponent", function() { return MarkerComponent; });
/* harmony import */ var string_to_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! string-to-color */ "./node_modules/string-to-color/index.js");
/* harmony import */ var string_to_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(string_to_color__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarkerComponent = /** @class */ (function () {
    function MarkerComponent() {
    }
    MarkerComponent.prototype.ngOnInit = function () {
    };
    MarkerComponent.prototype.getColor = function (project) {
        if (!project) {
            project = 'light-green';
        }
        return string_to_color__WEBPACK_IMPORTED_MODULE_0__(project);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], MarkerComponent.prototype, "project", void 0);
    MarkerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marker',
            template: __webpack_require__(/*! ./marker.component.html */ "./src/app/components/marker/marker.component.html"),
            styles: [__webpack_require__(/*! ./marker.component.scss */ "./src/app/components/marker/marker.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MarkerComponent);
    return MarkerComponent;
}());



/***/ }),

/***/ "./src/app/components/prompts/join-team/join-team.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/prompts/join-team/join-team.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/prompts/join-team/join-team.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/prompts/join-team/join-team.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  join-team works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/prompts/join-team/join-team.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/prompts/join-team/join-team.component.ts ***!
  \*********************************************************************/
/*! exports provided: JoinTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinTeamComponent", function() { return JoinTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JoinTeamComponent = /** @class */ (function () {
    function JoinTeamComponent() {
    }
    JoinTeamComponent.prototype.ngOnInit = function () {
    };
    JoinTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-join-team',
            template: __webpack_require__(/*! ./join-team.component.html */ "./src/app/components/prompts/join-team/join-team.component.html"),
            styles: [__webpack_require__(/*! ./join-team.component.css */ "./src/app/components/prompts/join-team/join-team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JoinTeamComponent);
    return JoinTeamComponent;
}());



/***/ }),

/***/ "./src/app/components/prompts/slack-login/slack-login.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/prompts/slack-login/slack-login.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/prompts/slack-login/slack-login.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/prompts/slack-login/slack-login.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"https://slack.com/oauth/authorize?scope=identity.basic&client_id=398793025732.401722165671\">\n    ADD TO SLACK\n</a>\n"

/***/ }),

/***/ "./src/app/components/prompts/slack-login/slack-login.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/prompts/slack-login/slack-login.component.ts ***!
  \*************************************************************************/
/*! exports provided: SlackLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlackLoginComponent", function() { return SlackLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlackLoginComponent = /** @class */ (function () {
    function SlackLoginComponent() {
    }
    SlackLoginComponent.prototype.ngOnInit = function () {
    };
    SlackLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slack-login',
            template: __webpack_require__(/*! ./slack-login.component.html */ "./src/app/components/prompts/slack-login/slack-login.component.html"),
            styles: [__webpack_require__(/*! ./slack-login.component.css */ "./src/app/components/prompts/slack-login/slack-login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SlackLoginComponent);
    return SlackLoginComponent;
}());



/***/ }),

/***/ "./src/app/constants/endpoints.ts":
/*!****************************************!*\
  !*** ./src/app/constants/endpoints.ts ***!
  \****************************************/
/*! exports provided: GET_LOGS, GET_ISSUES, GET_TEAM_MEMBERS, GET_TEAM_PROJECTS, UPDATE_ISSUE_STATUS, UPDATE_ISSUE_DEADLINE, LOGIN_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LOGS", function() { return GET_LOGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ISSUES", function() { return GET_ISSUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TEAM_MEMBERS", function() { return GET_TEAM_MEMBERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TEAM_PROJECTS", function() { return GET_TEAM_PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ISSUE_STATUS", function() { return UPDATE_ISSUE_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ISSUE_DEADLINE", function() { return UPDATE_ISSUE_DEADLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_USER", function() { return LOGIN_USER; });
var team_id = 'TBQPB0RMJ';
var GET_LOGS = function () { return '/api/scrum/'; };
var GET_ISSUES = function () { return '/api/scrum/issues/'; };
var GET_TEAM_MEMBERS = function () { return '/api/accounts/users/' + team_id + '/'; };
var GET_TEAM_PROJECTS = function () { return '/api/accounts/projects/' + team_id + '/'; };
var UPDATE_ISSUE_STATUS = function (id) { return '/api/scrum/update_status/' + id; };
var UPDATE_ISSUE_DEADLINE = function (id) { return '/api/scrum/update_deadline/' + id; };
var LOGIN_USER = function () { return '/api/accounts/login/'; };


/***/ }),

/***/ "./src/app/pipes/groupby-date.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/groupby-date.pipe.ts ***!
  \********************************************/
/*! exports provided: GroupbyDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupbyDatePipe", function() { return GroupbyDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupbyDatePipe = /** @class */ (function () {
    function GroupbyDatePipe() {
    }
    GroupbyDatePipe.prototype.transform = function (array, property) {
        if (!array) {
            return null;
        }
    };
    GroupbyDatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'groupbyDate'
        })
    ], GroupbyDatePipe);
    return GroupbyDatePipe;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { API_CREATE } from '../constants/endpoints';
var ApiService = /** @class */ (function () {
    function ApiService(http, stateService) {
        this.http = http;
        this.stateService = stateService;
        this.users = {};
    }
    ApiService.prototype.set_list = function (endpoint) {
        var _this = this;
        this.http.get(endpoint)
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    ApiService.prototype.get_list = function () {
        return this.users;
    };
    ApiService.prototype.create = function (api_name, data) {
        // var request = this.http.post(API_CREATE(api_name),data)
        // this.http.post(API_CREATE(api_name), data)
        // .subscribe(
        //     data => console.log(data),
        //     error => this.stateService.go('join-team')
        // );
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["StateService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var app_constants_endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/constants/endpoints */ "./src/app/constants/endpoints.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(stateService, http) {
        this.stateService = stateService;
        this.http = http;
    }
    AuthenticationService.prototype.loginUser = function (credentials) {
        return this.http.post(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_3__["LOGIN_USER"])(), credentials);
    };
    AuthenticationService.prototype.authenticate = function () {
        if (!localStorage.getItem('user')) {
            this.stateService.go('login');
        }
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_uirouter_angular__WEBPACK_IMPORTED_MODULE_2__["StateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/constants/endpoints */ "./src/app/constants/endpoints.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.fetchScrums = function () {
        return this.http.get(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__["GET_LOGS"])());
    };
    DataService.prototype.fetchUsers = function () {
        return this.http.get(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__["GET_TEAM_MEMBERS"])());
    };
    DataService.prototype.fetchProjects = function () {
        return this.http.get(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__["GET_TEAM_PROJECTS"])());
    };
    DataService.prototype.fetchIssues = function () {
        return this.http.get(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__["GET_ISSUES"])());
    };
    DataService.prototype.getScrums = function () {
        return this.scrum_data;
    };
    DataService.prototype.getUsers = function () {
        return this.users;
    };
    DataService.prototype.getProjects = function () {
        return this.projects;
    };
    DataService.prototype.setScrums = function (scrum_data) {
        this.scrum_data = scrum_data;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/filter.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/filter.service.ts ***!
  \********************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterService = /** @class */ (function () {
    function FilterService() {
        this.log_type = '';
    }
    FilterService.prototype.filterScrum = function (username, project, from, to, scrums) {
        return scrums.filter(function (scrum) {
            var date = new Date(scrum.date_created);
            date.setHours(0, 0, 0, 0);
            return scrum.user.includes(username) &&
                scrum.project.includes(project) &&
                (date >= from && date <= to);
        });
    };
    FilterService.prototype.filterScrumSearch = function (keyword, scrums) {
        return scrums.filter(function (scrum) {
            var date = new Date(scrum.date_created);
            date.setHours(0, 0, 0, 0);
            var done_logs = scrum.done_logs.filter(function (log) {
                return log.message.search(new RegExp(keyword, 'i')) >= 0;
            });
            var wip_logs = scrum.wip_logs.filter(function (log) {
                return log.message.search(new RegExp(keyword, 'i')) >= 0;
            });
            var issue_logs = scrum.issue_logs.filter(function (log) {
                return log.issue.search(new RegExp(keyword, 'i')) >= 0 ||
                    log.status.search(new RegExp(keyword, 'i')) >= 0;
            });
            return scrum.user.search(new RegExp(keyword, 'i')) >= 0 ||
                scrum.project.search(new RegExp(keyword, 'i')) >= 0 ||
                done_logs.length != 0 || wip_logs.length != 0 ||
                issue_logs.length != 0;
        });
    };
    FilterService.prototype.filterIssues = function (status, dateFilterForm, username, project, issues) {
        if (status === 'ALL') {
            status = '';
        }
        if (username === 'ALL') {
            username = '';
        }
        if (project === 'ALL') {
            project = '';
        }
        var from = new Date(dateFilterForm.from.date.month + "/" + dateFilterForm.from.date.day + "/" + dateFilterForm.from.date.year);
        var to = new Date(dateFilterForm.to.date.month + "/" + dateFilterForm.to.date.day + "/" + dateFilterForm.to.date.year);
        return issues.filter(function (issue) {
            var date = new Date(issue.date_created);
            date.setHours(0, 0, 0, 0);
            return issue.status.includes(status) &&
                issue.user.includes(username) &&
                issue.project.includes(project) &&
                (date >= from && date <= to);
        });
    };
    FilterService.prototype.filterById = function (id, issues) {
        return issues.findIndex(function (issue) {
            return issue.id == id;
        });
    };
    FilterService.prototype.filterPending = function (issues) {
        return issues.find(function (issue) {
            issue.status == "Pending";
        });
    };
    FilterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "./src/app/services/scrum-data.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/scrum-data.service.ts ***!
  \************************************************/
/*! exports provided: ScrumDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrumDataService", function() { return ScrumDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/constants/endpoints */ "./src/app/constants/endpoints.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScrumDataService = /** @class */ (function () {
    function ScrumDataService(http) {
        this.http = http;
    }
    ScrumDataService.prototype.fetchScrums = function () {
        return this.http.get(Object(app_constants_endpoints__WEBPACK_IMPORTED_MODULE_2__["GET_LOGS"])());
    };
    ScrumDataService.prototype.getScrums = function () {
        return this.scrum_data;
    };
    ScrumDataService.prototype.setScrums = function (scrum_data) {
        this.scrum_data = scrum_data;
    };
    ScrumDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ScrumDataService);
    return ScrumDataService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchService = /** @class */ (function () {
    function SearchService() {
    }
    SearchService.prototype.searchScrums = function (keyword, scrums) {
        return scrums.filter(function (scrum) {
            var done_logs = scrum.done_logs.filter(function (log) {
                return log.message.search(new RegExp(keyword, 'i')) >= 0;
            });
            var wip_logs = scrum.wip_logs.filter(function (log) {
                return log.message.search(new RegExp(keyword, 'i')) >= 0;
            });
            var issue_logs = scrum.issue_logs.filter(function (log) {
                return log.issue.search(new RegExp(keyword, 'i')) >= 0;
            });
            return scrum.user.search(new RegExp(keyword, 'i')) >= 0 ||
                scrum.project.search(new RegExp(keyword, 'i')) >= 0 ||
                scrum.hours.search(new RegExp(keyword, 'i')) >= 0 ||
                done_logs.length != 0 || wip_logs.length != 0
                || issue_logs.length != 0;
        });
    };
    SearchService.prototype.searchIssues = function (keyword, issues) {
        return issues.filter(function (issue) {
            var scrums = issue.scrum_data.filter(function (scrum) {
                return scrum.user_username.search(new RegExp(keyword, 'i')) >= 0 ||
                    scrum.project_name.search(new RegExp(keyword, 'i')) >= 0;
            });
            return issue.status.search(new RegExp(keyword, 'i')) >= 0 ||
                issue.issue.search(new RegExp(keyword, 'i')) >= 0 ||
                scrums.length != 0;
        });
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/utils/layouts.utils.ts":
/*!****************************************!*\
  !*** ./src/app/utils/layouts.utils.ts ***!
  \****************************************/
/*! exports provided: ContentOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentOnly", function() { return ContentOnly; });
function ContentOnly(content) {
    return {
        content: content
    };
}


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shem/Documents/Projects/Django/scrumbot/venv/scrumbot/assets/fe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map