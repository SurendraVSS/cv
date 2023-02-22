"use strict";
exports.id = 17;
exports.ids = [17];
exports.modules = {

/***/ 721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditonsComponent": () => (/* binding */ TermsAndConditonsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(194);


let TermsAndConditonsComponent = class TermsAndConditonsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TermsAndConditonsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
        selector: 'app-terms-and-conditons',
        templateUrl: './terms-and-conditons.component.html',
        styleUrls: ['./terms-and-conditons.component.scss']
    })
], TermsAndConditonsComponent);



/***/ }),

/***/ 720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsAndConditonsModule": () => (/* binding */ TermsAndConditonsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _terms_and_conditons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(721);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(573);





const routes = [{ path: '', component: _terms_and_conditons_component__WEBPACK_IMPORTED_MODULE_0__.TermsAndConditonsComponent }];
let TermsAndConditonsModule = class TermsAndConditonsModule {
};
TermsAndConditonsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _terms_and_conditons_component__WEBPACK_IMPORTED_MODULE_0__.TermsAndConditonsComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)
        ]
    })
], TermsAndConditonsModule);



/***/ })

};
;