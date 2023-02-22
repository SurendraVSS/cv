"use strict";
exports.id = 19;
exports.ids = [19];
exports.modules = {

/***/ 729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankYouComponent": () => (/* binding */ ThankYouComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);



let ThankYouComponent = class ThankYouComponent {
    constructor(platformId, localStorage, router) {
        this.platformId = platformId;
        this.localStorage = localStorage;
        this.router = router;
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
            window.scrollTo(0, 0);
            this.response = JSON.parse(this.localStorage.getItem('Payresponse'));
            if (this.response) {
                this.Message = this.response.payMessage;
                this.imageUrl = this.response.Image;
                this.HeadMessage = this.response.headMessage;
            }
        }
    }
    getProfileLink(type) {
        if (type == 'clickHere') {
            this.router.navigate(["account"], {
                queryParams: { page_name: 'my-request' },
            });
        }
        if (type == 'browse') {
            this.router.navigate(["/"]);
        }
    }
    onRefresh() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
            window.location.reload();
        }
    }
    ngOnDestroy() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
            localStorage.removeItem('Payresponse');
        }
    }
};
ThankYouComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-thank-you',
        templateUrl: './thank-you.component.html',
        styleUrls: ['./thank-you.component.scss']
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID))
], ThankYouComponent);



/***/ }),

/***/ 728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankYouModule": () => (/* binding */ ThankYouModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(194);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _thank_you_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(729);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(573);






const routes = [{ path: '', component: _thank_you_component__WEBPACK_IMPORTED_MODULE_0__.ThankYouComponent }];
let ThankYouModule = class ThankYouModule {
};
ThankYouModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _thank_you_component__WEBPACK_IMPORTED_MODULE_0__.ThankYouComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)
        ]
    })
], ThankYouModule);



/***/ })

};
;