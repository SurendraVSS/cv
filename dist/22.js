"use strict";
exports.id = 22;
exports.ids = [22];
exports.modules = {

/***/ 736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingGuideModule": () => (/* binding */ BookingGuideModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _booking_guides_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(737);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(573);





const appRoutes = [{
        path: '', component: _booking_guides_component__WEBPACK_IMPORTED_MODULE_0__.BookingGuidesComponent
    }];
let BookingGuideModule = class BookingGuideModule {
};
BookingGuideModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(appRoutes),
        ]
    })
], BookingGuideModule);



/***/ }),

/***/ 737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingGuidesComponent": () => (/* binding */ BookingGuidesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);



let BookingGuidesComponent = class BookingGuidesComponent {
    constructor() { }
    ngOnInit() {
    }
    OpenVideo(obj) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.s3bucket.url + obj;
    }
};
BookingGuidesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-booking-guides',
        templateUrl: './booking-guides.component.html',
        styleUrls: ['./booking-guides.component.scss']
    })
], BookingGuidesComponent);



/***/ })

};
;